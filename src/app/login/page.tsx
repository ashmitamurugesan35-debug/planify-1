
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/firebase/provider';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useUser } from '@/firebase/auth/use-user';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

const GoogleIcon = () => (
    <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
        <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
        />
        <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.8 0-5.18-1.88-6.04-4.42H2.34v2.84C4.13 20.98 7.79 23 12 23z"
        fill="#34A853"
        />
        <path
        d="M5.96 14.25c-.2-.6-.31-1.24-.31-1.9s.11-1.3.31-1.9V7.61H2.34c-.77 1.52-1.22 3.24-1.22 5.14s.45 3.62 1.22 5.14l3.62-2.84z"
        fill="#FBBC05"
        />
        <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.79 1 4.13 3.02 2.34 5.86l3.62 2.84c.86-2.54 3.24-4.42 6.04-4.42z"
        fill="#EA4335"
        />
    </svg>
);


export default function LoginPage() {
    const auth = useAuth();
    const router = useRouter();
    const { toast } = useToast();
    const { user, status } = useUser();
    
    const backgroundImage = PlaceHolderImages.find(p => p.id === 'login-background');

    useEffect(() => {
        if (status === 'authenticated') {
            router.replace('/category');
        }
    }, [status, router]);


    const handleGoogleSignIn = async () => {
        if (!auth) return;
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            toast({
                title: 'Login Successful',
                description: 'Welcome back!',
            });
            router.push('/category');
        } catch (error) {
            console.error('Google Sign-In Error:', error);
            toast({
                variant: 'destructive',
                title: 'Login Failed',
                description: 'Could not sign in with Google. Please try again.',
            });
        }
    };

    if (status === 'loading' || status === 'authenticated') {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center p-8 bg-background">
          <div className="h-16 w-16 border-4 border-dashed rounded-full animate-spin border-primary/20"></div>
        </div>
      );
    }

    return (
        <div className="relative min-h-screen w-full">
            {backgroundImage && (
                <Image
                    src={backgroundImage.imageUrl}
                    alt={backgroundImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={backgroundImage.imageHint}
                />
            )}
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative flex min-h-screen items-center justify-center p-4">
                <Card className="w-full max-w-sm animate-fade-in shadow-2xl border-white/20 bg-black/30 text-white">
                    <CardHeader className="text-center">
                        <CardTitle className="text-2xl">Welcome Back!</CardTitle>
                        <CardDescription className="text-white/80">Sign in to continue to Planify.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Button onClick={handleGoogleSignIn} className="w-full bg-white text-black hover:bg-gray-200">
                           <GoogleIcon />
                            Sign in with Google
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
