import React from "react";
import Animation from "@/components/Animation";
import Work from "@/components/Work";
import Sticky from "@/components/Services_Sticky";
import About from "@/components/About";
import Slider from "@/components/Slider";
import Whyus from "@/components/Whyus";
import ServicesSection from "@/components/Services_Sticky";
import Bit from "@/components/Bit";
import Carousel from "@/components/Carousel";
import SecondryService from "@/components/SecondryService";

const Home = () => {
  return (
    <div className="relative w-full">
      <section className="h-screen">
        <Animation />
      </section>
      <About />
      <Bit />
      <SecondryService />
      <Slider />
      <Carousel />

      <Whyus />
    </div>
  );
};

export default Home;
