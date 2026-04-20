"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          <span className="text-orange-600">Warung</span>
          <span className={isScrolled ? "text-gray-900" : "text-white"}>
            Makan
          </span>
        </Link>
        <div className="hidden md:flex space-x-8 items-center">
          <Link
            href="/"
            className={`text-sm font-semibold transition-colors hover:text-orange-500 ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
          >
            Beranda
          </Link>
          <Link
            href="/menu"
            className={`text-sm font-semibold transition-colors hover:text-orange-500 ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
          >
            Menu
          </Link>
          <Link
            href="/#gallery"
            className={`text-sm font-semibold transition-colors hover:text-orange-500 ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
          >
            Galeri
          </Link>
          <Link
            href="/#contact"
            className={`text-sm font-semibold transition-colors hover:text-orange-500 ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
          >
            Kontak
          </Link>
          <Button
            asChild
            className="bg-orange-600 hover:bg-orange-700 text-white h-11 px-6 text-base font-bold shadow-lg shadow-orange-600/20"
          >
            <Link href="https://wa.me/6281234567890" target="_blank">
              Pesan Sekarang
            </Link>
          </Button>
        </div>
        {/* Mobile menu button could be added here */}
      </div>
    </nav>
  );
}
