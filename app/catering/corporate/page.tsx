import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Corporate Catering Toronto | Greek Food for Business Events | Gyro City',
  description: 'Premium corporate catering in Toronto with authentic Greek cuisine. Impress clients and employees with professional service and delicious Mediterranean food.',
}

export default function CorporateCateringPage() {
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
          <h1 className="text-5xl font-bold mb-6">Corporate Catering Toronto</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Elevate your business events with premium Greek catering. Professional service, authentic flavors, and impressive presentation.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-lg text-gray-700 mb-8">
            When your corporate event demands excellence, <strong className="text-[#1E3A8A]">Gyro City</strong> delivers. We specialize in high-end corporate catering for Toronto businesses, offering authentic Greek cuisine with professional service that impresses clients, motivates employees, and makes your event unforgettable.
          </p>

          <div className="bg-[#1E3A8A] text-white p-8 rounded-lg mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Corporate Events We Serve</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Executive Meetings', desc: 'Impress board members and stakeholders with premium catering' },
                { title: 'Client Presentations', desc: 'Professional setup that enhances your business pitch' },
                { title: 'Conferences & Seminars', desc: 'Large-scale catering for 50-500+ attendees' },
                { title: 'Product Launches', desc: 'Memorable food experiences for your big reveal' },
                { title: 'Team Building Events', desc: 'Casual yet impressive catering for company outings' },
                { title: 'Corporate Celebrations', desc: 'Company milestones, anniversaries, and achievements' },
                { title: 'Trade Shows & Expos', desc: 'Booth catering and attendee meal services' },
                { title: 'Training Sessions', desc: 'Fuel productivity with fresh, energizing meals' }
              ].map((item, i) => (
                <div key={i}>
                  <h3 className="font-bold text-lg mb-1 text-[#B8860B]">{item.title}</h3>
                  <p className="text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-3xl font-bold text-[#1E3A8A] mb-6">Premium Corporate Packages</h2>
          
          <div className="space-y-6 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-bold text-[#1E3A8A]">Executive Lunch Package</h3>
                <span className="text-2xl font-bold text-[#B8860B]">$21.99/person</span>
              </div>
              <p className="text-gray-700 mb-3">Minimum 20 people. Perfect for board meetings and client lunches.</p>
              <ul className="text-gray-700 space-y-1">
                <li>✓ Choice of 2 premium proteins (gyro, chicken souvlaki, lamb)</li>
                <li>✓ Greek salad with imported feta</li>
                <li>✓ Lemon herb rice pilaf</li>
                <li>✓ Fresh pita bread & house-made tzatziki</li>
                <li>✓ Premium dessert (baklava or cookies)</li>
                <li>✓ Professional setup & serving utensils</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border-2 border-[#B8860B]">
              <div className="bg-[#B8860B] text-white px-3 py-1 rounded-full text-xs font-semibold inline-block mb-3">
                MOST POPULAR
              </div>
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-bold text-[#1E3A8A]">Mediterranean Feast Package</h3>
                <span className="text-2xl font-bold text-[#B8860B]">$24.99/person</span>
              </div>
              <p className="text-gray-700 mb-3">Minimum 25 people. Our signature corporate catering experience.</p>
              <ul className="text-gray-700 space-y-1">
                <li>✓ 3 protein options (gyro, chicken, vegetarian)</li>
                <li>✓ Mezze appetizer platter (hummus, dolmades, falafel)</li>
                <li>✓ Greek salad & roasted vegetables</li>
                <li>✓ Rice pilaf & roasted potatoes</li>
                <li>✓ Fresh pita, tzatziki & tahini</li>
                <li>✓ Baklava dessert tray</li>
                <li>✓ Disposable plates, napkins, utensils</li>
                <li>✓ Professional delivery & setup</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-bold text-[#1E3A8A]">VIP Celebration Package</h3>
                <span className="text-2xl font-bold text-[#B8860B]">$29.99/person</span>
              </div>
              <p className="text-gray-700 mb-3">Minimum 30 people. Premium service for milestone events.</p>
              <ul className="text-gray-700 space-y-1">
                <li>✓ Full mixed grill platter (gyro, chicken, lamb souvlaki)</li>
                <li>✓ Premium appetizer selection (spanakopita, dolmades, mezze)</li>
                <li>✓ Greek salad, roasted vegetables, grilled peppers</li>
                <li>✓ Rice pilaf, roasted potatoes, lemon potatoes</li>
                <li>✓ Artisan pita bread, premium sauces</li>
                <li>✓ Dessert trio (baklava, cookies, fruit)</li>
                <li>✓ Beverages (lemonade, iced tea)</li>
                <li>✓ Premium disposable dinnerware</li>
                <li>✓ On-site setup & breakdown service</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h2 className="text-3xl font-bold text-[#1E3A8A] mb-6 text-center">Why Toronto Businesses Choose Gyro City</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: '🎯', title: 'Professionalism', desc: 'Timely delivery, polished presentation, reliable service' },
                { icon: '🌟', title: 'Quality', desc: 'Fresh ingredients, authentic recipes, never frozen' },
                { icon: '🤝', title: 'Flexibility', desc: 'Custom menus, dietary accommodations, scalable portions' },
                { icon: '💼', title: 'Experience', desc: 'Trusted by top Toronto corporations and organizations' },
                { icon: '📞', title: 'Support', desc: 'Dedicated account manager for recurring orders' },
                { icon: '💯', title: 'Guarantee', desc: '100% satisfaction or we make it right' }
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl mb-2">{item.icon}</div>
                  <h3 className="font-bold text-[#1E3A8A] mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#B8860B] text-white p-6 rounded-lg mb-12">
            <h3 className="text-2xl font-bold mb-3">Recurring Corporate Catering</h3>
            <p className="mb-4">Save time and money with weekly or monthly corporate catering plans. Contact us for volume discounts and priority scheduling.</p>
            <ul className="space-y-1">
              <li>✓ Dedicated account manager</li>
              <li>✓ Priority delivery windows</li>
              <li>✓ Volume discounts (10-20% off)</li>
              <li>✓ Flexible invoicing & payment terms</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#1E3A8A] text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Elevate Your Next Corporate Event</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a custom quote tailored to your business needs. We respond within 24 hours.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/quote" className="bg-[#B8860B] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#9A7209] transition">
              Request Corporate Quote
            </Link>
            <a href="tel:6475488740" className="bg-white text-[#1E3A8A] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition">
              Call (647) 548-8740
            </a>
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
