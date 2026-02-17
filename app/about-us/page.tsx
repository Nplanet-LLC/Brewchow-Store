import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'About Us - Brewhaus',
  description: 'Learn about Brewhaus - our story, values, and commitment to great coffee.',
}

export default function AboutPage() {
  const benefits = [
    { icon: '/icons/about-waterdrop.svg', title: 'Great Coffee, Tasty Sips', description: 'We source the finest beans and craft each drink with precision and care.' },
    { icon: '/icons/about-heart.svg', title: 'Warm, Cozy Atmosphere', description: 'Our cafés are designed to be your home away from home.' },
    { icon: '/icons/about-smile.svg', title: 'Speedy Service with a Smile', description: 'Fast, friendly service that makes your day better.' },
    { icon: '/icons/about-home.svg', title: 'Local & Sustainable', description: 'We support local suppliers and sustainable practices.' }
  ]

  return (
    <main className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-heading text-[#2D5F4C] mb-6">
            About Brewhaus
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We're more than just a coffee shop. We're a community hub where great coffee meets genuine hospitality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 relative aspect-video rounded-3xl overflow-hidden">
              <Image 
                src="/images/about-barista.avif" 
                alt="Barista preparing coffee" 
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden">
              <Image 
                src="/images/about-interior.avif" 
                alt="Cafe interior" 
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden">
              <Image 
                src="/images/about-latte.avif" 
                alt="Latte art" 
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-heading text-[#2D5F4C] mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                Founded in 2020, Brewhaus started with a simple mission: to bring exceptional coffee and warm hospitality to New York neighborhoods.
              </p>
              <p>
                What began as a single café in Brooklyn has grown into a beloved local chain, but we've never lost sight of what matters most - quality, community, and care in every cup.
              </p>
              <p>
                Today, we're proud to serve thousands of customers across four locations, each one maintaining the same commitment to excellence that defined our first shop.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#F5EFE6] rounded-3xl p-12 mb-20">
          <h2 className="text-4xl md:text-5xl font-heading text-[#2D5F4C] text-center mb-12">
            What Makes Us Special
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex gap-6">
                <Image src={benefit.icon} alt="" width={64} height={64} className="flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-heading text-[#2D5F4C] mb-2">{benefit.title}</h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-heading text-[#2D5F4C] mb-6">
            Visit Us Today
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Experience the Brewhaus difference at any of our four locations
          </p>
          <Link 
            href="/locations"
            className="inline-block bg-[#2D5F4C] text-white px-8 py-4 rounded-full hover:bg-[#234739] transition"
          >
            Find a Location
          </Link>
        </div>
      </div>
    </main>
  )
}
