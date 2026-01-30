'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/animated-section'
import { GyroButton } from '@/components/ui/gyro-button'

export default function CorporateCateringPage() {
  return (
    <main className="min-h-screen bg-white">
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
            <Link href="/" className="hover:text-white/80 transition-colors duration-200 font-medium">Home</Link>
            <Link href="/about" className="hover:text-white/80 transition-colors duration-200 font-medium">About Us</Link>
            <Link href="/catering/corporate" className="hover:text-white/80 transition-colors duration-200 font-medium underline underline-offset-4">Corporate Catering</Link>
            <Link href="/menu" className="hover:text-white/80 transition-colors duration-200 font-medium">Our Menu</Link>
            <Link href="/catering/office" className="hover:text-white/80 transition-colors duration-200 font-medium">Office Catering</Link>
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
            Toronto Corporate Catering
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Impress Clients & Colleagues with Authentic Greek Cuisine
          </p>
          <p className="text-lg mb-10 max-w-2xl mx-auto opacity-90">
            Professional catering for corporate events, conferences, meetings, and business functions. Exceptional food, flawless execution.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/quote" className="bg-white text-[#0066FF] px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all">
              GET CORPORATE QUOTE
            </Link>
            <Link href="/menu" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#0066FF] transition-all">
              VIEW CORPORATE MENU
            </Link>
          </div>
        </div>
      </section>

      {/* Elevate Your Corporate Event */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6 text-center">
            Elevate Your Corporate Event with Mediterranean Hospitality
          </h2>
          <div className="space-y-4 text-lg text-gray-700">
            <p>
              When your business reputation is on the line, you need catering that exceeds expectations. <strong>Gyro City</strong> delivers authentic Greek cuisine with the professionalism Toronto's corporate sector demands.
            </p>
            <p>
              From intimate executive lunches to large-scale conferences, we combine exceptional Mediterranean flavors with seamless service that lets you focus on your business objectives.
            </p>
            <p className="text-center font-semibold text-xl text-[#0066FF] mt-6">
              Trusted by Toronto's leading corporations, law firms, and financial institutions.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Why Choose Section */}
      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-12 text-center">
            Why Toronto Corporations Trust Gyro City
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Flawless Execution */}
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-3">Flawless Execution</h3>
              <p className="text-gray-700 mb-4">
                Your corporate event runs smoothly with our meticulous planning and reliable execution. We handle every detail professionally.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Detailed planning consultations</li>
                <li>• Site visits for large events</li>
                <li>• Backup plans for every scenario</li>
                <li>• Dedicated event coordinator</li>
                <li>• Real-time communication during service</li>
              </ul>
            </div>

            {/* Professional Presentation */}
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
              <div className="text-4xl mb-4">👔</div>
              <h3 className="text-2xl font-bold mb-3">Professional Presentation</h3>
              <p className="text-gray-700 mb-4">
                First impressions matter. Our upscale presentation and attentive service reflect well on your organization.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Elegantly presented platters</li>
                <li>• Premium serving ware options</li>
                <li>• Uniformed delivery staff</li>
                <li>• White-glove service available</li>
                <li>• Discreet setup & breakdown</li>
              </ul>
            </div>

            {/* Exceptional Cuisine */}
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
              <div className="text-4xl mb-4">🍽️</div>
              <h3 className="text-2xl font-bold mb-3">Exceptional Cuisine</h3>
              <p className="text-gray-700 mb-4">
                Authentic Greek food that impresses even the most discerning palates. Fresh, flavorful, and memorable.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Premium imported ingredients</li>
                <li>• Traditional Greek recipes</li>
                <li>• Executive chef oversight</li>
                <li>• Customizable menus</li>
                <li>• Dietary accommodation expertise</li>
              </ul>
            </div>

            {/* Flexible Solutions */}
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-3">Flexible Solutions</h3>
              <p className="text-gray-700 mb-4">
                From board meetings for 8 to conferences for 500+, we scale seamlessly to meet your corporate needs.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Small executive meetings (8-20)</li>
                <li>• Mid-size events (20-100)</li>
                <li>• Large conferences (100-500+)</li>
                <li>• Multi-day events</li>
                <li>• Multiple location coordination</li>
              </ul>
            </div>

            {/* Corporate Account Management */}
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-2xl font-bold mb-3">Corporate Account Management</h3>
              <p className="text-gray-700 mb-4">
                Streamline your corporate catering with dedicated account management and simplified billing.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Dedicated account manager</li>
                <li>• Net 30 payment terms</li>
                <li>• Consolidated monthly billing</li>
                <li>• Event planning assistance</li>
                <li>• Priority scheduling</li>
              </ul>
              <Link href="/quote" className="inline-block mt-4 text-[#0066FF] font-semibold hover:underline">
                Setup Corporate Account →
              </Link>
            </div>

            {/* Proven Track Record */}
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-2xl font-bold mb-3">Proven Track Record</h3>
              <p className="text-gray-700 mb-4">
                200+ successful corporate events in downtown Toronto. Trusted by the city's most prestigious organizations.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Annual general meetings</li>
                <li>• Board dinners</li>
                <li>• Client presentations</li>
                <li>• Product launches</li>
                <li>• Training seminars</li>
                <li>• Conference catering</li>
                <li>• Holiday parties</li>
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Corporate Event Types */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-12 text-center">
            Corporate Event Catering Solutions
          </h2>
          
          <div className="space-y-8 max-w-5xl mx-auto">
            {/* Executive Meetings */}
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-2">Executive Meetings & Board Lunches</h3>
              <p className="text-[#0066FF] font-semibold mb-4">8-25 people | From $24.99/person</p>
              <p className="mb-4 text-gray-700">Sophisticated catering for high-level meetings:</p>
              <ul className="grid md:grid-cols-2 gap-2 mb-4 text-gray-600">
                <li>• Premium protein selections</li>
                <li>• Elegant platter presentation</li>
                <li>• Quiet, professional service</li>
                <li>• Fine serving dishes (non-disposable option)</li>
                <li>• Accommodates dietary restrictions</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="font-semibold mb-2">Popular menu:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Lamb souvlaki & beef tenderloin</li>
                  <li>• Gourmet Greek salad with imported feta</li>
                  <li>• Spanakopita & tiropita</li>
                  <li>• Roasted lemon potatoes</li>
                  <li>• Premium baklava</li>
                </ul>
              </div>
              <p className="text-sm text-gray-600 mb-4">Perfect for: Board meetings, executive lunches, VIP client meetings</p>
              <Link href="/quote" className="inline-block bg-[#0066FF] text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all">
                Get Executive Quote →
              </Link>
            </div>

            {/* Conferences */}
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-2">Corporate Conferences & Seminars</h3>
              <p className="text-[#0066FF] font-semibold mb-4">50-500+ people | From $19.99/person</p>
              <p className="mb-4 text-gray-700">Full-service conference catering:</p>
              <ul className="grid md:grid-cols-2 gap-2 mb-4 text-gray-600">
                <li>• Breakfast, lunch, and break service</li>
                <li>• Multiple dietary options</li>
                <li>• Buffet or plated service</li>
                <li>• Beverage service included</li>
                <li>• On-site staff for large events</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="font-semibold mb-2">Conference packages include:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Morning continental breakfast</li>
                  <li>• Mid-morning coffee break</li>
                  <li>• Full buffet lunch</li>
                  <li>• Afternoon snacks & beverages</li>
                  <li>• All serving supplies & setup</li>
                </ul>
              </div>
              <p className="text-sm text-gray-600 mb-4">Perfect for: Annual conferences, training seminars, industry events</p>
              <Link href="/quote" className="inline-block bg-[#0066FF] text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all">
                Get Conference Quote →
              </Link>
            </div>

            {/* Client Appreciation */}
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-2">Client Appreciation Events</h3>
              <p className="text-[#0066FF] font-semibold mb-4">30-150 people | From $26.99/person</p>
              <p className="mb-4 text-gray-700">Impress your valued clients:</p>
              <ul className="grid md:grid-cols-2 gap-2 mb-4 text-gray-600">
                <li>• Upscale Greek cuisine</li>
                <li>• Interactive food stations</li>
                <li>• Premium presentation</li>
                <li>• Professional serving staff</li>
                <li>• Beverage coordination</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="font-semibold mb-2">Popular options:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Live gyro carving station</li>
                  <li>• Build-your-own souvlaki bar</li>
                  <li>• Mezze appetizer stations</li>
                  <li>• Greek dessert display</li>
                  <li>• Wine & beverage pairing</li>
                </ul>
              </div>
              <p className="text-sm text-gray-600 mb-4">Perfect for: Client appreciation, partner events, networking receptions</p>
              <Link href="/quote" className="inline-block bg-[#0066FF] text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all">
                Get Client Event Quote →
              </Link>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/quote" className="text-[#0066FF] font-semibold hover:underline text-lg">
              View All Corporate Event Types →
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Corporate Menu Packages */}
      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-12 text-center">
            Corporate Catering Menu Packages
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Standard */}
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">Standard Corporate Lunch</h3>
              <p className="text-3xl font-bold text-[#0066FF] mb-4">$18.99<span className="text-base text-gray-600">/person</span></p>
              <p className="text-sm text-gray-600 mb-4">Minimum 15 people</p>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>• Choice of 2 proteins</li>
                <li>• Greek salad</li>
                <li>• Rice pilaf</li>
                <li>• Pita & tzatziki</li>
                <li>• Greek cookies</li>
                <li>• Beverages</li>
              </ul>
              <p className="text-xs text-gray-600 mb-4">Best for: Regular corporate lunches, standard meetings</p>
              <Link href="/quote" className="inline-block w-full text-center bg-gray-100 text-[#0066FF] px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-all">
                Get Quote
              </Link>
            </div>

            {/* Premium */}
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6 relative">
              <div className="absolute top-0 right-0 bg-[#0066FF] text-white px-3 py-1 rounded-bl-lg rounded-tr-lg text-xs font-bold">
                POPULAR
              </div>
              <h3 className="text-xl font-bold mb-2">Premium Corporate Package</h3>
              <p className="text-3xl font-bold text-[#0066FF] mb-4">$24.99<span className="text-base text-gray-600">/person</span></p>
              <p className="text-sm text-gray-600 mb-4">Minimum 20 people</p>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>• Mixed grill (3 proteins)</li>
                <li>• Greek salad with imported feta</li>
                <li>• Spanakopita</li>
                <li>• Lemon potatoes & rice</li>
                <li>• Mezze trio</li>
                <li>• Premium baklava</li>
                <li>• Coffee & tea service</li>
              </ul>
              <p className="text-xs text-gray-600 mb-4">Best for: Client meetings, important presentations</p>
              <Link href="/quote" className="inline-block w-full text-center bg-[#0066FF] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all">
                Get Quote
              </Link>
            </div>

            {/* Executive */}
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">Executive Package</h3>
              <p className="text-3xl font-bold text-[#0066FF] mb-4">$29.99<span className="text-base text-gray-600">/person</span></p>
              <p className="text-sm text-gray-600 mb-4">Minimum 15 people</p>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>• Premium proteins (lamb, beef tenderloin, shrimp)</li>
                <li>• Gourmet Greek salad</li>
                <li>• Spanakopita & tiropita</li>
                <li>• Roasted vegetables</li>
                <li>• Mezze platter</li>
                <li>• Greek dessert selection</li>
                <li>• Premium coffee service</li>
              </ul>
              <p className="text-xs text-gray-600 mb-4">Best for: Board meetings, executive events, VIP clients</p>
              <Link href="/quote" className="inline-block w-full text-center bg-gray-100 text-[#0066FF] px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-all">
                Get Quote
              </Link>
            </div>

            {/* Conference Day */}
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">Conference Day Package</h3>
              <p className="text-3xl font-bold text-[#0066FF] mb-4">$44.99<span className="text-base text-gray-600">/person</span></p>
              <p className="text-sm text-gray-600 mb-4">Minimum 50 people</p>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>• Continental breakfast</li>
                <li>• Mid-morning break</li>
                <li>• Full buffet lunch</li>
                <li>• Afternoon break</li>
                <li>• All-day beverage service</li>
              </ul>
              <p className="text-xs text-gray-600 mb-4">Best for: All-day conferences, training seminars</p>
              <Link href="/quote" className="inline-block w-full text-center bg-gray-100 text-[#0066FF] px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-all">
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Dietary Accommodations */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6 text-center">
            Professional Dietary Management
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center">
            In today's corporate environment, dietary accommodations are essential. We excel at managing diverse dietary requirements without compromising the dining experience.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Comprehensive Options:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Halal:</strong> All proteins available halal-certified</li>
                <li>• <strong>Vegetarian:</strong> Extensive plant-based selections</li>
                <li>• <strong>Vegan:</strong> Delicious dairy-free options</li>
                <li>• <strong>Gluten-Free:</strong> Celiac-safe preparations</li>
                <li>• <strong>Kosher:</strong> Available with advance notice</li>
                <li>• <strong>Allergies:</strong> Nut-free, shellfish-free, etc.</li>
                <li>• <strong>Medical:</strong> Diabetic-friendly, low-sodium</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Our Process:</h3>
              <ol className="space-y-2 text-gray-700">
                <li>1. Collect dietary requirements in advance</li>
                <li>2. Create individualized meal plans</li>
                <li>3. Label all dishes clearly</li>
                <li>4. Prepare separately to avoid cross-contamination</li>
                <li>5. Provide ingredient lists upon request</li>
              </ol>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/quote" className="inline-block bg-[#0066FF] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all">
              Discuss Dietary Needs →
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-12 text-center uppercase">
            What Toronto Corporations Say
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-8 text-center">
              <div className="text-4xl mb-4">•</div>
              <p className="text-gray-700 mb-4 italic">
                "Gyro City catered our 3-day conference for 200 attendees. The planning was meticulous, the food was outstanding, and the execution was flawless. Our attendees raved about the authentic Greek cuisine. Highly recommended for corporate events."
              </p>
              <p className="font-bold">— Robert Martinez</p>
              <p className="text-sm text-gray-600">VP Operations, Financial Services Firm</p>
              <div className="mt-3 text-[#0066FF]">⭐⭐⭐⭐⭐</div>
            </div>

            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-8 text-center">
              <div className="text-4xl mb-4">•</div>
              <p className="text-gray-700 mb-4 italic">
                "We've used Gyro City for numerous client lunches and presentations. The food is always impressive, presentation is professional, and they've never let us down. It reflects well on our firm."
              </p>
              <p className="font-bold">— Patricia Wong</p>
              <p className="text-sm text-gray-600">Partner, Bay Street Law Firm</p>
              <div className="mt-3 text-[#0066FF]">⭐⭐⭐⭐⭐</div>
            </div>

            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-8 text-center">
              <div className="text-4xl mb-4">•</div>
              <p className="text-gray-700 mb-4 italic">
                "After another caterer cancelled last minute, Gyro City stepped in with 48 hours notice for our product launch event (120 people). They were professional, flexible, and the food was incredible. They saved our event!"
              </p>
              <p className="font-bold">— James Taylor</p>
              <p className="text-sm text-gray-600">Marketing Director, Tech Company</p>
              <div className="mt-3 text-[#0066FF]">⭐⭐⭐⭐⭐</div>
            </div>

            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-8 text-center">
              <div className="text-4xl mb-4">•</div>
              <p className="text-gray-700 mb-4 italic">
                "The corporate account program streamlines all our catering needs. Our account manager knows our preferences, billing is simple, and we get priority service. Well worth setting up."
              </p>
              <p className="font-bold">— Linda Chen</p>
              <p className="text-sm text-gray-600">Executive Assistant to CEO, Fortune 500 Company</p>
              <div className="mt-3 text-[#0066FF]">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-12 text-center">
            Corporate Catering FAQ
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white border-l-4 border-[#0066FF] p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">How far in advance should we book for a large corporate event?</h3>
              <p className="text-gray-700">We recommend 2-3 weeks for events over 100 people, 1 week for 50-100, and 3-5 days for smaller events. Rush service may be available.</p>
            </div>

            <div className="bg-white border-l-4 border-[#0066FF] p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Can you accommodate last-minute headcount changes?</h3>
              <p className="text-gray-700">Yes, changes up to 24 hours before (48 hours for events 100+) with adjustments to final billing.</p>
            </div>

            <div className="bg-white border-l-4 border-[#0066FF] p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Do you provide event staff?</h3>
              <p className="text-gray-700">Yes, professional event staff available for events 50+ people. Includes setup crew, buffet attendants, and serving staff.</p>
            </div>

            <div className="bg-white border-l-4 border-[#0066FF] p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Can you work with our event planner/venue?</h3>
              <p className="text-gray-700">Absolutely. We coordinate seamlessly with event planners, venues, and other vendors.</p>
            </div>

            <div className="bg-white border-l-4 border-[#0066FF] p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Do you offer tastings for large events?</h3>
              <p className="text-gray-700">Yes, complimentary tastings for events 100+ people or corporate accounts. Paid tastings available for others ($100, credited to event).</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Final CTA */}
      <AnimatedSection className="py-20 bg-[#0066FF] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6">
            Ready to Elevate Your Corporate Event?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Our corporate catering specialists are ready to help plan your perfect event. From intimate board lunches to large conferences, we deliver exceptional Greek cuisine with the professionalism your organization deserves.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/quote" className="bg-white text-[#0066FF] px-10 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all shadow-lg">
              GET CORPORATE QUOTE
            </Link>
            <Link href="/menu" className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#0066FF] transition-all">
              VIEW CORPORATE MENU
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
                <li><Link href="/catering" className="hover:text-white">Catering</Link></li>
                <li><Link href="/about" className="hover:text-white">About</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Catering Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/catering/office" className="hover:text-white">Office Catering</Link></li>
                <li><Link href="/catering/corporate" className="hover:text-white">Corporate Events</Link></li>
                <li><Link href="/catering/events" className="hover:text-white">Event Catering</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>898 College St, Toronto ON M6H1A4</li>
                <li>Phone: +1 (647) 340-8001</li>
                <li>Email: info@gyrocity.ca</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2026 Gyro City. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
