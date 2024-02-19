import { Inter } from "next/font/google";
import Hero from "@/sections/Hero";
import Skills from "@/sections/Skills";
import About from "@/sections/About";
import Works from "@/sections/Works";
import Contact from "@/sections/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className=" overflow-x-hidden flex flex-col gap-8 md:gap-16 lg:gap-24">
        <Hero />
        <Skills />
        <About/>
        <Works/>
        <Contact/>
    </main>
  );
}
