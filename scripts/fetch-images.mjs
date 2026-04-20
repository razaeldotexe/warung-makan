/**
 * Skrip Scraper Gambar Unsplash Sederhana
 * Cara pakai: node scripts/fetch-images.mjs "Nasi Goreng"
 */

async function searchUnsplash(query) {
  const url = `https://unsplash.com/napi/search/photos?query=${encodeURIComponent(query)}&per_page=5`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Gagal mengambil data dari Unsplash');
    
    const data = await response.json();
    const photos = data.results || [];
    
    if (photos.length === 0) {
      console.log(`\n❌ Tidak ada hasil untuk: "${query}"`);
      return;
    }

    console.log(`\n✅ Hasil pencarian untuk: "${query}"`);
    console.log('--------------------------------------------------');
    
    photos.forEach((photo, index) => {
      const imageUrl = `${photo.urls.raw}?auto=format&fit=crop&q=80&w=1000`;
      console.log(`${index + 1}. ID: ${photo.id}`);
      console.log(`   Deskripsi: ${photo.alt_description || 'N/A'}`);
      console.log(`   Direct Link: ${imageUrl}`);
      console.log('--------------------------------------------------');
    });
    
  } catch (error) {
    console.error('Terjadi kesalahan:', error.message);
  }
}

const keyword = process.argv.slice(2).join(' ');

if (!keyword) {
  console.log('Silakan masukkan kata kunci pencarian!');
  console.log('Contoh: node scripts/fetch-images.mjs "Indonesian Sate"');
  process.exit(1);
}

searchUnsplash(keyword);
