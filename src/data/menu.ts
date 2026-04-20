export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "makanan" | "minuman" | "jajanan";
  image: string;
}

export const menuData: MenuItem[] = [
  {
    id: "m1",
    name: "Nasi Goreng Spesial",
    description: "Nasi goreng dengan telur mata sapi, ayam suwir, dan kerupuk udang.",
    price: 25000,
    category: "makanan",
    image: "https://images.unsplash.com/photo-1660861038670-d56ba86526fb?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "m2",
    name: "Sate Ayam Madura",
    description: "10 tusuk sate ayam dengan bumbu kacang kental dan lontong.",
    price: 30000,
    category: "makanan",
    image: "https://plus.unsplash.com/premium_photo-1669150852115-38eb25f072e0?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "m3",
    name: "Rendang Daging Sapi",
    description: "Daging sapi empuk dimasak dengan bumbu rempah tradisional berjam-jam.",
    price: 45000,
    category: "makanan",
    image: "https://plus.unsplash.com/premium_photo-1669150852091-1bf715f21eeb?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "m4",
    name: "Gado-Gado Betawi",
    description: "Sayuran segar disiram bumbu kacang gurih dengan telur dan emping.",
    price: 20000,
    category: "makanan",
    image: "https://images.unsplash.com/photo-1636301175138-08aba8191957?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "m5",
    name: "Soto Ayam Lamongan",
    description: "Soto ayam kuah kuning bening dengan koya dan irisan telur.",
    price: 18000,
    category: "makanan",
    image: "https://images.unsplash.com/photo-1681378128359-a5c2492a3535?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "d1",
    name: "Es Teh Manis",
    description: "Teh pilihan yang menyegarkan.",
    price: 5000,
    category: "minuman",
    image: "https://plus.unsplash.com/premium_photo-1731787779857-58e70c0b62a2?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "d2",
    name: "Es Jeruk Peras",
    description: "Jeruk asli diperas segar.",
    price: 7000,
    category: "minuman",
    image: "https://images.unsplash.com/photo-1603803721487-97009eb7f8db?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "j1",
    name: "Pisang Goreng Keju",
    description: "Pisang kepok goreng dengan taburan keju dan susu kental manis.",
    price: 12000,
    category: "jajanan",
    image: "https://images.unsplash.com/photo-1723169863726-fa6c9262c086?q=80&w=800&auto=format&fit=crop",
  },
];
