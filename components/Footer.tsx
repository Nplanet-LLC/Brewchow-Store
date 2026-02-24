import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#2C4A3E] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-12 h-12">
                <Image 
                  src="/logo-dark.png" 
                  alt="Café Blou Logo" 
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <h3 className="text-2xl font-heading">Café Blou</h3>
            </div>
            <p className="text-white/80 text-sm">
              Café de cœur à Saint-Romuald. Un espace chaleureux où chaque moment compte.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-heading mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/80 hover:text-white transition">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-white/80 hover:text-white transition">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-white transition">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-white transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-white/80 hover:text-white transition">
                  Nos événements
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <span className="text-white/80 text-sm">
                  2560 Chem. du Fleuve<br />
                  Lévis, QC G6W 1X4<br />
                  Canada
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="flex-shrink-0" />
                <a href="tel:+14185551234" className="text-white/80 text-sm hover:text-white transition">
                  (418) 555-1234
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="flex-shrink-0" />
                <a href="mailto:cafeblou@gmail.com" className="text-white/80 text-sm hover:text-white transition">
                  cafeblou@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & Social */}
          <div>
            <h4 className="text-lg font-heading mb-4">Heures d'Ouverture</h4>
            <ul className="space-y-2 mb-6">
              <li className="text-white/80 text-sm">Lun-Ven: 7h00 - 18h00</li>
              <li className="text-white/80 text-sm">Sam-Dim: 8h00 - 17h00</li>
            </ul>
            
            <h4 className="text-lg font-heading mb-4">Suivez-Nous</h4>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/cafe_blou" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.facebook.com/people/Caf%C3%A9-Blou/61578633491745/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Café Blou. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
