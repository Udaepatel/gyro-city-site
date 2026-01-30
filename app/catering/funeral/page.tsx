import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Funeral Catering Toronto | Compassionate Greek Food Service | Gyro City',
  description: 'Compassionate funeral catering in Toronto with authentic Greek cuisine. Respectful service, comforting food, and flexible arrangements for memorial receptions.',
}

export default function FuneralCateringPage() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 bg-[#1E3A8A] text-white shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/gyro-city-logo.png" alt="Gyro City" width={50} height={50} className="rounded-full" />
            <span className="text-2xl font-bold">GYRO CITY</span>
          </Link>
          <div className="hidden md:flex gap-6">
            <Link href="/menu" className="hover:text-[#B8860B] transition">Menu</Link>
            <Link href="/catering" className="text-[#B8860B] font-semibold">Catering</Link>
            <Link href="/about" className="hover:text-[#B8860B] transition">About</Link>
            <Link href="/contact" className="hover:text-[#B8860B] transition">Contact</Link>
          </div>
          <Link href="/quote" className="bg-[#B8860B] text-white px-6 py-2 rounded-lg hover:bg-[#9A7209] transition font-semibold">
            Get Quote
          </Link>
        </div>
      </nav>

      <section className="bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Funeral Reception Catering</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Compassionate catering services for memorial receptions and funeral gatherings in Toronto. We handle the details so you can focus on what matters.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-lg text-gray-700 mb-12">
            During difficult times, the last thing you should worry about is food. <strong className="text-[#1E3A8A]">Gyro City</strong> provides respectful, compassionate funeral catering services throughout Toronto. Our comforting Mediterranean cuisine and attentive service allow you and your family to gather, remember, and support one another without additional stress.
          </p>

          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h2 className="text-3xl font-bold text-[#1E3A8A] mb-6 text-center">Our Commitment to You</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: '🤝', title: 'Compassionate Service', desc: 'Respectful, discreet delivery and setup during your time of need' },
                { icon: '⏰', title: 'Flexible Timing', desc: 'Last-minute and same-day arrangements available when possible' },
                { icon: '💰', title: 'Fair Pricing', desc: 'No price inflation during difficult times - honest, upfront costs' },
                { icon: '📞', title: 'Dedicated Support', desc: 'Personal point of contact for all arrangements and changes' },
                { icon: '🍽️', title: 'Comforting Food', desc: 'Familiar, satisfying Mediterranean cuisine for gathering families' },
                { icon: '✓', title: 'Worry-Free', desc: 'We handle all setup, cleanup, and coordination' }
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <div className="text-3xl">{item.icon}</div>
                  <div>
                    <h3 className="font-bold text-[#1E3A8A]">{item.title}</h3>
                    <p className="text-sm text-gray-700">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-3xl font-bold text-[#1E3A8A] mb-6">Funeral Reception Packages</h2>
          
          <div className="space-y-6 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-bold text-[#1E3A8A]">Small Gathering</h3>
                <span className="text-2xl font-bold text-[#B8860B]">$17.99/person</span>
              </div>
              <p className="text-gray-700 mb-3">15-30 guests. Intimate reception for immediate family and close friends.</p>
              <ul className="text-gray-700 space-y-1">
                <li>✓ Choice of 2 proteins (gyro, chicken, vegetarian)</li>
                <li>✓ Greek salad</li>
                <li>✓ Rice pilaf or roasted potatoes</li>
                <li>✓ Fresh pita bread & tzatziki</li>
                <li>✓ Disposable serving ware</li>
                <li>✓ Discreet delivery & setup</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border-2 border-[#B8860B]">
              <div className="bg-[#B8860B] text-white px-3 py-1 rounded-full text-xs font-semibold inline-block mb-3">
                RECOMMENDED
              </div>
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-bold text-[#1E3A8A]">Memorial Reception</h3>
                <span className="text-2xl font-bold text-[#B8860B]">$19.99/person</span>
              </div>
              <p className="text-gray-700 mb-3">30-75 guests. Complete service for traditional memorial gatherings.</p>
              <ul className="text-gray-700 space-y-1">
                <li>✓ 3 protein options (gyro, chicken souvlaki, vegetarian)</li>
                <li>✓ Greek salad & roasted vegetables</li>
                <li>✓ Rice pilaf & roasted potatoes</li>
                <li>✓ Fresh pita, tzatziki & hummus</li>
                <li>✓ Cookies or baklava</li>
                <li>✓ Complete serving ware & utensils</li>
                <li>✓ Setup, breakdown & cleanup</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-bold text-[#1E3A8A]">Large Memorial</h3>
                <span className="text-2xl font-bold text-[#B8860B]">$22.99/person</span>
              </div>
              <p className="text-gray-700 mb-3">75+ guests. Full-service catering for larger memorial receptions.</p>
              <ul className="text-gray-700 space-y-1">
                <li>✓ Full protein selection (gyro, chicken, lamb, vegetarian)</li>
                <li>✓ Mezze appetizer platters</li>
                <li>✓ Greek salad, roasted vegetables, grilled peppers</li>
                <li>✓ Multiple side options</li>
                <li>✓ Artisan pita & premium sauces</li>
                <li>✓ Dessert selection</li>
                <li>✓ Coffee & tea service available</li>
                <li>✓ Full setup, service & cleanup</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#1E3A8A] text-white p-8 rounded-lg mb-12">
            <h2 className="text-3xl font-bold mb-6">What We Provide</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-lg mb-2 text-[#B8860B]">Flexible Service Options</h3>
                <p className="text-sm">Drop-off service, setup & breakdown, or full buffet service - whatever fits your needs</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-[#B8860B]">Dietary Accommodations</h3>
                <p className="text-sm">Halal, vegetarian, vegan, and gluten-free options available for all guests</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-[#B8860B]">Last-Minute Arrangements</h3>
                <p className="text-sm">We understand timing can be uncertain - we accommodate rushorders when possible</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-[#B8860B]">Delivery Throughout GTA</h3>
                <p className="text-sm">Serving funeral homes, places of worship, community centers, and private homes</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-[#B8860B]">Professional Presentation</h3>
                <p className="text-sm">Elegant, respectful setup that honors the occasion</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <h2 className="text-3xl font-bold text-[#1E3A8A] mb-6 text-center">Frequently Served Locations</h2>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <h3 className="font-bold text-[#1E3A8A] mb-2">Funeral Homes</h3>
                <p className="text-sm text-gray-700">We work with all major funeral homes in Toronto and the GTA</p>
              </div>
              <div>
                <h3 className="font-bold text-[#1E3A8A] mb-2">Places of Worship</h3>
                <p className="text-sm text-gray-700">Churches, synagogues, mosques, temples, and community centers</p>
              </div>
              <div>
                <h3 className="font-bold text-[#1E3A8A] mb-2">Private Residences</h3>
                <p className="text-sm text-gray-700">Home receptions with complete setup and cleanup service</p>
              </div>
            </div>
          </div>

          <div className="bg-[#B8860B] text-white p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-3">How to Order</h3>
            <p className="mb-4">We make arrangements as simple as possible during this difficult time:</p>
            <ol className="space-y-2">
              <li><strong>1. Call us:</strong> (647) 548-8740 - speak directly with our team</li>
              <li><strong>2. Share your needs:</strong> Guest count, location, timing, and any special requirements</li>
              <li><strong>3. We handle everything:</strong> Menu, delivery, setup, and cleanup - all taken care of</li>
            </ol>
            <p className="mt-4 text-sm italic">We're available 7 days a week and can accommodate most requests with 24-48 hours notice. Same-day service may be available - please call to inquire.</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-center border-t border-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1E3A8A] mb-6">We're Here to Help</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Let us handle the food so you can focus on honoring your loved one and supporting your family.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:6475488740" className="bg-[#B8860B] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#9A7209] transition">
              Call (647) 548-8740
            </a>
            <Link href="/quote" className="bg-[#1E3A8A] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#2563EB] transition">
              Request Quote
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-[#1E3A8A] text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2026 Gyro City. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
