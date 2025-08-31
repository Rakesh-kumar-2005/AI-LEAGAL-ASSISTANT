import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen, Check } from "lucide-react";
import Image from "next/image";
import { SparklesCore } from "../ui/sparkles";
import { TextHoverEffect } from "../ui/text-hover-effect";

export default function Hero() {
  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* Outline Text Heading */}
      <h1 className="md:text-7xl text-3xl lg:text-[140px] font-bold text-center text-white relative z-20 -mb-3">
        <TextHoverEffect text="JUSTICE" />
      </h1>

      {/* Sparkles Effect */}
      <div className="w-full max-w-[80rem] mx-auto h-40 relative mb-12">
        {/* Centered Gradients */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 sm:w-2/3 md:w-1/2 blur-sm" />
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4 sm:w-2/3 md:w-1/2" />
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/2 sm:w-1/3 md:w-1/4 blur-sm" />
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/2 sm:w-1/3 md:w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1900}
          className="w-full h-full"
          particleColor="#ffffff"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 z-30 relative">
        {/* Get Started Button - White with black slide-in */}
        <button className="group relative px-8 py-4 bg-white text-black border-white border-2 font-semibold rounded-full overflow-hidden transition-transform duration-300 hover:scale-105 active:scale-95">
          <span className="relative z-10 transition-colors duration-300  group-hover:text-white flex items-center justify-center gap-2">
            Get Started
            <ArrowRight className="opacity-0 size-0 group-hover:size-6 font-bold -translate-x-12 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
          </span>
          <div className="absolute inset-0 bg-black transform -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0"></div>
        </button>

        {/* View Docs Button - Black with white slide-in */}
        <button className="group relative px-8 py-4 bg-black text-white font-semibold rounded-full border-2 border-white overflow-hidden transition-transform duration-300 hover:scale-105 active:scale-95">
          <span className="relative z-10 transition-colors duration-300 group-hover:text-black flex items-center justify-center gap-2">
            <BookOpen className="opacity-0 size-0 group-hover:size-5 translate-x-12 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
            View Docs
          </span>
          <div className="absolute inset-0 bg-white transform -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0"></div>
        </button>
      </div>

      {/* Optional: Subtle glow effect under buttons */}
      <div className="absolute bottom-20 w-96 h-32 bg-gradient-to-t from-indigo-500/20 via-purple-500/10 to-transparent blur-3xl"></div>
    </div>
  );
}
