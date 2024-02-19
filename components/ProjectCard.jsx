import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { GitHub, LiveTvOutlined } from "@mui/icons-material";
import Image from "next/image";

const ProjectCard = ({ name, image, desc }) => {
  return (
    <div className="">
      <Card className='bg-accent'>
        <CardHeader>
          <div className="flex justify-between gap-4 md:gap-8">
            <div>
              <CardTitle><h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl">{name}</h3></CardTitle>
              <CardDescription><p className="text-info">{desc}</p></CardDescription>
            </div>
            <div className="flex">
              <Button variant="icon">
                <LiveTvOutlined />
              </Button>
              <Button variant="icon">
                <div className=" ">
                  <GitHub />
                </div>
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Image
            src={image}
            alt=""
            width={100}
            height={100}
            className=" object-cover w-full h-[200px] sm:h-[250px] xl:h-[300px] rounded-lg"
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectCard;
