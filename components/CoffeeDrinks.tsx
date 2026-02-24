import Link from 'next/link'
import { Coffee, Droplet, Leaf, IceCream } from 'lucide-react'

export default function CoffeeDrinks() {
  const drinks = [
    { name: 'Latte', icon: Coffee, color: '#8B7355' },
    { name: 'Cappuccino', icon: Coffee, color: '#2C4A3E' },
    { name: 'Matcha', icon: Leaf, color: '#7A9B8E' },
    { name: 'Smoothies', icon: IceCream, color: '#E8DCC8' }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-heading text-[#2C4A3E] mb-4">
            Nos Boissons
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des créations artisanales préparées avec passion
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {drinks.map((drink, index) => {
            const Icon = drink.icon
            return (
              <div 
                key={index}
                className="bg-[#F5F1E8] rounded-3xl p-8 text-center hover:shadow-xl transition-all hover:scale-105 hover:-translate-y-2 cursor-pointer animate-scaleIn hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white flex items-center justify-center animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                  <Icon size={40} style={{ color: drink.color }} />
                </div>
                <h3 className="text-xl font-heading text-[#2C4A3E]">{drink.name}</h3>
              </div>
            )
          })}
        </div>

        <div className="text-center animate-fadeIn" style={{ animationDelay: '0.6s' }}>
          <Link 
            href="/menu"
            className="inline-block bg-[#2C4A3E] text-white px-8 py-4 rounded-full hover:bg-[#1f3329] transition-all hover:scale-110 hover:-translate-y-1 shadow-lg"
          >
            Voir le Menu Complet
          </Link>
        </div>
      </div>
    </section>
  )
}
