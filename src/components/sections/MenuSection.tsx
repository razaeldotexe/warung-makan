"use client";

import { useState } from "react";
import { menuData } from "@/data/menu";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const categories = [
  { id: "semua", label: "Semua" },
  { id: "makanan", label: "Makanan" },
  { id: "minuman", label: "Minuman" },
  { id: "jajanan", label: "Jajanan" },
];

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("semua");

  const filteredMenu = activeCategory === "semua" 
    ? menuData 
    : menuData.filter(item => item.category === activeCategory);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <section id="menu" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-100 border-none">
            Daftar Menu
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Menu Pilihan Kami</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Dari hidangan utama yang mengenyangkan hingga minuman yang menyegarkan.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={activeCategory === category.id ? "bg-orange-600 hover:bg-orange-700" : ""}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredMenu.map((item) => (
            <Card key={item.id} className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex justify-between items-center">
                <span className="text-orange-600 font-bold text-lg">
                  {formatPrice(item.price)}
                </span>
                <Button size="sm" variant="ghost" className="text-orange-600 hover:text-orange-700 hover:bg-orange-50 p-0" asChild>
                  <a href={`https://wa.me/6281234567890?text=Halo, saya ingin memesan ${item.name}`} target="_blank">
                    Pesan
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
