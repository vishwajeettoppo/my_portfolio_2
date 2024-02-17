import { Inter } from "next/font/google";
import Hero from "@/sections/Hero";
import Skills from "@/sections/Skills";
import About from "@/sections/About";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className=" overflow-x-hidden">
        <Hero />
        <Skills />
        <About/>
    </main>
  );
}
