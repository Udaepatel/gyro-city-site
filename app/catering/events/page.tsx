'use client'

import { SharedNav } from '@/components/shared-nav'
import { SharedFooter } from '@/components/shared-footer'
import { AnimatedSection } from '@/components/ui/animated-section'
import { GyroButton } from '@/components/ui/gyro-button'
import { GyroCard } from '@/components/ui/gyro-card'
import { motion } from 'framer-motion'

export default function EventCateringPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <SharedNav />

      {/* Hero Section */}
      <AnimatedSection className="bg-gradient-to-br from-gyro-navy via-blue-900 to-gyro-navy text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-playfair mb-6">
            Event Catering
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Make your celebration unforgettable with authentic Greek cuisine
          </p>
        </div>
      </AnimatedSection>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left - Details */}
          <AnimatedSection>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold font-playfair text-gyro-navy mb-6">
                Celebrations Worth Remembering
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Whether it's a wedding, birthday party, anniversary, or family reunion, <strong>Gyro City</strong> brings the taste of Greece to your special occasion.
                </p>
                <p>
                  Our event catering services are designed to impress your guests with authentic flavors, beautiful presentation, and seamless service that lets you focus on celebrating.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Weddings, anniversaries, and milestone celebrations</li>
                  <li>Birthday parties and family reunions</li>
                  <li>Holiday gatherings and seasonal events</li>
                  <li>Customizable menus for any dietary need</li>
                  <li>Full-service setup and coordination</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>

          {/* Right - Image Placeholder */}
          <AnimatedSection delay={0.2}>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-gyro-gold/30 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold backdrop-blur-sm bg-gyro-navy/40">
                [Wedding/Event Photo]
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Event Types Section */}
        <AnimatedSection className="mt-16">
          <h2 className="text-3xl font-bold font-playfair text-gyro-navy text-center mb-8">
            Events We Cater
          </h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: "💍", title: "Weddings", desc: "Elegant dining for your special day" },
              { icon: "🎂", title: "Birthday Parties", desc: "Delicious celebrations for all ages" },
              { icon: "🎊", title: "Anniversaries", desc: "Memorable meals for milestones" },
              { icon: "👨‍👩‍👧‍👦", title: "Family Reunions", desc: "Bring everyone together with great food" },
            ].map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center"
              >
                <div className="text-5xl mb-3">{event.icon}</div>
                <h3 className="text-xl font-bold text-gyro-navy mb-2">{event.title}</h3>
                <p className="text-gray-600 text-sm">{event.desc}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Packages Section */}
        <AnimatedSection className="mt-16">
          <h2 className="text-3xl font-bold font-playfair text-gyro-navy text-center mb-8">
            Popular Event Packages
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Intimate Gathering",
                price: "$18.99/person",
                guests: "15-30 guests",
                features: [
                  "Choice of 2 proteins",
                  "Greek salad and sides",
                  "Warm pita and sauces",
                  "Buffet-style setup",
                  "Delivery and setup included"
                ],
                link: "/quote"
              },
              {
                name: "Celebration Feast",
                price: "$22.99/person",
                guests: "30-75 guests",
                features: [
                  "Choice of 3 proteins",
                  "Premium sides and salads",
                  "Appetizer platter",
                  "Dessert option available",
                  "Professional presentation"
                ],
                popular: true,
                link: "/quote"
              },
              {
                name: "Grand Event",
                price: "$29.99/person",
                guests: "75+ guests",
                features: [
                  "Full Mediterranean menu",
                  "Multiple protein options",
                  "Premium appetizers",
                  "Desserts included",
                  "Dedicated event coordinator"
                ],
                link: "/quote"
              }
            ].map((pkg, i) => (
              <GyroCard key={i} className={pkg.popular ? "ring-4 ring-gyro-gold relative" : ""}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gyro-gold text-white px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}
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
                <GyroButton href={pkg.link} variant={pkg.popular ? "primary" : "secondary"} className="w-full">
                  Request Quote →
                </GyroButton>
              </GyroCard>
            ))}
          </div>
        </AnimatedSection>

        {/* Why Choose Us Section */}
        <AnimatedSection className="mt-16 bg-gyro-cream rounded-2xl p-12">
          <h2 className="text-3xl font-bold font-playfair text-gyro-navy text-center mb-12">
            Why Choose Gyro City for Your Event?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: "🎨", title: "Custom Menus", desc: "Tailored to your preferences and dietary needs" },
              { icon: "👨‍🍳", title: "Expert Chefs", desc: "Authentic Greek cuisine prepared fresh" },
              { icon: "⏰", title: "Reliable Service", desc: "On-time delivery and professional setup" },
              { icon: "💎", title: "Quality Ingredients", desc: "Fresh, never frozen, premium quality" },
              { icon: "💰", title: "Great Value", desc: "Competitive pricing without compromising quality" },
              { icon: "🤝", title: "Personal Touch", desc: "We treat your event like our own" },
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="text-center"
              >
                <div className="text-5xl mb-3">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gyro-navy mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Testimonials Section */}
        <AnimatedSection className="mt-16">
          <h2 className="text-3xl font-bold font-playfair text-gyro-navy text-center mb-8">
            What Our Event Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                text: "Gyro City catered our wedding reception and it was phenomenal! Every single guest complimented the food. Couldn't have asked for better.",
                name: "Jennifer & Tom",
                event: "Wedding, 120 guests"
              },
              {
                text: "We hired Gyro City for my mom's 60th birthday. The food was delicious and the service was impeccable. Highly recommend!",
                name: "Maria S.",
                event: "Birthday Party, 45 guests"
              },
              {
                text: "Amazing food, great presentation, and stress-free planning. Gyro City made our anniversary celebration perfect!",
                name: "David R.",
                event: "Anniversary Party, 30 guests"
              }
            ].map((testimonial, i) => (
              <GyroCard key={i}>
                <div className="text-gyro-gold mb-3">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-bold text-gyro-navy">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.event}</p>
              </GyroCard>
            ))}
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection className="mt-16 py-20 bg-gradient-to-r from-gyro-gold to-gyro-gold-hover text-white rounded-2xl">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6">
              Ready to Plan Your Event?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's create a memorable dining experience for your celebration
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <GyroButton href="/quote" variant="secondary" className="bg-white text-gyro-navy hover:bg-gray-100 border-0">
                Get Free Quote →
              </GyroButton>
              <GyroButton href="tel:6475488740" variant="ghost" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gyro-gold">
                Call (647) 548-8740
              </GyroButton>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <SharedFooter />
    </main>
  )
}
