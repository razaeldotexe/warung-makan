import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const images = [
  "https://images.unsplash.com/photo-1655740005902-2436216b82b8?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1645696288939-e59ed5e3cfa2?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1747055884659-fe1726ed8e47?q=80&w=800&auto=format&fit=crop",
  "https://plus.unsplash.com/premium_photo-1682091799861-a5dacd77711e?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1622572771591-6ca7813cc39d?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1771120790521-515467792fbf?q=80&w=800&auto=format&fit=crop",
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-100 border-none">
            Galeri
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Suasana Warung Kami</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Abadikan momen kebersamaan Anda saat menikmati hidangan kami.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <div key={index} className="relative aspect-square overflow-hidden group">
              <Image
                src={src}
                alt={`Galeri ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
