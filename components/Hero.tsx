import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#F5F1E8] pt-32 pb-20 relative overflow-hidden">
      {/* Decorative background elements with animation */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#2C4A3E] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#7A9B8E] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Brand name with animations */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading text-[#2C4A3E] mb-4 animate-slideDown">
              Café Blou
            </h1>
            <p className="text-2xl md:text-3xl text-[#7A9B8E] font-light italic animate-slideUp" style={{ animationDelay: '0.2s' }}>
              Café de cœur à Saint-Romuald
            </p>
            <p className="text-xl md:text-2xl text-[#8B7355] mt-2 animate-slideUp" style={{ animationDelay: '0.4s' }}>
              Savoure l'instant
            </p>
          </div>

          {/* Story section */}
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl mb-12 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
            <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed space-y-6">
              <p className="text-lg md:text-xl">
                Blou, ce n'est pas juste un surnom. C'était d'abord celui de notre cher papa, et avec le temps, 
                il nous l'a transmis. Un nom qui, pour nous, incarne un lien profond et un attachement sincère à notre entourage.
              </p>
              <p className="text-lg md:text-xl">
                Depuis notre tendre enfance, notre famille nous a encouragées à vivre avec passion. Nous avons puisé notre 
                inspiration dans leur esprit d'entrepreneuriat, leur persévérance, et leur ouverture sur le monde.
              </p>
              <p className="text-lg md:text-xl">
                Dans nos rêves les plus fous, nous imaginions travailler ensemble, créer notre petit cocon à nous et voilà, 
                ce rêve n'était pas si fou après tout ! Deux filles, un bagage de vie extraordinaire, portées par un entourage 
                motivant et bienveillant...
              </p>
              <p className="text-lg md:text-xl font-medium text-[#2C4A3E]">
                Aujourd'hui, nous réalisons notre rêve. Blou, c'est pour la famille. Notre petite famille, mais immense de cœur. 
                Et voilà, Café Blou est là, enfin. Pour vous, pour nous, pour les beaux moments qu'on choisit de partager avec vous.
              </p>
              <p className="text-right text-[#7A9B8E] italic mt-6">
                -Mathilde et Viviann Blouin
              </p>
            </div>
          </div>

          {/* Image gallery with animations */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-12">
            <div className="relative w-64 h-80 transform md:rotate-3 hover:rotate-0 transition-all duration-500 animate-slideInLeft">
              <Image 
                src="/cafeblou/images/coffee-1.avif" 
                alt="Artisan Coffee" 
                fill
                className="object-cover rounded-3xl shadow-xl hover:shadow-2xl transition-shadow"
              />
            </div>
            <div className="relative w-72 h-96 z-10 hover:scale-105 transition-all duration-500 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
              <Image 
                src="/cafeblou/images/coffee-2.avif" 
                alt="Fresh Espresso" 
                fill
                className="object-cover rounded-3xl shadow-2xl"
              />
            </div>
            <div className="relative w-64 h-80 transform md:-rotate-3 hover:rotate-0 transition-all duration-500 animate-slideInRight">
              <Image 
                src="/cafeblou/images/coffee-3.avif" 
                alt="Cold Brew Perfection" 
                fill
                className="object-cover rounded-3xl shadow-xl hover:shadow-2xl transition-shadow"
              />
            </div>
          </div>

          {/* CTA buttons with animations */}
          <div className="flex flex-wrap gap-4 justify-center animate-fadeIn" style={{ animationDelay: '1s' }}>
            <Link 
              href="/menu"
              className="bg-[#2C4A3E] text-white px-10 py-4 rounded-full hover:bg-[#1f3329] transition-all hover:scale-110 hover:-translate-y-1 shadow-lg text-lg font-medium"
            >
              Voir le Menu
            </Link>
            <Link 
              href="/contact"
              className="bg-white border-2 border-[#2C4A3E] text-[#2C4A3E] px-10 py-4 rounded-full hover:bg-[#2C4A3E] hover:text-white transition-all hover:scale-110 hover:-translate-y-1 shadow-lg text-lg font-medium"
            >
              Nous Rejoindre
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
