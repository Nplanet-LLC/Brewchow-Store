'use client'

import { useState } from 'react'
import { Calendar, Clock } from 'lucide-react'

export default function EventsPage() {
  const [currentMonth] = useState('Mars 2026')
  
  const events = [
    {
      date: '5 Mars',
      time: '18h00 - 20h00',
      title: 'Soirée Jazz Acoustique',
      description: 'Musique live avec des artistes locaux'
    },
    {
      date: '12 Mars',
      time: '10h00 - 12h00',
      title: 'Atelier Latte Art',
      description: 'Apprenez l\'art du café avec nos baristas'
    },
    {
      date: '19 Mars',
      time: '19h00 - 21h00',
      title: 'Dégustation de Café',
      description: 'Découvrez nos nouveaux mélanges'
    },
    {
      date: '26 Mars',
      time: '14h00 - 16h00',
      title: 'Rencontre Communautaire',
      description: 'Café et conversation avec vos voisins'
    }
  ]

  return (
    <main className="min-h-screen bg-[#F5F1E8] pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-heading text-[#2C4A3E] mb-4">
              Nos Événements
            </h1>
            <p className="text-xl text-gray-600">
              Rejoignez-nous pour des moments spéciaux
            </p>
          </div>

          {/* Calendar Header */}
          <div className="bg-[#2C4A3E] text-white rounded-3xl p-6 mb-8 flex items-center justify-center gap-4">
            <Calendar size={32} />
            <h2 className="text-3xl font-heading">{currentMonth}</h2>
          </div>

          {/* Events List */}
          <div className="space-y-6">
            {events.map((event, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02]"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-2xl bg-[#2C4A3E] text-white flex flex-col items-center justify-center">
                      <div className="text-3xl font-heading">{event.date.split(' ')[0]}</div>
                      <div className="text-sm">{event.date.split(' ')[1]}</div>
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-2xl font-heading text-[#2C4A3E] mb-2">
                      {event.title}
                    </h3>
                    <div className="flex items-center gap-2 text-[#7A9B8E] mb-2">
                      <Clock size={18} />
                      <span>{event.time}</span>
                    </div>
                    <p className="text-gray-600">{event.description}</p>
                  </div>

                  <button className="bg-[#2C4A3E] text-white px-6 py-3 rounded-full hover:bg-[#1f3329] transition whitespace-nowrap">
                    S'inscrire
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Info Box */}
          <div className="mt-12 bg-[#7A9B8E] text-white rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-heading mb-4">Événements Privés</h3>
            <p className="mb-4">
              Vous souhaitez organiser un événement privé chez Café Blou?
            </p>
            <a 
              href="/contact"
              className="inline-block bg-white text-[#2C4A3E] px-8 py-3 rounded-full hover:bg-[#F5F1E8] transition font-medium"
            >
              Contactez-Nous
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
