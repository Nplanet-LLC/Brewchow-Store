import Image from 'next/image'

export const metadata = {
  title: 'News - Brewhaus',
  description: 'Stay updated with the latest news and announcements from Brewhaus.',
}

export default function NewsPage() {
  const articles = [
    {
      date: 'Apr 10, 2025',
      title: 'Celebrate the Season with Our New Spring Drink Specials Today',
      image: '/images/news-1.avif',
      excerpt: 'Spring is here, and we are celebrating with a fresh lineup of seasonal drinks! Try our new Lavender Honey Latte, Strawberry Cold Brew, and Lemon Mint Refresher.'
    },
    {
      date: 'Apr 2, 2025',
      title: 'Our New Brewhaus Flushing Location Is Now Officially Open',
      image: '/images/news-2.avif',
      excerpt: 'We are thrilled to announce the opening of our fourth location in Flushing, Queens! Join us for our grand opening celebration with special offers all week.'
    },
    {
      date: 'Mar 23, 2025',
      title: 'Introducing Our Exciting New Loyalty Program for Coffee Lovers',
      image: '/images/news-3.avif',
      excerpt: 'Earn points with every purchase and redeem them for free drinks, pastries, and exclusive perks. Sign up today and get your first reward instantly!'
    },
    {
      date: 'Mar 10, 2025',
      title: 'Brewhaus Wins Best Local Coffee Shop Award',
      image: '/images/about-interior.avif',
      excerpt: 'We are honored to be recognized as New York Best Local Coffee Shop by the NYC Food & Beverage Association. Thank you to our amazing community!'
    },
    {
      date: 'Feb 28, 2025',
      title: 'New Vegan and Gluten-Free Options Now Available',
      image: '/images/category-bakery.avif',
      excerpt: 'Expanding our menu to serve everyone! Check out our new selection of vegan pastries and gluten-free treats, made fresh daily.'
    },
    {
      date: 'Feb 14, 2025',
      title: 'Valentine Day Special: Share the Love with BOGO',
      image: '/images/testimonial-1.avif',
      excerpt: 'This Valentine Day, buy one drink and get one free! Share the love with someone special or treat yourself to a double dose of caffeine.'
    }
  ]

  return (
    <main className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-heading text-[#2D5F4C] mb-6">
            Latest News
          </h1>
          <p className="text-xl text-gray-700">
            Stay updated with what's happening at Brewhaus
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <article key={i} className="group cursor-pointer">
              <div className="relative aspect-video rounded-3xl overflow-hidden mb-4 group-hover:shadow-xl transition">
                <Image 
                  src={article.image} 
                  alt={article.title} 
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-gray-600 mb-2">{article.date}</p>
              <h2 className="text-2xl font-heading text-[#2D5F4C] mb-3 group-hover:text-[#8B6F47] transition">
                {article.title}
              </h2>
              <p className="text-gray-700">{article.excerpt}</p>
            </article>
          ))}
        </div>

        <div className="mt-20 bg-[#F5EFE6] rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-heading text-[#2D5F4C] mb-4">
            Stay Connected
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Follow us on social media for daily updates, special offers, and behind-the-scenes content
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="https://instagram.com" 
              target="_blank"
              className="bg-[#2D5F4C] text-white px-8 py-4 rounded-full hover:bg-[#234739] transition"
            >
              Instagram
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank"
              className="bg-[#2D5F4C] text-white px-8 py-4 rounded-full hover:bg-[#234739] transition"
            >
              Facebook
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank"
              className="bg-[#2D5F4C] text-white px-8 py-4 rounded-full hover:bg-[#234739] transition"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
