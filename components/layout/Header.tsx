'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ThemeToggle } from '@/components/ThemeToggle'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#servicios', label: 'Servicios' },
    { href: '#disenos', label: 'Diseños' },
    { href: '#escuela', label: 'Escuela' },
    { href: '#partners', label: 'Partners' },
    { href: '#contacto', label: 'Contacto' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-pickletrack-black/90 light:bg-white/90 backdrop-blur-md border-b border-white/10 light:border-black/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="relative z-10 flex items-center gap-3 group">
            <div className="relative w-48 h-36 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/brand/pickletrack.png"
                alt="PickleTrack"
                fill
                className="object-contain object-left invert-on-light"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative font-body text-sm uppercase tracking-widest text-white/70 light:text-black/70 hover:text-pickletrack-lime light:hover:text-pickletrack-gold transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pickletrack-lime light:bg-pickletrack-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Theme Toggle + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="#contacto"
              className="relative px-6 py-2.5 font-display text-sm tracking-wider uppercase bg-pickletrack-lime light:bg-pickletrack-gold text-pickletrack-black hover:glow-lime light:hover:glow-gold transition-all duration-300 hover:scale-105"
              style={{
                clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)',
              }}
            >
              Quiero Pistas
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative z-10 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Menu"
          >
            <span
              className={`w-6 h-0.5 bg-white light:bg-black transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white light:bg-black transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white light:bg-black transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-pickletrack-black/98 light:bg-white/98 backdrop-blur-lg transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <ThemeToggle />
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-display text-4xl uppercase tracking-wider text-white light:text-black hover:text-pickletrack-lime light:hover:text-pickletrack-gold transition-colors"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contacto"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-8 px-8 py-4 font-display text-xl tracking-wider uppercase bg-pickletrack-lime light:bg-pickletrack-gold text-pickletrack-black"
          >
            Quiero Pistas
          </Link>
        </div>
      </div>
    </header>
  )
}
