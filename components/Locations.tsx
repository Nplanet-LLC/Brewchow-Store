import Image from 'next/image'

export default function Locations() {
  const locations = [
    {
      area: 'Brooklyn',
      address: '123 Bedford Ave, Brooklyn, NY 11211',
      hours: 'Open daily: 7AM – 7PM'
    },
    {
      area: 'Manhattan',
      address: '456 Spring St, New York, NY 10012',
      hours: 'Open daily: 7AM – 8PM'
    },
    {
      area: 'Queens',
      address: '789 Broadway, Queens, NY 11106',
      hours: 'Open daily: 7AM – 6PM'
    },
    {
      area: 'Queens',
      address: '134-16 36th Road, Flushing, NY 11354',
      hours: 'Open daily: 8AM – 6PM'
    }
  ]

  return (
    <section className="py-20 bg-[#2D5F4C] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-heading mb-4">
            Nearby Cafés
          </h2>
          <p className="text-xl">
            Find a Brewhaus nearby and stop in for your favorite drink.
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
        
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {locations.map((location, i) => (
            <div key={i} className="bg-[#F5EFE6] text-[#2D5F4C] rounded-3xl p-8">
              <p className="text-sm mb-2">{location.area}</p>
              <p className="text-xl font-heading mb-2">{location.address}</p>
              <p className="text-sm mb-6">{location.hours}</p>
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
        
        <div className="text-center">
          <h3 className="text-3xl font-heading mb-8">Need Help?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#F5EFE6] text-[#2D5F4C] rounded-3xl p-6">
              <p className="text-sm mb-2">General Inquiries</p>
              <p className="text-xl font-heading">+1 (212) 555-0198</p>
            </div>
            <div className="bg-[#F5EFE6] text-[#2D5F4C] rounded-3xl p-6">
              <p className="text-sm mb-2">Customer Support</p>
              <p className="text-xl font-heading">+1 (718) 555-0243</p>
            </div>
            <div className="bg-[#F5EFE6] text-[#2D5F4C] rounded-3xl p-6">
              <p className="text-sm mb-2">General Email</p>
              <p className="text-xl font-heading">hello@bhaus.com</p>
            </div>
            <div className="bg-[#F5EFE6] text-[#2D5F4C] rounded-3xl p-6">
              <p className="text-sm mb-2">Support Email</p>
              <p className="text-xl font-heading">support@bhaus.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
