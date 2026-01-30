'use client'

import { SharedNav } from '@/components/shared-nav'
import { SharedFooter } from '@/components/shared-footer'
import { AnimatedSection } from '@/components/ui/animated-section'
import { GyroButton } from '@/components/ui/gyro-button'

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
      { name: "Dolmades", price: "$7.99", desc: "Stuffed grape leaves with rice (6 pieces)" },
      { name: "Spanakopita", price: "$8.99", desc: "Traditional spinach and feta pie" },
      { name: "Hummus & Pita", price: "$6.99", desc: "Creamy chickpea dip with warm pita" },
    ]
  },
]

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <SharedNav />

      {/* Hero Section */}
      <AnimatedSection className="bg-white py-16 border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-playfair text-black mb-4">
            Our Menu
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Authentic Greek cuisine made fresh daily with premium ingredients
          </p>
        </div>
      </AnimatedSection>

      {/* Menu Categories */}
      <div className="container mx-auto px-4 py-16">
        {menuCategories.map((category, index) => (
          <AnimatedSection key={index} delay={index * 0.1} className="mb-20">
            <div className="mb-12">
              <h2 className="text-4xl font-bold font-playfair text-black mb-3 italic">
                {category.name}
              </h2>
              <p className="text-lg text-gray-700">{category.description}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item, i) => (
                <div 
                  key={i}
                  className="bg-gray-100 border-2 border-[#0066FF] p-6 min-h-[200px] flex flex-col justify-between transition-all duration-200 hover:shadow-lg"
                >
                  <div>
                    <h3 className="text-2xl font-playfair italic text-black mb-3">
                      {item.name}
                    </h3>
                    <p className="text-gray-800 leading-relaxed mb-4">
                      {item.desc}
                    </p>
                  </div>
                  <p className="text-xl font-semibold text-black">
                    {item.price}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Dietary Information */}
      <AnimatedSection className="bg-white py-16 border-t">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-playfair text-black text-center mb-8">
            Dietary Options Available
          </h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: "🥗", label: "Vegetarian" },
              { icon: "🌱", label: "Vegan Options" },
              { icon: "☪️", label: "Halal Certified" },
              { icon: "🌾", label: "Gluten-Free Available" },
            ].map((option, i) => (
              <div key={i} className="text-center bg-gray-100 p-6 border-2 border-[#0066FF]">
                <div className="text-5xl mb-3">{option.icon}</div>
                <p className="font-semibold text-black">{option.label}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-[#0066FF]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6 text-white">
            Ready to Order?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white">
            Place your order online or request a custom catering quote for your next event
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <GyroButton href="/order" variant="secondary" className="bg-white text-[#0066FF] hover:bg-gray-100 border-0">
              Order Online →
            </GyroButton>
            <GyroButton href="tel:+16473408001" variant="ghost" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0066FF]">
              Call +1 (647) 340-8001
            </GyroButton>
          </div>
        </div>
      </AnimatedSection>

      <SharedFooter />
    </main>
  )
}
