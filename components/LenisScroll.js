"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const LenisScroll = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.3,
      smooth: true,
      smoothTouch: true,
      //   easing: (t) => t,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      //   scroll: (amount) => {
      //     // Optionally control scroll behavior
      //     window.scrollTo(0, amount);
      //   },
    });

    const update = (time) => {
      lenis.raf(time);
      requestAnimationFrame(update);
    };

    requestAnimationFrame(update);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default LenisScroll;
