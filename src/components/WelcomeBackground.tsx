
export function WelcomeBackground() {
  return (
    <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-indigo-100 via-purple-100 to-fuchsia-100 dark:from-[#1a1625] dark:via-[#151220] dark:to-[#1a1625] overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-pan"
        style={{
          backgroundImage:
            'radial-gradient(circle at 25% 30%, hsl(260 80% 95% / 0.05), transparent 40%), radial-gradient(circle at 75% 70%, hsl(300 80% 95% / 0.05), transparent 40%)',
        }}
      ></div>
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <div className="absolute top-[20%] left-[20%] animate-[pulse_8s_cubic-bezier(0.4,0,0.6,1)_infinite]">
          {/* Spectacles */}
          <svg width="150" height="50" viewBox="0 0 150 50" className="opacity-40 dark:opacity-20 -rotate-12">
            <circle cx="25" cy="25" r="20" stroke="hsl(var(--muted-foreground) / 0.5)" strokeWidth="2.5" fill="hsl(var(--background) / 0.3)" />
            <circle cx="125" cy="25" r="20" stroke="hsl(var(--muted-foreground) / 0.5)" strokeWidth="2.5" fill="hsl(var(--background) / 0.3)" />
            <path d="M45 25 H 105" stroke="hsl(var(--muted-foreground) / 0.5)" strokeWidth="2.5" />
          </svg>
        </div>

        <div className="absolute bottom-[15%] right-[15%] animate-[pulse_10s_cubic-bezier(0.4,0,0.6,1)_infinite]">
          {/* Coffee Mug */}
          <svg width="120" height="140" viewBox="0 0 120 140" className="opacity-50 dark:opacity-30">
            <g transform="translate(10, 10)">
              <path d="M10 20 H 90 V 100 C 90 111 81 120 70 120 H 30 C 19 120 10 111 10 100 V 20 Z" fill="hsl(var(--background) / 0.5)" stroke="hsl(var(--muted-foreground) / 0.4)" strokeWidth="2" />
              <path d="M90 40 H 105 C 115 40 115 80 105 80 H 90" stroke="hsl(var(--muted-foreground) / 0.4)" strokeWidth="2" fill="hsl(var(--background) / 0.5)"/>
              {/* Vapours */}
              <path d="M30 15 Q 35 5 40 15 T 50 15" stroke="hsl(var(--muted-foreground) / 0.4)" strokeWidth="2" fill="none" className="animate-[pulse_4s_ease-in-out_infinite]"/>
              <path d="M55 12 Q 60 2 65 12 T 75 12" stroke="hsl(var(--muted-foreground) / 0.4)" strokeWidth="2" fill="none" className="animate-[pulse_4s_ease-in-out_1s_infinite]"/>
            </g>
          </svg>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] animate-wobble">
          {/* Notebook */}
          <svg width="200" height="150" viewBox="0 0 200 150" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60 dark:opacity-40">
            <g transform="rotate(-10 100 75)">
              <rect x="5" y="5" width="190" height="140" rx="10" fill="hsl(var(--background) / 0.4)" stroke="hsl(var(--muted-foreground) / 0.5)" strokeWidth="2" />
              <path d="M100 5 V 145" stroke="hsl(var(--muted-foreground) / 0.5)" strokeWidth="1.5" />
               {/* Flying Pages */}
              <path d="M90 20 C 70 25, 60 40, 75 50" fill="none" stroke="hsl(var(--muted-foreground) / 0.6)" strokeWidth="2" className="animate-pulse" />
              <path d="M90 40 C 75 45, 65 60, 80 70" fill="none" stroke="hsl(var(--muted-foreground) / 0.5)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '0.5s' }}/>
            </g>
          </svg>
          {/* Pencil */}
           <svg width="180" height="20" viewBox="0 0 180 20" className="absolute top-[30%] right-[-10%] -rotate-[30deg] opacity-60 dark:opacity-40">
             <path d="M10 10 H 170" stroke="hsl(50 80% 70% / 0.8)" strokeWidth="8" strokeLinecap="round"/>
             <path d="M170 10 L 175 6 L 175 14 Z" fill="hsl(30 20% 80% / 0.9)"/>
             <path d="M5 10 L10 6 V 14 Z" fill="hsl(var(--foreground) / 0.5)"/>
          </svg>
        </div>
      </div>
    </div>
  );
}
