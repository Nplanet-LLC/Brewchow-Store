import Link from 'next/link'
import { MapPin, Clock, Phone } from 'lucide-react'

export default function LocationPreview() {
  return (
    <section className="py-20 bg-[#F5F1E8]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading text-[#2C4A3E] mb-4">
              Venez Nous Voir
            </h2>
            <p className="text-xl text-gray-600">
              Nous vous attendons à Lévis
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#2C4A3E] flex items-center justify-center">
                  <MapPin size={32} className="text-white" />
                </div>
                <h3 className="text-lg font-heading text-[#2C4A3E] mb-2">Adresse</h3>
                <p className="text-gray-600">2560 Chem. du Fleuve</p>
                <p className="text-gray-600">Lévis, QC G6W 1X4</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#7A9B8E] flex items-center justify-center">
                  <Clock size={32} className="text-white" />
                </div>
                <h3 className="text-lg font-heading text-[#2C4A3E] mb-2">Heures</h3>
                <p className="text-gray-600">Lun-Ven: 7h-18h</p>
                <p className="text-gray-600">Sam-Dim: 8h-17h</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#8B7355] flex items-center justify-center">
                  <Phone size={32} className="text-white" />
                </div>
                <h3 className="text-lg font-heading text-[#2C4A3E] mb-2">Contact</h3>
                <p className="text-gray-600">cafeblou@gmail.com</p>
              </div>
            </div>

            <div className="text-center">
              <Link 
                href="/contact"
                className="inline-block bg-[#2C4A3E] text-white px-8 py-4 rounded-full hover:bg-[#1f3329] transition-all hover:scale-105 shadow-lg"
              >
                Plus d'Informations
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
