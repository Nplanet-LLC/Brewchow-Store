import Image from 'next/image'

export default function Ticker() {
  const items = [
    { text: 'Great Coffee', icon: '/icons/smiley.svg' },
    { text: 'Fast Service', icon: '/icons/bolt.svg' },
    { text: 'Cozy Space', icon: '/icons/instagram.svg' },
    { text: 'Handcrafted Drinks', icon: '/icons/waterdrop.svg' },
    { text: 'Local Roasts', icon: '/icons/smiley-love.svg' },
    { text: 'Global Flavor', icon: '/icons/element.svg' },
    { text: 'Friendly Baristas', icon: '/icons/crown.svg' }
  ]

  return (
    <div className="bg-[#2D5F4C] text-white py-6 overflow-hidden">
      <div className="flex animate-scroll whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center mx-8">
            <span className="text-2xl font-heading">{item.text}</span>
            <Image src={item.icon} alt="" width={32} height={32} className="ml-4" />
          </div>
        ))}
      </div>
    </div>
  )
}
