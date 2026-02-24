import Image from 'next/image'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F5F1E8] pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fadeIn">
            <h1 className="text-5xl md:text-6xl font-heading text-[#2C4A3E] mb-4">
              Notre Histoire
            </h1>
            <p className="text-xl text-[#7A9B8E] italic">
              L'histoire derrière Café Blou
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative h-96 rounded-3xl overflow-hidden mb-12 animate-scaleIn">
            <Image 
              src="/images/about-interior.avif"
              alt="Café Blou Interior"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C4A3E]/60 to-transparent"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Story Content */}
            <div className="space-y-8 animate-slideInLeft">
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <div className="flex items-center gap-4 mb-4">
                  <Image src="/icons/about-heart.svg" alt="" width={40} height={40} />
                  <h2 className="text-3xl font-heading text-[#2C4A3E]">
                    Le Nom "Blou"
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Blou, ce n'est pas juste un surnom. C'était d'abord celui de notre cher papa, et avec le temps, 
                  il nous l'a transmis. Un nom qui, pour nous, incarne un lien profond et un attachement sincère à notre entourage.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <div className="flex items-center gap-4 mb-4">
                  <Image src="/icons/about-home.svg" alt="" width={40} height={40} />
                  <h2 className="text-3xl font-heading text-[#2C4A3E]">
                    Une Histoire de Famille
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Depuis notre tendre enfance, notre famille nous a encouragées à vivre avec passion. Nous avons puisé notre 
                  inspiration dans leur esprit d'entrepreneuriat, leur persévérance, et leur ouverture sur le monde.
                </p>
              </div>
            </div>

            {/* Images Column */}
            <div className="space-y-6 animate-slideInRight">
              <div className="relative h-64 rounded-3xl overflow-hidden hover:scale-105 transition-transform">
                <Image 
                  src="/images/about-barista.avif"
                  alt="Barista"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-3xl overflow-hidden hover:scale-105 transition-transform">
                <Image 
                  src="/images/about-latte.avif"
                  alt="Latte"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* More Content */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-12 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <Image src="/icons/about-smile.svg" alt="" width={40} height={40} />
                  <h2 className="text-3xl font-heading text-[#2C4A3E]">
                    Notre Passion pour le Café
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg mb-4">
                  Dans nos rêves les plus fous, nous imaginions travailler ensemble, créer notre petit cocon à nous et voilà, 
                  ce rêve n'était pas si fou après tout !
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Deux filles, un bagage de vie extraordinaire, portées par un entourage motivant et bienveillant...
                </p>
              </div>
              <div className="relative h-80 rounded-2xl overflow-hidden">
                <Image 
                  src="/images/menu-coldbrew.avif"
                  alt="Cold Brew"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Final Message */}
          <div className="bg-[#2C4A3E] text-white rounded-3xl p-8 md:p-12 text-center animate-fadeIn" style={{ animationDelay: '0.6s' }}>
            <h2 className="text-3xl font-heading mb-6">Communauté & Atmosphère Chaleureuse</h2>
            <p className="text-xl mb-4 max-w-3xl mx-auto">
              Aujourd'hui, nous réalisons notre rêve. Blou, c'est pour la famille. Notre petite famille, mais immense de cœur. 
              Et voilà, Café Blou est là, enfin. Pour vous, pour nous, pour les beaux moments qu'on choisit de partager avec vous.
            </p>
            <p className="text-[#7A9B8E] italic text-xl mt-6">
              -Mathilde et Viviann Blouin
            </p>

            {/* Values Grid */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl mb-2">❤️</div>
                <h4 className="font-semibold mb-2 text-xl">Passion</h4>
                <p className="text-sm">Chaque tasse préparée avec amour</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl mb-2">🏠</div>
                <h4 className="font-semibold mb-2 text-xl">Famille</h4>
                <p className="text-sm">Un espace chaleureux pour tous</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl mb-2">✨</div>
                <h4 className="font-semibold mb-2 text-xl">Qualité</h4>
                <p className="text-sm">Excellence dans chaque détail</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
