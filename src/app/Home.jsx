import React from "react";
import Animation from "@/components/Animation";
import Work from "@/components/Work";
import Sticky from "@/components/Sticky";
import About from "@/components/About";
import Slider from "@/components/Slider";
import Whyus from "@/components/Whyus";


const Home = () => {
  return (
    <div className="relative w-full">
      <section className="h-screen">
        <Animation />
      </section>
      <About />
      <Sticky />
      <Slider />
      <Work />
      <Whyus/>

    </div>
  );
};

export default Home;
