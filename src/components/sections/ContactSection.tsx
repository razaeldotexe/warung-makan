import { Badge } from "@/components/ui/badge";
import { Phone, MapPin, Clock } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <Badge className="mb-4 bg-orange-600 text-white hover:bg-orange-600 border-none">
              Hubungi Kami
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Kunjungi Warung Kami</h2>
            <p className="text-gray-400 mb-12 text-lg">
              Kami berlokasi di pusat kota dengan akses mudah dan parkir luas. 
              Datang dan nikmati hidangan hangat langsung dari dapur kami.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-orange-600/20 p-3 rounded-lg">
                  <MapPin className="text-orange-600" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Alamat</h4>
                  <p className="text-gray-400">Jl. Nusantara No. 123, Jakarta Selatan, Indonesia</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-600/20 p-3 rounded-lg">
                  <Phone className="text-orange-600" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Telepon / WhatsApp</h4>
                  <p className="text-gray-400">+62 812 3456 7890</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-600/20 p-3 rounded-lg">
                  <Clock className="text-orange-600" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Jam Buka</h4>
                  <p className="text-gray-400">Senin - Minggu: 10:00 - 22:00 WIB</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-orange-600 transition-colors">
                <Phone size={20} />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-orange-600 transition-colors">
                <Clock size={20} />
              </a>
            </div>
          </div>

          <div className="h-[400px] lg:h-auto rounded-2xl overflow-hidden bg-gray-800 relative">
            {/* Placeholder for Google Maps */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-center p-8">
              <div>
                <MapPin size={48} className="mx-auto mb-4 opacity-20" />
                <p>Google Maps akan tampil di sini</p>
                <p className="text-sm opacity-50 mt-2">(Hubungkan API Key untuk mengaktifkan peta asli)</p>
              </div>
            </div>
            {/* For a real map, you would use an iframe or a library like react-google-maps */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.24132036489!2d106.7891559!3d-6.229728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e098863f6d%3A0x35639f7274092490!2sJakarta%20Selatan%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
              className="w-full h-full border-0 grayscale"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        
        <div className="mt-24 pt-12 border-t border-white/10 text-center text-gray-500 text-sm">
          <p>© 2024 Warung Makan Indonesia. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
