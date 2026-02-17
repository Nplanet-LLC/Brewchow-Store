import Image from 'next/image'
import Link from 'next/link'
import { products, getProductsByCategory } from '@/data/products'

export const metadata = {
  title: 'Menu - Brewhaus',
  description: 'Explore our menu of handcrafted coffee, cold drinks, and fresh bakery items.',
}

export default function MenuPage() {
  const coffeeItems = getProductsByCategory('coffee')
  const coldDrinks = getProductsByCategory('cold-drinks')
  const bakery = getProductsByCategory('bakery')

  return (
    <main className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-heading text-[#2D5F4C] mb-6">
            Our Menu
          </h1>
          <p className="text-xl text-gray-700">
            Handcrafted drinks and fresh treats, made with love
          </p>
        </div>

        {/* Coffee Section */}
        <section id="coffee" className="mb-20">
          <h2 className="text-4xl md:text-5xl font-heading text-[#2D5F4C] mb-8">Coffee</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coffeeItems.map((item) => (
              <Link 
                key={item.id}
                href={`/menu/${item.id}`}
                className="group"
              >
                <div className="bg-[#F5EFE6] rounded-3xl overflow-hidden hover:shadow-xl transition">
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
                      <span>{item.price.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Cold Drinks Section */}
        <section id="cold-drinks" className="mb-20">
          <h2 className="text-4xl md:text-5xl font-heading text-[#2D5F4C] mb-8">Cold Drinks</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coldDrinks.map((item) => (
              <Link 
                key={item.id}
                href={`/menu/${item.id}`}
                className="group"
              >
                <div className="bg-[#F5EFE6] rounded-3xl overflow-hidden hover:shadow-xl transition">
                  <div className="relative aspect-square">
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
                      <span>{item.price.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Bakery Section */}
        <section id="bakery" className="mb-20">
          <h2 className="text-4xl md:text-5xl font-heading text-[#2D5F4C] mb-8">Bakery</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bakery.map((item) => (
              <Link 
                key={item.id}
                href={`/menu/${item.id}`}
                className="group"
              >
                <div className="bg-[#F5EFE6] rounded-3xl overflow-hidden hover:shadow-xl transition">
                  <div className="relative aspect-square">
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
                      <span>{item.price.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <div className="text-center">
          <Link 
            href="/locations"
            className="inline-block bg-[#2D5F4C] text-white px-8 py-4 rounded-full hover:bg-[#234739] transition"
          >
            Visit Our Locations
          </Link>
        </div>
      </div>
    </main>
  )
}
