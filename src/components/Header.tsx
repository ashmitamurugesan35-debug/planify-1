
'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';
import { ArrowLeft } from 'lucide-react';
import { SidebarTrigger } from './ui/sidebar';

export function Header() {
  const router = useRouter();
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Render a placeholder or nothing on the server to avoid hydration mismatch
    return <header className="flex h-14 items-center gap-4 border-b bg-background px-4 lg:h-[60px] lg:px-6 sticky top-0 z-30"></header>;
  }

  return (
    <header className="flex h-14 items-center gap-4 border-b bg-background px-4 lg:h-[60px] lg:px-6 sticky top-0 z-30">
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        <Button variant="ghost" size="icon" onClick={() => router.back()} className="lg:hidden">
            <ArrowLeft className="h-5 w-5" />
        </Button>
      </div>
      {/* You can add more header content here, like a search bar */}
    </header>
  );
}
