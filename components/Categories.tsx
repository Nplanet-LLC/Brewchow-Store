import Link from 'next/link'
import Image from 'next/image'

export default function Categories() {
  const categories = [
    { name: 'Coffee', href: '/menu#coffee', image: '/images/category-coffee.avif' },
    { name: 'Cold Drinks', href: '/menu#cold-drinks', image: '/images/category-drinks.avif' },
    { name: 'Bakery', href: '/menu#bakery', image: '/images/category-bakery.avif' }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-heading text-[#2D5F4C] text-center mb-16">
          Find and Get What You Love
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link 
              key={category.name}
              href={category.href}
              className="group"
            >
              <div className="bg-[#F5EFE6] rounded-3xl overflow-hidden hover:shadow-xl transition">
                <div className="relative aspect-square">
                  <Image 
                    src={category.image} 
                    alt={category.name} 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-3xl font-heading text-[#2D5F4C] group-hover:text-[#8B6F47] transition">
                    {category.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
