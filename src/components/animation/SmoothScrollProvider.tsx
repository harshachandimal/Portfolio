"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "motion/react";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;

    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    const syncGsap = (time: number) => lenis.raf(time * 1000);

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(syncGsap);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(syncGsap);
      lenis.destroy();
    };
  }, [reduce]);

  return <>{children}</>;
}
