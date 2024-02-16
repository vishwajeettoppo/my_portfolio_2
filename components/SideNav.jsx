import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Button } from "./ui/button";
import { navLinks } from "@/sections/Nav";

const SideNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <HamburgerMenuIcon width="24" height="24" />
      </SheetTrigger>
      <SheetContent side="left">
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
      </SheetContent>
    </Sheet>
  );
};

export default SideNav;
