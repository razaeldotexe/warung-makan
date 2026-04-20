import Navbar from "@/components/layout/Navbar";
import MenuSection from "@/components/sections/MenuSection";
import ContactSection from "@/components/sections/ContactSection";

export default function MenuPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      <div className="bg-orange-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Menu Lengkap</h1>
          <p className="text-orange-100 text-lg md:text-xl max-w-2xl mx-auto">
            Temukan berbagai pilihan hidangan lezat khas nusantara mulai dari makanan utama hingga minuman segar.
          </p>
        </div>
      </div>
      <MenuSection />
      <ContactSection />
    </main>
  );
}
