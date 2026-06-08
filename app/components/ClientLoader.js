"use client";

import React, { useEffect, useState } from "react";
import { LoaderThree } from "@/components/ui/loader";

export default function ClientLoader() {
  const [visible, setVisible] = useState(true);
  const [windowLoaded, setWindowLoaded] = useState(false);
  const [animReady, setAnimReady] = useState(false);

  useEffect(() => {
    // Mark window loaded
    const markLoaded = () => setWindowLoaded(true);
    const registerServiceWorker = async () => {
      if (!('serviceWorker' in navigator)) {
        return;
      }

      try {
        await navigator.serviceWorker.register('/sw.js', { scope: '/' });
      } catch {
        // Ignore registration failures in unsupported or transient states.
      }
    };

    if (typeof window !== "undefined") {
      if (document.readyState === "complete") {
        setWindowLoaded(true);
        registerServiceWorker();
      } else {
        window.addEventListener("load", markLoaded);
        window.addEventListener("load", registerServiceWorker, { once: true });
      }
    }

    // One full LoaderThree animation cycle (2s)
    const ANIM_DURATION_MS = 2000;
    const animTimer = setTimeout(() => setAnimReady(true), ANIM_DURATION_MS);

    // Safety auto-hide after 6s regardless
    const safetyTimer = setTimeout(() => setVisible(false), 6000);

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("load", markLoaded);
        window.removeEventListener("load", registerServiceWorker);
      }
      clearTimeout(animTimer);
      clearTimeout(safetyTimer);
    };
  }, []);

  useEffect(() => {
    if (windowLoaded && animReady) {
      setVisible(false);
    }
  }, [windowLoaded, animReady]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] grid place-items-center bg-black/60 backdrop-blur-sm">
      <LoaderThree />
      <span className="sr-only">Loading</span>
    </div>
  );
}
