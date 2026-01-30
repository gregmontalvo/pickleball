"use client";

import { useState, useEffect, useCallback } from "react";

const words = [
  "Colegio",
  "Club",
  "Colegio",
  "Hotel",
  "Colegio",
  "Asociación",
];

export function RotatingText() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationState, setAnimationState] = useState<"idle" | "exit" | "enter">("idle");

  const rotateWord = useCallback(() => {
    // Start exit animation
    setAnimationState("exit");
    
    // After exit animation, change word and start enter animation
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
      setAnimationState("enter");
      
      // Reset to idle after enter animation
      setTimeout(() => {
        setAnimationState("idle");
      }, 400);
    }, 300);
  }, []);

  useEffect(() => {
    const interval = setInterval(rotateWord, 2500);
    return () => clearInterval(interval);
  }, [rotateWord]);

  const getAnimationClass = () => {
    switch (animationState) {
      case "exit":
        return "rotating-text-exit";
      case "enter":
        return "rotating-text-enter";
      default:
        return "";
    }
  };

  return (
    <span 
      className="relative inline-block overflow-hidden"
      style={{ 
        perspective: "500px",
        minWidth: "4ch" // Prevent layout shift
      }}
    >
      <span
        className={`inline-block ${getAnimationClass()}`}
        style={{
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
          transformOrigin: "center center",
        }}
      >
        {words[currentIndex]}
      </span>
    </span>
  );
}
