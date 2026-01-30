'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/animated-section'

export default function EventCateringPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Moving Text Marquee */}
      <div className="bg-white text-black py-3 overflow-hidden border-b border-gray-200">
        <div className="whitespace-nowrap animate-marquee-slow text-lg font-medium">
          Birthday Parties • Wedding Receptions • Anniversary Celebrations • Family Reunions • Graduation Parties • Engagement Events
          &nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;
          Birthday Parties • Wedding Receptions • Anniversary Celebrations • Family Reunions • Graduation Parties • Engagement Events
          &nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;
          Birthday Parties • Wedding Receptions • Anniversary Celebrations • Family Reunions • Graduation Parties • Engagement Events
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#0066FF] backdrop-blur-lg text-white shadow-lg">
        <div className="container mx-auto px-4 py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded border-2 border-white">
              <span className="text-xl font-bold text-white">GYRO CITY</span>
            </div>
          </Link>
          <div className="hidden md:flex gap-10 items-center">
            <Link href="/" className="hover:text-white/80 transition-colors duration-200 font-medium">Home</Link>
            <Link href="/about" className="hover:text-white/80 transition-colors duration-200 font-medium">About Us</Link>
            <Link href="/catering/corporate" className="hover:text-white/80 transition-colors duration-200 font-medium">Corporate Catering</Link>
            <Link href="/menu" className="hover:text-white/80 transition-colors duration-200 font-medium">Our Menu</Link>
            <Link href="/catering/events" className="hover:text-white/80 transition-colors duration-200 font-medium underline underline-offset-4">Event Catering</Link>
            <Link href="/quote" className="bg-white text-[#0066FF] px-6 py-2.5 rounded-lg text-base font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg">
              Get a Quote
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0066FF] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-playfair mb-6">
            Toronto Event Catering
          </h1>
          <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto">
            Make Your Celebration Unforgettable with Greek Cuisine
          </p>
          <p className="text-lg mb-10 max-w-2xl mx-auto opacity-90">
            From intimate gatherings to grand celebrations, bring authentic Greek flavors to your special event.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/quote" className="bg-white text-[#0066FF] px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all shadow-lg">
              GET EVENT QUOTE
            </Link>
            <Link href="/menu" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#0066FF] transition-all">
              VIEW PARTY MENU
            </Link>
            <Link href="tel:6475488740" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#0066FF] transition-all">
              CALL US NOW
            </Link>
          </div>
          <p className="text-sm mt-8 opacity-80">
            ⭐ Trusted for 500+ celebrations across Toronto and the GTA
          </p>
        </div>
      </section>

      {/* Why Choose Section */}
      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-12 text-center text-black">
            Why Toronto Celebrates with Gyro City
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Celebration Specialists */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white border-2 border-[#0066FF] rounded-xl p-6"
            >
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold mb-3 text-black">Celebration Specialists</h3>
              <p className="text-gray-700 mb-4">
                We understand that every event is special. Our team brings passion and expertise to make your celebration delicious and stress-free.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 10+ years catering Toronto events</li>
                <li>• Flexible menu customization</li>
                <li>• Event planning consultation</li>
                <li>• Professional presentation</li>
                <li>• Memorable Greek experience</li>
              </ul>
            </motion.div>

            {/* Authentic Greek Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white border-2 border-[#0066FF] rounded-xl p-6"
            >
              <div className="text-4xl mb-4">🍴</div>
              <h3 className="text-2xl font-bold mb-3 text-black">Authentic Greek Experience</h3>
              <p className="text-gray-700 mb-4">
                Not just food - it's an experience. Traditional recipes, fresh ingredients, and that special Greek touch that guests remember.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Live gyro carving stations</li>
                <li>• Interactive food displays</li>
                <li>• Traditional Greek music (on request)</li>
                <li>• Beautiful Mediterranean presentation</li>
                <li>• Signature dishes that wow</li>
              </ul>
            </motion.div>

            {/* Any Size, Any Venue */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white border-2 border-[#0066FF] rounded-xl p-6"
            >
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-2xl font-bold mb-3 text-black">Any Size, Any Venue</h3>
              <p className="text-gray-700 mb-4">
                From backyard parties for 20 to grand ballroom events for 300+. We scale seamlessly to your celebration.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Intimate gatherings (15-30 guests)</li>
                <li>• Mid-size parties (30-100 guests)</li>
                <li>• Large celebrations (100-200 guests)</li>
                <li>• Grand events (200+ guests)</li>
                <li>• Multiple location coordination</li>
              </ul>
            </motion.div>

            {/* Premium Yet Affordable */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white border-2 border-[#0066FF] rounded-xl p-6"
            >
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-2xl font-bold mb-3 text-black">Premium Yet Affordable</h3>
              <p className="text-gray-700 mb-4">
                Exceptional quality that fits your budget. Transparent pricing with no hidden fees.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Packages from $19.99/person</li>
                <li>• Custom quotes available</li>
                <li>• All-inclusive pricing</li>
                <li>• Flexible payment plans</li>
                <li>• Group discounts</li>
              </ul>
            </motion.div>

            {/* Complete Service Options */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white border-2 border-[#0066FF] rounded-xl p-6"
            >
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold mb-3 text-black">Complete Service Options</h3>
              <p className="text-gray-700 mb-4">
                From drop-off to full-service with staff. Choose the level of service that fits your event.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Drop-off & setup</li>
                <li>• Buffet service with attendants</li>
                <li>• Plated service with waitstaff</li>
                <li>• Interactive food stations</li>
                <li>• Full event coordination</li>
              </ul>
            </motion.div>

            {/* Flexible & Reliable */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white border-2 border-[#0066FF] rounded-xl p-6"
            >
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-2xl font-bold mb-3 text-black">Flexible & Reliable</h3>
              <p className="text-gray-700 mb-4">
                We work around your schedule and venue. Early morning setups, late-night events - we're there when you need us.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Weekend & evening availability</li>
                <li>• Early breakfast events</li>
                <li>• Late-night party service</li>
                <li>• Venue coordination</li>
                <li>• Rain plan alternatives (outdoor events)</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Event Types Section */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-12 text-center text-black">
            Greek Catering for Every Toronto Celebration
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Birthday Parties */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border-2 border-[#0066FF] rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-2 text-black">🎂 Birthday Parties</h3>
              <p className="text-[#0066FF] font-semibold mb-4">From $19.99/person • 15+ guests</p>
              <p className="mb-4 text-gray-700">Make birthdays special with Greek flavors:</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li>• Custom menu for any age group</li>
                <li>• Kids' favorites & adult options</li>
                <li>• Interactive gyro stations</li>
                <li>• Birthday dessert displays</li>
                <li>• Fun, festive presentation</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="font-semibold mb-2 text-black">Popular setups:</p>
                <p className="text-sm text-gray-600">Build-your-own gyro bar • Mediterranean mezze station • Greek dessert table</p>
              </div>
              <p className="text-xs text-gray-600 mb-4">Perfect for: Kids' birthdays, milestone birthdays (30th, 40th, 50th), surprise parties</p>
              <Link href="/quote" className="inline-block bg-white text-[#0066FF] border-2 border-[#0066FF] px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-all">
                Get Birthday Quote →
              </Link>
            </motion.div>

            {/* Wedding Receptions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white border-2 border-[#0066FF] rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-2 text-black">💍 Wedding Receptions</h3>
              <p className="text-[#0066FF] font-semibold mb-4">From $29.99/person • 50+ guests</p>
              <p className="mb-4 text-gray-700">Elegant Greek cuisine for your special day:</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li>• Customizable wedding menus</li>
                <li>• Cocktail hour stations</li>
                <li>• Plated or buffet service</li>
                <li>• Professional waitstaff included</li>
                <li>• Coordination with venue & planner</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="font-semibold mb-2 text-black">Special touches:</p>
                <p className="text-sm text-gray-600">Complimentary bride & groom tasting • Custom menu cards • Elegant presentation</p>
              </div>
              <p className="text-xs text-gray-600 mb-4">Perfect for: Wedding receptions, rehearsal dinners, bridal showers</p>
              <Link href="/quote" className="inline-block bg-white text-[#0066FF] border-2 border-[#0066FF] px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-all">
                Get Wedding Quote →
              </Link>
            </motion.div>

            {/* Anniversary Celebrations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white border-2 border-[#0066FF] rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-2 text-black">💑 Anniversary Celebrations</h3>
              <p className="text-[#0066FF] font-semibold mb-4">From $24.99/person • 20+ guests</p>
              <p className="mb-4 text-gray-700">Celebrate love with authentic Greek hospitality:</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li>• Romantic Mediterranean atmosphere</li>
                <li>• Premium protein selections</li>
                <li>• Elegant presentation</li>
                <li>• Champagne service coordination</li>
                <li>• Custom anniversary touches</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="font-semibold mb-2 text-black">Popular choices:</p>
                <p className="text-sm text-gray-600">Upscale Greek buffet • Family-style feast • Intimate plated dinner</p>
              </div>
              <p className="text-xs text-gray-600 mb-4">Perfect for: 25th, 50th anniversaries, vow renewals</p>
              <Link href="/quote" className="inline-block bg-white text-[#0066FF] border-2 border-[#0066FF] px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-all">
                Get Anniversary Quote →
              </Link>
            </motion.div>

            {/* Family Reunions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white border-2 border-[#0066FF] rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-2 text-black">👨‍👩‍👧‍👦 Family Reunions</h3>
              <p className="text-[#0066FF] font-semibold mb-4">From $18.99/person • 30+ guests</p>
              <p className="mb-4 text-gray-700">Bring families together over great food:</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li>• Large group-friendly menus</li>
                <li>• Options for all ages & tastes</li>
                <li>• Family-style sharing platters</li>
                <li>• Casual or formal setup</li>
                <li>• Easy coordination</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="font-semibold mb-2 text-black">Reunion favorites:</p>
                <p className="text-sm text-gray-600">Mixed grill platters • Large Greek salads • Kid-friendly options</p>
              </div>
              <p className="text-xs text-gray-600 mb-4">Perfect for: Extended family gatherings, clan reunions, multi-generational events</p>
              <Link href="/quote" className="inline-block bg-white text-[#0066FF] border-2 border-[#0066FF] px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-all">
                Get Reunion Quote →
              </Link>
            </motion.div>

            {/* Graduation Parties */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white border-2 border-[#0066FF] rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-2 text-black">🎓 Graduation Parties</h3>
              <p className="text-[#0066FF] font-semibold mb-4">From $17.99/person • 25+ guests</p>
              <p className="mb-4 text-gray-700">Celebrate achievements deliciously:</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li>• Teen & young adult-friendly menus</li>
                <li>• Interactive food stations</li>
                <li>• Casual party atmosphere</li>
                <li>• Budget-conscious packages</li>
                <li>• Easy setup & cleanup</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="font-semibold mb-2 text-black">Grad party hits:</p>
                <p className="text-sm text-gray-600">Gyro station • Greek fries & dips bar • Cookie platters</p>
              </div>
              <p className="text-xs text-gray-600 mb-4">Perfect for: High school graduations, college celebrations, PhD parties</p>
              <Link href="/quote" className="inline-block bg-white text-[#0066FF] border-2 border-[#0066FF] px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-all">
                Get Graduation Quote →
              </Link>
            </motion.div>

            {/* Engagement Parties */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-white border-2 border-[#0066FF] rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-2 text-black">💍 Engagement Parties</h3>
              <p className="text-[#0066FF] font-semibold mb-4">From $22.99/person • 30+ guests</p>
              <p className="mb-4 text-gray-700">Start your journey with Greek celebration:</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li>• Sophisticated menu options</li>
                <li>• Cocktail party style</li>
                <li>• Passed appetizers available</li>
                <li>• Champagne coordination</li>
                <li>• Romantic presentation</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="font-semibold mb-2 text-black">Engagement favorites:</p>
                <p className="text-sm text-gray-600">Mediterranean mezze display • Mini gyro sliders • Elegant desserts</p>
              </div>
              <p className="text-xs text-gray-600 mb-4">Perfect for: Engagement announcements, couples showers</p>
              <Link href="/quote" className="inline-block bg-white text-[#0066FF] border-2 border-[#0066FF] px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-all">
                Get Engagement Quote →
              </Link>
            </motion.div>

            {/* Holiday Parties */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-white border-2 border-[#0066FF] rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-2 text-black">🎄 Holiday Parties</h3>
              <p className="text-[#0066FF] font-semibold mb-4">From $21.99/person • 20+ guests</p>
              <p className="mb-4 text-gray-700">Celebrate holidays with Mediterranean flair:</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li>• Festive Greek menus</li>
                <li>• Seasonal touches</li>
                <li>• Party atmosphere</li>
                <li>• Flexible service</li>
                <li>• Holiday decorations coordination</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="font-semibold mb-2 text-black">Holiday options:</p>
                <p className="text-sm text-gray-600">Christmas Greek feast • New Year's Eve buffet • Easter lamb celebration</p>
              </div>
              <p className="text-xs text-gray-600 mb-4">Perfect for: Christmas parties, New Year's celebrations, Easter, Thanksgiving</p>
              <Link href="/quote" className="inline-block bg-white text-[#0066FF] border-2 border-[#0066FF] px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-all">
                Get Holiday Quote →
              </Link>
            </motion.div>

            {/* Backyard BBQ Events */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="bg-white border-2 border-[#0066FF] rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-2 text-black">🔥 Backyard BBQ Events</h3>
              <p className="text-[#0066FF] font-semibold mb-4">From $19.99/person • 20+ guests</p>
              <p className="mb-4 text-gray-700">Greek BBQ with a twist:</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li>• Grilled Greek specialties</li>
                <li>• Outdoor-friendly setup</li>
                <li>• Casual party vibe</li>
                <li>• Weather backup plans</li>
                <li>• Full cleanup included</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="font-semibold mb-2 text-black">BBQ favorites:</p>
                <p className="text-sm text-gray-600">Grilled souvlaki • Lamb chops • Greek salads & sides • Pita & dips</p>
              </div>
              <p className="text-xs text-gray-600 mb-4">Perfect for: Summer parties, casual gatherings, pool parties</p>
              <Link href="/quote" className="inline-block bg-white text-[#0066FF] border-2 border-[#0066FF] px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-all">
                Get BBQ Quote →
              </Link>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Party Packages Section */}
      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-12 text-center text-black">
            Toronto Event Catering Packages
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Classic Party Package */}
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2 text-black">Classic Party Package</h3>
              <p className="text-3xl font-bold text-[#0066FF] mb-2">$19.99<span className="text-base text-gray-600">/person</span></p>
              <p className="text-sm text-gray-600 mb-4">Minimum 20 guests</p>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>• Choice of 2 proteins</li>
                <li>• Greek salad</li>
                <li>• Rice pilaf & roasted potatoes</li>
                <li>• Pita & tzatziki</li>
                <li>• Greek cookies</li>
                <li>• All serving supplies</li>
              </ul>
              <p className="text-xs text-gray-600 mb-4">Best for: Birthdays, casual gatherings, family parties</p>
              <Link href="/quote" className="inline-block w-full text-center bg-white border-2 border-[#0066FF] text-[#0066FF] px-4 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-all">
                Get Quote
              </Link>
            </div>

            {/* Premium Celebration Package */}
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6 relative">
              <div className="absolute top-0 right-0 bg-[#0066FF] text-white px-3 py-1 rounded-bl-lg rounded-tr-lg text-xs font-bold">
                POPULAR
              </div>
              <h3 className="text-xl font-bold mb-2 text-black">Premium Celebration</h3>
              <p className="text-3xl font-bold text-[#0066FF] mb-2">$26.99<span className="text-base text-gray-600">/person</span></p>
              <p className="text-sm text-gray-600 mb-4">Minimum 25 guests</p>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>• Mixed grill (3 proteins)</li>
                <li>• Greek salad with imported feta</li>
                <li>• Spanakopita & tiropita</li>
                <li>• Lemon potatoes & rice</li>
                <li>• Mezze trio</li>
                <li>• Premium baklava</li>
                <li>• All serving supplies</li>
              </ul>
              <p className="text-xs text-gray-600 mb-4">Best for: Milestone birthdays, anniversaries, engagement parties</p>
              <Link href="/quote" className="inline-block w-full text-center bg-[#0066FF] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all">
                Get Quote
              </Link>
            </div>

            {/* Deluxe Event Package */}
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2 text-black">Deluxe Event Package</h3>
              <p className="text-3xl font-bold text-[#0066FF] mb-2">$34.99<span className="text-base text-gray-600">/person</span></p>
              <p className="text-sm text-gray-600 mb-4">Minimum 30 guests</p>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>• Premium proteins (lamb, beef, shrimp)</li>
                <li>• Gourmet Greek salad</li>
                <li>• Multiple appetizers</li>
                <li>• Spanakopita, tiropita, dolmades</li>
                <li>• Roasted vegetables</li>
                <li>• Greek dessert selection</li>
                <li>• Premium coffee service</li>
              </ul>
              <p className="text-xs text-gray-600 mb-4">Best for: Weddings, large anniversaries, upscale events</p>
              <Link href="/quote" className="inline-block w-full text-center bg-white border-2 border-[#0066FF] text-[#0066FF] px-4 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-all">
                Get Quote
              </Link>
            </div>

            {/* Interactive Station Package */}
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2 text-black">Interactive Stations</h3>
              <p className="text-3xl font-bold text-[#0066FF] mb-2">$29.99<span className="text-base text-gray-600">/person</span></p>
              <p className="text-sm text-gray-600 mb-4">Minimum 40 guests</p>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>• Live gyro carving station</li>
                <li>• Build-your-own souvlaki bar</li>
                <li>• Mediterranean mezze station</li>
                <li>• Greek salad bar</li>
                <li>• Dessert display</li>
                <li>• Station attendants included</li>
              </ul>
              <p className="text-xs text-gray-600 mb-4">Best for: Wedding receptions, corporate celebrations, large parties</p>
              <Link href="/quote" className="inline-block w-full text-center bg-white border-2 border-[#0066FF] text-[#0066FF] px-4 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-all">
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Service Options Section */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-12 text-center text-black">
            Catering Service Options for Your Toronto Event
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2 text-black">Drop-Off Catering</h3>
              <p className="text-sm text-[#0066FF] font-semibold mb-4">Most economical option</p>
              <ul className="space-y-2 text-sm text-gray-700 mb-4">
                <li>• We deliver & set up</li>
                <li>• Professional presentation</li>
                <li>• All serving supplies included</li>
                <li>• Heating instructions provided</li>
                <li>• You serve your guests</li>
              </ul>
              <p className="text-xs text-gray-600">Add-on: Pickup service next day (+$50)</p>
            </div>

            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2 text-black">Buffet Service</h3>
              <p className="text-sm text-[#0066FF] font-semibold mb-4">Popular choice</p>
              <ul className="space-y-2 text-sm text-gray-700 mb-4">
                <li>• Complete setup with warmers</li>
                <li>• Buffet attendants (2 hours)</li>
                <li>• Replenishment & maintenance</li>
                <li>• Professional presentation</li>
                <li>• Cleanup & breakdown</li>
              </ul>
              <p className="text-xs text-gray-600">Best for: Events 50+ guests</p>
            </div>

            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2 text-black">Plated Service</h3>
              <p className="text-sm text-[#0066FF] font-semibold mb-4">Formal events</p>
              <ul className="space-y-2 text-sm text-gray-700 mb-4">
                <li>• Professional waitstaff</li>
                <li>• Plated courses</li>
                <li>• Table service</li>
                <li>• Course coordination</li>
                <li>• Full cleanup</li>
              </ul>
              <p className="text-xs text-gray-600">Best for: Weddings, formal celebrations, seated dinners</p>
            </div>

            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2 text-black">Interactive Stations</h3>
              <p className="text-sm text-[#0066FF] font-semibold mb-4">Memorable experience</p>
              <ul className="space-y-2 text-sm text-gray-700 mb-4">
                <li>• Live cooking stations</li>
                <li>• Chef attendants</li>
                <li>• Guest interaction</li>
                <li>• Fresh preparation</li>
                <li>• Entertainment value</li>
              </ul>
              <p className="text-xs text-gray-600">Best for: Large parties, weddings, corporate events</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Venue Support Section */}
      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-8 text-center text-black">
            We Cater at Any Toronto Venue
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 text-black">🏠 Home & Backyard Events</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Residential catering</li>
                <li>• Tent coordination</li>
                <li>• Outdoor setup expertise</li>
                <li>• Weather contingency planning</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 text-black">🏛️ Banquet Halls</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Work with venue requirements</li>
                <li>• Kitchen coordination</li>
                <li>• Timeline sync</li>
                <li>• Setup & breakdown</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 text-black">🌳 Parks & Outdoor Venues</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Permit-friendly service</li>
                <li>• Portable setup</li>
                <li>• Weather backup plans</li>
                <li>• Leave-no-trace cleanup</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 text-black">🏢 Community Centers</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Facility coordination</li>
                <li>• Kitchen access or self-contained</li>
                <li>• Timing flexibility</li>
                <li>• Community-friendly service</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 text-black">🍽️ Restaurants & Private Dining</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Supplement venue menus</li>
                <li>• Specialized Greek offerings</li>
                <li>• Coordinate with venue staff</li>
                <li>• Seamless integration</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 text-black">⛪ Churches & Cultural Centers</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Respectful service</li>
                <li>• Dietary accommodation</li>
                <li>• Cultural sensitivity</li>
                <li>• Community experience</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/contact" className="inline-block text-[#0066FF] font-semibold hover:underline">
              Discuss Your Venue →
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Dietary Accommodations Section */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6 text-center text-black">
            Event Catering for All Dietary Needs
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center">
            We ensure every guest enjoys your celebration
          </p>
          
          <div className="bg-white border-2 border-[#0066FF] rounded-xl p-8 mb-8">
            <h3 className="text-xl font-bold mb-4 text-black">Accommodations:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-gray-700">
                <li>✅ Halal certified proteins</li>
                <li>✅ Vegetarian & vegan options</li>
                <li>✅ Gluten-free preparations</li>
                <li>✅ Nut-free available</li>
              </ul>
              <ul className="space-y-2 text-gray-700">
                <li>✅ Kosher (with advance notice)</li>
                <li>✅ Allergy-safe options</li>
                <li>✅ Kids' menus</li>
              </ul>
            </div>
          </div>

          <div className="bg-white border-2 border-[#0066FF] rounded-xl p-8">
            <h3 className="text-xl font-bold mb-4 text-black">Our Process:</h3>
            <ol className="space-y-3 text-gray-700">
              <li>1. Collect dietary requirements in advance</li>
              <li>2. Create separate dishes or modifications</li>
              <li>3. Label all items clearly at event</li>
              <li>4. Brief serving staff on allergies</li>
              <li>5. Provide ingredient lists if needed</li>
            </ol>
          </div>

          <div className="text-center mt-8">
            <Link href="/quote" className="inline-block bg-white text-[#0066FF] border-2 border-[#0066FF] px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all">
              Discuss Dietary Needs →
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Add-Ons & Extras Section */}
      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-12 text-center text-black">
            Event Catering Add-Ons & Extras
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2 text-black">Appetizer Stations</h3>
              <p className="text-[#0066FF] font-semibold mb-4">Starting at $8.99/person</p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Greek mezze display</li>
                <li>• Spanakopita & tiropita platter</li>
                <li>• Dolmades & olives</li>
                <li>• Hummus & dips trio</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2 text-black">Dessert Upgrades</h3>
              <p className="text-[#0066FF] font-semibold mb-4">Starting at $5.99/person</p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Premium baklava display</li>
                <li>• Greek cookie platters</li>
                <li>• Loukoumades (honey donuts)</li>
                <li>• Galaktoboureko</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2 text-black">Beverage Service</h3>
              <p className="text-[#0066FF] font-semibold mb-4">Starting at $4.99/person</p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Soft drinks & juices</li>
                <li>• Coffee & tea service</li>
                <li>• Greek coffee</li>
                <li>• Iced beverages</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2 text-black">Rental Coordination</h3>
              <p className="text-[#0066FF] font-semibold mb-4">Prices vary</p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Tables & chairs</li>
                <li>• Linens & tableware</li>
                <li>• Chafing dishes</li>
                <li>• Tent rentals (through partners)</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2 text-black">Staffing</h3>
              <p className="text-[#0066FF] font-semibold mb-4">Starting at $35/hour/person</p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Serving staff</li>
                <li>• Bartenders</li>
                <li>• Event coordinators</li>
                <li>• Cleanup crew</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/quote" className="inline-block text-[#0066FF] font-semibold hover:underline text-lg">
              Customize Your Event →
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-12 text-center text-black">
            What Toronto Celebrates Say
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-8">
              <div className="text-[#0066FF] mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-lg font-bold mb-2 text-black">"Made our wedding reception perfect!"</p>
              <p className="text-gray-700 mb-4">
                "Gyro City catered our 150-person wedding at Liberty Grand. The food was absolutely incredible - our guests are still raving about it months later. The lamb was perfection and the service was seamless. Thank you for being part of our special day!"
              </p>
              <p className="font-semibold text-black">— Maria & John</p>
              <p className="text-sm text-gray-600">Wedding Reception, Toronto</p>
            </div>

            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-8">
              <div className="text-[#0066FF] mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-lg font-bold mb-2 text-black">"Best birthday party ever!"</p>
              <p className="text-gray-700 mb-4">
                "For my dad's 60th birthday, we wanted something special. Gyro City delivered beyond expectations. The live gyro station was a huge hit, food was fresh and delicious, and they handled everything so we could enjoy the party."
              </p>
              <p className="font-semibold text-black">— Sofia K.</p>
              <p className="text-sm text-gray-600">60th Birthday Party, Scarborough</p>
            </div>

            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-8">
              <div className="text-[#0066FF] mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-lg font-bold mb-2 text-black">"Family reunion success!"</p>
              <p className="text-gray-700 mb-4">
                "Fed 80 family members from across Canada. The variety, quality, and presentation were outstanding. They accommodated vegetarian, gluten-free, and kids' preferences perfectly. Worth every penny!"
              </p>
              <p className="font-semibold text-black">— Chen Family</p>
              <p className="text-sm text-gray-600">Family Reunion, Markham</p>
            </div>

            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-8">
              <div className="text-[#0066FF] mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-lg font-bold mb-2 text-black">"Graduation party hit!"</p>
              <p className="text-gray-700 mb-4">
                "My daughter's graduation party was stress-free thanks to Gyro City. The teens loved the build-your-own gyro bar, and the adults enjoyed the quality Greek food. Setup was quick and cleanup was easy."
              </p>
              <p className="font-semibold text-black">— Patricia W.</p>
              <p className="text-sm text-gray-600">High School Graduation, Etobicoke</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-12 text-center text-black">
            Event Catering FAQ
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white border-l-4 border-[#0066FF] p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2 text-black">How far in advance should we book for a large event?</h3>
              <p className="text-gray-700">We recommend 4-6 weeks for weddings (100+ guests), 2-3 weeks for parties (50+), and 1 week for smaller gatherings. Last-minute catering available for smaller groups.</p>
            </div>

            <div className="bg-white border-l-4 border-[#0066FF] p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2 text-black">Do you provide serving staff?</h3>
              <p className="text-gray-700">Yes! Serving staff, bartenders, and event coordinators available for events of all sizes.</p>
            </div>

            <div className="bg-white border-l-4 border-[#0066FF] p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2 text-black">Can you work with our event planner/venue?</h3>
              <p className="text-gray-700">Absolutely. We coordinate seamlessly with planners, venues, DJs, photographers - your whole vendor team.</p>
            </div>

            <div className="bg-white border-l-4 border-[#0066FF] p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2 text-black">What about outdoor events if it rains?</h3>
              <p className="text-gray-700">We always have contingency plans. Covered setups, weather-protected food service, and backup timing.</p>
            </div>

            <div className="bg-white border-l-4 border-[#0066FF] p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2 text-black">Do you offer tastings?</h3>
              <p className="text-gray-700">Yes! Complimentary tastings for events 75+ guests or weddings. Paid tastings ($150, credited to event) for other events.</p>
            </div>

            <div className="bg-white border-l-4 border-[#0066FF] p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2 text-black">Can we customize the menu?</h3>
              <p className="text-gray-700">100% yes. We work with you to create the perfect menu for your event and budget.</p>
            </div>

            <div className="bg-white border-l-4 border-[#0066FF] p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2 text-black">What's included in the price?</h3>
              <p className="text-gray-700">Food, serving supplies, basic setup, and cleanup. Staffing, rentals, and premium add-ons are extra.</p>
            </div>

            <div className="bg-white border-l-4 border-[#0066FF] p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2 text-black">How do payments work?</h3>
              <p className="text-gray-700">50% deposit to secure date, remainder due 48 hours before event. Multiple payment methods accepted.</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/contact" className="inline-block text-[#0066FF] font-semibold hover:underline text-lg">
              More Questions? Contact Us →
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Planning Timeline Section */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-12 text-center text-black">
            Event Catering Planning Timeline
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-black">6-8 Weeks Before (Weddings/Large Events)</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Book catering date</li>
                <li>• Initial menu consultation</li>
                <li>• Discuss dietary needs</li>
                <li>• Venue coordination</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-black">3-4 Weeks Before</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Finalize menu selections</li>
                <li>• Confirm guest count estimate</li>
                <li>• Discuss setup details</li>
                <li>• Coordinate with other vendors</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-black">1-2 Weeks Before</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Final guest count</li>
                <li>• Confirm timing & logistics</li>
                <li>• Complete payment</li>
                <li>• Menu adjustments if needed</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-black">2-3 Days Before</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Venue walkthrough (if needed)</li>
                <li>• Final coordination call</li>
                <li>• Confirm delivery/setup time</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-black">Event Day</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Early arrival for setup</li>
                <li>• Food arrives fresh & hot</li>
                <li>• Professional service</li>
                <li>• Cleanup & breakdown</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/quote" className="inline-block bg-white text-[#0066FF] border-2 border-[#0066FF] px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all">
              Start Planning Your Event →
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Final CTA Section */}
      <AnimatedSection className="py-20 bg-[#0066FF] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6">
            Ready to Make Your Toronto Event Unforgettable?
          </h2>
          <p className="text-xl mb-4 max-w-2xl mx-auto">
            Let's create something delicious together
          </p>
          <p className="text-lg mb-10 max-w-3xl mx-auto opacity-90">
            Our event catering specialists are ready to help plan your perfect celebration. From intimate gatherings to grand parties, we deliver authentic Greek cuisine with warm hospitality.
          </p>
          <div className="bg-white/10 backdrop-blur-sm border-2 border-white rounded-xl p-6 max-w-2xl mx-auto mb-10">
            <p className="text-xl font-bold mb-2">🎉 Special Offer</p>
            <p className="text-lg">Book your event in the next 30 days and receive a complimentary appetizer station for parties 50+ guests!</p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/quote" className="bg-white text-[#0066FF] px-10 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all shadow-lg">
              GET EVENT QUOTE
            </Link>
            <Link href="tel:6475488740" className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#0066FF] transition-all">
              CALL (647) 548-8740
            </Link>
            <Link href="/menu" className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#0066FF] transition-all">
              VIEW PARTY MENU
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Related Services Section */}
      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-playfair mb-8 text-center text-black">
            More Catering Solutions
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Link href="/catering/office" className="bg-white border-2 border-[#0066FF] rounded-xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold mb-2 text-black">Office Catering</h3>
              <p className="text-sm text-gray-600">Daily lunch delivery for your Toronto team</p>
            </Link>

            <Link href="/catering/corporate" className="bg-white border-2 border-[#0066FF] rounded-xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold mb-2 text-black">Corporate Catering</h3>
              <p className="text-sm text-gray-600">Professional business events & conferences</p>
            </Link>

            <Link href="/catering/funeral" className="bg-white border-2 border-[#0066FF] rounded-xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold mb-2 text-black">Funeral Catering</h3>
              <p className="text-sm text-gray-600">Compassionate service for difficult times</p>
            </Link>

            <Link href="/menu" className="bg-white border-2 border-[#0066FF] rounded-xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold mb-2 text-black">View Full Menu</h3>
              <p className="text-sm text-gray-600">Browse our complete catering menu</p>
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4">GYRO CITY</h3>
              <p className="text-gray-400">Toronto's Authentic Greek Catering</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/menu" className="hover:text-white">Menu</Link></li>
                <li><Link href="/about" className="hover:text-white">About</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link href="/quote" className="hover:text-white">Get Quote</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Catering Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/catering/office" className="hover:text-white">Office Catering</Link></li>
                <li><Link href="/catering/corporate" className="hover:text-white">Corporate Events</Link></li>
                <li><Link href="/catering/events" className="hover:text-white">Event Catering</Link></li>
                <li><Link href="/catering/funeral" className="hover:text-white">Funeral Catering</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Toronto, ON</li>
                <li>Phone: <a href="tel:6475488740" className="hover:text-white">(647) 548-8740</a></li>
                <li>Email: <a href="mailto:info@gyrocity.ca" className="hover:text-white">info@gyrocity.ca</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Gyro City. All rights reserved. Event catering Toronto • Greek party catering • Birthday parties • Wedding receptions</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
