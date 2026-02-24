'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/menu', label: 'Menu' },
    { href: '/about', label: 'À propos' },
    { href: '/contact', label: 'Contact' },
    { href: '/events', label: 'Nos événements' }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md animate-slideDown">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition group">
            <div className="relative w-16 h-16 transform group-hover:scale-110 transition-transform">
              <Image 
                src="/logo-dark.png" 
                alt="Café Blou Logo" 
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#2C4A3E] hover:text-[#7A9B8E] transition font-medium relative group animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#7A9B8E] group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#2C4A3E] p-2 hover:bg-[#F5F1E8] rounded-lg transition"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-slideDown">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 text-[#2C4A3E] hover:text-[#7A9B8E] hover:bg-[#F5F1E8] px-4 rounded-lg transition font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
