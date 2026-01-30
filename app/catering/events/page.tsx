import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Event Catering Toronto | Greek Food for Parties & Celebrations | Gyro City',
  description: 'Event catering in Toronto with authentic Greek cuisine. Perfect for weddings, birthdays, anniversaries, and special celebrations. Custom menus available.',
}

export default function EventCateringPage() {
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
          <h1 className="text-5xl font-bold mb-6">Event Catering Toronto</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Make your celebration unforgettable with authentic Greek catering. From intimate gatherings to grand celebrations, we bring the flavors of Greece to your special day.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-lg text-gray-700 mb-12">
            Whether you're celebrating a milestone birthday, hosting a family reunion, or planning a community event, <strong className="text-[#1E3A8A]">Gyro City</strong> delivers authentic Greek catering that makes your event special. Our fresh Mediterranean cuisine, professional service, and flexible packages ensure your guests remember your celebration for all the right reasons.
          </p>

          <h2 className="text-3xl font-bold text-[#1E3A8A] mb-8 text-center">Events We Cater</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: '🎂', title: 'Birthday Parties', desc: 'Milestone birthdays and celebrations' },
              { icon: '💒', title: 'Weddings', desc: 'Rehearsal dinners and receptions' },
              { icon: '🎉', title: 'Anniversaries', desc: 'Romantic dinners and family gatherings' },
              { icon: '🎓', title: 'Graduations', desc: 'Academic achievements and success' },
              { icon: '👶', title: 'Baby Showers', desc: 'Welcoming new arrivals' },
              { icon: '🏠', title: 'Housewarming', desc: 'New home celebrations' },
              { icon: '⛪', title: 'Religious Events', desc: 'Baptisms, confirmations, bar/bat mitzvahs' },
              { icon: '🎊', title: 'Holiday Parties', desc: 'Seasonal celebrations year-round' },
              { icon: '👥', title: 'Reunions', desc: 'Family and friend gatherings' }
            ].map((event, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">{event.icon}</div>
                <h3 className="font-bold text-[#1E3A8A] mb-2">{event.title}</h3>
                <p className="text-sm text-gray-700">{event.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-[#1E3A8A] mb-6">Event Catering Packages</h2>
          
          <div className="space-y-6 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-bold text-[#1E3A8A]">Intimate Gathering</h3>
                <span className="text-2xl font-bold text-[#B8860B]">$18.99/person</span>
              </div>
              <p className="text-gray-700 mb-3">10-25 guests. Perfect for small celebrations and family events.</p>
              <ul className="text-gray-700 space-y-1">
                <li>✓ Choice of 2 proteins</li>
                <li>✓ Greek salad & rice pilaf</li>
                <li>✓ Fresh pita & tzatziki</li>
                <li>✓ Disposable serving ware included</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border-2 border-[#B8860B]">
              <div className="bg-[#B8860B] text-white px-3 py-1 rounded-full text-xs font-semibold inline-block mb-3">
                POPULAR
              </div>
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-bold text-[#1E3A8A]">Celebration Feast</h3>
                <span className="text-2xl font-bold text-[#B8860B]">$21.99/person</span>
              </div>
              <p className="text-gray-700 mb-3">25-75 guests. Our most popular event package.</p>
              <ul className="text-gray-700 space-y-1">
                <li>✓ 3 protein options (gyro, chicken, vegetarian)</li>
                <li>✓ Mezze appetizer platter</li>
                <li>✓ Greek salad & roasted vegetables</li>
                <li>✓ Rice pilaf & roasted potatoes</li>
                <li>✓ Pita, tzatziki & hummus</li>
                <li>✓ Dessert (baklava or cookies)</li>
                <li>✓ Full setup & serving utensils</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-bold text-[#1E3A8A]">Grand Celebration</h3>
                <span className="text-2xl font-bold text-[#B8860B]">$24.99/person</span>
              </div>
              <p className="text-gray-700 mb-3">75+ guests. Premium catering for large events.</p>
              <ul className="text-gray-700 space-y-1">
                <li>✓ Full mixed grill (gyro, chicken, lamb souvlaki)</li>
                <li>✓ Premium appetizer selection</li>
                <li>✓ Greek salad, roasted vegetables, grilled peppers</li>
                <li>✓ Multiple side options</li>
                <li>✓ Artisan pita & premium sauces</li>
                <li>✓ Dessert trio</li>
                <li>✓ Beverages included</li>
                <li>✓ Professional setup & breakdown</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#1E3A8A] text-white p-8 rounded-lg mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Gyro City for Your Event?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Authentic Greek Flavors', desc: 'Traditional recipes that wow your guests' },
                { title: 'Fresh, Never Frozen', desc: 'Made fresh the day of your event' },
                { title: 'Dietary Options', desc: 'Halal, vegetarian, vegan, gluten-free available' },
                { title: 'Professional Service', desc: 'On-time delivery and polished presentation' },
                { title: 'Flexible Portions', desc: 'Scale up or down based on your guest count' },
                { title: 'Stress-Free Planning', desc: 'We handle the food so you can enjoy your event' }
              ].map((item, i) => (
                <div key={i}>
                  <h3 className="font-bold text-lg mb-1 text-[#B8860B]">{item.title}</h3>
                  <p className="text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-3xl font-bold text-[#1E3A8A] mb-6">Add-Ons & Extras</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {[
              { name: 'Spanakopita Tray', price: '$24.99', desc: 'Spinach & feta phyllo pastries (6 pieces)' },
              { name: 'Baklava Dessert Tray', price: '$29.99', desc: 'Traditional honey-walnut dessert (12 pieces)' },
              { name: 'Greek Roasted Potatoes', price: '$3.99/person', desc: 'Lemon-oregano roasted potatoes' },
              { name: 'Extra Pita Bread', price: '$12.99/dozen', desc: 'Fresh, warm pita bread' },
              { name: 'Premium Beverage Service', price: '$2.99/person', desc: 'Lemonade, iced tea, water' },
              { name: 'Chafing Dishes (Rental)', price: '$25/each', desc: 'Keep food hot for buffet service' }
            ].map((addon, i) => (
              <div key={i} className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-[#1E3A8A]">{addon.name}</h3>
                  <span className="font-bold text-[#B8860B]">{addon.price}</span>
                </div>
                <p className="text-sm text-gray-700">{addon.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#B8860B] text-white p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-3">Custom Event Planning</h3>
            <p className="mb-4">Have specific requirements? We create custom menus tailored to your event theme, dietary needs, and budget. Contact us to discuss your vision.</p>
            <ul className="space-y-1">
              <li>✓ Personalized menu design</li>
              <li>✓ Theme-specific presentation</li>
              <li>✓ Dietary accommodation planning</li>
              <li>✓ Budget-conscious options</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#1E3A8A] mb-6">Ready to Plan Your Event?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Get a free, custom quote for your celebration. We respond within 24 hours.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/quote" className="bg-[#B8860B] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#9A7209] transition">
              Get Free Quote
            </Link>
            <a href="tel:6475488740" className="bg-[#1E3A8A] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#2563EB] transition">
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
