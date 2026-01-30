'use client'

import Link from 'next/link'
import { AnimatedSection } from '@/components/ui/animated-section'
import { GyroButton } from '@/components/ui/gyro-button'
import { GyroCard } from '@/components/ui/gyro-card'

const menuCategories = [
  {
    name: "Signature Gyros",
    description: "Our famous hand-carved gyros, made fresh daily",
    items: [
      { name: "Classic Beef & Lamb Gyro", price: "$15.99", desc: "Traditional gyro with tzatziki, tomatoes, onions, and pita" },
      { name: "Chicken Gyro", price: "$14.99", desc: "Marinated chicken with fresh veggies and garlic sauce" },
      { name: "Veggie Gyro", price: "$13.99", desc: "Falafel, hummus, mixed greens, and tahini" },
      { name: "Halal Beef Gyro", price: "$15.99", desc: "100% halal beef with authentic Greek toppings" },
    ]
  },
  {
    name: "Souvlaki Plates",
    description: "Grilled skewers served with rice, salad, and pita",
    items: [
      { name: "Chicken Souvlaki Plate", price: "$16.99", desc: "Two skewers of marinated chicken with Greek salad and rice" },
      { name: "Pork Souvlaki Plate", price: "$17.99", desc: "Traditional pork skewers with authentic seasoning" },
      { name: "Lamb Souvlaki Plate", price: "$19.99", desc: "Premium lamb skewers with herb marinade" },
      { name: "Mixed Grill Plate", price: "$21.99", desc: "Combination of chicken, pork, and lamb" },
    ]
  },
  {
    name: "Party Platters",
    description: "Perfect for gatherings, serves 6-8 people",
    items: [
      { name: "Gyro Platter", price: "$89.99", desc: "Mixed gyro meat with pitas, sauces, and Greek salad" },
      { name: "Souvlaki Platter", price: "$99.99", desc: "12 skewers with rice, salad, and pita bread" },
      { name: "Mezze Platter", price: "$79.99", desc: "Hummus, tzatziki, dolmades, olives, and pita" },
      { name: "Deluxe Mixed Platter", price: "$119.99", desc: "Gyros, souvlaki, appetizers, and sides" },
    ]
  },
  {
    name: "Sides & Appetizers",
    description: "Authentic Greek sides to complete your meal",
    items: [
      { name: "Greek Salad", price: "$8.99", desc: "Fresh tomatoes, cucumbers, olives, feta" },
      { name: "Fries", price: "$5.99", desc: "Crispy golden fries" },
      { name: "Tzatziki & Pita", price: "$6.99", desc: "House-made tzatziki with warm pita" },
      { name: "Dolmades (6pc)", price: "$7.99", desc: "Stuffed grape leaves with rice" },
      { name: "Spanakopita", price: "$8.99", desc: "Traditional spinach and feta pie" },
      { name: "Hummus & Pita", price: "$6.99", desc: "Creamy chickpea dip with warm pita" },
    ]
  },
]

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-gyro-navy/95 backdrop-blur-lg text-white shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <span className="text-2xl font-bold font-playfair">GYRO CITY</span>
          </Link>
          <div className="hidden md:flex gap-8 items-center">
            <Link href="/menu" className="text-gyro-gold font-semibold">Menu</Link>
            <Link href="/catering" className="hover:text-gyro-gold transition-colors duration-200 font-semibold">Catering</Link>
            <Link href="/about" className="hover:text-gyro-gold transition-colors duration-200 font-semibold">About</Link>
            <Link href="/contact" className="hover:text-gyro-gold transition-colors duration-200 font-semibold">Contact</Link>
            <GyroButton href="/quote" variant="primary" className="px-6 py-2 text-base">
              Get Quote
            </GyroButton>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <AnimatedSection className="bg-gradient-to-br from-gyro-navy via-blue-900 to-gyro-navy text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-playfair mb-6">
            Our Menu
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
            Authentic Greek cuisine made fresh daily with premium ingredients
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <GyroButton href="/order" variant="primary">
              Order Online →
            </GyroButton>
            <GyroButton href="/quote" variant="secondary">
              Request Catering Quote
            </GyroButton>
          </div>
        </div>
      </AnimatedSection>

      {/* Menu Categories */}
      <div className="container mx-auto px-4 py-16">
        <div className="space-y-16">
          {menuCategories.map((category, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="mb-8">
                  <h2 className="text-4xl font-bold font-playfair text-gyro-navy mb-2">
                    {category.name}
                  </h2>
                  <p className="text-lg text-gray-600">{category.description}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {category.items.map((item, i) => (
                    <div 
                      key={i}
                      className="border-b border-gray-200 pb-4 last:border-0 hover:bg-gray-50 p-4 rounded-lg transition-colors"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-gyro-navy">{item.name}</h3>
                        <span className="text-2xl font-bold text-gyro-gold whitespace-nowrap ml-4">{item.price}</span>
                      </div>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Dietary Information */}
      <AnimatedSection className="bg-gyro-cream py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-playfair text-gyro-navy text-center mb-8">
            Dietary Options Available
          </h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: "🥗", label: "Vegetarian" },
              { icon: "🌱", label: "Vegan Options" },
              { icon: "☪️", label: "Halal Certified" },
              { icon: "🌾", label: "Gluten-Free Available" },
            ].map((option, i) => (
              <div key={i} className="text-center bg-white p-6 rounded-lg shadow-md">
                <div className="text-5xl mb-3">{option.icon}</div>
                <p className="font-semibold text-gyro-navy">{option.label}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-gyro-gold to-gyro-gold-hover text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6">
            Ready to Order?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Place your order online or request a custom catering quote for your next event
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <GyroButton href="/order" variant="secondary" className="bg-white text-gyro-navy hover:bg-gray-100 border-0">
              Order Online →
            </GyroButton>
            <GyroButton href="tel:6475488740" variant="ghost" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gyro-gold">
              Call (647) 548-8740
            </GyroButton>
          </div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="bg-gyro-navy text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
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
            <p>&copy; {new Date().getFullYear()} Gyro City. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
