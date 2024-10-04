"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./theme-btn";

// ----------------------------------------------------------------------
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blogs", label: "Blogs" },
  // { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);

  const [lastScrollY, setLastScrollY] = useState(0);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const hideThreshold = 0;
      const showThreshold = window.innerHeight * 0.3;

      // Hide navbar when scrolling down
      if (currentScrollY > hideThreshold && currentScrollY > lastScrollY) {
        setIsVisible(false);
      }

      // Show navbar after scrolling down 50vh
      if (currentScrollY > showThreshold) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const handleLinkClick = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  return (
    <nav
      className={`p-4 bg-background/50 sticky top-0 backdrop-blur border-b z-50 transition-transform duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-2 flex items-center justify-between relative">
        {/* Logo */}
        <div className="text-lg font-bold">
          <Link href="/">Ahad Blogs</Link>
        </div>

        {/* Desktop Menu Links */}
        <div className="hidden lg:flex lg:items-center lg:space-x-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 rounded transition-transform transform hover:scale-105 duration-200"
            >
              {link.label}
            </Link>
          ))}
          {/* <Button variant="outline">Button</Button> */}
          <ModeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden absolute right-4 top-1/2 transform -translate-y-1/2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <div className="flex items-center">
              <span className="mx-2">
                <ModeToggle />
              </span>
              <SheetTrigger>
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 focus:outline-none"
                >
                  <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </SheetTrigger>
            </div>

            <SheetContent>
              <SheetHeader>
                <SheetTitle className="text-center font-bold my-4">
                  Ahad Blogs
                </SheetTitle>
                <SheetDescription>
                  <div className="flex flex-col gap-6">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="relative block px-3 py-2 group"
                        onClick={handleLinkClick}
                      >
                        {link.label}
                        <span className="absolute left-0 bottom-0 h-[2px] w-full bg-black scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                      </Link>
                    ))}
                    {/* <Button variant="outline">Button</Button> */}
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
