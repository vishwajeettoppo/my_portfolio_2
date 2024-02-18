import Container from "@/components/Container";
import React from "react";
import abstract from "@/public/abstract1.svg";
import Image from "next/image";

const About = () => {
  return (
    <section className="p-4 flex w-screen max-md:mt-6 ">
      <Container>
        <div className=" md:px-4">
          <div className=" text-3xl md:text-5xl font-bold">
            <p>
              <span className=" text-primary">About</span> Me
            </p>
          </div>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2">
            <div className=" flex flex-col gap-4 sm:pr-4 md:pr-8 lg:pr-16 xl:pr-24 sm:place-content-center">
              <p className="font-bold text-xl md:text-2xl 2xl:text-4xl text-fourth">
                <span className=" uppercase text-sm text-info">
                  Web Developer,
                </span>{" "}
                <br />
                3rd year student persueing B.Tech. from IIITDM Jabalpur
              </p>
              <p className="text-md text-info">
                Hi there, my name is Vishwajeet, and I&apos;m a Fullstack Web
                Developer. My passion is to create and develop a clean UI/UX for
                my users.
              </p>
              <p className="text-md text-info">
                My main stack current is React/Next.js in combination with
                Tailwind CSS and Framer Motion. <br />
                And Node.js for backend.
              </p>
            </div>
            <div className="max-sm:mt-4 sm:pl-4">
              <Image
                src={"/about.jpg"}
                alt=""
                width={200}
                height={200}
                className="aspect-video object-cover w-full rounded-xl sm:aspect-square  max-h-[350px]"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
