import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { ArrowRightAltRounded, ArrowRightOutlined } from "@mui/icons-material";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import React from "react";

export const projects = [
  {
    name: "Project1",
    image: "/project1.png",
    desc: "This is project 1",
    github: "",
  },
  {
    name: "Project2",
    image: "/project2.png",
    desc: "This is project 2",
    github: "",
  },
  {
    name: "Project3",
    image: "/project3.png",
    desc: "This is project 3",
    github: "",
  },
  {
    name: "Project4",
    image: "/project4.png",
    desc: "This is project 4",
    github: "",
  },
];

const Works = () => {
  return (
    <section id="projects" className={`p-4 flex w-screen max-md:mt-6 pt-20`}>
      <Container>
        <div className=" md:px-4 flex flex-col gap-4">
          <div className=" text-3xl md:text-5xl font-bold">
            <p>
              Check out my
              <span className=" text-primary"> Projects</span>
            </p>
          </div>
          <p className="my-4 text-info">
            Dive into a showcase of my diverse projects, where passion drives
            excellence and every endeavor tells a unique story of skill and
            dedication.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            {projects.map((project) => (
              <div key={project.name}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>

          <Button variant="secondary" size='lg'>
            <div className="flex items-center gap-2">
              <p>See all Projects </p> <ArrowRightIcon />
            </div>
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Works;
