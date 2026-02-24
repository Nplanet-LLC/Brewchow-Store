export default function MenuPage() {
  const menuSections = [
    {
      title: 'Cafés',
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
      items: [
        { name: 'Bagels', price: '3.50$' },
        { name: 'Sandwichs', price: '7.50$' },
        { name: 'Options Sucrées', price: '4.00$' },
        { name: 'Pâtisseries', price: '3.75$' }
      ]
    },
    {
      title: 'Autres Boissons',
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
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-heading text-[#2C4A3E] mb-4">
            Notre Menu
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des créations artisanales préparées avec amour et passion
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {menuSections.map((section, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-heading text-[#2C4A3E] mb-8 text-center">
                {section.title}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {section.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex}
                    className="flex justify-between items-center p-4 bg-[#F5F1E8] rounded-2xl hover:shadow-md transition"
                  >
                    <span className="text-lg font-medium text-[#2C4A3E]">{item.name}</span>
                    <span className="text-lg text-[#7A9B8E] font-semibold">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 italic">
            Les prix peuvent varier. Demandez à notre équipe pour les options du jour!
          </p>
        </div>
      </div>
    </main>
  )
}
