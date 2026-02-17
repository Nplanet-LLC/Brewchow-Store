import Link from 'next/link'
import Image from 'next/image'

export default function News() {
  const articles = [
    {
      date: 'Apr 10, 2025',
      title: 'Celebrate the Season with Our New Spring Drink Specials Today',
      image: '/images/news-1.avif'
    },
    {
      date: 'Apr 2, 2025',
      title: 'Our New Brewhaus Flushing Location Is Now Officially Open',
      image: '/images/news-2.avif'
    },
    {
      date: 'Mar 23, 2025',
      title: 'Introducing Our Exciting New Loyalty Program for Coffee Lovers',
      image: '/images/news-3.avif'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-[#2D5F4C]">
            What's New at Our Coffee Shop
          </h2>
          <Link 
            href="/news"
            className="inline-block bg-[#2D5F4C] text-white px-8 py-4 rounded-full hover:bg-[#234739] transition whitespace-nowrap"
          >
            View All
          </Link>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-video rounded-3xl overflow-hidden mb-4 group-hover:shadow-xl transition">
                <Image 
                  src={article.image} 
                  alt={article.title} 
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-gray-600 mb-2">{article.date}</p>
              <h3 className="text-2xl font-heading text-[#2D5F4C] group-hover:text-[#8B6F47] transition">
                {article.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
