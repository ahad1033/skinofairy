"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// ----------------------------------------------------------------------
const Navbar = () => {
  return (
    <nav className="p-4 bg-background/50 sticky top-0 backdrop-blur border-b">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between relative">
        {/* Logo */}
        <div className="text-lg font-bold">
          <Link href="/" className="text-white">
            Ahad Blogs
          </Link>
        </div>

        {/* Desktop Menu Links */}
        <div className="hidden lg:flex lg:items-center lg:space-x-4">
          <Link
            href="/"
            className="px-3 py-2 rounded transition-transform transform hover:scale-105 duration-200"
          >
            Home
          </Link>
          <Link
            href="/posts"
            className="px-3 py-2 rounded transition-transform transform hover:scale-105 duration-200"
          >
            Blogs
          </Link>
          <Link
            href="/about"
            className="px-3 py-2 rounded transition-transform transform hover:scale-105 duration-200"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="px-3 py-2 rounded transition-transform transform hover:scale-105 duration-200"
          >
            Contact
          </Link>
          <Button variant="outline">Button</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden absolute right-4 top-1/2 transform -translate-y-1/2">
          <Sheet>
            <SheetTrigger>
              <svg
                className="w-6 h-6 text-white focus:outline-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="text-center font-bold my-4">
                  Ahad Blogs
                </SheetTitle>
                <SheetDescription>
                  <div className="flex flex-col gap-6">
                    <Link
                      href="/"
                      className="block px-3 py-2 text-gray-300 hover:bg-gray-700 rounded"
                    >
                      Home
                    </Link>
                    <Link
                      href="/posts"
                      className="block px-3 py-2 text-gray-300 hover:bg-gray-700 rounded"
                    >
                      Blogs
                    </Link>
                    <Link
                      href="/about"
                      className="block px-3 py-2 text-gray-300 hover:bg-gray-700 rounded"
                    >
                      About
                    </Link>
                    <Link
                      href="/contact"
                      className="block px-3 py-2 text-gray-300 hover:bg-gray-700 rounded"
                    >
                      Contact
                    </Link>
                    <Button variant="outline">Button</Button>
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
