import Image from "next/image";
import React from "react";

const SkillCard = ({ name, image }) => {
  return (
    <div className="border border-border rounded-lg items-center flex flex-col py-4 gap-4 bg-card text-card-foreground  hover:bg-accent hover:drop-shadow-xl transition-all duration-300">
      <Image
        src={image}
        alt="Image"
        width={60}
        height={60}
        className=" rounded-full object-cover aspect-square"
      />
      <p className="">{name}</p>
    </div>
  );
};

export default SkillCard;
