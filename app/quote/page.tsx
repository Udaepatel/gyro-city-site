'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventTime: '',
    location: '',
    guests: '',
    eventType: '',
    dietary: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Add form submission logic (Web3Forms or email API)
    alert('Thank you! We will contact you within 24 hours with a custom quote.')
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <main className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 bg-[#1E3A8A] text-white shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/gyro-city-logo.png" alt="Gyro City" width={50} height={50} className="rounded-full" />
            <span className="text-2xl font-bold">GYRO CITY</span>
          </Link>
          <div className="hidden md:flex gap-6">
            <Link href="/menu" className="hover:text-[#B8860B] transition">Menu</Link>
            <Link href="/catering" className="hover:text-[#B8860B] transition">Catering</Link>
            <Link href="/about" className="hover:text-[#B8860B] transition">About</Link>
            <Link href="/contact" className="hover:text-[#B8860B] transition">Contact</Link>
          </div>
          <Link href="/quote" className="bg-[#B8860B] text-white px-6 py-2 rounded-lg hover:bg-[#9A7209] transition font-semibold">
            Get Quote
          </Link>
        </div>
      </nav>

      <section className="bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Get a Free Catering Quote</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Tell us about your event and we'll create a custom quote within 24 hours
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-[#1E3A8A] mb-2">Full Name *</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#B8860B] focus:outline-none"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1E3A8A] mb-2">Email *</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#B8860B] focus:outline-none"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-[#1E3A8A] mb-2">Phone *</label>
                <input 
                  type="tel" 
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#B8860B] focus:outline-none"
                  placeholder="(647) 123-4567"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1E3A8A] mb-2">Number of Guests *</label>
                <input 
                  type="number" 
                  name="guests"
                  required
                  min="10"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#B8860B] focus:outline-none"
                  placeholder="25"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-[#1E3A8A] mb-2">Event Date *</label>
                <input 
                  type="date" 
                  name="eventDate"
                  required
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#B8860B] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1E3A8A] mb-2">Event Time *</label>
                <input 
                  type="time" 
                  name="eventTime"
                  required
                  value={formData.eventTime}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#B8860B] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#1E3A8A] mb-2">Event Location *</label>
              <input 
                type="text" 
                name="location"
                required
                value={formData.location}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#B8860B] focus:outline-none"
                placeholder="123 King St W, Toronto, ON"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#1E3A8A] mb-2">Event Type *</label>
              <select
                name="eventType"
                required
                value={formData.eventType}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#B8860B] focus:outline-none"
              >
                <option value="">Select event type...</option>
                <option value="office-lunch">Office Lunch</option>
                <option value="corporate-event">Corporate Event</option>
                <option value="meeting">Meeting/Conference</option>
                <option value="party">Private Party</option>
                <option value="wedding">Wedding</option>
                <option value="funeral">Funeral Reception</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#1E3A8A] mb-2">Dietary Requirements</label>
              <input 
                type="text" 
                name="dietary"
                value={formData.dietary}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#B8860B] focus:outline-none"
                placeholder="e.g., Halal, Vegetarian, Vegan, Gluten-Free"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#1E3A8A] mb-2">Additional Details</label>
              <textarea 
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#B8860B] focus:outline-none"
                placeholder="Tell us about your event, menu preferences, delivery instructions, etc."
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-[#B8860B] text-white py-4 rounded-lg text-lg font-semibold hover:bg-[#9A7209] transition"
            >
              Request Free Quote
            </button>

            <p className="text-center text-sm text-gray-600">
              We'll respond within 24 hours with a detailed quote tailored to your event.
            </p>
          </form>
        </div>
      </section>

      <footer className="bg-[#1E3A8A] text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2026 Gyro City. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
