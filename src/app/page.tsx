import FeaturedCourses from "@/components/featuredCourses";
import Footer from "@/components/footer";
import HeroSection from "@/components/heroSection";
import MeetInstructors from "@/components/meetInstructors";
import InfiniteMovingCardsDemo from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/upcomingWebinars";
import WhyChooseUS from "@/components/WhyChooseUS";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        <HeroSection/>
        <FeaturedCourses/>
        <WhyChooseUS/>
        <InfiniteMovingCardsDemo/>
        <UpcomingWebinars/>
        <MeetInstructors/>
        <Footer/>
    </main>
  );
}
