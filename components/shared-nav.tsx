'use client'

import Link from 'next/link'
import Image from 'next/image'
import { GyroButton } from '@/components/ui/gyro-button'
import { usePathname } from 'next/navigation'

export function SharedNav() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <nav className="sticky top-0 z-50 bg-gyro-navy/95 backdrop-blur-lg text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Image 
            src="/gyro-city-logo.png" 
            alt="Gyro City" 
            width={50} 
            height={50} 
            className="rounded-full group-hover:scale-110 transition-transform" 
          />
          <span className="text-2xl font-bold font-playfair">GYRO CITY</span>
        </Link>
        
        <div className="hidden md:flex gap-8 items-center">
          <Link 
            href="/menu" 
            className={`hover:text-gyro-gold transition-colors duration-200 font-semibold ${
              isActive('/menu') ? 'text-gyro-gold' : ''
            }`}
          >
            Menu
          </Link>
          <Link 
            href="/catering" 
            className={`hover:text-gyro-gold transition-colors duration-200 font-semibold ${
              isActive('/catering') || pathname?.startsWith('/catering/') ? 'text-gyro-gold' : ''
            }`}
          >
            Catering
          </Link>
          <Link 
            href="/about" 
            className={`hover:text-gyro-gold transition-colors duration-200 font-semibold ${
              isActive('/about') ? 'text-gyro-gold' : ''
            }`}
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className={`hover:text-gyro-gold transition-colors duration-200 font-semibold ${
              isActive('/contact') ? 'text-gyro-gold' : ''
            }`}
          >
            Contact
          </Link>
          <GyroButton href="/quote" variant="primary" className="px-6 py-2 text-base">
            Get Quote
          </GyroButton>
        </div>
      </div>
    </nav>
  )
}
