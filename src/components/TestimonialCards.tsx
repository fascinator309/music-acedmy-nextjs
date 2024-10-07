"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
    <h2 className="text-3xl font-bold text-center mb-8 z-10 p-10">Hear our Harmony: Voices of success</h2>
    <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
    </div>
    </div>
  );
}

const testimonials = [
    {
      quote:
        "Learning to play the piano has been an incredible journey! The instructors here have helped me improve my technique and confidence. I feel more connected to the music than ever before!",
      name: "Sarah Thompson",
      title: "Piano Student",
    },
    {
      quote:
        "The guitar lessons have truly transformed the way I approach music. I never thought I’d be able to play my favorite songs so quickly. The personalized attention made all the difference.",
      name: "James Stewart",
      title: "Guitar Student",
    },
    {
      quote:
        "As a vocalist, I've learned how to control my voice and perform with more expression. The vocal coaching here has helped me reach new heights in my singing abilities.",
      name: "Emily Rodriguez",
      title: "Vocal Student",
    },
    {
      quote:
        "I started as a complete beginner, but with the amazing drum lessons, I can now confidently play along with my favorite tracks. The instructors are fantastic and so encouraging!",
      name: "Michael Nguyen",
      title: "Drum Student",
    },
    {
      quote:
        "The theory classes have really deepened my understanding of music. Now, when I play the violin, I can read music more fluently and express myself better. This school is amazing!",
      name: "Alice Patel",
      title: "Violin Student",
    },
  ];
  
