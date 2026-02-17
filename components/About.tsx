import Image from 'next/image'

export default function About() {
  const benefits = [
    { icon: '/icons/about-waterdrop.svg', title: 'Great Coffee, Tasty Sips' },
    { icon: '/icons/about-heart.svg', title: 'Warm, Cozy Atmosphere' },
    { icon: '/icons/about-smile.svg', title: 'Speedy Service with a Smile' },
    { icon: '/icons/about-home.svg', title: 'Local & Sustainable' }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-heading text-[#2D5F4C] mb-6">
              Good Vibes. Great Coffee.
            </h2>
            <p className="text-xl text-gray-700 mb-12">
              At Brewhaus, we serve great coffee and fresh pastries with care and passion, 
              creating a warm, cozy space that feels like home.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex items-start gap-4">
                  <Image src={benefit.icon} alt="" width={48} height={48} />
                  <h3 className="text-xl font-heading text-[#2D5F4C]">{benefit.title}</h3>
                </div>
              ))}
            </div>
          </div>
          
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
        </div>
      </div>
    </section>
  )
}
