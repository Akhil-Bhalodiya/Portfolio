import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhatIDo from "@/components/WhatIDo";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PixelSnow from "@/components/PixelSnow";
import Galaxy from "@/components/Galaxy";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <PixelSnow 
    color="#ffffff"
    flakeSize={0.01}
    minFlakeSize={1.25}
    pixelResolution={200}
    speed={1.25}
    density={0.1}
    direction={125}
    brightness={1}
    depthFade={8}
    farPlane={20}
    gamma={0.4545}
    variant="square"
/>

        <Hero />
        <About />
        <WhatIDo />
        <Skills />
        <Experience />
        {/* <Education /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
