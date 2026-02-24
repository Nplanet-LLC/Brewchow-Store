import Link from 'next/link'

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#F5F1E8] pt-32 pb-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#2C4A3E] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#7A9B8E] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Brand name */}
          <div className="mb-8 animate-fadeIn">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading text-[#2C4A3E] mb-4">
              Café Blou
            </h1>
            <p className="text-2xl md:text-3xl text-[#7A9B8E] font-light italic">
              Café de cœur à Saint-Romuald
            </p>
            <p className="text-xl md:text-2xl text-[#8B7355] mt-2">
              Savoure l'instant
            </p>
          </div>

          {/* Story section */}
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl mb-12 animate-fadeIn">
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

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 justify-center animate-fadeIn">
            <Link 
              href="/menu"
              className="bg-[#2C4A3E] text-white px-10 py-4 rounded-full hover:bg-[#1f3329] transition-all hover:scale-105 shadow-lg text-lg font-medium"
            >
              Voir le Menu
            </Link>
            <Link 
              href="/contact"
              className="bg-white border-2 border-[#2C4A3E] text-[#2C4A3E] px-10 py-4 rounded-full hover:bg-[#2C4A3E] hover:text-white transition-all hover:scale-105 shadow-lg text-lg font-medium"
            >
              Nous Rejoindre
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
