import Hero from '@/components/Hero'
import Ticker from '@/components/Ticker'
import Categories from '@/components/Categories'
import PopularMenu from '@/components/PopularMenu'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import Locations from '@/components/Locations'
import News from '@/components/News'
import OrderBanner from '@/components/OrderBanner'

export default function Home() {
  return (
    <main>
      <Hero />
      <Ticker />
      <Categories />
      <PopularMenu />
      <About />
      <Testimonials />
      <Locations />
      <News />
      <OrderBanner />
    </main>
  )
}
