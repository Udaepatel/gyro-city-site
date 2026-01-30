import Link from 'next/link'
import Image from 'next/image'

export function SharedFooter() {
  return (
    <footer className="bg-gyro-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Image 
              src="/gyro-city-logo-white.jpg" 
              alt="Gyro City" 
              width={150} 
              height={45} 
              className="h-10 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm">Toronto's Authentic Greek Catering</p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4 font-playfair">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/menu" className="hover:text-gyro-gold transition">Menu</Link></li>
              <li><Link href="/about" className="hover:text-gyro-gold transition">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-gyro-gold transition">Contact</Link></li>
              <li><Link href="/quote" className="hover:text-gyro-gold transition">Get Quote</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4 font-playfair">Catering Services</h3>
            <ul className="space-y-2">
              <li><Link href="/catering/office" className="hover:text-gyro-gold transition">Office Catering</Link></li>
              <li><Link href="/catering/corporate" className="hover:text-gyro-gold transition">Corporate Events</Link></li>
              <li><Link href="/catering/events" className="hover:text-gyro-gold transition">Event Catering</Link></li>
              <li><Link href="/catering/funeral" className="hover:text-gyro-gold transition">Funeral Catering</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4 font-playfair">Contact</h3>
            <ul className="space-y-2">
              <li>Phone: <a href="tel:6475488740" className="hover:text-gyro-gold transition">(647) 548-8740</a></li>
              <li>Email: <a href="mailto:info@gyrocity.ca" className="hover:text-gyro-gold transition">info@gyrocity.ca</a></li>
              <li>Downtown Toronto, ON</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4 font-playfair">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="hover:text-gyro-gold transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-gyro-gold transition">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Gyro City. All rights reserved. Toronto Greek Catering.</p>
        </div>
      </div>
    </footer>
  )
}
