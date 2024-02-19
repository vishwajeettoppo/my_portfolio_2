import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Button } from "./ui/button";
import { navLinks } from "@/sections/Nav";
import { socials } from "@/sections/Footer";

const SideNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <HamburgerMenuIcon width="24" height="24" />
      </SheetTrigger>
      <SheetContent side="left" className="h-screen">
        <SheetClose asChild>
          <SheetHeader>
            <SheetTitle className="text-left">
              <Link href={"/"} className=" ml-4 lg:ml-0 text-xl font-bold">
                vishwajeet
              </Link>
            </SheetTitle>
            <SheetDescription>
              <div className="flex flex-col gap-4 mt-8 text-left">
                {navLinks.map((link) => (
                  <Link href={link.href} key={link.index}>
                    <Button variant="ghost">
                      <p className="text-2xl">{link.label}</p>
                    </Button>
                  </Link>
                ))}
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetClose>
        <SheetFooter>
          <div className="fixed bottom-10 ">
            {socials.map((social) => (
              <div key={social.link} className=" flex">
                <Link
                  href={social.link}
                  target="_blank"
                  className="flex items-center gap-4"
                >
                  <p>{social.icon}</p>
                  <p className="">{social.name}</p>
                </Link>
              </div>
            ))}
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default SideNav;
