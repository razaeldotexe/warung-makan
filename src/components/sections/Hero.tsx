import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen w-full flex items-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1541529086526-db283c563270?q=80&w=2000&auto=format&fit=crop')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container mx-auto px-4 z-10 text-white">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Cita Rasa <span className="text-orange-500">Nusantara</span>{" "}
            Autentik
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Nikmati kelezatan masakan tradisional Indonesia yang dimasak dengan
            resep warisan dan bahan-bahan segar pilihan setiap harinya.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8"
              asChild
            >
              <Link href="#menu">Lihat Menu</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-black px-8"
              asChild
            >
              <Link href="#contact">Lokasi Kami</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-1 h-12 rounded-full bg-white/30 flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
}
