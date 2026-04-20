"use client";

import { useState, useMemo } from "react";
import { menuData } from "@/data/menu";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Search, UtensilsCrossed } from "lucide-react";
import Link from "next/link";

const categories = [
  { id: "semua", label: "Semua" },
  { id: "makanan", label: "Makanan" },
  { id: "minuman", label: "Minuman" },
  { id: "jajanan", label: "Jajanan" },
];

export default function MenuSection({ limit }: { limit?: number }) {
  const [activeCategory, setActiveCategory] = useState("semua");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMenu = useMemo(() => {
    let filtered = menuData;

    if (activeCategory !== "semua") {
      filtered = filtered.filter((item) => item.category === activeCategory);
    }

    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query),
      );
    }

    return limit ? filtered.slice(0, limit) : filtered;
  }, [activeCategory, searchQuery, limit]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section id="menu" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-100 border-none px-4 py-1 font-bold">
            Daftar Menu
          </Badge>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
            Menu Pilihan Kami
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            Sajian nusantara yang dimasak dengan cinta dan bumbu rempah pilihan.
          </p>
        </div>

        {/* Search and Filter Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          {/* Search Input */}
          <div className="relative w-full md:max-w-md group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition-colors size-5" />
            <input
              type="text"
              placeholder="Cari makanan atau minuman..."
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-gray-700"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  activeCategory === category.id
                    ? "bg-orange-600 text-white shadow-lg shadow-orange-600/30"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Empty State */}
        {filteredMenu.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-gray-200">
            <UtensilsCrossed className="size-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Menu tidak ditemukan
            </h3>
            <p className="text-gray-500">
              Coba gunakan kata kunci lain atau pilih kategori yang berbeda.
            </p>
            <Button
              variant="outline"
              className="mt-6 border-orange-500 text-orange-600 hover:bg-orange-50"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("semua");
              }}
            >
              Reset Pencarian
            </Button>
          </div>
        )}

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredMenu.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col p-0 gap-0 hover:-translate-y-2 bg-white"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <Badge className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-orange-600 border-none font-bold shadow-sm">
                  {item.category.charAt(0).toUpperCase() +
                    item.category.slice(1)}
                </Badge>
              </div>
              <CardContent className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex justify-between items-center border-none bg-transparent">
                <span className="text-orange-600 font-extrabold text-xl">
                  {formatPrice(item.price)}
                </span>
                <Button
                  className="bg-orange-600 hover:bg-orange-700 text-white font-bold h-11 px-6 rounded-xl shadow-lg shadow-orange-600/20 transition-all hover:scale-105"
                  asChild
                >
                  <a
                    href={`https://wa.me/6281234567890?text=Halo, saya ingin memesan ${item.name}`}
                    target="_blank"
                  >
                    Pesan
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View Full Menu Button for Landing Page */}
        {limit && filteredMenu.length > 0 && (
          <div className="text-center mt-16">
            <Button
              className="bg-gray-900 hover:bg-black text-white h-14 px-10 text-lg font-bold rounded-2xl transition-all shadow-xl hover:scale-105"
              asChild
            >
              <Link href="/menu">Lihat Seluruh Menu</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
