import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Office Catering Toronto | Greek Food Delivery | Gyro City',
  description: 'Office catering in Toronto with authentic Greek food. Perfect for team lunches, meetings, and corporate events. Free delivery on orders $200+.',
}

export default function OfficeCateringPage() {
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
          <h1 className="text-5xl font-bold mb-6">Office Catering Toronto</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Authentic Greek food delivered fresh to your downtown Toronto office. Perfect for team lunches, meetings, and workplace events.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8 text-lg text-gray-700">
            <p>
              Looking for <strong className="text-[#1E3A8A]">office catering in Toronto</strong>? Gyro City specializes in delivering fresh, delicious Greek food to offices throughout downtown Toronto and the GTA. Whether you're feeding 10 team members or 100+ employees, our authentic Mediterranean catering brings energy and flavor to your workplace.
            </p>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-[#1E3A8A] mb-6">Why Choose Gyro City for Office Catering?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: '🕐', title: 'On-Time Delivery', desc: 'Reliable delivery windows that respect your schedule' },
                  { icon: '💼', title: 'Corporate Packages', desc: 'Flexible options for teams of all sizes' },
                  { icon: '🌱', title: 'Dietary Options', desc: 'Halal, vegetarian, vegan, gluten-free available' },
                  { icon: '📦', title: 'Easy Setup', desc: 'Individually boxed or buffet-style service' },
                  { icon: '💰', title: 'Free Delivery', desc: 'No delivery fee on orders over $200' },
                  { icon: '👍', title: 'Fresh Daily', desc: 'Never frozen - made fresh every morning' }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="text-3xl">{feature.icon}</div>
                    <div>
                      <h3 className="font-bold text-[#1E3A8A]">{feature.title}</h3>
                      <p className="text-sm text-gray-700">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#1E3A8A] mt-12">Popular Office Catering Options</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-[#1E3A8A] mb-3">Individual Lunch Boxes</h3>
                <p className="text-2xl font-bold text-[#B8860B] mb-3">$15.99+</p>
                <p className="text-gray-700 mb-4">Perfect for team meetings and desk lunches. Each box includes main, salad, sides, and pita.</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Classic Gyro Box</li>
                  <li>• Chicken Souvlaki Box</li>
                  <li>• Vegetarian Falafel Box</li>
                  <li>• Mixed Grill Box</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-[#B8860B]">
                <div className="bg-[#B8860B] text-white px-3 py-1 rounded-full text-xs font-semibold inline-block mb-3">
                  MOST POPULAR
                </div>
                <h3 className="text-xl font-bold text-[#1E3A8A] mb-3">Build-Your-Own Gyro Bar</h3>
                <p className="text-2xl font-bold text-[#B8860B] mb-3">$18.99/person</p>
                <p className="text-gray-700 mb-4">Interactive buffet setup. Min 15 people. Includes all proteins, toppings, sides, and sauces.</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Choose 2-3 proteins</li>
                  <li>• Fresh toppings bar</li>
                  <li>• Greek salad & rice</li>
                  <li>• Pita & tzatziki</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-[#1E3A8A] mb-3">Corporate Lunch Package</h3>
                <p className="text-2xl font-bold text-[#B8860B] mb-3">$19.99/person</p>
                <p className="text-gray-700 mb-4">Full-service catering for larger teams. Min 20 people. Perfect for all-hands meetings.</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 2 protein options</li>
                  <li>• Greek salad & sides</li>
                  <li>• Pita bread & sauces</li>
                  <li>• Cookies included</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#1E3A8A] text-white p-8 rounded-lg mt-12">
              <h2 className="text-3xl font-bold mb-4">Ideal For:</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li>✓ Team lunches & weekly catering</li>
                  <li>✓ Client meetings & presentations</li>
                  <li>✓ Training sessions & workshops</li>
                  <li>✓ Employee appreciation events</li>
                </ul>
                <ul className="space-y-2">
                  <li>✓ Board meetings & conferences</li>
                  <li>✓ Working lunches & brainstorms</li>
                  <li>✓ Office parties & celebrations</li>
                  <li>✓ Recurring weekly orders</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#1E3A8A] mt-12">Delivery Areas</h2>
            <p>We deliver fresh Greek catering throughout:</p>
            <ul className="grid md:grid-cols-3 gap-2">
              <li>✓ Downtown Toronto</li>
              <li>✓ Financial District</li>
              <li>✓ King West</li>
              <li>✓ Liberty Village</li>
              <li>✓ Yorkville</li>
              <li>✓ Harbourfront</li>
              <li>✓ North York</li>
              <li>✓ Etobicoke</li>
              <li>✓ Scarborough</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-[#1E3A8A] mb-6">Ready to Feed Your Team?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Get a free quote for your next office catering order. We respond within 24 hours.
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
