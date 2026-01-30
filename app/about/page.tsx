'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/animated-section'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Moving Text Marquee */}
      <div className="bg-white text-black py-3 overflow-hidden border-b border-gray-200">
        <div className="whitespace-nowrap animate-marquee-slow text-lg font-medium">
          Family-Owned Since 2014 • 10,000+ Events Served • Authentic Greek Recipes • Toronto's Trusted Catering
          &nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;
          Family-Owned Since 2014 • 10,000+ Events Served • Authentic Greek Recipes • Toronto's Trusted Catering
          &nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;
          Family-Owned Since 2014 • 10,000+ Events Served • Authentic Greek Recipes • Toronto's Trusted Catering
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
            <Link href="/" className="hover:text-white/80 transition-colors duration-200 font-medium">Home</Link>
            <Link href="/about" className="hover:text-white/80 transition-colors duration-200 font-medium underline underline-offset-4">About Us</Link>
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
      <section className="relative min-h-[60vh] flex items-center bg-[#0066FF] text-white overflow-hidden">
        <div className="container mx-auto px-4 py-20 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-playfair leading-tight mb-6">
              About Gyro City - Toronto's Greek Catering Experts
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Bringing authentic Greek hospitality to Toronto since 2014. One gyro at a time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 text-center">
              Our Story: From Family Recipes to Toronto's Favorite Greek Catering
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                <strong className="text-black">Gyro City</strong> started with a simple belief: Toronto deserves authentic Greek food made with love, served with the warmth of Mediterranean hospitality.
              </p>
              
              <p>
                Founded in 2014, we began as a small family operation serving office lunches in downtown Toronto. Today, we're proud to be Toronto's trusted Greek catering service, having served over <strong className="text-[#0066FF]">10,000 events</strong> across the GTA - from intimate office lunches to grand weddings, from corporate conferences to compassionate funeral services.
              </p>
              
              <p className="text-xl font-semibold text-black text-center py-4">
                But no matter how much we've grown, our commitment remains the same: fresh ingredients, traditional recipes, and exceptional service.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Mission & Values Section */}
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-16 text-center uppercase">
            What Drives Us Every Day
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Authentic Greek Cuisine */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white border-4 border-[#0066FF] rounded-xl p-8"
            >
              <div className="text-5xl mb-4">🍴</div>
              <h3 className="text-2xl font-bold text-black mb-3">Authentic Greek Cuisine</h3>
              <p className="text-sm font-semibold text-[#0066FF] mb-4">Real recipes, real ingredients</p>
              <p className="text-gray-700">
                No shortcuts. No frozen food. We prepare everything fresh daily using traditional Greek recipes passed down through generations. Our tzatziki is made from scratch. Our meats are marinated for 24 hours. Our spanakopita is hand-rolled. That's the Greek way.
              </p>
            </motion.div>

            {/* Family Values */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white border-4 border-[#0066FF] rounded-xl p-8"
            >
              <div className="text-5xl mb-4">❤️</div>
              <h3 className="text-2xl font-bold text-black mb-3">Family Values</h3>
              <p className="text-sm font-semibold text-[#0066FF] mb-4">Run like family, served with heart</p>
              <p className="text-gray-700">
                We're a family-owned business, and we treat every customer like family. That means honest pricing, reliable service, and food we're proud to serve. No corporate nonsense - just real people who care about your event.
              </p>
            </motion.div>

            {/* Excellence in Service */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white border-4 border-[#0066FF] rounded-xl p-8"
            >
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-black mb-3">Excellence in Service</h3>
              <p className="text-sm font-semibold text-[#0066FF] mb-4">Your event, our reputation</p>
              <p className="text-gray-700">
                When you trust us with your catering, we take it seriously. We show up on time (always), deliver exactly what we promised (no surprises), and handle every detail professionally. Your success is our success.
              </p>
            </motion.div>

            {/* Community Focused */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white border-4 border-[#0066FF] rounded-xl p-8"
            >
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-2xl font-bold text-black mb-3">Community Focused</h3>
              <p className="text-sm font-semibold text-[#0066FF] mb-4">Proud to serve Toronto</p>
              <p className="text-gray-700">
                We're not just based in Toronto - we're part of Toronto. We support local suppliers, hire locally, and give back to the community that's supported us. When you choose Gyro City, you're supporting a local family business.
              </p>
            </motion.div>

            {/* Integrity First */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white border-4 border-[#0066FF] rounded-xl p-8"
            >
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold text-black mb-3">Integrity First</h3>
              <p className="text-sm font-semibold text-[#0066FF] mb-4">Honest, transparent, trustworthy</p>
              <p className="text-gray-700">
                What we quote is what you pay. What we promise is what we deliver. No hidden fees, no bait-and-switch, no games. We do business the old-fashioned way - with integrity.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Why Toronto Chooses Gyro City */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-16 text-center uppercase">
            Why Toronto Chooses Gyro City
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* 10+ Years Experience */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white border-4 border-[#0066FF] rounded-xl p-8"
            >
              <div className="text-5xl mb-4">📅</div>
              <h3 className="text-2xl font-bold text-black mb-3">10+ Years Experience</h3>
              <p className="text-sm font-semibold text-[#0066FF] mb-4">Since 2014 | 10,000+ Events Served</p>
              <p className="text-gray-700 mb-4">
                We've catered everything from 10-person office lunches to 500-person weddings. Small family funerals to corporate galas. We've seen it all and learned how to do it right.
              </p>
              <div className="text-sm text-gray-600 space-y-1">
                <p>✓ Handle dietary restrictions</p>
                <p>✓ Expert timing and logistics</p>
                <p>✓ Relationships with GTA venues</p>
                <p>✓ Backup plans for everything</p>
              </div>
            </motion.div>

            {/* Traditional Greek Recipes */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white border-4 border-[#0066FF] rounded-xl p-8"
            >
              <div className="text-5xl mb-4">👨‍🍳</div>
              <h3 className="text-2xl font-bold text-black mb-3">Traditional Greek Recipes</h3>
              <p className="text-sm font-semibold text-[#0066FF] mb-4">Passed down through generations</p>
              <p className="text-gray-700 mb-4">
                Our recipes come from Greece - specifically from Thessaloniki and the islands. These aren't "inspired by" Greek recipes. These ARE Greek recipes, prepared the way Greeks have made them for centuries.
              </p>
              <div className="text-sm text-gray-600 space-y-1">
                <p>✓ Imported Greek ingredients</p>
                <p>✓ Traditional cooking methods</p>
                <p>✓ Proper seasoning and marination</p>
                <p>✓ Real Greek taste</p>
              </div>
            </motion.div>

            {/* Fresh Daily Preparation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white border-4 border-[#0066FF] rounded-xl p-8"
            >
              <div className="text-5xl mb-4">🥙</div>
              <h3 className="text-2xl font-bold text-black mb-3">Fresh Daily Preparation</h3>
              <p className="text-sm font-semibold text-[#0066FF] mb-4">Never frozen, always fresh</p>
              <p className="text-gray-700 mb-4">
                We prepare food fresh every morning for that day's events. No reheating week-old food. No frozen proteins. Everything is made fresh, delivered fresh, served fresh.
              </p>
              <div className="text-sm text-gray-600 space-y-1">
                <p>✓ Vegetables cut daily</p>
                <p>✓ Meats marinated fresh</p>
                <p>✓ Sauces made from scratch</p>
                <p>✓ Pita baked daily</p>
              </div>
            </motion.div>

            {/* Serving All of Toronto & GTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white border-4 border-[#0066FF] rounded-xl p-8"
            >
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold text-black mb-3">Serving All of Toronto & GTA</h3>
              <p className="text-sm font-semibold text-[#0066FF] mb-4">We come to you</p>
              <p className="text-gray-700 mb-4">
                Downtown Toronto, North York, Scarborough, Etobicoke, Mississauga, Brampton, Vaughan, Markham - we serve the entire Greater Toronto Area.
              </p>
              <div className="text-sm text-gray-600 space-y-1">
                <p>✓ All of Toronto</p>
                <p>✓ York Region</p>
                <p>✓ Peel Region</p>
                <p>✓ Durham Region</p>
              </div>
            </motion.div>

            {/* Trusted by Toronto Businesses */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white border-4 border-[#0066FF] rounded-xl p-8"
            >
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-2xl font-bold text-black mb-3">Trusted by Toronto Businesses</h3>
              <p className="text-sm font-semibold text-[#0066FF] mb-4">200+ corporate clients</p>
              <p className="text-gray-700 mb-4">
                Law firms, banks, tech companies, hospitals, universities - Toronto's businesses trust us for reliable, professional catering.
              </p>
              <div className="text-sm text-gray-600 space-y-1">
                <p>✓ Bay Street law firms</p>
                <p>✓ Financial District banks</p>
                <p>✓ Tech startups</p>
                <p>✓ Healthcare facilities</p>
              </div>
            </motion.div>

            {/* Perfect for Every Occasion */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white border-4 border-[#0066FF] rounded-xl p-8"
            >
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-black mb-3">Perfect for Every Occasion</h3>
              <p className="text-sm font-semibold text-[#0066FF] mb-4">One kitchen, every event type</p>
              <p className="text-gray-700 mb-4">
                Same quality whether it's a Tuesday office lunch or a Saturday wedding. We bring the same care and professionalism to every single event.
              </p>
              <div className="text-sm text-gray-600 space-y-1">
                <p>✓ Corporate events</p>
                <p>✓ Weddings & parties</p>
                <p>✓ Funeral services</p>
                <p>✓ Community events</p>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Our Food Philosophy */}
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-16 text-center uppercase">
            How We Approach Food
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white border-4 border-[#0066FF] rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-black mb-4">Quality Over Quantity</h3>
              <p className="text-gray-700">
                We'd rather serve 50 people excellent food than 500 people mediocre food. Every dish meets our standards or it doesn't leave our kitchen.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white border-4 border-[#0066FF] rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-black mb-4">Ingredients Matter</h3>
              <p className="text-gray-700">
                We source premium ingredients - imported Greek olive oil, authentic feta, fresh vegetables, quality meats. You taste the difference.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white border-4 border-[#0066FF] rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-black mb-4">Respect for Tradition</h3>
              <p className="text-gray-700">
                Greek cuisine has survived thousands of years because it works. We respect traditional recipes while making smart adaptations for modern dietary needs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white border-4 border-[#0066FF] rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-black mb-4">Made with Love</h3>
              <p className="text-gray-700">
                Sounds cliché, but it's true. Our team cares about the food we serve. We cook like we're feeding our own families.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Meet the Team */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 text-center uppercase">
            The People Behind Your Catering
          </h2>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* The Owners */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white border-4 border-[#0066FF] rounded-xl p-8"
            >
              <h3 className="text-3xl font-bold text-black mb-4">The Owners</h3>
              <p className="text-lg italic text-gray-700 mb-4">
                "We started Gyro City because Toronto deserved authentic Greek food made the right way. Ten years later, we're proud to serve thousands of Toronto families and businesses every year."
              </p>
              <p className="text-gray-600">
                Our family brought recipes and traditions from Greece to create something special in Toronto - a catering service that combines authentic Mediterranean cuisine with the reliability and professionalism Toronto businesses expect.
              </p>
            </motion.div>

            {/* Kitchen Team */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white border-4 border-[#0066FF] rounded-xl p-8"
            >
              <h3 className="text-3xl font-bold text-black mb-4">Our Kitchen Team</h3>
              <p className="text-lg font-semibold text-[#0066FF] mb-3">Experienced chefs with Greek culinary backgrounds</p>
              <p className="text-gray-700">
                Our kitchen is led by chefs trained in traditional Greek cooking. Some grew up in Greece, others learned from Greek families here in Canada. All share a passion for authentic Mediterranean cuisine.
              </p>
            </motion.div>

            {/* Service Team */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white border-4 border-[#0066FF] rounded-xl p-8"
            >
              <h3 className="text-3xl font-bold text-black mb-4">Our Service Team</h3>
              <p className="text-lg font-semibold text-[#0066FF] mb-3">Professional, reliable, courteous</p>
              <p className="text-gray-700">
                The team that delivers and sets up your catering represents us. We hire people who are professional, punctual, and genuinely care about customer service.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Our Commitment */}
      <AnimatedSection className="py-20 bg-[#0066FF] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center uppercase">
            Our Promise to You
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: "✓", title: "Fresh food, prepared daily", subtitle: "Never frozen, always fresh" },
              { icon: "✓", title: "On-time delivery", subtitle: "We respect your schedule" },
              { icon: "✓", title: "Transparent pricing", subtitle: "No hidden fees, ever" },
              { icon: "✓", title: "Professional service", subtitle: "Courteous, reliable, discreet" },
              { icon: "✓", title: "Dietary accommodations", subtitle: "We handle all requirements expertly" },
              { icon: "✓", title: "Responsive communication", subtitle: "Questions answered promptly" },
              { icon: "✓", title: "Quality guarantee", subtitle: "If you're not happy, we make it right" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="bg-white/10 backdrop-blur-sm border-2 border-white rounded-xl p-6 text-center"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/80">{item.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* By the Numbers */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-16 text-center uppercase">
            Gyro City in Numbers
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { number: "10+", label: "Years serving Toronto" },
              { number: "10,000+", label: "Events catered" },
              { number: "200+", label: "Corporate clients" },
              { number: "50,000+", label: "Gyros served annually" },
              { number: "100%", label: "Family owned & operated" },
              { number: "500+", label: "5-star reviews" },
              { number: "24", label: "Hour quote response time" },
              { number: "40+", label: "Funeral homes we partner with" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center bg-white border-4 border-[#0066FF] rounded-xl p-6"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#0066FF] mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-700 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Community Involvement */}
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 text-center uppercase">
            Giving Back to Toronto
          </h2>
          
          <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            We're grateful for Toronto's support over the past decade. That's why we:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: "🎓", text: "Support local schools and sports teams" },
              { icon: "🏥", text: "Provide catering for community health events" },
              { icon: "🎉", text: "Sponsor cultural festivals" },
              { icon: "💼", text: "Hire and train locally" },
              { icon: "🌱", text: "Source from local suppliers when possible" },
              { icon: "❤️", text: "Donate catering to charitable causes" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="bg-white border-4 border-[#0066FF] rounded-xl p-6 flex items-start gap-4"
              >
                <div className="text-4xl">{item.icon}</div>
                <p className="text-gray-700 flex-1 pt-2">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-16 text-center uppercase">
            What Toronto Says About Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Testimonial 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white border-4 border-[#0066FF] rounded-xl p-8 text-center"
            >
              <div className="text-[#0066FF] text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <h3 className="text-xl font-bold text-black mb-3">"The best Greek food in Toronto"</h3>
              <p className="text-gray-700 mb-4 italic">
                "We've ordered from Gyro City over 50 times for our office. The food is consistently excellent - authentic, fresh, and delicious. They've never let us down."
              </p>
              <p className="font-semibold text-black">Office Manager</p>
              <p className="text-sm text-gray-600">Downtown Law Firm</p>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white border-4 border-[#0066FF] rounded-xl p-8 text-center"
            >
              <div className="text-[#0066FF] text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <h3 className="text-xl font-bold text-black mb-3">"Made our wedding perfect"</h3>
              <p className="text-gray-700 mb-4 italic">
                "Gyro City catered our 150-person wedding. The food was incredible, service was flawless, and so many guests asked who catered. Highly recommend!"
              </p>
              <p className="font-semibold text-black">Maria & John</p>
              <p className="text-sm text-gray-600">Wedding Reception</p>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white border-4 border-[#0066FF] rounded-xl p-8 text-center"
            >
              <div className="text-[#0066FF] text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <h3 className="text-xl font-bold text-black mb-3">"Compassionate during difficult time"</h3>
              <p className="text-gray-700 mb-4 italic">
                "After my father's funeral, Gyro City handled the reception for 70 people. They were professional, respectful, and the food brought comfort to our family. Thank you."
              </p>
              <p className="font-semibold text-black">Anna P.</p>
              <p className="text-sm text-gray-600">Funeral Service</p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 text-center uppercase">
            Get in Touch
          </h2>
          
          <p className="text-2xl text-center text-black mb-12 font-semibold">
            Ready to experience authentic Greek catering?
          </p>

          <div className="max-w-4xl mx-auto bg-white border-4 border-[#0066FF] rounded-xl p-10">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold text-black mb-4">Contact Information</h3>
                <div className="space-y-3 text-gray-700">
                  <p className="flex items-center gap-3">
                    <span className="text-2xl">📞</span>
                    <span><strong>Phone:</strong> <a href="tel:6475488740" className="text-[#0066FF] hover:underline">(647) 548-8740</a></span>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-2xl">📧</span>
                    <span><strong>Email:</strong> <a href="mailto:info@gyrocity.ca" className="text-[#0066FF] hover:underline">info@gyrocity.ca</a></span>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-2xl">📍</span>
                    <span><strong>Location:</strong> Toronto, ON</span>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-black mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Monday - Friday:</strong> 8 AM - 8 PM</p>
                  <p><strong>Saturday:</strong> 9 AM - 6 PM</p>
                  <p><strong>Sunday:</strong> 10 AM - 5 PM</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center pt-6 border-t border-gray-200">
              <Link href="/quote" className="bg-[#0066FF] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all">
                Get a Quote →
              </Link>
              <Link href="/menu" className="bg-white border-2 border-[#0066FF] text-[#0066FF] px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-all">
                View Menu →
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Why Greek Food (Educational) */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-16 text-center uppercase">
            Why Greek Cuisine?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Healthy & Delicious */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white border-4 border-[#0066FF] rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-black mb-4">Healthy & Delicious</h3>
              <p className="text-gray-700">
                Greek food is Mediterranean diet at its finest - olive oil, fresh vegetables, lean proteins, whole grains. It's healthy food that actually tastes amazing.
              </p>
            </motion.div>

            {/* Something for Everyone */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white border-4 border-[#0066FF] rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-black mb-4">Something for Everyone</h3>
              <p className="text-gray-700">
                Meat lovers, vegetarians, vegans, gluten-free - Greek cuisine naturally accommodates most dietary needs. Spanakopita, falafel, grilled fish, lamb - there's variety.
              </p>
            </motion.div>

            {/* Proven Track Record */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white border-4 border-[#0066FF] rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-black mb-4">Proven Track Record</h3>
              <p className="text-gray-700">
                Greek food has been perfected over thousands of years. These recipes work for celebrations, funerals, daily meals - all occasions.
              </p>
            </motion.div>

            {/* Brings People Together */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white border-4 border-[#0066FF] rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-black mb-4">Brings People Together</h3>
              <p className="text-gray-700">
                Greek culture centers around sharing food. That communal, warm spirit is exactly what events need - whether it's a corporate lunch or wedding feast.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Final CTA */}
      <AnimatedSection className="py-20 bg-[#0066FF] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 uppercase">
            Ready to Experience Gyro City?
          </h2>
          <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto">
            Let's cater your next event with authentic Greek hospitality.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/quote" className="bg-white text-[#0066FF] px-10 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all shadow-lg">
              GET A QUOTE
            </Link>
            <Link href="/menu" className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#0066FF] transition-all">
              VIEW MENU
            </Link>
            <Link href="tel:6475488740" className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#0066FF] transition-all">
              CALL US
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-xl mb-4 font-playfair">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/menu" className="hover:text-[#0066FF] transition">Menu</Link></li>
                <li><Link href="/about" className="hover:text-[#0066FF] transition">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-[#0066FF] transition">Contact</Link></li>
                <li><Link href="/quote" className="hover:text-[#0066FF] transition">Get Quote</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4 font-playfair">Catering Services</h3>
              <ul className="space-y-2">
                <li><Link href="/catering/office" className="hover:text-[#0066FF] transition">Office Catering</Link></li>
                <li><Link href="/catering/corporate" className="hover:text-[#0066FF] transition">Corporate Events</Link></li>
                <li><Link href="/catering/events" className="hover:text-[#0066FF] transition">Event Catering</Link></li>
                <li><Link href="/catering/funeral" className="hover:text-[#0066FF] transition">Funeral Catering</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4 font-playfair">Contact</h3>
              <ul className="space-y-2">
                <li>Phone: <a href="tel:6475488740" className="hover:text-[#0066FF] transition">(647) 548-8740</a></li>
                <li>Email: <a href="mailto:info@gyrocity.ca" className="hover:text-[#0066FF] transition">info@gyrocity.ca</a></li>
                <li>Downtown Toronto, ON</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4 font-playfair">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="hover:text-[#0066FF] transition">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-[#0066FF] transition">Terms of Service</Link></li>
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
