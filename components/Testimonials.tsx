export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sophie L.',
      text: 'Un endroit magique où le café est exceptionnel et l\'accueil toujours chaleureux. Mon café préféré à Saint-Romuald!',
      rating: 5
    },
    {
      name: 'Marc D.',
      text: 'L\'atmosphère est parfaite pour travailler ou simplement relaxer. Les lattes sont incroyables!',
      rating: 5
    },
    {
      name: 'Julie B.',
      text: 'Café Blou, c\'est comme une deuxième maison. L\'équipe est formidable et le café délicieux.',
      rating: 5
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading text-[#2C4A3E] mb-4">
            Ce Que Disent Nos Clients
          </h2>
          <p className="text-xl text-gray-600">
            Vos mots nous inspirent chaque jour
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-[#F5F1E8] rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#8B7355]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <p className="text-[#2C4A3E] font-semibold">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
