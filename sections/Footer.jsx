import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { navLinks } from "./Nav";
import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";

export const socials = [
  {
    icon: <GitHub fontSize="large" />,
    name: "Github",
    link: "https://github.com/vishwajeettoppo",
  },
  {
    icon: <LinkedIn fontSize="large" />,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/vishwajeettoppo/",
  },
  {
    icon: <Instagram fontSize="large" />,
    name: "Instagram",
    link: "https://www.instagram.com/vishwajeett_07?igsh=MWt0ZHpwZzB1NmhtZQ==",
  },
];

const Footer = () => {
  return (
    <section
      className={`p-4 absolute mb-0 w-screen mt-8 border-t bg-black text-white pt-4`}
    >
      <Container>
        <div className=" md:px-4 flex justify-evenly">
          <div>
            <Link href={"/"} className="lg:ml-0 text-xl font-bold">
              vishwajeet
            </Link>
          </div>
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <Link href={link.href} key={link.index}>
                <Button variant="link">{link.label}</Button>
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {socials.map((social) => (
              <div key={social.link} className=" flex flex-col">
                <Link
                  href={social.link}
                  target="_blank"
                  className="flex items-center gap-4"
                >
                  <p>{social.icon}</p>
                  <p className="hidden md:flex">{social.name}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
