import Image from 'next/image'

export const metadata = {
  title: 'Locations - Brewhaus',
  description: 'Find a Brewhaus café near you in New York.',
}

export default function LocationsPage() {
  const locations = [
    {
      area: 'Brooklyn',
      address: '123 Bedford Ave, Brooklyn, NY 11211',
      hours: 'Open daily: 7AM – 7PM',
      phone: '+1 (718) 555-0100'
    },
    {
      area: 'Manhattan',
      address: '456 Spring St, New York, NY 10012',
      hours: 'Open daily: 7AM – 8PM',
      phone: '+1 (212) 555-0150'
    },
    {
      area: 'Queens',
      address: '789 Broadway, Queens, NY 11106',
      hours: 'Open daily: 7AM – 6PM',
      phone: '+1 (718) 555-0200'
    },
    {
      area: 'Queens - Flushing',
      address: '134-16 36th Road, Flushing, NY 11354',
      hours: 'Open daily: 8AM – 6PM',
      phone: '+1 (718) 555-0250'
    }
  ]

  return (
    <main className="pt-32 pb-20 bg-[#F5EFE6]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-heading text-[#2D5F4C] mb-6">
            Our Locations
          </h1>
          <p className="text-xl text-gray-700">
            Find a Brewhaus nearby and stop in for your favorite drink
          </p>
        </div>

        <div className="mb-16 relative aspect-video rounded-3xl overflow-hidden">
          <Image 
            src="/images/map.svg" 
            alt="Map of locations" 
            fill
            className="object-cover"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {locations.map((location, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 hover:shadow-xl transition">
              <h2 className="text-3xl font-heading text-[#2D5F4C] mb-4">{location.area}</h2>
              <div className="space-y-3 mb-6">
                <p className="text-lg">{location.address}</p>
                <p className="text-gray-600">{location.hours}</p>
                <p className="text-gray-600">{location.phone}</p>
              </div>
              <a 
                href="https://www.google.com/maps" 
                target="_blank"
                className="inline-block bg-[#2D5F4C] text-white px-6 py-3 rounded-full hover:bg-[#234739] transition"
              >
                Get Directions
              </a>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-white rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-heading text-[#2D5F4C] mb-8">Need Help?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <p className="text-sm text-gray-600 mb-2">General Inquiries</p>
              <p className="text-xl font-heading text-[#2D5F4C]">+1 (212) 555-0198</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">Customer Support</p>
              <p className="text-xl font-heading text-[#2D5F4C]">+1 (718) 555-0243</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">General Email</p>
              <p className="text-xl font-heading text-[#2D5F4C]">hello@bhaus.com</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">Support Email</p>
              <p className="text-xl font-heading text-[#2D5F4C]">support@bhaus.com</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
