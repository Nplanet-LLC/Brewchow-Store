import Image from 'next/image'

export default function BrandAtmosphere() {
  return (
    <section className="py-20 bg-[#2C4A3E] text-white relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 opacity-20">
        <Image 
          src="/images/about-interior.avif"
          alt="Interior"
          fill
          className="object-cover"
        />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading mb-12 text-center animate-fadeIn">
            L'Atmosphère Café Blou
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 with image */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden hover:bg-white/20 transition-all hover:scale-105 animate-slideInLeft hover-lift">
              <div className="relative h-48">
                <Image 
                  src="/images/about-barista.avif"
                  alt="Barista"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 mb-4 rounded-full bg-white/20 flex items-center justify-center">
                  <Image src="/icons/about-home.svg" alt="" width={24} height={24} />
                </div>
                <h3 className="text-2xl font-heading mb-3">Environnement Chaleureux</h3>
                <p className="text-base">
                  Un cocon accueillant où vous vous sentez comme à la maison
                </p>
              </div>
            </div>
            
            {/* Card 2 with image */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden hover:bg-white/20 transition-all hover:scale-105 animate-fadeIn hover-lift" style={{ animationDelay: '0.2s' }}>
              <div className="relative h-48">
                <Image 
                  src="/images/about-latte.avif"
                  alt="Latte"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 mb-4 rounded-full bg-white/20 flex items-center justify-center">
                  <Image src="/icons/about-heart.svg" alt="" width={24} height={24} />
                </div>
                <h3 className="text-2xl font-heading mb-3">Café de Qualité</h3>
                <p className="text-base">
                  Des grains soigneusement sélectionnés, torréfiés avec passion
                </p>
              </div>
            </div>
            
            {/* Card 3 with image */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden hover:bg-white/20 transition-all hover:scale-105 animate-slideInRight hover-lift">
              <div className="relative h-48">
                <Image 
                  src="/images/about-interior.avif"
                  alt="Interior"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 mb-4 rounded-full bg-white/20 flex items-center justify-center">
                  <Image src="/icons/about-smile.svg" alt="" width={24} height={24} />
                </div>
                <h3 className="text-2xl font-heading mb-3">Service Amical</h3>
                <p className="text-base">
                  Une équipe dévouée qui vous accueille avec le sourire
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
