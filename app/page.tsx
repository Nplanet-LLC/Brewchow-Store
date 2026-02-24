import Hero from '@/components/Hero'
import CoffeeDrinks from '@/components/CoffeeDrinks'
import BrandAtmosphere from '@/components/BrandAtmosphere'
import Testimonials from '@/components/Testimonials'
import LocationPreview from '@/components/LocationPreview'

export default function Home() {
  return (
    <main>
      <Hero />
      <CoffeeDrinks />
      <BrandAtmosphere />
      <Testimonials />
      <LocationPreview />
    </main>
  )
}
