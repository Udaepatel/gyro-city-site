'use client'

import { SharedNav } from '@/components/shared-nav'
import { SharedFooter } from '@/components/shared-footer'
import { AnimatedSection } from '@/components/ui/animated-section'
import { GyroButton } from '@/components/ui/gyro-button'
import { GyroCard } from '@/components/ui/gyro-card'

export default function OrderPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <SharedNav />

      {/* Hero Section */}
      <AnimatedSection className="bg-gradient-to-br from-gyro-navy via-blue-900 to-gyro-navy text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-playfair leading-tight mb-6">
            Order Online
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Fresh Greek catering delivered to your Toronto location
          </p>
        </div>
      </AnimatedSection>

      <div className="container mx-auto px-4 py-16">
        {/* Order Options */}
        <AnimatedSection className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold font-playfair text-gyro-navy text-center mb-8">
            Choose Your Order Type
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <GyroCard>
              <div className="text-center">
                <div className="text-6xl mb-4">🥙</div>
                <h3 className="text-2xl font-bold font-playfair text-gyro-navy mb-4">
                  Individual Orders
                </h3>
                <p className="text-gray-600 mb-6">
                  Perfect for personal meals or small groups. Choose from our menu of gyros, souvlaki, and sides.
                </p>
                <GyroButton href="/menu" variant="secondary" className="w-full">
                  View Menu →
                </GyroButton>
              </div>
            </GyroCard>

            <GyroCard className="ring-4 ring-gyro-gold relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gyro-gold text-white px-4 py-1 rounded-full text-sm font-bold">
                Popular
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">🍽️</div>
                <h3 className="text-2xl font-bold font-playfair text-gyro-navy mb-4">
                  Catering Orders
                </h3>
                <p className="text-gray-600 mb-6">
                  For groups of 10+. Get a custom quote with flexible packages and delivery available.
                </p>
                <GyroButton href="/quote" variant="primary" className="w-full">
                  Get Quote →
                </GyroButton>
              </div>
            </GyroCard>
          </div>
        </AnimatedSection>

        {/* How to Order */}
        <AnimatedSection className="max-w-5xl mx-auto mb-16">
          <h2 className="text-3xl font-bold font-playfair text-gyro-navy text-center mb-12">
            How to Order
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", icon: "📋", title: "Choose Your Items", desc: "Browse our menu and select what you'd like" },
              { step: "2", icon: "📞", title: "Contact Us", desc: "Call +1 (647) 340-8001 or request a quote online" },
              { step: "3", icon: "✅", title: "Confirm Details", desc: "We'll finalize your order and send an invoice" },
              { step: "4", icon: "🚚", title: "We Deliver", desc: "Fresh food delivered to your location on time" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-gyro-navy text-white rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-4">
                  {item.step}
                </div>
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gyro-navy mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Popular Items */}
        <AnimatedSection className="mb-16">
          <h2 className="text-3xl font-bold font-playfair text-gyro-navy text-center mb-8">
            Popular Items
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Classic Gyro",
                price: "$15.99",
                desc: "Beef & lamb with fresh veggies, tzatziki, and pita",
                dietary: "Halal"
              },
              {
                name: "Chicken Souvlaki Plate",
                price: "$16.99",
                desc: "Two skewers with rice, salad, and pita",
                dietary: "Gluten-Free Available"
              },
              {
                name: "Party Platter",
                price: "$89.99",
                desc: "Serves 6-8 people. Mixed gyro meat, salads, and pitas",
                dietary: "Customizable"
              },
            ].map((item, i) => (
              <GyroCard key={i}>
                <h3 className="text-2xl font-bold font-playfair text-gyro-navy mb-2">
                  {item.name}
                </h3>
                <div className="mb-3">
                  <span className="text-3xl font-bold text-gyro-gold">{item.price}</span>
                </div>
                <p className="text-gray-600 mb-3">{item.desc}</p>
                <p className="text-sm text-gyro-navy font-semibold italic">{item.dietary}</p>
              </GyroCard>
            ))}
          </div>
        </AnimatedSection>

        {/* Delivery Areas */}
        <AnimatedSection className="mb-16">
          <div className="bg-gyro-cream rounded-2xl p-8 shadow-xl text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-playfair text-gyro-navy mb-6">
              We Deliver Across Toronto
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Fast, reliable delivery to these areas and beyond
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Downtown Toronto", "North York", "Mississauga", "Markham", "Etobicoke", "Scarborough"].map((area, i) => (
                <div
                  key={i}
                  className="bg-white px-6 py-3 rounded-full border-2 border-gyro-navy/20 font-semibold text-gyro-navy"
                >
                  {area}
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-6">
              Delivery fees vary by location. Minimum order may apply for certain areas.
            </p>
          </div>
        </AnimatedSection>

        {/* Contact Options */}
        <AnimatedSection>
          <div className="bg-gradient-to-br from-gyro-gold to-gyro-gold-hover rounded-2xl p-12 shadow-xl text-white text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold font-playfair mb-6">
              Ready to Order?
            </h2>
            <p className="text-xl mb-8">
              Place your order now by phone or request a custom catering quote online
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <GyroButton href="tel:+16473408001" variant="secondary" className="bg-white text-gyro-navy hover:bg-gray-100 border-0">
                📞 Call +1 (647) 340-8001
              </GyroButton>
              <GyroButton href="/quote" variant="ghost" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gyro-gold">
                Request Quote Online →
              </GyroButton>
            </div>
            <div className="mt-8 space-y-2 text-lg">
              <p className="font-semibold">Business Hours:</p>
              <p>Monday - Friday: 9 AM - 8 PM</p>
              <p>Saturday - Sunday: 10 AM - 6 PM</p>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <SharedFooter />
    </main>
  )
}
