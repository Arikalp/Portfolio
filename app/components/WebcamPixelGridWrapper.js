"use client";
import { WebcamPixelGrid } from "@/components/ui/webcam-pixel-grid";
import { useTheme } from "../contexts/ThemeContext";

export default function WebcamPixelGridWrapper({ className }) {
  const { currentTheme } = useTheme();
  
  // Only render WebcamPixelGrid for theme 4
  if (currentTheme !== 4) {
    return null;
  }
  
  return (
    <WebcamPixelGrid className={className} />
  );
}