import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const images = [
  "https://images.unsplash.com/photo-1541529086526-db283c563270?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1596797038530-2c39fa81b487?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1589113103503-49ef8b08753a?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800&auto=format&fit=crop",
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-100 border-none">
            Galeri
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Suasana Warung Kami
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Abadikan momen kebersamaan Anda saat menikmati hidangan kami.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden group"
            >
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
