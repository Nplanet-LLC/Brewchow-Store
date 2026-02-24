import Link from 'next/link'
import Image from 'next/image'

export default function CoffeeDrinks() {
  const drinks = [
    { name: 'Café', image: '/images/category-coffee.avif' },
    { name: 'Boissons', image: '/images/category-drinks.avif' },
    { name: 'Pâtisseries', image: '/images/category-bakery.avif' },
    { name: 'Spécialités', image: '/images/menu-coldbrew.avif' }
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
          {drinks.map((drink, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-3xl hover:shadow-2xl transition-all hover:scale-105 hover:-translate-y-2 cursor-pointer animate-scaleIn hover-lift h-64"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Image 
                src={drink.image}
                alt={drink.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C4A3E]/80 to-transparent flex items-end p-6">
                <h3 className="text-2xl font-heading text-white">{drink.name}</h3>
              </div>
            </div>
          ))}
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
