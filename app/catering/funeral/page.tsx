'use client'

import { SharedNav } from '@/components/shared-nav'
import { SharedFooter } from '@/components/shared-footer'
import { AnimatedSection } from '@/components/ui/animated-section'
import { GyroButton } from '@/components/ui/gyro-button'
import { GyroCard } from '@/components/ui/gyro-card'

export default function FuneralCateringPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <SharedNav />

      {/* Hero Section */}
      <AnimatedSection className="bg-gradient-to-br from-gyro-navy via-blue-900 to-gyro-navy text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-playfair mb-6">
            Funeral Reception Catering
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Compassionate catering service during difficult times
          </p>
        </div>
      </AnimatedSection>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <AnimatedSection>
            <div className="bg-white rounded-2xl p-8 shadow-xl mb-12">
              <h2 className="text-3xl font-bold font-playfair text-gyro-navy mb-6">
                Supporting You Through Difficult Times
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  During times of loss, the last thing you should worry about is organizing food for family and friends. <strong>Gyro City</strong> provides compassionate, reliable funeral reception catering that lets you focus on what matters most.
                </p>
                <p>
                  We understand the sensitivity required during these moments and handle every detail with care, respect, and professionalism. Our team is here to support you with nourishing, comforting meals that bring people together.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* What We Provide */}
          <AnimatedSection delay={0.2}>
            <div className="bg-gyro-cream rounded-2xl p-8 shadow-xl mb-12">
              <h2 className="text-2xl font-bold font-playfair text-gyro-navy mb-6">
                What We Provide
              </h2>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-gyro-gold text-2xl mt-1">✓</span>
                  <span><strong>Flexible arrangements</strong> – We work around your schedule and venue requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gyro-gold text-2xl mt-1">✓</span>
                  <span><strong>Simple, nourishing meals</strong> – Authentic Greek food that comforts and satisfies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gyro-gold text-2xl mt-1">✓</span>
                  <span><strong>Discreet, professional service</strong> – We handle setup and cleanup with minimal disruption</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gyro-gold text-2xl mt-1">✓</span>
                  <span><strong>Dietary accommodations</strong> – Vegetarian, vegan, halal, and other dietary needs respected</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gyro-gold text-2xl mt-1">✓</span>
                  <span><strong>Compassionate coordination</strong> – One point of contact to ease the planning burden</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>

          {/* Packages Section */}
          <AnimatedSection delay={0.3}>
            <h2 className="text-3xl font-bold font-playfair text-gyro-navy text-center mb-8">
              Funeral Reception Packages
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {[
                {
                  name: "Small Gathering",
                  price: "$16.99/person",
                  guests: "15-30 guests",
                  features: [
                    "Choice of 2 proteins",
                    "Greek salad and sides",
                    "Pita bread and tzatziki",
                    "Buffet-style or boxed meals",
                    "Delivery and setup included"
                  ],
                  link: "/quote"
                },
                {
                  name: "Larger Reception",
                  price: "$19.99/person",
                  guests: "30+ guests",
                  features: [
                    "Choice of 3 proteins",
                    "Premium sides and salads",
                    "Appetizer options",
                    "Beverages available",
                    "Full-service coordination"
                  ],
                  link: "/quote"
                }
              ].map((pkg, i) => (
                <GyroCard key={i}>
                  <h3 className="text-2xl font-bold font-playfair text-gyro-navy mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{pkg.guests}</p>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-gyro-gold">{pkg.price}</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2 text-gray-700">
                        <span className="text-gyro-gold mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <GyroButton href={pkg.link} variant="secondary" className="w-full">
                    Request Quote →
                  </GyroButton>
                </GyroCard>
              ))}
            </div>
          </AnimatedSection>

          {/* How to Order */}
          <AnimatedSection delay={0.4}>
            <div className="bg-white rounded-2xl p-8 shadow-xl mb-12">
              <h2 className="text-2xl font-bold font-playfair text-gyro-navy mb-6">
                How to Order
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  We understand that planning during this time can be overwhelming. Our process is simple and compassionate:
                </p>
                <ol className="list-decimal list-inside space-y-3 ml-4">
                  <li><strong>Call or email us</strong> – We're available to discuss your needs and answer questions</li>
                  <li><strong>Share your details</strong> – Number of guests, dietary requirements, venue, and timing</li>
                  <li><strong>Receive a quote</strong> – We'll provide a clear, straightforward quote within hours</li>
                  <li><strong>Confirm and relax</strong> – We handle the rest so you can focus on family</li>
                </ol>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Section */}
          <AnimatedSection delay={0.5}>
            <div className="bg-gradient-to-br from-gyro-navy to-blue-900 rounded-2xl p-8 shadow-xl text-white text-center">
              <h2 className="text-3xl font-bold font-playfair mb-4">
                We're Here to Help
              </h2>
              <p className="text-lg mb-6 text-gray-200">
                If you need to arrange funeral reception catering, please don't hesitate to reach out. We're here to support you with care and professionalism.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <GyroButton href="tel:6475488740" variant="primary" className="bg-gyro-gold hover:bg-gyro-gold-hover">
                  Call (647) 548-8740
                </GyroButton>
                <GyroButton href="/quote" variant="secondary" className="bg-white text-gyro-navy hover:bg-gray-100 border-0">
                  Request Quote
                </GyroButton>
              </div>
              <p className="text-sm text-gray-300 mt-6">
                Available 7 days a week to assist you during this difficult time
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <SharedFooter />
    </main>
  )
}
