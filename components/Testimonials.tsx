import Link from 'next/link'
import Image from 'next/image'

export default function Testimonials() {
  const testimonials = [
    {
      text: "Brewhaus has spoiled other coffee shops for me – in the best way. Great espresso, fresh pastries, and a team that makes you feel like a regular from day one.",
      author: "Patrick M. – Espresso lover",
      image: '/images/testimonial-1.avif'
    },
    {
      text: "I stop by every morning before work, and it's the best part of my day. The iced latte is my go-to, but I've honestly never had a bad drink here.",
      author: "Jordan T. – Iced latte addict",
      image: '/images/testimonial-2.avif'
    },
    {
      text: "Always a warm, welcoming vibe — perfect for a quick coffee or a quiet read. The banana bread? Totally addictive.",
      author: "Sofia R. – Coffee fan",
      image: '/images/testimonial-3.avif'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-heading text-[#2D5F4C] text-center mb-16">
          What People Love About Us
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, i) => (
            <div key={i}>
              <div className="bg-[#F5EFE6] rounded-3xl p-8 mb-4 relative">
                <Image src="/icons/quote.svg" alt="" width={48} height={48} className="mb-4" />
                <p className="text-lg mb-6">{testimonial.text}</p>
                <p className="text-sm text-gray-600">{testimonial.author}</p>
              </div>
              {i % 2 === 0 && (
                <div className="relative aspect-video rounded-3xl overflow-hidden">
                  <Image 
                    src={testimonial.image} 
                    alt="" 
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            href="/locations"
            className="inline-block bg-[#2D5F4C] text-white px-8 py-4 rounded-full hover:bg-[#234739] transition"
          >
            Our Locations
          </Link>
        </div>
      </div>
    </section>
  )
}
