'use client'

import Link from 'next/link'
import { AnimatedSection } from '@/components/ui/animated-section'
import { GyroButton } from '@/components/ui/gyro-button'
import { useState } from 'react'

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: '',
    guestCount: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Quote request submitted! We\'ll contact you within 24 hours.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-gyro-navy/95 backdrop-blur-lg text-white shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <span className="text-2xl font-bold font-playfair">GYRO CITY</span>
          </Link>
          <div className="hidden md:flex gap-8 items-center">
            <Link href="/menu" className="hover:text-gyro-gold transition-colors duration-200 font-semibold">Menu</Link>
            <Link href="/catering" className="hover:text-gyro-gold transition-colors duration-200 font-semibold">Catering</Link>
            <Link href="/about" className="hover:text-gyro-gold transition-colors duration-200 font-semibold">About</Link>
            <Link href="/contact" className="hover:text-gyro-gold transition-colors duration-200 font-semibold">Contact</Link>
            <GyroButton href="/quote" variant="primary" className="px-6 py-2 text-base bg-gyro-gold">
              Get Quote
            </GyroButton>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <AnimatedSection className="bg-gradient-to-br from-gyro-navy via-blue-900 to-gyro-navy text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-playfair mb-6">
            Get Your Free Quote
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Tell us about your event and we'll create a custom catering package just for you
          </p>
        </div>
      </AnimatedSection>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Form */}
          <AnimatedSection>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold font-playfair text-gyro-navy mb-6">
                Request Your Quote
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours with a custom quote.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gyro-navy mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gyro-gold focus:ring-4 focus:ring-gyro-gold/20 transition-all duration-200 outline-none"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gyro-navy mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gyro-gold focus:ring-4 focus:ring-gyro-gold/20 transition-all duration-200 outline-none"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gyro-navy mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gyro-gold focus:ring-4 focus:ring-gyro-gold/20 transition-all duration-200 outline-none"
                    placeholder="(647) 123-4567"
                  />
                </div>

                {/* Event Date */}
                <div>
                  <label htmlFor="eventDate" className="block text-sm font-semibold text-gyro-navy mb-2">
                    Event Date *
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    required
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gyro-gold focus:ring-4 focus:ring-gyro-gold/20 transition-all duration-200 outline-none"
                  />
                </div>

                {/* Event Type */}
                <div>
                  <label htmlFor="eventType" className="block text-sm font-semibold text-gyro-navy mb-2">
                    Event Type *
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    required
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gyro-gold focus:ring-4 focus:ring-gyro-gold/20 transition-all duration-200 outline-none"
                  >
                    <option value="">Select event type...</option>
                    <option value="office">Office Catering</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="wedding">Wedding</option>
                    <option value="party">Party / Celebration</option>
                    <option value="funeral">Funeral Reception</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Guest Count */}
                <div>
                  <label htmlFor="guestCount" className="block text-sm font-semibold text-gyro-navy mb-2">
                    Number of Guests *
                  </label>
                  <input
                    type="number"
                    id="guestCount"
                    name="guestCount"
                    required
                    min="10"
                    value={formData.guestCount}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gyro-gold focus:ring-4 focus:ring-gyro-gold/20 transition-all duration-200 outline-none"
                    placeholder="50"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gyro-navy mb-2">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gyro-gold focus:ring-4 focus:ring-gyro-gold/20 transition-all duration-200 outline-none resize-none"
                    placeholder="Tell us about your event, dietary restrictions, delivery location, or any special requests..."
                  />
                </div>

                <GyroButton type="submit" variant="primary" className="w-full">
                  Submit Quote Request →
                </GyroButton>

                <p className="text-sm text-gray-500 text-center">
                  We'll respond within 24 hours. For urgent requests, call us at{' '}
                  <a href="tel:6475488740" className="text-gyro-gold hover:underline font-semibold">
                    (647) 548-8740
                  </a>
                </p>
              </form>
            </div>
          </AnimatedSection>

          {/* Right Column - Info */}
          <div className="space-y-8">
            {/* Why Choose Us */}
            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold font-playfair text-gyro-navy mb-6">
                  Why Get a Quote?
                </h3>
                <ul className="space-y-4">
                  {[
                    { icon: "💰", title: "Best Prices", desc: "Custom packages tailored to your budget" },
                    { icon: "🎯", title: "Exact Portions", desc: "We calculate the perfect amount of food" },
                    { icon: "🍽️", title: "Menu Flexibility", desc: "Mix and match to create your ideal menu" },
                    { icon: "📅", title: "Easy Planning", desc: "We handle all the details for you" },
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="text-4xl flex-shrink-0">{item.icon}</div>
                      <div>
                        <h4 className="font-bold text-gyro-navy mb-1">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* Quick Contact */}
            <AnimatedSection delay={0.3}>
              <div className="bg-gradient-to-br from-gyro-navy to-blue-900 rounded-2xl p-8 shadow-xl text-white">
                <h3 className="text-2xl font-bold font-playfair mb-4">
                  Need Help Right Away?
                </h3>
                <p className="mb-6 text-gray-200">
                  Call us directly to speak with our catering team
                </p>
                <div className="space-y-4">
                  <a
                    href="tel:6475488740"
                    className="block text-center bg-gyro-gold hover:bg-gyro-gold-hover text-white px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    📞 Call (647) 548-8740
                  </a>
                  <div className="text-center text-sm text-gray-300">
                    <p>Monday - Friday: 9 AM - 8 PM</p>
                    <p>Saturday - Sunday: 10 AM - 6 PM</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Popular Packages */}
            <AnimatedSection delay={0.4}>
              <div className="bg-gyro-cream rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold font-playfair text-gyro-navy mb-4">
                  Popular Packages
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-300">
                    <span className="font-semibold">Office Lunch (20 people)</span>
                    <span className="text-gyro-gold font-bold">~$379</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-300">
                    <span className="font-semibold">Corporate Event (50 people)</span>
                    <span className="text-gyro-gold font-bold">~$949</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-semibold">Wedding (100 people)</span>
                    <span className="text-gyro-gold font-bold">~$1,899</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  * Prices are estimates. Final quote depends on menu selection and services.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

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
