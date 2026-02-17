'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [alertVisible, setAlertVisible] = useState(true)

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {alertVisible && (
        <div className="bg-[#2D5F4C] text-white py-3 px-4 flex items-center justify-between">
          <p className="text-sm text-center flex-1">
            Buy one coffee, get one free — this week only (April 14–20)
          </p>
          <button 
            onClick={() => setAlertVisible(false)}
            className="ml-4 hover:opacity-70"
          >
            <Image src="/icons/close.svg" alt="Close" width={20} height={20} />
          </button>
        </div>
      )}
      
      <nav className="bg-[#F5EFE6] border-b border-[#2D5F4C]/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="hidden md:flex gap-8">
              <Link href="/menu" className="hover:text-[#2D5F4C] transition">Menu</Link>
              <Link href="/locations" className="hover:text-[#2D5F4C] transition">Locations</Link>
            </div>
            
            <Link href="/" className="flex items-center gap-2">
              <Image src="/images/logo.svg" alt="Brewhaus" width={40} height={40} />
              <Image src="/images/logo.svg" alt="Brewhaus" width={40} height={40} />
            </Link>
            
            <div className="hidden md:flex gap-8">
              <Link href="/about-us" className="hover:text-[#2D5F4C] transition">About Us</Link>
              <Link href="/news" className="hover:text-[#2D5F4C] transition">News</Link>
            </div>
            
            <button className="md:hidden">
              <div className="w-6 h-0.5 bg-black mb-1"></div>
              <div className="w-6 h-0.5 bg-black mb-1"></div>
              <div className="w-6 h-0.5 bg-black"></div>
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}
