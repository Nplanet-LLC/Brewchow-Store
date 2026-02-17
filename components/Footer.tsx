import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#2D5F4C] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-heading mb-4">☕ Brewhaus</h3>
            <p className="text-sm">Great coffee, cozy vibes, friendly service.</p>
          </div>
          
          <div>
            <h4 className="font-heading mb-4">Menu</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/menu" className="hover:text-[#F5EFE6]">Coffee</Link></li>
              <li><Link href="/menu" className="hover:text-[#F5EFE6]">Cold Drinks</Link></li>
              <li><Link href="/menu" className="hover:text-[#F5EFE6]">Bakery</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about-us" className="hover:text-[#F5EFE6]">About Us</Link></li>
              <li><Link href="/locations" className="hover:text-[#F5EFE6]">Locations</Link></li>
              <li><Link href="/news" className="hover:text-[#F5EFE6]">News</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>+1 (212) 555-0198</li>
              <li>hello@bhaus.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center text-sm">
          <p>&copy; 2025 Brewhaus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
