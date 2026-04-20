export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'makanan' | 'minuman' | 'jajanan';
  image: string;
}

export const menuData: MenuItem[] = [
  {
    id: 'm1',
    name: 'Nasi Goreng Spesial',
    description: 'Nasi goreng dengan telur mata sapi, ayam suwir, dan kerupuk udang.',
    price: 25000,
    category: 'makanan',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'm2',
    name: 'Sate Ayam Madura',
    description: '10 tusuk sate ayam dengan bumbu kacang kental dan lontong.',
    price: 30000,
    category: 'makanan',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'm3',
    name: 'Rendang Daging Sapi',
    description: 'Daging sapi empuk dimasak dengan bumbu rempah tradisional berjam-jam.',
    price: 45000,
    category: 'makanan',
    image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'm4',
    name: 'Gado-Gado Betawi',
    description: 'Sayuran segar disiram bumbu kacang gurih dengan telur dan emping.',
    price: 20000,
    category: 'makanan',
    image: 'https://images.unsplash.com/photo-1634289871583-0937a72666a7?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'm5',
    name: 'Soto Ayam Lamongan',
    description: 'Soto ayam kuah kuning bening dengan koya dan irisan telur.',
    price: 18000,
    category: 'makanan',
    image: 'https://images.unsplash.com/photo-1594911772125-07fc7a2d8d9f?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'd1',
    name: 'Es Teh Manis',
    description: 'Teh pilihan yang menyegarkan.',
    price: 5000,
    category: 'minuman',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'd2',
    name: 'Es Jeruk Peras',
    description: 'Jeruk asli diperas segar.',
    price: 7000,
    category: 'minuman',
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'j1',
    name: 'Pisang Goreng Keju',
    description: 'Pisang kepok goreng dengan taburan keju dan susu kental manis.',
    price: 12000,
    category: 'jajanan',
    image: 'https://images.unsplash.com/photo-1590130803408-04f7966378e9?q=80&w=800&auto=format&fit=crop',
  },
];
