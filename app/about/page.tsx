export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F5F1E8] pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-heading text-[#2C4A3E] mb-4">
              Notre Histoire
            </h1>
            <p className="text-xl text-[#7A9B8E] italic">
              L'histoire derrière Café Blou
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl space-y-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-heading text-[#2C4A3E] mb-4">
                Le Nom "Blou"
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Blou, ce n'est pas juste un surnom. C'était d'abord celui de notre cher papa, et avec le temps, 
                il nous l'a transmis. Un nom qui, pour nous, incarne un lien profond et un attachement sincère à notre entourage.
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-heading text-[#2C4A3E] mb-4">
                Une Histoire de Famille
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Depuis notre tendre enfance, notre famille nous a encouragées à vivre avec passion. Nous avons puisé notre 
                inspiration dans leur esprit d'entrepreneuriat, leur persévérance, et leur ouverture sur le monde. C'est grâce 
                à eux que nous avons décidé de suivre nos aspirations et de croire en nos ambitions.
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-heading text-[#2C4A3E] mb-4">
                Notre Passion pour le Café
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Dans nos rêves les plus fous, nous imaginions travailler ensemble, créer notre petit cocon à nous et voilà, 
                ce rêve n'était pas si fou après tout ! Deux filles, un bagage de vie extraordinaire, portées par un entourage 
                motivant et bienveillant...
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-heading text-[#2C4A3E] mb-4">
                Communauté & Atmosphère Chaleureuse
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Aujourd'hui, nous réalisons notre rêve. Blou, c'est pour la famille. Notre petite famille, mais immense de cœur. 
                Et voilà, Café Blou est là, enfin. Pour vous, pour nous, pour les beaux moments qu'on choisit de partager avec vous.
              </p>
              <p className="text-[#7A9B8E] italic text-right mt-6 text-xl">
                -Mathilde et Viviann Blouin
              </p>
            </div>

            <div className="bg-[#2C4A3E] text-white rounded-2xl p-8 mt-8">
              <h3 className="text-2xl font-heading mb-4 text-center">Nos Valeurs</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-4xl mb-2">❤️</div>
                  <h4 className="font-semibold mb-2">Passion</h4>
                  <p className="text-sm">Chaque tasse préparée avec amour</p>
                </div>
                <div>
                  <div className="text-4xl mb-2">🏠</div>
                  <h4 className="font-semibold mb-2">Famille</h4>
                  <p className="text-sm">Un espace chaleureux pour tous</p>
                </div>
                <div>
                  <div className="text-4xl mb-2">✨</div>
                  <h4 className="font-semibold mb-2">Qualité</h4>
                  <p className="text-sm">Excellence dans chaque détail</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
