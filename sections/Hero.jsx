import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  const router = useRouter();
  return (
    <section className="p-4 flex min-h-screen w-screen max-md:mt-24">
      <Container>
        <div className=" flex flex-col md:flex-row w-full h-full">
          <div className=" w-full md:w-1/2  grid place-items-center md:pr-4">
            <Image
              src={"/profile.jpg"}
              alt="Profile Image"
              width={300}
              height={300}
              className=" rounded-full object-cover aspect-square md:w-[400px]"
            />
          </div>
          <div className="mt-8 flex flex-col items-center gap-4 md:justify-center md:items-start md:pl-4">
            <p className="">VISHWAJEET TOPPO</p>
            <div>
              <p className="text-4xl font-extrabold text-foreground max-md:text-center md:text-7xl">
                Web
              </p>
              <p className=" text-5xl font-extrabold text-foreground max-md:text-center md:text-8xl">
                <Typewriter
                  options={{
                    strings: ["Developer", "Designer"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </p>
            </div>
            <p className=" max-w-sm max-md:text-center text-info">
              Explore my portfolio to see a showcase of my projects, ranging
              from elegant personal websites to complex web applications. Join
              me on this journey as we transform concepts into captivating
              online experiences that leave a lasting impression.
            </p>
            <p className=" max-w-sm max-md:text-center text-info">
              Let&apos;s build something extraordinary together.
            </p>
            <div className="text-primary-foreground text-center flex max-md:flex-col gap-3">
              <Button>
                <Link
                  target="_blank"
                  href={"https://github.com/vishwajeettoppo"}
                >
                  Go to my Github
                </Link>
              </Button>
              <Button>
                <Link
                  target="_blank"
                  href={
                    "https://drive.google.com/file/d/1ozWfYJ6v1aNP-F2vPVI70lLEKxVa_WtR/view?usp=sharing"
                  }
                >
                  See my Resume
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
