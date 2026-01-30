'use client'

import Link from 'next/link'
import Image from 'next/image'
import { GyroButton } from '@/components/ui/gyro-button'
import { usePathname } from 'next/navigation'

export function SharedNav() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <>
      {/* Moving Text Marquee */}
      <div className="bg-white text-black py-3 overflow-hidden border-b border-gray-200">
        <div className="whitespace-nowrap animate-marquee-slow text-lg font-medium">
          Office Catering • Same Day Catering • Lunch Box Catering • Buffet Style Trays • Sandwich Platter
          &nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;
          Office Catering • Same Day Catering • Lunch Box Catering • Buffet Style Trays • Sandwich Platter
          &nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;
          Office Catering • Same Day Catering • Lunch Box Catering • Buffet Style Trays • Sandwich Platter
        </div>
      </div>

      <nav className="sticky top-0 z-50 bg-[#0066FF] backdrop-blur-lg text-white shadow-lg">
      <div className="container mx-auto px-4 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Image 
            src="/gyro-city-logo-black.jpg" 
            alt="Gyro City - Authentic Greek Catering" 
            width={300} 
            height={90} 
            className="h-14 w-auto group-hover:opacity-90 transition-opacity bg-white px-3 py-1 rounded" 
            priority
          />
        </Link>
        
        <div className="hidden md:flex gap-10 items-center text-white">
          <Link 
            href="/" 
            className={`hover:text-white/80 transition-colors duration-200 font-medium ${
              isActive('/') ? 'underline underline-offset-4' : 'text-white'
            }`}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className={`hover:text-white/80 transition-colors duration-200 font-medium ${
              isActive('/about') ? 'underline underline-offset-4' : 'text-white'
            }`}
          >
            About Us
          </Link>
          <Link 
            href="/catering/corporate" 
            className={`hover:text-white/80 transition-colors duration-200 font-medium ${
              pathname?.includes('/catering') ? 'underline underline-offset-4' : 'text-white'
            }`}
          >
            Corporate Catering
          </Link>
          <Link 
            href="/menu" 
            className={`hover:text-white/80 transition-colors duration-200 font-medium ${
              isActive('/menu') ? 'underline underline-offset-4' : 'text-white'
            }`}
          >
            Our Menu
          </Link>
          <Link 
            href="/catering/office" 
            className={`hover:text-white/80 transition-colors duration-200 font-medium ${
              isActive('/catering/office') ? 'underline underline-offset-4' : 'text-white'
            }`}
          >
            Office Catering
          </Link>
          <Link 
            href="/quote" 
            className="bg-white text-[#0066FF] px-6 py-2.5 rounded-lg text-base font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </nav>
    </>
  )
}
