import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import MenuSection from "@/components/sections/MenuSection";
import GallerySection from "@/components/sections/GallerySection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <MenuSection limit={4} />
      <GallerySection />
      <ContactSection />
    </main>
  );
}
