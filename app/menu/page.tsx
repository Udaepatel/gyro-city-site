import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Our Menu | Gyro City Toronto Greek Catering',
  description: 'Explore our authentic Greek catering menu featuring gyros, souvlaki, platters, and Mediterranean specialties. Fresh, never frozen ingredients.',
}

export default function MenuPage() {
  const menuCategories = [
    {
      name: 'Individual Lunch Boxes',
      price: '$15.99 - $19.99',
      items: [
        {
          name: 'Classic Gyro Box',
          price: '$15.99',
          desc: 'Traditional beef & lamb gyro with Greek salad, rice, pita bread, and house-made tzatziki'
        },
        {
          name: 'Chicken Souvlaki Box',
          price: '$16.99',
          desc: 'Marinated grilled chicken skewers with Greek salad, rice, pita, and tzatziki'
        },
        {
          name: 'Falafel Mediterranean Box',
          price: '$15.99',
          desc: 'Crispy falafel with hummus, Greek salad, rice, pita, and tahini sauce (Vegan)'
        },
        {
          name: 'Mixed Grill Box',
          price: '$19.99',
          desc: 'Combination of gyro and chicken souvlaki with all sides'
        }
      ]
    },
    {
      name: 'Party Platters',
      price: '$89.99 - $149.99',
      items: [
        {
          name: 'Mixed Gyro Platter',
          price: '$89.99',
          desc: 'Serves 6-8. Traditional beef & lamb gyro with pita, tzatziki, tomatoes, onions'
        },
        {
          name: 'Chicken Souvlaki Platter',
          price: '$99.99',
          desc: 'Serves 6-8. Grilled chicken skewers with rice, Greek salad, pita, tzatziki'
        },
        {
          name: 'Mezze Appetizer Platter',
          price: '$79.99',
          desc: 'Serves 8-10. Hummus, tzatziki, dolmades, falafel, pita triangles, olives'
        },
        {
          name: 'Greek Salad Platter',
          price: '$59.99',
          desc: 'Serves 8-10. Fresh tomatoes, cucumbers, onions, peppers, feta, olives, oregano'
        }
      ]
    },
    {
      name: 'Group Catering Packages',
      price: '$18.99 - $24.99/person',
      items: [
        {
          name: 'Build-Your-Own Gyro Station',
          price: '$18.99/person',
          desc: 'Min 15 people. Choose proteins (gyro, chicken, falafel), fresh toppings bar, pita, tzatziki, sides'
        },
        {
          name: 'Mediterranean Feast Package',
          price: '$21.99/person',
          desc: 'Min 15 people. Mixed proteins, Greek salad, rice, hummus, pita, dessert'
        },
        {
          name: 'Corporate Lunch Package',
          price: '$19.99/person',
          desc: 'Min 20 people. Choice of 2 proteins, Greek salad, rice pilaf, pita, tzatziki, cookies'
        },
        {
          name: 'Premium Celebration Package',
          price: '$24.99/person',
          desc: 'Min 25 people. Mixed grill platter, appetizer selection, salads, sides, desserts, beverages'
        }
      ]
    },
    {
      name: 'Sides & Add-Ons',
      price: '$3.99 - $49.99',
      items: [
        {
          name: 'Greek Rice Pilaf',
          price: '$3.99/person',
          desc: 'Lemon-herb rice with vegetables'
        },
        {
          name: 'Greek Roasted Potatoes',
          price: '$3.99/person',
          desc: 'Oven-roasted with olive oil, lemon, oregano'
        },
        {
          name: 'Spanakopita (6 pieces)',
          price: '$24.99',
          desc: 'Traditional spinach and feta phyllo pastries'
        },
        {
          name: 'Baklava Tray (12 pieces)',
          price: '$29.99',
          desc: 'Honey-walnut phyllo dessert'
        },
        {
          name: 'Extra Pita Bread (dozen)',
          price: '$12.99',
          desc: 'Warm, fluffy pita bread'
        },
        {
          name: 'Extra Tzatziki (16oz)',
          price: '$8.99',
          desc: 'House-made cucumber-yogurt sauce'
        }
      ]
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation - Reuse from homepage */}
      <nav className="sticky top-0 z-50 bg-[#1E3A8A] text-white shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/gyro-city-logo.png" alt="Gyro City" width={50} height={50} className="rounded-full" />
            <span className="text-2xl font-bold">GYRO CITY</span>
          </Link>
          <div className="hidden md:flex gap-6">
            <Link href="/menu" className="text-[#B8860B] font-semibold">Menu</Link>
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
      <section className="bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Greek Catering Menu</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Authentic Mediterranean flavors crafted fresh daily. Perfect for offices, events, and celebrations.
          </p>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {menuCategories.map((category, i) => (
            <div key={i} className="mb-16">
              <div className="flex items-center justify-between mb-8 pb-4 border-b-4 border-[#B8860B]">
                <h2 className="text-3xl font-bold text-[#1E3A8A]">{category.name}</h2>
                <span className="text-xl font-semibold text-[#B8860B]">{category.price}</span>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {category.items.map((item, j) => (
                  <div key={j} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-[#1E3A8A]">{item.name}</h3>
                      <span className="text-lg font-bold text-[#B8860B]">{item.price}</span>
                    </div>
                    <p className="text-gray-700">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dietary Info */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#1E3A8A] mb-6">Dietary Accommodations</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <div className="text-4xl mb-2">✓</div>
                <h3 className="font-bold text-[#1E3A8A]">Halal</h3>
                <p className="text-sm text-gray-600">All meats</p>
              </div>
              <div>
                <div className="text-4xl mb-2">🌱</div>
                <h3 className="font-bold text-[#1E3A8A]">Vegetarian</h3>
                <p className="text-sm text-gray-600">Multiple options</p>
              </div>
              <div>
                <div className="text-4xl mb-2">🥗</div>
                <h3 className="font-bold text-[#1E3A8A]">Vegan</h3>
                <p className="text-sm text-gray-600">Available</p>
              </div>
              <div>
                <div className="text-4xl mb-2">🌾</div>
                <h3 className="font-bold text-[#1E3A8A]">Gluten-Free</h3>
                <p className="text-sm text-gray-600">On request</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1E3A8A] text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Order?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a free quote for your next event or place an order online today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/quote" className="bg-[#B8860B] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#9A7209] transition">
              Get Free Quote
            </Link>
            <Link href="/order" className="bg-white text-[#1E3A8A] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition">
              Order Online
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1E3A8A] text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2026 Gyro City. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
