'use client'

import Link from 'next/link'
import { AnimatedSection } from '@/components/ui/animated-section'
import { GyroButton } from '@/components/ui/gyro-button'
import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-gyro-navy/95 backdrop-blur-lg text-white shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <span className="text-2xl font-bold font-playfair">GYRO CITY</span>
          </Link>
          <div className="hidden md:flex gap-8 items-center">
            <Link href="/menu" className="hover:text-gyro-gold transition-colors duration-200 font-semibold">Menu</Link>
            <Link href="/catering" className="hover:text-gyro-gold transition-colors duration-200 font-semibold">Catering</Link>
            <Link href="/about" className="text-gyro-gold font-semibold">About</Link>
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
            Our Story
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Bringing authentic Greek flavors to Toronto, one gyro at a time
          </p>
        </div>
      </AnimatedSection>

      {/* Story Section */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-gyro-gold/30 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold backdrop-blur-sm bg-gyro-navy/40">
                [Kitchen / Chef Photo]
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold font-playfair text-gyro-navy mb-6">
                Authentic Greek Tradition Meets Modern Toronto
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  At <strong className="text-gyro-navy">Gyro City</strong>, we believe that great food starts with passion, quality ingredients, and time-honored recipes passed down through generations.
                </p>
                <p>
                  Our journey began with a simple mission: bring the vibrant, authentic flavors of Greece to the heart of downtown Toronto. Every gyro, souvlaki, and Mediterranean dish we serve is crafted with the same care and attention that our family has practiced for decades.
                </p>
                <p>
                  We specialize in catering for businesses, corporate events, and celebrations because we know that great food brings people together. Whether you're feeding 10 colleagues or 200 wedding guests, we treat every order with the same dedication to quality and freshness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Values Section */}
      <AnimatedSection className="py-20 bg-gyro-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold font-playfair text-gyro-navy text-center mb-16">
            What We Stand For
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: "🥙",
                title: "Authenticity",
                desc: "Every recipe stays true to traditional Greek cooking methods and ingredients"
              },
              {
                icon: "❄️",
                title: "Freshness",
                desc: "We prepare everything daily using premium, never-frozen ingredients"
              },
              {
                icon: "💚",
                title: "Quality",
                desc: "From sourcing to serving, we never compromise on excellence"
              },
              {
                icon: "🤝",
                title: "Service",
                desc: "Reliable, professional catering that exceeds expectations every time"
              },
              {
                icon: "🌟",
                title: "Community",
                desc: "Proud to serve Toronto's businesses and families since day one"
              },
              {
                icon: "🌱",
                title: "Inclusivity",
                desc: "Halal, vegetarian, and vegan options for everyone to enjoy"
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="text-6xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold font-playfair text-gyro-navy mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Stats Section */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-gyro-navy via-blue-900 to-gyro-navy text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            {[
              { number: "500+", label: "Events Catered" },
              { number: "10K+", label: "Meals Served" },
              { number: "4.9", label: "Star Rating" },
              { number: "100%", label: "Fresh Daily" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="text-5xl md:text-6xl font-bold font-playfair text-gyro-gold mb-2">
                  {stat.number}
                </div>
                <div className="text-xl text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Team Section */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold font-playfair text-gyro-navy text-center mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Experienced chefs and catering professionals dedicated to making your event memorable
          </p>

          <div className="max-w-4xl mx-auto bg-gyro-cream p-8 rounded-2xl shadow-lg">
            <div className="text-center">
              <p className="text-lg text-gray-700 mb-6">
                Our team combines decades of culinary expertise with a passion for authentic Greek cuisine. From our chefs who've trained in traditional Greek kitchens to our catering coordinators who ensure every detail is perfect, we're committed to delivering exceptional experiences.
              </p>
              <p className="text-lg text-gray-700">
                Every member of the Gyro City family shares one goal: serving you the freshest, most authentic Greek food in Toronto.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-gyro-gold to-gyro-gold-hover text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6">
            Ready to Experience Gyro City?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let us cater your next event with authentic Greek cuisine
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <GyroButton href="/quote" variant="secondary" className="bg-white text-gyro-navy hover:bg-gray-100 border-0">
              Get Free Quote →
            </GyroButton>
            <GyroButton href="/menu" variant="ghost" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gyro-gold">
              View Menu
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
