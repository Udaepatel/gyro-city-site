import Link from 'next/link'
import Image from 'next/image'

export function SharedFooter() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Image 
              src="/gyro-city-logo-black.jpg" 
              alt="Gyro City" 
              width={200} 
              height={60} 
              className="h-12 w-auto mb-4 bg-white px-2 py-1 rounded"
            />
            <p className="text-gray-400">Toronto's Authentic Greek Catering</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/menu" className="hover:text-white transition">Menu</Link></li>
              <li><Link href="/catering" className="hover:text-white transition">Catering</Link></li>
              <li><Link href="/about" className="hover:text-white transition">About</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Catering Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/catering/office" className="hover:text-white transition">Office Catering</Link></li>
              <li><Link href="/catering/corporate" className="hover:text-white transition">Corporate Events</Link></li>
              <li><Link href="/catering/events" className="hover:text-white transition">Event Catering</Link></li>
              <li><Link href="/catering/funeral" className="hover:text-white transition">Funeral Catering</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Toronto, ON</li>
              <li>Phone: <a href="tel:6475488740" className="hover:text-white transition">(647) 548-8740</a></li>
              <li>Email: <a href="mailto:info@gyrocity.ca" className="hover:text-white transition">info@gyrocity.ca</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Gyro City. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
