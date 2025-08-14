"use client";

import React from "react";
import { LoaderThree } from "@/components/ui/loader";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] grid place-items-center bg-black/60 backdrop-blur-sm">
      <LoaderThree />
      <span className="sr-only">Loading</span>
    </div>
  );
}
