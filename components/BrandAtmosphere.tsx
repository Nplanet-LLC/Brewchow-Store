export default function BrandAtmosphere() {
  return (
    <section className="py-20 bg-[#2C4A3E] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-heading mb-8">
            L'Atmosphère Café Blou
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl leading-relaxed">
            <p>
              Chez Café Blou, nous créons plus qu'un simple café – nous créons une expérience. 
              Un espace chaleureux où chaque tasse raconte une histoire, où chaque visite devient un moment précieux.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-2xl font-heading mb-3">Environnement Chaleureux</h3>
                <p className="text-base">
                  Un cocon accueillant où vous vous sentez comme à la maison
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-2xl font-heading mb-3">Café de Qualité</h3>
                <p className="text-base">
                  Des grains soigneusement sélectionnés, torréfiés avec passion
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
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
