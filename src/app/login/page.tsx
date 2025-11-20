'use client';

import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useAuth, useFirestore } from '@/firebase/provider';
import { useUser } from '@/firebase/auth/use-user';
import { Button } from '@/components/ui/button';
import { PlanifyLogo } from '@/components/logo';
import { Chrome, Github } from 'lucide-react';
import { useEffect } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { doc, getDoc } from 'firebase/firestore';

export default function LoginPage() {
  const auth = useAuth();
  const firestore = useFirestore();
  const router = useRouter();
  const { user, status } = useUser();

  const handleSignIn = async (provider: GoogleAuthProvider | GithubAuthProvider) => {
    if (!auth) return;
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('Sign-in error', error);
    }
  };
  
  useEffect(() => {
    if (status === 'authenticated' && user && firestore) {
        const checkUser = async () => {
            const userDocRef = doc(firestore, 'users', user.uid);
            const userDoc = await getDoc(userDocRef);
            
            // A simple check on creation vs last sign in time can also work,
            // but checking the document is more robust against race conditions
            // during the very first login.
            const isNewUser = !userDoc.exists() || user.metadata.creationTime === user.metadata.lastSignInTime;

            if (isNewUser) {
                router.replace('/category');
            } else {
                router.replace('/dashboard');
            }
        };
        checkUser();
    }
  }, [status, user, router, firestore]);

  if (status === 'loading' || status === 'authenticated') {
    return (
        <div className="h-screen w-full flex items-center justify-center bg-background">
            <PlanifyLogo className="h-20 w-20 text-primary animate-pulse" />
        </div>
    );
  }

  return (
    <div className="h-screen w-full flex items-center justify-center relative bg-background">
       <Image
        src={PlaceHolderImages[1].imageUrl}
        alt={PlaceHolderImages[1].description}
        data-ai-hint={PlaceHolderImages[1].imageHint}
        fill
        className="object-cover z-0"
        priority
      />
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <div className="relative z-20 flex flex-col items-center gap-6 text-center p-8 max-w-sm w-full bg-background/80 backdrop-blur-sm rounded-xl shadow-2xl">
        <PlanifyLogo className="h-20 w-20 text-primary" />
        <div>
          <h1 className="text-4xl font-bold font-headline text-primary">Welcome Back</h1>
          <p className="text-md text-muted-foreground">
            Sign in to get started.
          </p>
        </div>
        <div className="w-full space-y-4 mt-4">
          <Button
            className="w-full"
            onClick={() => auth && handleSignIn(new GoogleAuthProvider())}
          >
            <Chrome className="mr-2 h-4 w-4" /> Sign in with Google
          </Button>
          <Button
            variant="secondary"
            className="w-full"
            onClick={() => auth && handleSignIn(new GithubAuthProvider())}
          >
            <Github className="mr-2 h-4 w-4" /> Sign in with GitHub
          </Button>
        </div>
      </div>
    </div>
  );
}
