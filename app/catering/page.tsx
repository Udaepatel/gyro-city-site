import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Catering Services | Gyro City Toronto',
  description: 'Authentic Greek catering services in Toronto. Office catering, corporate events, parties, and more. Fresh Mediterranean food delivered.',
}

export default function CateringPage() {
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
          <h1 className="text-5xl font-bold mb-6">Greek Catering Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Authentic Mediterranean catering for every occasion. Fresh, delicious, and professionally delivered throughout Toronto.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Link href="/catering/office" className="group bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition border-2 border-transparent hover:border-[#B8860B]">
              <div className="text-5xl mb-4">💼</div>
              <h2 className="text-3xl font-bold text-[#1E3A8A] mb-4 group-hover:text-[#B8860B] transition">Office Catering</h2>
              <p className="text-gray-700 mb-4">
                Fresh Greek food delivered to your downtown Toronto office. Perfect for team lunches, meetings, and workplace events.
              </p>
              <div className="text-[#B8860B] font-semibold">
                Learn More →
              </div>
            </Link>

            <Link href="/catering/corporate" className="group bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition border-2 border-transparent hover:border-[#B8860B]">
              <div className="text-5xl mb-4">🏢</div>
              <h2 className="text-3xl font-bold text-[#1E3A8A] mb-4 group-hover:text-[#B8860B] transition">Corporate Catering</h2>
              <p className="text-gray-700 mb-4">
                Premium catering for business events, conferences, and executive meetings. Impress clients with authentic Greek cuisine.
              </p>
              <div className="text-[#B8860B] font-semibold">
                Learn More →
              </div>
            </Link>

            <Link href="/catering/events" className="group bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition border-2 border-transparent hover:border-[#B8860B]">
              <div className="text-5xl mb-4">🎉</div>
              <h2 className="text-3xl font-bold text-[#1E3A8A] mb-4 group-hover:text-[#B8860B] transition">Event Catering</h2>
              <p className="text-gray-700 mb-4">
                Weddings, birthdays, anniversaries, and celebrations. Make your special day unforgettable with Mediterranean flavors.
              </p>
              <div className="text-[#B8860B] font-semibold">
                Learn More →
              </div>
            </Link>

            <Link href="/catering/funeral" className="group bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition border-2 border-transparent hover:border-[#B8860B]">
              <div className="text-5xl mb-4">🕊️</div>
              <h2 className="text-3xl font-bold text-[#1E3A8A] mb-4 group-hover:text-[#B8860B] transition">Funeral Catering</h2>
              <p className="text-gray-700 mb-4">
                Compassionate catering for memorial receptions. Respectful service and comforting food during difficult times.
              </p>
              <div className="text-[#B8860B] font-semibold">
                Learn More →
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#1E3A8A] text-center mb-12">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🥙', title: 'Authentic Greek Food', desc: 'Traditional recipes, fresh ingredients, never frozen' },
              { icon: '🚚', title: 'Reliable Delivery', desc: 'On-time service throughout downtown Toronto and GTA' },
              { icon: '🌱', title: 'Dietary Options', desc: 'Halal, vegetarian, vegan, and gluten-free available' },
              { icon: '💰', title: 'Flexible Pricing', desc: 'Packages for 10-500+ guests, all budgets' },
              { icon: '👨‍🍳', title: 'Professional Service', desc: 'Setup, breakdown, and full catering support' },
              { icon: '✓', title: '100% Satisfaction', desc: 'We guarantee quality or we make it right' }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-[#1E3A8A] text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1E3A8A] text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Order?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a free quote for your next event. We respond within 24 hours.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/quote" className="bg-[#B8860B] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#9A7209] transition">
              Get Free Quote
            </Link>
            <Link href="/menu" className="bg-white text-[#1E3A8A] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition">
              View Menu
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
