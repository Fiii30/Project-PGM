"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-[#d8d4cc] bg-[#f4f2ee] px-5 py-4 md:px-10">
      <Link href="/" className="text-xl font-extrabold tracking-widest">
        PGM
      </Link>

      <button
        onClick={() => setOpen(!open)}
        className="text-sm uppercase tracking-widest md:hidden"
      >
        {open ? "Close" : "Menu"}
      </button>

      <nav
        className={`fixed inset-0 flex flex-col items-center justify-center gap-8 bg-[#f4f2ee] text-2xl uppercase transition-transform duration-300 md:static md:flex md:flex-row md:gap-7 md:bg-transparent md:text-sm ${
          open ? "translate-y-0" : "-translate-y-full md:translate-y-0"
        }`}
      >
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
