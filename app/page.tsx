'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { GyroButton } from '@/components/ui/gyro-button'
import { GyroCard } from '@/components/ui/gyro-card'
import { AnimatedSection } from '@/components/ui/animated-section'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-gyro-navy/95 backdrop-blur-lg text-white shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <Image 
              src="/gyro-city-logo.png" 
              alt="Gyro City" 
              width={50} 
              height={50} 
              className="rounded-full group-hover:scale-110 transition-transform" 
            />
            <span className="text-2xl font-bold font-playfair">GYRO CITY</span>
          </Link>
          <div className="hidden md:flex gap-8 items-center">
            <Link href="/menu" className="hover:text-gyro-gold transition-colors duration-200 font-semibold">Menu</Link>
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
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gyro-navy via-blue-900 to-gyro-navy text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-gyro-gold/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-gyro-gold/30"
            >
              <span className="text-gyro-gold text-2xl">⭐⭐⭐⭐⭐</span>
              <span className="text-sm font-semibold">4.9/5 · 500+ Events Catered</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold font-playfair mb-6 leading-tight">
              Authentic Greek Catering
              <span className="block text-gyro-gold mt-2">Delivered Fresh</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
              Downtown Toronto's premier Greek catering service. Fresh gyros, souvlaki, and Mediterranean specialties for your office, corporate event, or celebration.
            </p>

            <div className="flex flex-wrap gap-4">
              <GyroButton href="/quote" variant="primary">
                Get Free Quote →
              </GyroButton>
              <GyroButton href="/menu" variant="secondary">
                View Menu
              </GyroButton>
            </div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-12 flex flex-wrap items-center gap-6 text-sm"
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span className="font-semibold">Halal Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span className="font-semibold">Fresh Daily</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span className="font-semibold">Same-Day Delivery</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl hidden md:block"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gyro-gold/30 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold backdrop-blur-sm bg-gyro-navy/40">
              [Fresh Gyro Platter Image]
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marquee Section */}
      <div className="bg-gyro-gold text-white py-4 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap text-xl font-semibold">
          AUTHENTIC GREEK CATERING • DOWNTOWN TORONTO • FRESH NEVER FROZEN • HALAL & VEGETARIAN OPTIONS
          &nbsp;&nbsp;&nbsp;&nbsp;
          AUTHENTIC GREEK CATERING • DOWNTOWN TORONTO • FRESH NEVER FROZEN • HALAL & VEGETARIAN OPTIONS
        </div>
      </div>

      {/* Social Proof Section */}
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-5xl">⭐⭐⭐⭐⭐</span>
            </div>
            <h2 className="text-4xl font-bold font-playfair text-gyro-navy mb-2">
              Loved by Toronto Businesses
            </h2>
            <p className="text-xl text-gray-600">4.9 out of 5 stars based on 23 Google reviews</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { text: "Best Greek catering in Toronto! The gyros were a huge hit at our corporate event. Fresh ingredients and amazing flavors.", name: "Sarah M.", event: "Corporate Event, 50 people" },
              { text: "Gyro City saved our office lunch. Quick delivery, generous portions, and everyone loved the variety of options. Highly recommend!", name: "Michael Chen", event: "Office Catering, Downtown" },
              { text: "We ordered for our wedding reception and guests couldn't stop raving about the food. Professional service from start to finish.", name: "Jennifer & Tom", event: "Wedding Reception, 120 guests" },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="text-gyro-gold mb-3">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-gyro-navy">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* How It Works Section */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-gyro-navy text-center mb-16">
            How It Works
          </h2>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: "1", title: "Choose Your Menu", icon: "📋", desc: "Select from our authentic Greek dishes" },
              { step: "2", title: "Request Quote", icon: "💬", desc: "Tell us your event details" },
              { step: "3", title: "Confirm Order", icon: "✓", desc: "We'll finalize your catering" },
              { step: "4", title: "Enjoy Fresh Food", icon: "🥙", desc: "Delivered hot and ready to serve" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-6xl mb-4">{item.icon}</div>
                <div className="w-12 h-12 bg-gyro-navy text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gyro-navy mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Packages Section */}
      <AnimatedSection className="py-20 bg-gyro-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-gyro-navy text-center mb-4">
            Catering Packages & Pricing
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Fresh, authentic Greek food for every occasion
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Individual Lunch Boxes",
                price: "Starting at $15.99",
                perPerson: "/person",
                features: [
                  "Choice of Gyro, Souvlaki, or Falafel",
                  "Greek Salad & Pita",
                  "Tzatziki Sauce",
                  "Individually Packaged",
                  "Perfect for office lunches",
                ],
                cta: "Order Now",
                link: "/order"
              },
              {
                name: "Party Platters",
                price: "Starting at $89.99",
                perPerson: "/platter",
                features: [
                  "Serves 6-8 people",
                  "Mixed Gyro & Souvlaki",
                  "Fresh Greek Salad",
                  "Pita, Sauces & Sides",
                  "Ideal for gatherings",
                ],
                popular: true,
                cta: "Get Quote",
                link: "/quote"
              },
              {
                name: "Full Catering Service",
                price: "Starting at $18.99",
                perPerson: "/person",
                features: [
                  "Minimum 15 people",
                  "Customizable Menu",
                  "Setup & Delivery Included",
                  "Corporate & Events",
                  "Premium service",
                ],
                cta: "Request Quote",
                link: "/quote"
              },
            ].map((pkg, i) => (
              <GyroCard key={i} className={pkg.popular ? "ring-4 ring-gyro-gold relative" : ""}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gyro-gold text-white px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold font-playfair text-gyro-navy mb-3">
                  {pkg.name}
                </h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-gyro-gold">{pkg.price}</span>
                  <span className="text-gray-600">{pkg.perPerson}</span>
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
                  {pkg.cta} →
                </GyroButton>
              </GyroCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Why Choose Us Section */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-gyro-navy text-center mb-16">
            Why Choose Gyro City?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: "🥙", title: "Authentic Greek", desc: "Traditional recipes passed down through generations" },
              { icon: "🚚", title: "Reliable Delivery", desc: "On-time delivery across downtown Toronto" },
              { icon: "🌱", title: "Dietary Options", desc: "Halal, vegetarian, and vegan choices available" },
              { icon: "💼", title: "Corporate Specialist", desc: "Experienced in business events and office catering" },
              { icon: "❄️", title: "Fresh Never Frozen", desc: "All ingredients prepared fresh daily" },
              { icon: "🎉", title: "Event Experts", desc: "From intimate gatherings to large celebrations" },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="text-6xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gyro-navy mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Delivery Areas Section */}
      <AnimatedSection className="py-20 bg-gyro-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6">
            We Deliver Across Toronto
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Fast, reliable catering delivery to downtown Toronto and surrounding areas
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-lg">
            {["Downtown Toronto", "North York", "Mississauga", "Markham", "Etobicoke", "Scarborough"].map((area, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20"
              >
                {area}
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Final CTA Section */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-gyro-gold to-gyro-gold-hover text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6">
            Ready to Order Authentic Greek Catering?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get your free quote today and discover why we're Toronto's favorite Greek catering service
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
            <p>&copy; {new Date().getFullYear()} Gyro City. All rights reserved. Toronto Greek Catering.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
