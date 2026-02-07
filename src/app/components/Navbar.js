"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "About Me", href: "/" },
    { name: "Key Skills", href: "/skills" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Analytics Reports", href: "/analytics" },
    { name: "Certifications", href: "/certifications" },
    { name: "Creative Work", href: "/creative-work" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
        {/* TOP BAR */}
        <div className="flex justify-between items-center h-16">
          {/* LOGO / BRAND */}
          <Link
            href="/"
            className="flex items-center text-gray-600 font-extrabold text-2xl"
          >
            {/* Replace with image if needed */}
            {/* <Image src="/logo.png" alt="Logo" width={120} height={40} /> */}
            My Portfolio
          </Link>

          {/* HAMBURGER BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-2xl text-black"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
    px-3 py-1 transition-all text-xl duration-200
    ${
      isActive
        ? "font-bold text-gray-600"
        : "font-normal text-gray-400 hover:text-gray-500"
    }
  `}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="lg:hidden w-full bg-white shadow-lg rounded-b-xl py-4 space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block mx-4 px-4 py-2 rounded-lg text-base font-medium transition
                    ${
                      isActive
                        ? "bg-gradient-to-r from-teal-600 via-teal-500 to-emerald-400 text-white"
                        : "text-black hover:text-teal-600 hover:bg-gray-200"
                    }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}
