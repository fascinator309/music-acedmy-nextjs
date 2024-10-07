"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
 
const content = [
    {
      title: "Group Lessons",
      description:
        "Learn and play music with others in a collaborative environment. Our group lessons encourage students to share ideas, practice together, and enhance their skills in a supportive community. Join us to experience the joy of playing music as a team.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--green-500))] flex items-center justify-center text-white">
          Group Lessons
        </div>
      ),
    },
   
    {
      title: "Track Your Progress",
      description:
        "Keep track of your musical journey with our platform. You’ll always have access to the most updated version of your practice sessions, ensuring you're progressing steadily. Stay focused on your goals and watch your skills improve over time.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Track Your Progress
        </div>
      ),
    },
    {
      title: "Performance Opportunities",
      description:
        "Showcase your talent through regular performances and recitals. Our music school offers students the chance to perform in front of peers and family, helping them build confidence and stage presence.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] flex items-center justify-center text-white">
          Performance Opportunities
        </div>
      ),
    },
    {
        title: "Personalized Lessons",
        description:
          "Our one-on-one lessons are tailored to fit your unique needs and goals. Whether you're a beginner or an advanced musician, our expert instructors will guide you through customized lessons designed to help you master your instrument at your own pace.",
        content: (
          <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--red-500),var(--yellow-500))] flex items-center justify-center text-white">
            Personalized Lessons
          </div>
        ),
      },
      {
        title: "Music Theory Classes",
        description:
          "Understanding the foundation of music is key to mastering any instrument. Our music theory classes will help you grasp the concepts of harmony, melody, rhythm, and more, so you can apply this knowledge in your practice and performance.",
        content: (
          <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--cyan-500))] flex items-center justify-center text-white">
            Music Theory Classes
          </div>
        ),
      },
    
      
      
  ];
  

function WhyChooseUS() {
    
    return (
        <div className="">
            <StickyScroll content={content}/>
        </div>
    )
}

export default WhyChooseUS
