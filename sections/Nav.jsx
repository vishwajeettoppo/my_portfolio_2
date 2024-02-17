import React from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import Container from "@/components/Container";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import SideNav from "@/components/SideNav";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Me" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact Me" },
];

const Nav = () => {
  return (
    <header className="flex p-4 border-b fixed w-screen top-0 backdrop-blur-lg">
      <Container>
        <div className="flex justify-between items-center md:px-6">
          <div className=" flex items-center">
            <div className=" md:hidden items-center flex">
              <SideNav />
            </div>
            <Link href={"/"} className=" ml-4 lg:ml-0 text-xl font-bold">
              vishwajeet
            </Link>
          </div>
          <nav className="hidden md:flex">
            {navLinks.map((link) => (
              <Link href={link.href} key={link.index}>
                <Button variant="ghost">{link.label}</Button>
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-6">
            <div className=" flex">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Nav;
