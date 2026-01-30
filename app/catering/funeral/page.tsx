'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/animated-section'

export default function FuneralCateringPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Moving Text Marquee */}
      <div className="bg-white text-black py-3 overflow-hidden border-b border-gray-200">
        <div className="whitespace-nowrap animate-marquee-slow text-lg font-medium">
          Compassionate Funeral Catering • Memorial Service Catering • Celebration of Life • Repast Catering Toronto • Bereavement Support
          &nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;
          Compassionate Funeral Catering • Memorial Service Catering • Celebration of Life • Repast Catering Toronto • Bereavement Support
          &nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;
          Compassionate Funeral Catering • Memorial Service Catering • Celebration of Life • Repast Catering Toronto • Bereavement Support
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
            <Link href="/catering/corporate" className="hover:text-white/80 transition-colors duration-200 font-medium">Corporate Catering</Link>
            <Link href="/menu" className="hover:text-white/80 transition-colors duration-200 font-medium">Our Menu</Link>
            <Link href="/catering/funeral" className="hover:text-white/80 transition-colors duration-200 font-medium underline underline-offset-4">Funeral Catering</Link>
            <Link href="/quote" className="bg-white text-[#0066FF] px-6 py-2.5 rounded-lg text-base font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg">
              Request Service
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-playfair mb-6 text-black">
            Compassionate Funeral Catering in Toronto
          </h1>
          <p className="text-xl md:text-2xl mb-6 max-w-3xl mx-auto text-gray-700">
            We're Here to Help
          </p>
          <p className="text-lg mb-10 max-w-2xl mx-auto text-gray-600">
            Dignified, reliable meal service for funeral receptions and memorial gatherings. Let us handle the details while you focus on family.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="tel:6475488740" className="bg-white text-[#0066FF] border-2 border-[#0066FF] px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-all">
              Call Us Now
            </Link>
            <Link href="/quote" className="bg-[#0066FF] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all">
              Request Service
            </Link>
            <Link href="/menu" className="bg-gray-100 text-black px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-200 transition-all">
              View Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Supporting Families Section */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6 text-center text-black">
            Supporting Toronto Families During Difficult Times
          </h2>
          <div className="space-y-4 text-lg text-gray-700">
            <p>
              Losing a loved one is never easy. At <strong>Gyro City</strong>, we understand the importance of providing comfort through food while honoring the memory of those who've passed. Our compassionate funeral catering service takes the burden of meal planning off your shoulders, allowing you to focus on what matters most - being with family and friends.
            </p>
            <p className="text-center font-semibold text-xl text-[#0066FF] mt-6">
              Serving Toronto families with dignity, respect, and care since 2014.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Why Choose Section */}
      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-12 text-center text-black">
            Why Toronto Families Trust Gyro City for Funeral Catering
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Compassionate Service */}
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-8">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold mb-3 text-black">Compassionate Service</h3>
              <p className="text-gray-700 mb-4">
                We understand this is a difficult time. Our team handles every detail with sensitivity, respect, and professionalism.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Patient, understanding coordination</li>
                <li>• Flexible planning around your needs</li>
                <li>• Respectful, discreet service</li>
                <li>• Available 7 days a week</li>
                <li>• Rush service when needed</li>
              </ul>
            </div>

            {/* Reliable & Punctual */}
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-8">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-2xl font-bold mb-3 text-black">Reliable & Punctual</h3>
              <p className="text-gray-700 mb-4">
                You have enough to worry about. We guarantee on-time delivery and setup, exactly as planned.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Never late, never forgotten</li>
                <li>• Confirmed timings honored</li>
                <li>• Professional, quiet setup</li>
                <li>• Coordinated with funeral home</li>
                <li>• Seamless service</li>
              </ul>
            </div>

            {/* Comforting Food */}
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-8">
              <div className="text-4xl mb-4">🍽️</div>
              <h3 className="text-2xl font-bold mb-3 text-black">Comforting Food</h3>
              <p className="text-gray-700 mb-4">
                Familiar, comforting Mediterranean dishes that bring people together during difficult times.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Traditional Greek comfort food</li>
                <li>• Fresh, quality ingredients</li>
                <li>• Generous portions</li>
                <li>• Warm, homemade taste</li>
                <li>• Accommodating to all tastes</li>
              </ul>
            </div>

            {/* Respectful Pricing */}
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-8">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-bold mb-3 text-black">Respectful Pricing</h3>
              <p className="text-gray-700 mb-4">
                Transparent, fair pricing with no hidden fees. We work within your budget without compromising quality.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Clear, upfront quotes</li>
                <li>• Flexible packages</li>
                <li>• Payment plans available</li>
                <li>• No surprise charges</li>
                <li>• Compassionate billing</li>
              </ul>
            </div>

            {/* Complete Service */}
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-8">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-2xl font-bold mb-3 text-black">Complete Service</h3>
              <p className="text-gray-700 mb-4">
                We handle everything - food, setup, serving, and cleanup. You shouldn't have to worry about logistics.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Delivery & setup</li>
                <li>• All serving supplies</li>
                <li>• Chafing dishes & warmers</li>
                <li>• Professional presentation</li>
                <li>• Complete cleanup</li>
                <li>• Discreet staff (optional)</li>
              </ul>
            </div>

            {/* Culturally Sensitive */}
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-8">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold mb-3 text-black">Culturally Sensitive</h3>
              <p className="text-gray-700 mb-4">
                We serve Toronto's diverse communities with respect for all traditions, religions, and cultural practices.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Greek Orthodox services</li>
                <li>• Catholic funerals</li>
                <li>• Protestant services</li>
                <li>• Interfaith gatherings</li>
                <li>• Cultural traditions</li>
                <li>• Dietary requirements</li>
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Service Packages Section */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-12 text-center text-black">
            Funeral Catering Service Packages
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Essential Repast Package */}
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-2 text-black">Essential Repast Package</h3>
              <p className="text-3xl font-bold text-[#0066FF] mb-4">$16.99<span className="text-base text-gray-600">/person</span></p>
              <p className="text-sm text-gray-600 mb-4">Minimum 20 guests</p>
              <p className="text-gray-700 mb-4">Simple, comforting meal service:</p>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>• Choice of 2 proteins (chicken, beef, vegetarian)</li>
                <li>• Greek salad</li>
                <li>• Rice pilaf & roasted potatoes</li>
                <li>• Fresh bread rolls</li>
                <li>• Coffee & tea service</li>
                <li>• All serving supplies</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-sm mb-2 text-black">Service includes:</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Delivery & setup</li>
                  <li>• Chafing dishes</li>
                  <li>• 2 hours warmth</li>
                  <li>• Complete cleanup</li>
                </ul>
              </div>
              <p className="text-xs text-gray-600 mb-4">Perfect for: Small, intimate gatherings</p>
              <Link href="/quote" className="inline-block w-full text-center bg-[#0066FF] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all">
                Request Service →
              </Link>
            </div>

            {/* Standard Memorial Package */}
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-2 text-black">Standard Memorial Package</h3>
              <p className="text-3xl font-bold text-[#0066FF] mb-4">$19.99<span className="text-base text-gray-600">/person</span></p>
              <p className="text-sm text-gray-600 mb-4">Minimum 30 guests</p>
              <p className="text-gray-700 mb-4">Comforting meal for larger gatherings:</p>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>• Mixed proteins (gyro, chicken souvlaki)</li>
                <li>• Large Greek salad</li>
                <li>• Spanakopita</li>
                <li>• Rice & roasted lemon potatoes</li>
                <li>• Fresh bread</li>
                <li>• Greek cookies</li>
                <li>• Coffee, tea & juice service</li>
                <li>• All supplies & serving dishes</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-sm mb-2 text-black">Service includes:</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Delivery & setup</li>
                  <li>• Professional warmers</li>
                  <li>• 3 hours service</li>
                  <li>• Discreet cleanup</li>
                </ul>
              </div>
              <p className="text-xs text-gray-600 mb-4">Perfect for: Traditional funeral receptions</p>
              <Link href="/quote" className="inline-block w-full text-center bg-[#0066FF] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all">
                Request Service →
              </Link>
            </div>

            {/* Premium Celebration of Life Package */}
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-2 text-black">Premium Celebration of Life Package</h3>
              <p className="text-3xl font-bold text-[#0066FF] mb-4">$24.99<span className="text-base text-gray-600">/person</span></p>
              <p className="text-sm text-gray-600 mb-4">Minimum 40 guests</p>
              <p className="text-gray-700 mb-4">Honoring a life well-lived:</p>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>• Mixed grill (multiple proteins)</li>
                <li>• Gourmet Greek salad</li>
                <li>• Spanakopita & tiropita</li>
                <li>• Roasted vegetables & potatoes</li>
                <li>• Mezze appetizers</li>
                <li>• Premium dessert selection</li>
                <li>• Full beverage service</li>
                <li>• Elegant presentation</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-sm mb-2 text-black">Service includes:</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Complete setup & breakdown</li>
                  <li>• Premium serving dishes</li>
                  <li>• 3-4 hours service</li>
                  <li>• Attending staff (optional)</li>
                </ul>
              </div>
              <p className="text-xs text-gray-600 mb-4">Perfect for: Celebrations of life, larger memorial services</p>
              <Link href="/quote" className="inline-block w-full text-center bg-[#0066FF] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all">
                Request Service →
              </Link>
            </div>

            {/* Reception Appetizer Package */}
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-2 text-black">Reception Appetizer Package</h3>
              <p className="text-3xl font-bold text-[#0066FF] mb-4">$14.99<span className="text-base text-gray-600">/person</span></p>
              <p className="text-sm text-gray-600 mb-4">Minimum 25 guests</p>
              <p className="text-gray-700 mb-4">Light refreshments for visitation or viewing:</p>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>• Mediterranean mezze platter</li>
                <li>• Spanakopita & tiropita</li>
                <li>• Dolmades & olives</li>
                <li>• Pita & dips</li>
                <li>• Fresh vegetable platter</li>
                <li>• Cookie assortment</li>
                <li>• Coffee, tea & soft drinks</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-sm mb-2 text-black">Service includes:</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Setup & display</li>
                  <li>• All serving supplies</li>
                  <li>• 2-3 hours service</li>
                  <li>• Light cleanup</li>
                </ul>
              </div>
              <p className="text-xs text-gray-600 mb-4">Perfect for: Post-service receptions, viewings, shiva</p>
              <Link href="/quote" className="inline-block w-full text-center bg-[#0066FF] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all">
                Request Service →
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Service Options Section */}
      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-12 text-center text-black">
            Funeral Catering Service Options
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* At the Funeral Home */}
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-2 text-black">At the Funeral Home</h3>
              <p className="text-sm text-[#0066FF] font-semibold mb-4">Most common option</p>
              <p className="text-gray-700 mb-4">We work directly with Toronto-area funeral homes:</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Coordinate with funeral director</li>
                <li>• Setup in reception hall</li>
                <li>• Respectful, quiet service</li>
                <li>• Follow facility guidelines</li>
                <li>• Professional cleanup</li>
              </ul>
              <p className="text-xs text-gray-600 mt-4">Funeral homes we've served: 50+ across Toronto & GTA</p>
            </div>

            {/* At Your Home */}
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-2 text-black">At Your Home</h3>
              <p className="text-sm text-[#0066FF] font-semibold mb-4">Intimate option</p>
              <p className="text-gray-700 mb-4">We bring everything to your residence:</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Complete setup</li>
                <li>• Warming equipment</li>
                <li>• Serving supplies</li>
                <li>• Cleanup included</li>
                <li>• Respectful in-home service</li>
              </ul>
            </div>

            {/* At a Community Center or Hall */}
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-2 text-black">At a Community Center or Hall</h3>
              <p className="text-sm text-[#0066FF] font-semibold mb-4">Larger gatherings</p>
              <p className="text-gray-700 mb-4">We cater at any venue:</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Church halls</li>
                <li>• Community centers</li>
                <li>• Legion halls</li>
                <li>• Cultural centers</li>
                <li>• Any location you choose</li>
              </ul>
            </div>

            {/* At a Place of Worship */}
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-2 text-black">At a Place of Worship</h3>
              <p className="text-sm text-[#0066FF] font-semibold mb-4">Traditional setting</p>
              <p className="text-gray-700 mb-4">We serve at churches, synagogues, mosques:</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Respectful of sacred space</li>
                <li>• Coordinate with clergy</li>
                <li>• Dietary observance</li>
                <li>• Cultural sensitivity</li>
                <li>• Discreet service</li>
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Menu Customization Section */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6 text-center text-black">
            Customized Menus for Your Needs
          </h2>
          <p className="text-lg text-center text-gray-700 mb-12">
            Every family, every loss, every gathering is unique. We customize menus to honor your loved one and serve your family.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional Greek Menu */}
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4 text-black">Traditional Greek Menu</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Pastitsio (Greek lasagna)</li>
                <li>• Moussaka</li>
                <li>• Roasted lamb</li>
                <li>• Greek salads</li>
                <li>• Baklava</li>
              </ul>
            </div>

            {/* Comfort Food Focus */}
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4 text-black">Comfort Food Focus</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Home-style chicken</li>
                <li>• Roasted vegetables</li>
                <li>• Fresh bread</li>
                <li>• Familiar sides</li>
                <li>• Simple desserts</li>
              </ul>
            </div>

            {/* Mediterranean Light */}
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4 text-black">Mediterranean Light</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Grilled chicken & fish</li>
                <li>• Fresh salads</li>
                <li>• Quinoa & grain bowls</li>
                <li>• Fresh fruit</li>
                <li>• Light desserts</li>
              </ul>
            </div>

            {/* Cultural & Religious Accommodations */}
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4 text-black">Cultural & Religious Accommodations</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Halal certified</li>
                <li>• Kosher (with advance notice)</li>
                <li>• Vegetarian/vegan</li>
                <li>• Gluten-free</li>
                <li>• Specific dietary laws</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/quote" className="inline-block bg-[#0066FF] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all">
              Discuss Your Menu →
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Timing & Logistics Section */}
      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-12 text-center text-black">
            Flexible Service for Any Schedule
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Service Times */}
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4 text-black">Service Times</h3>
              <p className="text-gray-700 mb-4 font-semibold">We're available when you need us:</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Morning services (7 AM onwards)</li>
                <li>• Afternoon gatherings (12 PM - 4 PM)</li>
                <li>• Evening receptions (5 PM onwards)</li>
                <li>• Multi-day shiva service</li>
                <li>• Weekend & holiday availability</li>
              </ul>
            </div>

            {/* Notice Required */}
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4 text-black">Notice Required</h3>
              <p className="text-gray-700 mb-4 font-semibold">We understand timing can be sensitive:</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• <strong>Standard notice:</strong> 72 hours (3 days)</li>
                <li>• <strong>Rush service available:</strong> 24-48 hours</li>
                <li>• <strong>Emergency service:</strong> Same-day (when possible)</li>
                <li>• Flexible with last-minute changes</li>
              </ul>
            </div>

            {/* Service Areas */}
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4 text-black">Service Areas</h3>
              <p className="text-gray-700 mb-4 font-semibold">Serving all of Toronto & GTA:</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Downtown Toronto</li>
                <li>• North York, Scarborough, Etobicoke</li>
                <li>• Mississauga, Brampton, Vaughan</li>
                <li>• Markham, Richmond Hill, Ajax</li>
                <li>• Oakville, Milton, Pickering</li>
                <li>• Extended GTA available</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Link href="/contact" className="inline-block text-[#0066FF] font-semibold hover:underline text-lg">
              Check Service Availability →
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Working with Funeral Homes Section */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6 text-center text-black">
            Coordinating with Toronto Funeral Homes
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center">
            We have experience working with funeral directors across the GTA.
          </p>

          <div className="bg-white border-2 border-[#0066FF] rounded-xl p-8 mb-8">
            <h3 className="text-xl font-bold mb-4 text-black">Our Coordination:</h3>
            <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
              <li>• Direct communication with funeral director</li>
              <li>• Timing synchronized with service</li>
              <li>• Follow facility requirements</li>
              <li>• Professional, discreet arrival</li>
              <li>• Quiet setup before guests arrive</li>
              <li>• Seamless service</li>
            </ul>
          </div>

          <div className="bg-white border-2 border-[#0066FF] rounded-xl p-8 mb-8">
            <h3 className="text-xl font-bold mb-4 text-black">Funeral Homes We've Worked With:</h3>
            <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
              <li>• Mount Pleasant Group</li>
              <li>• Arbor Memorial</li>
              <li>• Ogden Funeral Homes</li>
              <li>• Turner & Porter</li>
              <li>• Ward Funeral Homes</li>
              <li>• And 40+ independent funeral homes</li>
            </ul>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <p className="text-lg text-gray-700 mb-4">
              <strong>For funeral directors:</strong> We make your job easier with reliable, professional catering that families trust.
            </p>
            <Link href="/contact" className="inline-block text-[#0066FF] font-semibold hover:underline">
              Funeral Director Partnership Info →
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Cultural Accommodations Section */}
      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6 text-center text-black">
            Respectful Service for All Traditions
          </h2>
          <p className="text-lg text-center text-gray-700 mb-12">
            Toronto is beautifully diverse. We serve families from all backgrounds with cultural sensitivity and respect.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Greek Orthodox */}
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
              <h3 className="text-lg font-bold mb-3 text-black">Greek Orthodox</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Traditional funeral foods</li>
                <li>• Koliva (memorial wheat)</li>
                <li>• Fish on fasting days</li>
                <li>• Customary dishes</li>
              </ul>
            </div>

            {/* Catholic */}
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
              <h3 className="text-lg font-bold mb-3 text-black">Catholic</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Traditional reception foods</li>
                <li>• Lenten options</li>
                <li>• Cultural traditions</li>
              </ul>
            </div>

            {/* Jewish */}
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
              <h3 className="text-lg font-bold mb-3 text-black">Jewish</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Shiva meal service</li>
                <li>• Kosher available (advance notice)</li>
                <li>• Traditional foods</li>
                <li>• Multiple-day service</li>
              </ul>
            </div>

            {/* Muslim */}
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
              <h3 className="text-lg font-bold mb-3 text-black">Muslim</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Halal certified</li>
                <li>• Appropriate service</li>
                <li>• Cultural respect</li>
                <li>• Traditional options</li>
              </ul>
            </div>

            {/* Protestant */}
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
              <h3 className="text-lg font-bold mb-3 text-black">Protestant</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Traditional service meals</li>
                <li>• Church fellowship style</li>
                <li>• Accommodating menus</li>
              </ul>
            </div>

            {/* Interfaith & Non-Religious */}
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
              <h3 className="text-lg font-bold mb-3 text-black">Interfaith & Non-Religious</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Celebration of life style</li>
                <li>• Personalized menus</li>
                <li>• Flexible service</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/quote" className="inline-block bg-[#0066FF] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all">
              Discuss Your Traditions →
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-12 text-center text-black">
            Families We've Served
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-8">
              <div className="mb-4 text-[#0066FF]">⭐⭐⭐⭐⭐</div>
              <p className="text-lg font-bold mb-2 text-black">"Made a difficult day easier"</p>
              <p className="text-gray-700 mb-4">
                "After my father's funeral, Gyro City handled the reception for 60 family members. They were professional, compassionate, and the food was excellent. It was one less thing to worry about during an incredibly difficult time. Thank you."
              </p>
              <p className="font-semibold text-black">— Anna P.</p>
              <p className="text-sm text-gray-600">Toronto</p>
            </div>

            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-8">
              <div className="mb-4 text-[#0066FF]">⭐⭐⭐⭐⭐</div>
              <p className="text-lg font-bold mb-2 text-black">"Respectful and professional"</p>
              <p className="text-gray-700 mb-4">
                "The team at Gyro City showed up early, set up quietly, and everything was perfect when guests arrived after the service. The food was comforting and delicious. They cleaned up discreetly and were so respectful. Highly recommend."
              </p>
              <p className="font-semibold text-black">— Michael T.</p>
              <p className="text-sm text-gray-600">Scarborough</p>
            </div>

            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-8">
              <div className="mb-4 text-[#0066FF]">⭐⭐⭐⭐⭐</div>
              <p className="text-lg font-bold mb-2 text-black">"Accommodated our Orthodox traditions"</p>
              <p className="text-gray-700 mb-4">
                "As a Greek Orthodox family, it was important to have traditional foods for my mother's memorial. Gyro City understood exactly what we needed and delivered with care and respect. The koliva was prepared beautifully."
              </p>
              <p className="font-semibold text-black">— Dimitri K.</p>
              <p className="text-sm text-gray-600">North York</p>
            </div>

            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-8">
              <div className="mb-4 text-[#0066FF]">⭐⭐⭐⭐⭐</div>
              <p className="text-lg font-bold mb-2 text-black">"Short notice, no problem"</p>
              <p className="text-gray-700 mb-4">
                "We had to arrange catering with only 36 hours notice. Gyro City came through beautifully, serving 80 people at the funeral home. Professional, kind, and the food brought comfort to our family. Can't thank them enough."
              </p>
              <p className="font-semibold text-black">— Patricia L.</p>
              <p className="text-sm text-gray-600">Mississauga</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-12 text-center text-black">
            Funeral Catering FAQ
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white border-l-4 border-[#0066FF] p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-black">How much notice do you need?</h3>
              <p className="text-gray-700">We prefer 3-4 days, but we've accommodated families with as little as 24 hours notice. Call us - we'll do everything we can to help.</p>
            </div>

            <div className="bg-white border-l-4 border-[#0066FF] p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-black">Can you deliver to any funeral home in Toronto?</h3>
              <p className="text-gray-700">Yes, we've worked with funeral homes across Toronto and the GTA. We'll coordinate directly with the funeral director.</p>
            </div>

            <div className="bg-white border-l-4 border-[#0066FF] p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-black">What if we don't know the final guest count?</h3>
              <p className="text-gray-700">We can work with estimates and adjust within 24 hours of service. We always bring a bit extra to be safe.</p>
            </div>

            <div className="bg-white border-l-4 border-[#0066FF] p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-black">Do you provide staff to serve the food?</h3>
              <p className="text-gray-700">Serving staff is available for larger gatherings (50+ guests) or upon request. For smaller gatherings, we set up buffet-style with everything needed.</p>
            </div>

            <div className="bg-white border-l-4 border-[#0066FF] p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-black">Can you accommodate specific cultural or religious requirements?</h3>
              <p className="text-gray-700">Absolutely. We've served families from diverse backgrounds and are experienced with various traditions and dietary requirements.</p>
            </div>

            <div className="bg-white border-l-4 border-[#0066FF] p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-black">How does payment work?</h3>
              <p className="text-gray-700">We send a quote, require 50% deposit to confirm, and the remainder is due after service. We're flexible with families during difficult times.</p>
            </div>

            <div className="bg-white border-l-4 border-[#0066FF] p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-black">What if plans change last minute?</h3>
              <p className="text-gray-700">We understand funerals can be unpredictable. We're flexible with timing, guest count changes, and menu adjustments.</p>
            </div>

            <div className="bg-white border-l-4 border-[#0066FF] p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-black">Do you offer payment plans?</h3>
              <p className="text-gray-700">Yes, we can arrange payment plans for larger services. Please discuss with us.</p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/contact" className="inline-block text-[#0066FF] font-semibold hover:underline text-lg">
              More Questions? Call Us →
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Planning Checklist Section */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-12 text-center text-black">
            Funeral Catering Planning Guide
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* What We Need from You */}
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-6 text-black">What We Need from You:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#0066FF] mt-1">☐</span>
                  <span>Approximate guest count</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0066FF] mt-1">☐</span>
                  <span>Date, time, and location</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0066FF] mt-1">☐</span>
                  <span>Any dietary restrictions or cultural requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0066FF] mt-1">☐</span>
                  <span>Preferred menu style (traditional, light, specific dishes)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0066FF] mt-1">☐</span>
                  <span>Service duration needed</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0066FF] mt-1">☐</span>
                  <span>Contact info for funeral home (if applicable)</span>
                </li>
              </ul>
            </div>

            {/* What We Handle */}
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-6 text-black">What We Handle:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#0066FF] mt-1">✓</span>
                  <span>Menu planning & recommendations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0066FF] mt-1">✓</span>
                  <span>All food preparation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0066FF] mt-1">✓</span>
                  <span>Delivery & setup</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0066FF] mt-1">✓</span>
                  <span>Serving dishes & warmers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0066FF] mt-1">✓</span>
                  <span>Plates, cutlery, napkins</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0066FF] mt-1">✓</span>
                  <span>Beverages & coffee service</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0066FF] mt-1">✓</span>
                  <span>Professional presentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0066FF] mt-1">✓</span>
                  <span>Complete cleanup</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-white border-2 border-[#0066FF] rounded-xl p-8">
            <h3 className="text-xl font-bold mb-6 text-center text-black">Timeline:</h3>
            <div className="grid md:grid-cols-7 gap-4">
              {[
                { num: "1", title: "Initial contact", desc: "We listen to your needs" },
                { num: "2", title: "Menu discussion", desc: "We recommend options" },
                { num: "3", title: "Quote provided", desc: "Clear pricing, no surprises" },
                { num: "4", title: "Confirmation", desc: "Deposit to secure service" },
                { num: "5", title: "Coordination", desc: "We sync with funeral home/venue" },
                { num: "6", title: "Service day", desc: "We arrive early, handle everything" },
                { num: "7", title: "After service", desc: "Complete cleanup, quiet departure" }
              ].map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 bg-[#0066FF] text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                    {step.num}
                  </div>
                  <h4 className="font-bold text-sm mb-1 text-black">{step.title}</h4>
                  <p className="text-xs text-gray-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/quote" className="inline-block bg-[#0066FF] text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all shadow-lg">
              Start Planning →
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Final CTA Section */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6 text-black">
            We're Here to Help During This Difficult Time
          </h2>
          <p className="text-xl mb-8 text-gray-700">
            Let us take care of the meal, so you can take care of each other.
          </p>
          <p className="text-lg mb-10 text-gray-600 max-w-2xl mx-auto">
            Losing someone is never easy. We're here to provide one less thing to worry about with compassionate, reliable funeral catering service across Toronto.
          </p>
          <p className="text-lg font-semibold mb-8 text-black">
            Available 7 days a week. Call anytime.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="tel:6475488740" className="bg-white text-[#0066FF] border-2 border-[#0066FF] px-10 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-all shadow-lg">
              CALL (647) 548-8740
            </Link>
            <Link href="/quote" className="bg-[#0066FF] text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all shadow-lg">
              REQUEST SERVICE
            </Link>
            <Link href="/contact" className="bg-gray-100 text-black px-10 py-4 rounded-lg text-lg font-semibold hover:bg-gray-200 transition-all shadow-lg">
              EMAIL US
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
              <p className="text-gray-400">Compassionate Funeral Catering in Toronto</p>
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
                <li><Link href="/catering/funeral" className="hover:text-white">Funeral Catering</Link></li>
                <li><Link href="/catering/events" className="hover:text-white">Event Catering</Link></li>
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
            <p>&copy; {new Date().getFullYear()} Gyro City. All rights reserved. Compassionate funeral catering services across Toronto & GTA.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
