import Image from 'next/image'

export default function MenuPage() {
  const menuSections = [
    {
      title: 'Cafés',
      image: '/images/menu-coldbrew.avif',
      items: [
        { name: 'Latte', price: '4.50$' },
        { name: 'Cappuccino', price: '4.25$' },
        { name: 'Flat White', price: '4.75$' },
        { name: 'Macchiato', price: '3.75$' },
        { name: 'Mocha', price: '5.00$' },
        { name: 'Chai Latte', price: '4.75$' },
        { name: 'Dirty Chai', price: '5.25$' }
      ]
    },
    {
      title: 'Nourriture',
      image: '/images/menu-macaroon.avif',
      items: [
        { name: 'Bagels', price: '3.50$' },
        { name: 'Sandwichs', price: '7.50$' },
        { name: 'Options Sucrées', price: '4.00$' },
        { name: 'Pâtisseries', price: '3.75$' }
      ]
    },
    {
      title: 'Autres Boissons',
      image: '/images/menu-icedlatte.avif',
      items: [
        { name: 'Thé / Infusions', price: '3.25$' },
        { name: 'Matcha', price: '5.00$' },
        { name: 'Café Glacé', price: '4.50$' },
        { name: 'Smoothies', price: '6.00$' },
        { name: 'Chocolat Chaud', price: '4.00$' }
      ]
    }
  ]

  return (
    <main className="min-h-screen bg-[#F5F1E8] pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero Section with Image */}
        <div className="relative h-96 rounded-3xl overflow-hidden mb-16 animate-scaleIn">
          <Image 
            src="/images/category-coffee.avif"
            alt="Menu"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C4A3E]/80 to-transparent flex items-end justify-center p-12">
            <div className="text-center text-white">
              <h1 className="text-5xl md:text-6xl font-heading mb-4">
                Notre Menu
              </h1>
              <p className="text-xl max-w-2xl">
                Des créations artisanales préparées avec amour et passion
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {menuSections.map((section, index) => (
            <div key={index} className="animate-fadeIn" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Image */}
                <div className={`relative h-96 rounded-3xl overflow-hidden hover:scale-105 transition-transform ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <Image 
                    src={section.image}
                    alt={section.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C4A3E]/60 to-transparent flex items-end p-8">
                    <h2 className="text-4xl font-heading text-white">
                      {section.title}
                    </h2>
                  </div>
                </div>

                {/* Menu Items */}
                <div className="bg-white rounded-3xl p-8 shadow-xl">
                  <div className="space-y-4">
                    {section.items.map((item, itemIndex) => (
                      <div 
                        key={itemIndex}
                        className="flex justify-between items-center p-4 bg-[#F5F1E8] rounded-2xl hover:shadow-md hover:scale-105 transition-all"
                      >
                        <span className="text-lg font-medium text-[#2C4A3E]">{item.name}</span>
                        <span className="text-lg text-[#7A9B8E] font-semibold">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fadeIn" style={{ animationDelay: '0.8s' }}>
          <div className="bg-white rounded-3xl p-8 max-w-2xl mx-auto shadow-xl">
            <p className="text-gray-600 italic text-lg mb-4">
              Les prix peuvent varier. Demandez à notre équipe pour les options du jour!
            </p>
            <a 
              href="/contact"
              className="inline-block bg-[#2C4A3E] text-white px-8 py-4 rounded-full hover:bg-[#1f3329] transition-all hover:scale-110 hover:-translate-y-1 shadow-lg"
            >
              Contactez-Nous
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
