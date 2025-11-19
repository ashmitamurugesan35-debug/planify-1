"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Play, Pause, RotateCw } from "lucide-react";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";

const presets = {
  pomodoro: { time: 25 * 60, label: "Pomodoro (25/5)" },
  deepFocus: { time: 50 * 60, label: "Deep Focus (50/10)" },
  custom: { time: 15 * 60, label: "Custom" },
};

export default function FocusTimerPage() {
  const [timer, setTimer] = useState(presets.pomodoro.time);
  const [isActive, setIsActive] = useState(false);
  const [activePreset, setActivePreset] = useState("pomodoro");

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((timer) => timer - 1);
      }, 1000);
    } else if (!isActive && timer !== 0) {
      if (interval) clearInterval(interval);
    } else if (timer === 0) {
        setIsActive(false);
        // Add notification logic here
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timer]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = (presetKey: string) => {
    const preset = presets[presetKey as keyof typeof presets];
    setIsActive(false);
    setTimer(preset.time);
    setActivePreset(presetKey);
  };
  
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6 flex flex-col items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Focus Timer</CardTitle>
           <div className="flex justify-center gap-2 pt-4">
             {Object.entries(presets).map(([key, value]) => (
                 <Badge 
                    key={key} 
                    variant={activePreset === key ? "default" : "secondary"}
                    onClick={() => resetTimer(key)}
                    className="cursor-pointer"
                >
                    {value.label}
                </Badge>
             ))}
           </div>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center space-y-6">
          <div className="text-8xl font-bold font-mono tracking-tighter">
            {formatTime(timer)}
          </div>
          <div className="flex items-center space-x-4">
            <Button onClick={toggleTimer} size="lg">
              {isActive ? <Pause className="mr-2 h-5 w-5" /> : <Play className="mr-2 h-5 w-5" />}
              {isActive ? "Pause" : "Start"}
            </Button>
            <Button onClick={() => resetTimer(activePreset)} variant="outline" size="icon">
              <RotateCw className="h-5 w-5" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
