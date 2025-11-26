
'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';
import { ArrowLeft, UserCircle } from 'lucide-react';
import { SidebarTrigger } from './ui/sidebar';
import { useUser } from '@/firebase/auth/use-user';
import { Skeleton } from './ui/skeleton';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export function Header() {
  const router = useRouter();
  const [isClient, setIsClient] = React.useState(false);
  const { user, status } = useUser();

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  const getInitials = (name: string | null | undefined) => {
    if (!name) return 'U';
    const names = name.split(' ');
    if (names.length > 1) {
      return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase();
    }
    return name[0].toUpperCase();
  };


  return (
    <header className="flex h-14 items-center justify-between gap-4 border-b bg-background px-4 lg:h-[60px] lg:px-6 sticky top-0 z-30">
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        <Button variant="ghost" size="icon" onClick={() => router.back()} className="lg:hidden">
            <ArrowLeft className="h-5 w-5" />
        </Button>
      </div>
      
      <div className="flex items-center gap-3">
        {status === 'loading' ? (
           <Skeleton className="h-6 w-32" />
        ) : user ? (
            <>
                <div className="text-right hidden sm:block">
                    <p className="text-sm font-medium leading-none">{user.displayName || 'Welcome'}</p>
                </div>
                 <Avatar>
                    {user.photoURL ? <AvatarImage src={user.photoURL} alt={user.displayName || 'User'} /> : null}
                    <AvatarFallback>{getInitials(user.displayName)}</AvatarFallback>
                </Avatar>
            </>
        ) : null}
      </div>
    </header>
  );
}
