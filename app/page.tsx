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
            <Image 
              src="/gyro-city-logo-white.jpg" 
              alt="Gyro City" 
              width={200} 
              height={60} 
              className="h-12 w-auto"
              priority
            />
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
                alt="Professional Greek catering trays with rice pilaf, grilled chicken shawarma, and golden falafel - Toronto catering delivery" 
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

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

      {/* The Art of Greek Catering Section */}
      <AnimatedSection className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold font-playfair text-black mb-6 italic">
              The Art of Greek Catering
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Premium gyro platters and artisanal Mediterranean feasts. We specialize in Office catering delivery in Toronto, bringing the vibrancy of Athens directly to your event.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Corporate Lunch Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#0066FF] text-white rounded-lg overflow-hidden shadow-xl"
            >
              <div className="h-64 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold bg-[#0066FF]/60">
                  [Corporate Lunch Box Image]
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-4 uppercase">Corporate Lunch Box</h3>
                <p className="text-lg mb-2 font-semibold">Starting at $15.99/person</p>
                <ul className="space-y-2 mb-6 text-white/90">
                  <li>• Classic Gyro Box</li>
                  <li>• Chicken Souvlaki Box</li>
                  <li>• Vegetarian Mediterranean Box</li>
                  <li>• Includes: Main, Greek salad, rice, pita, tzatziki</li>
                </ul>
                <Link href="/menu" className="inline-block bg-white text-[#0066FF] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                  Order Individual Boxes →
                </Link>
              </div>
            </motion.div>

            {/* Build Your Own Buffet */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#0066FF] text-white rounded-lg overflow-hidden shadow-xl"
            >
              <div className="h-64 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold bg-[#0066FF]/60">
                  [Build Your Own Buffet Image]
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-4 uppercase">Build Your Own Buffet</h3>
                <p className="text-lg mb-2 font-semibold">Starting at $18.99/person (Min. 15)</p>
                <ul className="space-y-2 mb-6 text-white/90">
                  <li>• Protein: Chicken Souvlaki, Beef Gyro, Lamb, Falafel</li>
                  <li>• Mezze platter: Hummus, tzatziki, spanakopita, dolmades</li>
                  <li>• Classic Greek salad</li>
                  <li>• Warm pita bread & Hand-cut Greek potatoes</li>
                </ul>
                <Link href="/quote" className="inline-block bg-white text-[#0066FF] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                  Get Custom Quote →
                </Link>
              </div>
            </motion.div>

            {/* Sandwich Platter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#0066FF] text-white rounded-lg overflow-hidden shadow-xl"
            >
              <div className="h-64 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold bg-[#0066FF]/60">
                  [Sandwich Platter Image]
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-4 uppercase">Sandwich Platter</h3>
                <p className="text-lg mb-2 font-semibold">Starting at $89.99 (Serves 6-8)</p>
                <ul className="space-y-2 mb-6 text-white/90">
                  <li>• Mixed Gyro Platter</li>
                  <li>• Souvlaki Skewer Platter</li>
                  <li>• Mezze Appetizer Platter</li>
                  <li>• Signature Greek Salad Platter</li>
                </ul>
                <Link href="/menu" className="inline-block bg-white text-[#0066FF] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                  View Full Menu →
                </Link>
              </div>
            </motion.div>

            {/* Salad Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-[#0066FF] text-white rounded-lg overflow-hidden shadow-xl"
            >
              <div className="h-64 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold bg-[#0066FF]/60">
                  [Fresh Salad Bar Image]
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-4 uppercase">Fresh Salad Bar</h3>
                <p className="text-lg mb-2 font-semibold">Starting at $12.99/person</p>
                <ul className="space-y-2 mb-6 text-white/90">
                  <li>• Choice of protein: Chicken gyro, beef/lamb gyro, falafel or chicken souvlaki</li>
                  <li>• Fresh Greek salad with feta & olives</li>
                  <li>• Pita bread & tzatziki sauce</li>
                  <li>• Roasted potatoes and rice</li>
                </ul>
                <Link href="/quote" className="inline-block bg-white text-[#0066FF] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                  Inquire Now →
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <p className="text-2xl font-bold text-black">Same-Day Catering Delivery Across the GTA</p>
          </div>
        </div>
      </AnimatedSection>

      {/* How It Works Section */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold text-black text-center mb-16 uppercase">
            How It Works
          </h2>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
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
                className="text-center bg-gray-50 p-8 rounded-lg border-2 border-gray-200"
              >
                <div className="text-6xl mb-4">{item.icon}</div>
                <div className="w-16 h-16 bg-[#0066FF] text-white rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Why Choose Us Section */}
      <AnimatedSection className="py-20 bg-[#0066FF] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-16 uppercase">
            Why Choose Gyro City?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                className="text-center p-8 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20"
              >
                <div className="text-6xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white/90">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Delivery Areas Section */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6 uppercase">
            We Deliver Across Toronto
          </h2>
          <p className="text-xl mb-8 text-gray-700 max-w-2xl mx-auto">
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
                className="bg-gray-100 px-6 py-3 rounded-lg border-2 border-[#0066FF] text-black font-semibold"
              >
                {area}
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-black text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-8">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-2xl font-bold text-black mb-3">
                What areas do you serve in Toronto?
              </h3>
              <p className="text-lg text-gray-700">
                We deliver Greek catering across Toronto including Downtown, North York, Mississauga, Markham, Etobicoke, and Scarborough. Same-day delivery available for downtown Toronto orders placed before 11 AM.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-2xl font-bold text-black mb-3">
                Do you offer same-day catering?
              </h3>
              <p className="text-lg text-gray-700">
                Yes! Call (647) 548-8740 before 11 AM for same-day delivery in downtown Toronto. For other areas, we recommend ordering 24-48 hours in advance to ensure availability.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-2xl font-bold text-black mb-3">
                What's your minimum order for catering?
              </h3>
              <p className="text-lg text-gray-700">
                Our minimum is 10 people for individual lunch boxes or $100 for platter orders. No minimum for downtown Toronto office deliveries during business hours.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-2xl font-bold text-black mb-3">
                Is your food halal?
              </h3>
              <p className="text-lg text-gray-700">
                Yes! All our meat options are 100% halal certified. We also offer vegetarian, vegan, and gluten-free options to accommodate all dietary preferences.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-2xl font-bold text-black mb-3">
                Do you have vegetarian and vegan options?
              </h3>
              <p className="text-lg text-gray-700">
                Absolutely! We offer falafel wraps, veggie gyros, hummus platters, fresh Greek salads, and more. All our vegetarian and vegan options are clearly marked on our menu.
              </p>
            </div>

            <div className="pb-6">
              <h3 className="text-2xl font-bold text-black mb-3">
                How far in advance should I order?
              </h3>
              <p className="text-lg text-gray-700">
                For best availability, we recommend ordering 24-48 hours in advance. Same-day orders are available for downtown Toronto (call before 11 AM). For large events (50+ people), please order at least 72 hours in advance.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Final CTA Section */}
      <AnimatedSection className="py-20 bg-[#0066FF] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 uppercase">
            Ready to Order Authentic Greek Catering?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get your free quote today and discover why we're Toronto's favorite Greek catering service
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/quote" className="bg-white text-[#0066FF] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition">
              Get Free Quote →
            </Link>
            <Link href="tel:6475488740" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#0066FF] transition">
              Call (647) 548-8740
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image 
                src="/gyro-city-logo-white.jpg" 
                alt="Gyro City" 
                width={150} 
                height={45} 
                className="h-10 w-auto mb-4"
              />
              <p className="text-gray-400">Toronto's Authentic Greek Catering</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/menu" className="hover:text-white transition">Menu</Link></li>
                <li><Link href="/catering" className="hover:text-white transition">Catering</Link></li>
                <li><Link href="/about" className="hover:text-white transition">About</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Catering Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/catering/office" className="hover:text-white transition">Office Catering</Link></li>
                <li><Link href="/catering/corporate" className="hover:text-white transition">Corporate Events</Link></li>
                <li><Link href="/catering/events" className="hover:text-white transition">Event Catering</Link></li>
                <li><Link href="/catering/funeral" className="hover:text-white transition">Funeral Catering</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Toronto, ON</li>
                <li>Phone: <a href="tel:6475488740" className="hover:text-white transition">(647) 548-8740</a></li>
                <li>Email: <a href="mailto:info@gyrocity.ca" className="hover:text-white transition">info@gyrocity.ca</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Gyro City. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
