import Container from "@/components/Container";
import SkillCard from "@/components/SkillCard";
import React from "react";
import abstract from '@/public/abstract1.svg'

export const skills = [
  { name: "Next.js", image: "/next.png" },
  { name: "React.js", image: "/react.png" },
  { name: "Tailwind CSS", image: "/tailwind.jpg" },
  { name: "CSS", image: "/css.png" },
  { name: "HTML", image: "/html.png" },
  { name: "Javascript", image: "/js.png" },
  { name: "Framer Motion", image: "/motion.png" },
  { name: "Typescript", image: "/ts.png" },
];

const Skills = () => {
  return (
    <section className={`p-4 flex w-screen max-md:mt-6`}>
      <Container>
        <div className=" md:px-4">
          <div className=" text-3xl md:text-5xl font-bold">
            <p>
              <span className=" text-primary">Tech Stacks</span> I Use
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 mt-8 xl:grid-cols-5">
            {skills.map((skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
