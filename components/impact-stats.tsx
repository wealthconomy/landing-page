"use client";

import { useEffect, useRef, useState } from "react";
import { Users, Building2, Rocket } from "lucide-react";

const stats = [
  { label: "Women Trained", value: 300, suffix: "+", icon: Users },
  { label: "Grants Awarded", value: 15, suffix: "+", icon: Building2 },
  { label: "New Impact Projects", value: 5, suffix: "+", icon: Rocket },
];

export function ImpactStats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative z-20 -mt-10 mb-20 px-6">
      <div className="mx-auto max-w-5xl rounded-3xl border border-border bg-surface p-8 shadow-2xl backdrop-blur-2xl md:p-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
          {stats.map((stat, i) => (
            <div key={i} className={`flex flex-col items-center justify-center text-center ${i !== 0 ? "pt-12 md:pt-0" : ""}`}>
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <stat.icon className="h-6 w-6" />
              </div>
              <div className="font-display text-5xl md:text-6xl font-bold text-foreground mb-2">
                {isVisible ? (
                  <CountUp end={stat.value} duration={2} suffix={stat.suffix} />
                ) : (
                  "0"
                )}
              </div>
              <p className="text-lg text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CountUp({ end, duration, suffix = "" }: { end: number, duration: number, suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      
      // Easing function for smooth deceleration
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      
      setCount(Math.floor(end * easeOutQuart));

      if (percentage < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
}
