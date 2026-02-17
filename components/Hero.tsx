import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#F5EFE6] pt-32 pb-16 relative overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#2D5F4C] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#8B6F47] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main heading */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading text-[#2D5F4C] leading-tight mb-6">
              Brewhaus
            </h1>
            <p className="text-2xl md:text-3xl text-[#8B6F47] font-light italic">
              Café de cœur – Savoure l'instant
            </p>
          </div>

          {/* Story section - inspired by Café Blou */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg mb-12">
            <div className="prose prose-lg md:prose-xl max-w-none text-gray-800 leading-relaxed">
              <p className="text-center md:text-left">
                Brewhaus isn't just a name – it's a feeling, a place where moments are savored and memories are brewed. 
                From our earliest days, we've been inspired by the simple joy that a perfect cup of coffee can bring. 
                We dreamed of creating a space where community gathers, where conversations flow as smoothly as our espresso, 
                and where every visit feels like coming home.
              </p>
              <p className="text-center md:text-left mt-6">
                Today, that dream is alive in every cup we serve. Brewhaus is for family, for friends, for the beautiful 
                moments we choose to share together. Welcome to our story. Welcome home.
              </p>
            </div>
          </div>

          {/* Image gallery */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-12">
            <div className="relative w-64 h-80 transform md:rotate-3 hover:rotate-0 transition-transform duration-300">
              <Image 
                src="/images/hero-black-coffee.avif" 
                alt="Artisan Coffee" 
                fill
                className="object-cover rounded-3xl shadow-xl"
              />
            </div>
            <div className="relative w-72 h-96 z-10 hover:scale-105 transition-transform duration-300">
              <Image 
                src="/images/hero-espresso.avif" 
                alt="Fresh Espresso" 
                fill
                className="object-cover rounded-3xl shadow-2xl"
              />
            </div>
            <div className="relative w-64 h-80 transform md:-rotate-3 hover:rotate-0 transition-transform duration-300">
              <Image 
                src="/images/hero-coldbrew.avif" 
                alt="Cold Brew Perfection" 
                fill
                className="object-cover rounded-3xl shadow-xl"
              />
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/menu"
              className="bg-[#2D5F4C] text-white px-10 py-4 rounded-full hover:bg-[#234739] transition-all hover:scale-105 shadow-lg text-lg"
            >
              Découvrir le Menu
            </Link>
            <Link 
              href="/locations"
              className="bg-white border-2 border-[#2D5F4C] text-[#2D5F4C] px-10 py-4 rounded-full hover:bg-[#2D5F4C] hover:text-white transition-all hover:scale-105 shadow-lg text-lg"
            >
              Nos Emplacements
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
