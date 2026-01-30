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
      {/* Moving Text Marquee */}
      <div className="bg-white text-black py-3 overflow-hidden border-b border-gray-200">
        <div className="whitespace-nowrap animate-marquee-slow text-lg font-medium">
          Office Catering • Same Day Catering • Lunch Box Catering • Buffet Style Trays • Sandwich Platter
          &nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;
          Office Catering • Same Day Catering • Lunch Box Catering • Buffet Style Trays • Sandwich Platter
          &nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;
          Office Catering • Same Day Catering • Lunch Box Catering • Buffet Style Trays • Sandwich Platter
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#0066FF] backdrop-blur-lg text-white shadow-lg">
        <div className="container mx-auto px-4 py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded border-2 border-white">
              <span className="text-xl font-bold text-white">LOGO</span>
            </div>
          </Link>
          <div className="hidden md:flex gap-10 items-center">
            <Link href="/" className="hover:text-white/80 transition-colors duration-200 font-medium underline underline-offset-4">Home</Link>
            <Link href="/about" className="hover:text-white/80 transition-colors duration-200 font-medium">About Us</Link>
            <Link href="/catering/corporate" className="hover:text-white/80 transition-colors duration-200 font-medium">Corporate Catering</Link>
            <Link href="/menu" className="hover:text-white/80 transition-colors duration-200 font-medium">Our Menu</Link>
            <Link href="/catering/office" className="hover:text-white/80 transition-colors duration-200 font-medium">Office Catering</Link>
            <Link href="/quote" className="bg-white text-[#0066FF] px-6 py-2.5 rounded-lg text-base font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg">
              Get a Quote
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-[#0066FF] text-white overflow-hidden">
        <div className="container mx-auto px-4 py-20 grid md:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-playfair leading-tight">
              Toronto's Authentic Greek Catering, Delivered.
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl">
              Handcrafted gyros and Mediterranean classics for GTA events. Same-day delivery available for catering inquiries today.
            </p>

            <div className="pt-4">
              <Link 
                href="/quote" 
                className="inline-block bg-white text-[#0066FF] px-10 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>

          {/* Right: Food Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="relative h-[600px] flex items-center justify-center hidden md:flex"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <Image 
                src="/catering-trays.jpg" 
                alt="Greek catering trays with rice, chicken, and falafel" 
                fill
                className="object-contain"
                priority
              />
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
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-2 uppercase tracking-wide">
              Loved by Toronto Businesses
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
                className="bg-gray-50 border-4 border-[#0066FF] rounded-3xl p-12 min-h-[350px] flex flex-col items-center justify-center text-center"
              >
                <div className="text-6xl mb-8">•</div>
                <p className="text-xl text-black mb-8 leading-relaxed">"{testimonial.text}"</p>
                <p className="text-lg text-black font-medium">{testimonial.name}</p>
                <p className="text-sm text-gray-600 mt-2">{testimonial.event}</p>
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
