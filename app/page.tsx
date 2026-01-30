import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#1E3A8A] text-white shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/gyro-city-logo.png" alt="Gyro City" width={50} height={50} className="rounded-full" />
            <span className="text-2xl font-bold">GYRO CITY</span>
          </Link>
          <div className="hidden md:flex gap-6">
            <Link href="/menu" className="hover:text-[#B8860B] transition">Menu</Link>
            <Link href="/catering" className="hover:text-[#B8860B] transition">Catering</Link>
            <Link href="/about" className="hover:text-[#B8860B] transition">About</Link>
            <Link href="/contact" className="hover:text-[#B8860B] transition">Contact</Link>
          </div>
          <Link href="/quote" className="bg-[#B8860B] text-white px-6 py-2 rounded-lg hover:bg-[#9A7209] transition font-semibold">
            Get Quote
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Downtown Toronto Greek Catering:<br />
            Authentic Mediterranean Food DELIVERED TO YOU
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">
            Fresh gyros, souvlaki, and Greek specialties crafted daily for your office, corporate event, or celebration
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/menu" className="bg-[#B8860B] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#9A7209] transition">
              VIEW MENU
            </Link>
            <Link href="/quote" className="bg-white text-[#1E3A8A] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition">
              GET FREE QUOTE
            </Link>
            <Link href="/order" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#1E3A8A] transition">
              ORDER ONLINE
            </Link>
          </div>
        </div>
      </section>

      {/* Marquee Section 1 */}
      <div className="bg-[#B8860B] text-white py-4 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap text-xl font-semibold">
          AUTHENTIC GREEK CATERING • DOWNTOWN TORONTO • FRESH NEVER FROZEN • HALAL & VEGETARIAN OPTIONS AVAILABLE
          &nbsp;&nbsp;&nbsp;&nbsp;
          AUTHENTIC GREEK CATERING • DOWNTOWN TORONTO • FRESH NEVER FROZEN • HALAL & VEGETARIAN OPTIONS AVAILABLE
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#1E3A8A] mb-6">
                AUTHENTIC GREEK CATERING IN THE HEART OF TORONTO
              </h2>
              <div className="space-y-4 text-gray-700 text-lg">
                <p>
                  At <strong>Gyro City</strong>, we bring the vibrant flavors of Greece straight to your downtown Toronto office, event, or celebration. Our authentic Greek catering features hand-crafted gyros, perfectly seasoned souvlaki, fresh Mediterranean salads, and traditional appetizers made with premium ingredients and time-honored recipes.
                </p>
                <p>
                  Based in downtown Toronto, we specialize in delivering exceptional catering experiences for businesses, corporate events, office lunches, parties, and gatherings of all sizes. Whether you're feeding 10 colleagues or 200 guests, our flexible catering packages and fresh, never frozen meals ensure your event is memorable.
                </p>
                <Link href="/about" className="inline-block text-[#B8860B] font-semibold hover:text-[#9A7209] transition">
                  Learn More About Us →
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                [Gyro City Photo]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Party Packages Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#1E3A8A] text-center mb-12">
            Greek Food Catering Prices & Packages
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Individual Lunch Boxes */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-[#1E3A8A] mb-4">Individual Lunch Boxes</h3>
              <p className="text-3xl font-bold text-[#B8860B] mb-4">Starting at $15.99/person</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• Classic Gyro Box</li>
                <li>• Chicken Souvlaki Box</li>
                <li>• Vegetarian Mediterranean Box</li>
                <li className="text-sm italic">Includes: Main, Greek salad, rice, pita, tzatziki</li>
              </ul>
              <Link href="/menu" className="block text-center bg-[#1E3A8A] text-white px-6 py-3 rounded-lg hover:bg-[#2563EB] transition font-semibold">
                Order Individual Boxes →
              </Link>
            </div>

            {/* Party Platters */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition border-4 border-[#B8860B]">
              <div className="bg-[#B8860B] text-white px-4 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                POPULAR
              </div>
              <h3 className="text-2xl font-bold text-[#1E3A8A] mb-4">Party Platters</h3>
              <p className="text-3xl font-bold text-[#B8860B] mb-4">Starting at $89.99</p>
              <p className="text-sm text-gray-600 mb-4">(Serves 6-8)</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• Mixed Gyro Platter</li>
                <li>• Souvlaki Skewer Platter</li>
                <li>• Mezze Appetizer Platter</li>
                <li>• Signature Greek Salad Platter</li>
              </ul>
              <Link href="/menu" className="block text-center bg-[#B8860B] text-white px-6 py-3 rounded-lg hover:bg-[#9A7209] transition font-semibold">
                View Full Catering Menu →
              </Link>
            </div>

            {/* Group Catering */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-[#1E3A8A] mb-4">Group Catering Packages</h3>
              <p className="text-3xl font-bold text-[#B8860B] mb-4">Starting at $18.99/person</p>
              <p className="text-sm text-gray-600 mb-4">(Min. 15 people)</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• Build-Your-Own Gyro Station</li>
                <li>• Mediterranean Feast Package</li>
                <li>• Corporate Lunch Package</li>
                <li>• Premium Celebration Package</li>
                <li className="text-sm italic">Includes: Proteins, sides, salads, pita, sauces, desserts</li>
              </ul>
              <Link href="/quote" className="block text-center bg-[#1E3A8A] text-white px-6 py-3 rounded-lg hover:bg-[#2563EB] transition font-semibold">
                Get Custom Quote →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Section 2 */}
      <div className="bg-[#1E3A8A] text-white py-4 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap text-xl font-semibold">
          OFFICE CATERING • CORPORATE EVENTS • PARTIES • WEDDINGS • FUNERAL RECEPTIONS
          &nbsp;&nbsp;&nbsp;&nbsp;
          OFFICE CATERING • CORPORATE EVENTS • PARTIES • WEDDINGS • FUNERAL RECEPTIONS
        </div>
      </div>

      {/* Why Choose Gyro City */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#1E3A8A] text-center mb-12">
            Why Downtown Toronto Businesses Trust Gyro City Catering
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🥙', title: 'Authentic Greek Recipes', desc: 'Traditional family recipes passed down generations, using premium spices and fresh ingredients for genuine Mediterranean flavors.' },
              { icon: '🚚', title: 'Reliable Downtown Delivery', desc: 'Timely, professional delivery throughout downtown Toronto and surrounding areas. We respect your schedule.' },
              { icon: '🌱', title: 'Dietary Accommodations', desc: 'Halal, vegetarian, vegan, and gluten-free options available. We cater to all dietary needs and preferences.' },
              { icon: '💼', title: 'Corporate Catering Experts', desc: 'Trusted by Toronto\'s top businesses for office lunches, meetings, conferences, and corporate events.' },
              { icon: '❄️', title: 'Fresh, Never Frozen', desc: 'All meals prepared fresh daily in our downtown Toronto kitchen. No frozen ingredients, no shortcuts.' },
              { icon: '🎉', title: 'Event Specialists', desc: 'From intimate gatherings to large celebrations, we handle every detail with care and professionalism.' }
            ].map((feature, i) => (
              <div key={i} className="text-center p-6">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-[#1E3A8A] mb-3">{feature.title}</h3>
                <p className="text-gray-700">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Experience Authentic Greek Catering?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let us bring the flavors of Greece to your next event. Get a free, no-obligation quote today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/quote" className="bg-[#B8860B] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#9A7209] transition">
              Get Free Quote
            </Link>
            <Link href="tel:6475488740" className="bg-white text-[#1E3A8A] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition">
              Call (647) 548-8740
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1E3A8A] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Image src="/gyro-city-logo.png" alt="Gyro City" width={80} height={80} className="mb-4 rounded-full" />
              <p className="text-gray-300">
                Authentic Greek Catering<br />
                Downtown Toronto
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/menu" className="text-gray-300 hover:text-[#B8860B]">Our Menu</Link></li>
                <li><Link href="/catering" className="text-gray-300 hover:text-[#B8860B]">Catering Services</Link></li>
                <li><Link href="/about" className="text-gray-300 hover:text-[#B8860B]">About Us</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-[#B8860B]">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Catering Options</h4>
              <ul className="space-y-2">
                <li><Link href="/catering/office" className="text-gray-300 hover:text-[#B8860B]">Office Catering</Link></li>
                <li><Link href="/catering/corporate" className="text-gray-300 hover:text-[#B8860B]">Corporate Events</Link></li>
                <li><Link href="/catering/events" className="text-gray-300 hover:text-[#B8860B]">Event Catering</Link></li>
                <li><Link href="/catering/funeral" className="text-gray-300 hover:text-[#B8860B]">Funeral Catering</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Contact Us</h4>
              <ul className="space-y-2 text-gray-300">
                <li>📞 (647) 548-8740</li>
                <li>📧 info@gyrocity.ca</li>
                <li>📍 Downtown Toronto, ON</li>
                <li className="pt-4">
                  <Link href="/quote" className="bg-[#B8860B] text-white px-6 py-2 rounded-lg inline-block hover:bg-[#9A7209] transition">
                    Get Quote
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-600 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Gyro City. All rights reserved. | <Link href="/privacy" className="hover:text-[#B8860B]">Privacy Policy</Link> | <Link href="/terms" className="hover:text-[#B8860B]">Terms of Service</Link></p>
          </div>
        </div>
      </footer>
    </main>
  )
}
