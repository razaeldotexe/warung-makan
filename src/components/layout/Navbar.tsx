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
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-orange-600">
          Warung<span className="text-gray-900">Makan</span>
        </Link>
        <div className="hidden md:flex space-x-8 items-center">
          <Link href="#hero" className="text-sm font-medium hover:text-orange-600 transition-colors">
            Beranda
          </Link>
          <Link href="#menu" className="text-sm font-medium hover:text-orange-600 transition-colors">
            Menu
          </Link>
          <Link href="#gallery" className="text-sm font-medium hover:text-orange-600 transition-colors">
            Galeri
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-orange-600 transition-colors">
            Kontak
          </Link>
          <Button asChild className="bg-orange-600 hover:bg-orange-700">
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
