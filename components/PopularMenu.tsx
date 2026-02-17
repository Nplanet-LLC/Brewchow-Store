import Link from 'next/link'
import Image from 'next/image'

export default function PopularMenu() {
  const items = [
    { id: 'cold-brew', name: 'Cold Brew', price: 6.75, badge: 'New', image: '/images/menu-coldbrew.avif' },
    { id: 'macaroon', name: 'Macaroon', price: 2.6, image: '/images/menu-macaroon.avif' },
    { id: 'iced-latte', name: 'Iced Latte', price: 4.45, image: '/images/menu-icedlatte.avif' },
    { id: 'iced-tea', name: 'Iced Tea', price: 4.35, image: '/images/menu-icedtea.avif' }
  ]

  return (
    <section className="py-20 bg-[#F5EFE6]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-heading text-[#2D5F4C] mb-4">
            Loved by Locals
          </h2>
          <p className="text-xl text-gray-700">
            Local go-to's everyone loves — handpicked and always fresh.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {items.map((item) => (
            <Link 
              key={item.id}
              href={`/menu/${item.id}`}
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden hover:shadow-xl transition">
                <div className="relative aspect-square">
                  {item.badge && (
                    <span className="absolute top-4 left-4 bg-[#2D5F4C] text-white px-4 py-1 rounded-full text-sm z-10">
                      {item.badge}
                    </span>
                  )}
                  <Image 
                    src={item.image} 
                    alt={item.name} 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-heading text-[#2D5F4C] mb-2 group-hover:text-[#8B6F47] transition">{item.name}</h3>
                  <div className="flex items-center text-2xl font-heading text-[#8B6F47]">
                    <span>$</span>
                    <span>{item.price}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            href="/menu"
            className="inline-block bg-[#2D5F4C] text-white px-8 py-4 rounded-full hover:bg-[#234739] transition"
          >
            Explore Menu
          </Link>
        </div>
      </div>
    </section>
  )
}
