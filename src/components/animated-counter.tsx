"use client";

import { useState, useEffect, useRef } from 'react';

const useIntersectionObserver = (
    ref: React.RefObject<Element>,
    options: IntersectionObserverInit
): IntersectionObserverEntry | null => {
    const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setEntry(entry);
        }, options);

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [ref, options]);

    return entry;
};

export function AnimatedCounter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const entry = useIntersectionObserver(ref, { threshold: 0.5 });
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (entry?.isIntersecting && !hasAnimated.current) {
      hasAnimated.current = true;
      let start = 0;
      const duration = 2000;
      const frameRate = 1000 / 60;
      const totalFrames = Math.round(duration / frameRate);
      const increment = to / totalFrames;

      const counter = setInterval(() => {
        start += increment;
        if (start >= to) {
          setCount(to);
          clearInterval(counter);
        } else {
          setCount(Math.ceil(start));
        }
      }, frameRate);

      return () => clearInterval(counter);
    }
  }, [entry, to]);

  return <span ref={ref}>{count}</span>;
}
