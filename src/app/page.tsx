'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useUser } from '@/firebase/auth/use-user';
import { PlanifyLogo } from '@/components/logo';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, CalendarCheck, Timer, BarChart4 } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: 'AI-Powered Scheduling',
    description: 'Let our AI generate and optimize your schedule based on your unique needs and goals.',
  },
  {
    icon: CalendarCheck,
    title: 'Smart Event Management',
    description: 'Easily manage classes, assignments, and personal tasks all in one place.',
  },
  {
    icon: Timer,
    title: 'Integrated Focus Tools',
    description: 'Boost your productivity with built-in tools like the Pomodoro focus timer.',
  },
  {
    icon: BarChart4,
    title: 'Track Your Progress',
    description: 'Visualize your efforts and stay motivated with insightful analytics and reports.',
  },
];


export default function Home() {
  const { status } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      router.replace('/dashboard');
    }
  }, [status, router]);
  
  if (status === 'loading' || status === 'authenticated') {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-transparent">
        <PlanifyLogo className="h-32 w-auto text-primary animate-pulse" />
      </main>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-transparent">
      <main className="flex-1">
        <section className="relative flex flex-col items-center justify-center text-center min-h-[80vh] p-4 sm:p-8 animate-fade-in">
          <div className="z-10 flex flex-col items-center gap-6">
            <PlanifyLogo className="w-[320px] h-auto" />
            <p className="max-w-2xl text-lg text-foreground/80">
              Your intelligent planning companion. Transform your academic and personal life with AI-driven schedules, smart reminders, and powerful focus tools.
            </p>
            <Button asChild size="lg" className="shadow-lg shadow-black/20 hover:shadow-black/30 transition-shadow">
              <Link href="/category">Get Started For Free</Link>
            </Button>
          </div>
        </section>

        <section className="py-16 sm:py-24 px-4 bg-background/30 backdrop-blur-md">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Everything You Need to Succeed</h2>
              <p className="mt-4 text-lg text-muted-foreground">Planify is more than just a calendar. It's your personal success partner.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center bg-card/70 border-none shadow-lg">
                  <CardHeader>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-2">
                    <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="py-6 px-4 bg-background/50">
        <div className="container mx-auto text-center text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} Planify. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
