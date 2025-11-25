import { ScheduleDisplay } from '@/components/schedule/ScheduleDisplay';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function SchedulePage() {
  return (
    <div>
        <Link href="/dashboard" className="absolute top-8 left-8 flex items-center gap-2 text-primary z-20">
            <Button variant="ghost">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
            </Button>
        </Link>
        <ScheduleDisplay />
    </div>
  );
}
