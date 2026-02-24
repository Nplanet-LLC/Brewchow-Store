import { MapPin, Clock, Phone, Mail } from 'lucide-react'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F5F1E8] pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-heading text-[#2C4A3E] mb-4">
              Contactez-Nous
            </h1>
            <p className="text-xl text-gray-600">
              Nous sommes là pour vous accueillir
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Info */}
            <div className="bg-white rounded-3xl p-8 shadow-xl space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#2C4A3E] flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-heading text-[#2C4A3E] mb-2">Adresse</h3>
                  <p className="text-gray-700">
                    Saint-Romuald, QC<br />
                    Canada
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#7A9B8E] flex items-center justify-center flex-shrink-0">
                  <Clock size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-heading text-[#2C4A3E] mb-2">Heures d'Ouverture</h3>
                  <div className="text-gray-700 space-y-1">
                    <p>Lundi - Vendredi: 7h00 - 18h00</p>
                    <p>Samedi: 8h00 - 17h00</p>
                    <p>Dimanche: 8h00 - 17h00</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#8B7355] flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-heading text-[#2C4A3E] mb-2">Téléphone</h3>
                  <p className="text-gray-700">(418) XXX-XXXX</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#E8DCC8] flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-[#2C4A3E]" />
                </div>
                <div>
                  <h3 className="text-xl font-heading text-[#2C4A3E] mb-2">Email</h3>
                  <p className="text-gray-700">info@cafeblou.ca</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="w-full h-full min-h-[400px] bg-[#F5F1E8] rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={48} className="text-[#2C4A3E] mx-auto mb-4" />
                  <p className="text-gray-600">Carte Interactive</p>
                  <p className="text-sm text-gray-500 mt-2">Saint-Romuald, QC</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="bg-[#2C4A3E] text-white rounded-3xl p-8 text-center">
            <h2 className="text-3xl font-heading mb-4">Suivez-Nous</h2>
            <p className="mb-6">Restez connectés pour nos dernières nouvelles et offres spéciales</p>
            <div className="flex justify-center gap-6">
              <a href="#" className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition">
                <span className="text-2xl">📷</span>
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition">
                <span className="text-2xl">📘</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
