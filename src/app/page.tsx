'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlanifyLogo } from '@/components/logo';
import { useUser } from '@/firebase/auth/use-user';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function Home() {
  const { status } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      router.replace('/dashboard');
    } else if (status === 'unauthenticated') {
      router.replace('/login');
    }
  }, [status, router]);

  // Show a loading state while checking auth
  if (status === 'loading') {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-transparent">
        <PlanifyLogo className="h-24 w-24 text-primary animate-pulse" />
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-8 overflow-hidden bg-transparent">
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl w-full">
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
                    Smarter Schedule, Smoother Days
                </h1>
                <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                    AI-powered Smart Academic Planner
                </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <Button asChild size="lg" className="shadow-lg">
                    <Link href="/category">Get Started <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="shadow-lg bg-background/50">
                    <Link href="/calendar">Open Timetable <BookOpen className="ml-2 h-5 w-5" /></Link>
                </Button>
            </div>

            <Card 
              className="mt-12 w-full max-w-3xl aspect-video rounded-xl shadow-2xl border-white/10 overflow-hidden animate-fade-in"
              style={{ animationDelay: '0.6s' }}
            >
                <Image
                    src="https://picsum.photos/seed/dashboard-mockup/1200/675"
                    alt="Planify dashboard mockup"
                    width={1200}
                    height={675}
                    className="w-full h-full object-cover"
                    data-ai-hint="dashboard mockup"
                    priority
                />
            </Card>
        </div>
    </main>
  );
}
