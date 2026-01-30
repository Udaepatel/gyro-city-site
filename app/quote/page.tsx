'use client'

import Link from 'next/link'
import { AnimatedSection } from '@/components/ui/animated-section'
import { useState } from 'react'

export default function QuotePage() {
  const [formData, setFormData] = useState({
    // Contact Information
    name: '',
    email: '',
    phone: '',
    company: '',
    
    // Event Details
    eventType: '',
    eventDate: '',
    backupDate: '',
    eventTime: '',
    guestCount: '',
    
    // Location & Delivery
    eventLocation: '',
    venueType: '',
    venueName: '',
    
    // Catering Preferences
    serviceStyle: [] as string[],
    budgetRange: '',
    menuPreferences: [] as string[],
    
    // Dietary Requirements
    dietaryRestrictions: '',
    halalRequired: false,
    kosherRequired: false,
    
    // Additional Details
    additionalInfo: '',
    howHeard: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    // Scroll to success message
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      if (name === 'halalRequired' || name === 'kosherRequired') {
        setFormData({ ...formData, [name]: checked })
      } else {
        // Handle multi-checkbox arrays
        const currentArray = formData[name as keyof typeof formData] as string[]
        setFormData({
          ...formData,
          [name]: checked 
            ? [...currentArray, value]
            : currentArray.filter(item => item !== value)
        })
      }
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const handleCheckboxArrayChange = (name: 'serviceStyle' | 'menuPreferences', value: string) => {
    const currentArray = formData[name]
    const newArray = currentArray.includes(value)
      ? currentArray.filter(item => item !== value)
      : [...currentArray, value]
    setFormData({ ...formData, [name]: newArray })
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Moving Text Marquee */}
      <div className="bg-white text-black py-3 overflow-hidden border-b border-gray-200">
        <div className="whitespace-nowrap animate-marquee-slow text-lg font-medium">
          Get Your Free Quote • Fast Response Within 24 Hours • No Hidden Fees • Transparent Pricing • Custom Menus
          &nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;
          Get Your Free Quote • Fast Response Within 24 Hours • No Hidden Fees • Transparent Pricing • Custom Menus
          &nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;
          Get Your Free Quote • Fast Response Within 24 Hours • No Hidden Fees • Transparent Pricing • Custom Menus
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
            <Link href="/catering/office" className="hover:text-white/80 transition-colors duration-200 font-medium">Office Catering</Link>
            <Link href="/quote" className="bg-white text-[#0066FF] px-6 py-2.5 rounded-lg text-base font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg underline underline-offset-4">
              Get a Quote
            </Link>
          </div>
        </div>
      </nav>

      {/* Success Message */}
      {submitted && (
        <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8 container mx-auto">
          <div className="flex items-start">
            <div className="text-4xl mr-4">✅</div>
            <div>
              <h3 className="text-2xl font-bold text-green-800 mb-2">Quote Request Received!</h3>
              <p className="text-green-700 text-lg mb-2">
                We'll send your detailed quote within 24 hours to <strong>{formData.email}</strong>.
              </p>
              <p className="text-green-600">
                Check your spam folder if you don't see it. Questions? Call us at{' '}
                <a href="tel:+16473408001" className="underline font-semibold">+1 (647) 340-8001</a>.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="bg-[#0066FF] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get Your Free Catering Quote
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Tell us about your event and we'll create a custom quote within 24 hours. No obligation, transparent pricing.
            </p>
            
            {/* What Happens Next */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mt-12">
              <h3 className="text-2xl font-bold mb-6">What happens next:</h3>
              <div className="grid md:grid-cols-5 gap-4 text-sm">
                <div>
                  <div className="w-12 h-12 bg-white text-[#0066FF] rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-3">1</div>
                  <p>✅ You fill out the form (2 minutes)</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-white text-[#0066FF] rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-3">2</div>
                  <p>✅ We review your event details</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-white text-[#0066FF] rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-3">3</div>
                  <p>✅ You receive a detailed quote via email (within 24 hours)</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-white text-[#0066FF] rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-3">4</div>
                  <p>✅ We answer any questions and finalize details</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-white text-[#0066FF] rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-3">5</div>
                  <p>✅ Your event is booked - stress-free catering sorted!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="form" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border-4 border-[#0066FF]">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Tell Us About Your Event
              </h2>
              <p className="text-gray-600 text-center mb-10 text-lg">
                Fill out the details below and we'll create a custom catering quote for your event
              </p>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Contact Information */}
                <div className="border-l-4 border-[#0066FF] pl-6">
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#0066FF] focus:ring-4 focus:ring-[#0066FF]/20 transition-all outline-none"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#0066FF] focus:ring-4 focus:ring-[#0066FF]/20 transition-all outline-none"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#0066FF] focus:ring-4 focus:ring-[#0066FF]/20 transition-all outline-none"
                        placeholder="(647) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold mb-2">
                        Company/Organization <span className="text-gray-400">(optional)</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#0066FF] focus:ring-4 focus:ring-[#0066FF]/20 transition-all outline-none"
                        placeholder="Company name"
                      />
                    </div>
                  </div>
                </div>

                {/* Event Details */}
                <div className="border-l-4 border-[#0066FF] pl-6">
                  <h3 className="text-2xl font-bold mb-6">Event Details</h3>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="eventType" className="block text-sm font-semibold mb-2">
                        Event Type *
                      </label>
                      <select
                        id="eventType"
                        name="eventType"
                        required
                        value={formData.eventType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#0066FF] focus:ring-4 focus:ring-[#0066FF]/20 transition-all outline-none"
                      >
                        <option value="">Select event type...</option>
                        <option value="office-lunch">Office Lunch</option>
                        <option value="corporate-event">Corporate Event</option>
                        <option value="birthday">Birthday Party</option>
                        <option value="wedding">Wedding Reception</option>
                        <option value="anniversary">Anniversary Celebration</option>
                        <option value="graduation">Graduation Party</option>
                        <option value="funeral">Funeral/Memorial Service</option>
                        <option value="reunion">Family Reunion</option>
                        <option value="holiday">Holiday Party</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="eventDate" className="block text-sm font-semibold mb-2">
                          Event Date *
                        </label>
                        <input
                          type="date"
                          id="eventDate"
                          name="eventDate"
                          required
                          value={formData.eventDate}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#0066FF] focus:ring-4 focus:ring-[#0066FF]/20 transition-all outline-none"
                        />
                      </div>
                      <div>
                        <label htmlFor="backupDate" className="block text-sm font-semibold mb-2">
                          Backup Date <span className="text-gray-400">(optional)</span>
                        </label>
                        <input
                          type="date"
                          id="backupDate"
                          name="backupDate"
                          value={formData.backupDate}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#0066FF] focus:ring-4 focus:ring-[#0066FF]/20 transition-all outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="eventTime" className="block text-sm font-semibold mb-2">
                          Event Time *
                        </label>
                        <select
                          id="eventTime"
                          name="eventTime"
                          required
                          value={formData.eventTime}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#0066FF] focus:ring-4 focus:ring-[#0066FF]/20 transition-all outline-none"
                        >
                          <option value="">Select time...</option>
                          <option value="morning">Morning (7 AM - 11 AM)</option>
                          <option value="lunch">Lunch (11 AM - 2 PM)</option>
                          <option value="afternoon">Afternoon (2 PM - 5 PM)</option>
                          <option value="evening">Evening (5 PM - 9 PM)</option>
                          <option value="late">Late Night (9 PM+)</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="guestCount" className="block text-sm font-semibold mb-2">
                          Number of Guests *
                        </label>
                        <select
                          id="guestCount"
                          name="guestCount"
                          required
                          value={formData.guestCount}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#0066FF] focus:ring-4 focus:ring-[#0066FF]/20 transition-all outline-none"
                        >
                          <option value="">Select guest count...</option>
                          <option value="1-10">1-10</option>
                          <option value="10-20">10-20</option>
                          <option value="20-30">20-30</option>
                          <option value="30-50">30-50</option>
                          <option value="50-75">50-75</option>
                          <option value="75-100">75-100</option>
                          <option value="100-150">100-150</option>
                          <option value="150-200">150-200</option>
                          <option value="200+">200+</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Location & Delivery */}
                <div className="border-l-4 border-[#0066FF] pl-6">
                  <h3 className="text-2xl font-bold mb-6">Location & Delivery</h3>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="eventLocation" className="block text-sm font-semibold mb-2">
                        Event Location (Full Address) *
                      </label>
                      <input
                        type="text"
                        id="eventLocation"
                        name="eventLocation"
                        required
                        value={formData.eventLocation}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#0066FF] focus:ring-4 focus:ring-[#0066FF]/20 transition-all outline-none"
                        placeholder="123 Main St, 898 College St, Toronto ON M6H1A4 M5V 1A1"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="venueType" className="block text-sm font-semibold mb-2">
                          Venue Type
                        </label>
                        <select
                          id="venueType"
                          name="venueType"
                          value={formData.venueType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#0066FF] focus:ring-4 focus:ring-[#0066FF]/20 transition-all outline-none"
                        >
                          <option value="">Select venue type...</option>
                          <option value="office">Office/Workplace</option>
                          <option value="residential">Residential/Home</option>
                          <option value="banquet">Banquet Hall</option>
                          <option value="community">Community Center</option>
                          <option value="restaurant">Restaurant</option>
                          <option value="outdoor">Outdoor/Park</option>
                          <option value="funeral-home">Funeral Home</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="venueName" className="block text-sm font-semibold mb-2">
                          Venue Name <span className="text-gray-400">(optional)</span>
                        </label>
                        <input
                          type="text"
                          id="venueName"
                          name="venueName"
                          value={formData.venueName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#0066FF] focus:ring-4 focus:ring-[#0066FF]/20 transition-all outline-none"
                          placeholder="Venue name"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Catering Preferences */}
                <div className="border-l-4 border-[#0066FF] pl-6">
                  <h3 className="text-2xl font-bold mb-6">Catering Preferences</h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold mb-3">
                        Service Style * <span className="text-gray-400">(select all that apply)</span>
                      </label>
                      <div className="space-y-3">
                        {[
                          { value: 'drop-off', label: 'Drop-off & Setup' },
                          { value: 'buffet', label: 'Buffet Service with Attendants' },
                          { value: 'plated', label: 'Plated Service with Waitstaff' },
                          { value: 'stations', label: 'Interactive Food Stations' },
                          { value: 'unsure', label: 'Not Sure - Need Recommendations' }
                        ].map((option) => (
                          <label key={option.value} className="flex items-center gap-3 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={formData.serviceStyle.includes(option.value)}
                              onChange={() => handleCheckboxArrayChange('serviceStyle', option.value)}
                              className="w-5 h-5 text-[#0066FF] border-2 border-gray-300 rounded focus:ring-[#0066FF]"
                            />
                            <span className="text-gray-700">{option.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="budgetRange" className="block text-sm font-semibold mb-2">
                        Budget Range per Person
                      </label>
                      <select
                        id="budgetRange"
                        name="budgetRange"
                        value={formData.budgetRange}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#0066FF] focus:ring-4 focus:ring-[#0066FF]/20 transition-all outline-none"
                      >
                        <option value="">Select budget range...</option>
                        <option value="under-15">Under $15</option>
                        <option value="15-20">$15 - $20</option>
                        <option value="20-25">$20 - $25</option>
                        <option value="25-30">$25 - $30</option>
                        <option value="30+">$30+</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-3">
                        Menu Preferences <span className="text-gray-400">(select all that apply)</span>
                      </label>
                      <div className="grid md:grid-cols-2 gap-3">
                        {[
                          { value: 'traditional', label: 'Traditional Greek' },
                          { value: 'mixed-grill', label: 'Mixed Grill' },
                          { value: 'vegetarian', label: 'Vegetarian Options' },
                          { value: 'seafood', label: 'Seafood' },
                          { value: 'healthy', label: 'Healthy/Light Options' },
                          { value: 'kid-friendly', label: 'Kid-Friendly' },
                          { value: 'unsure', label: 'Not Sure - Need Recommendations' }
                        ].map((option) => (
                          <label key={option.value} className="flex items-center gap-3 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={formData.menuPreferences.includes(option.value)}
                              onChange={() => handleCheckboxArrayChange('menuPreferences', option.value)}
                              className="w-5 h-5 text-[#0066FF] border-2 border-gray-300 rounded focus:ring-[#0066FF]"
                            />
                            <span className="text-gray-700">{option.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dietary Requirements */}
                <div className="border-l-4 border-[#0066FF] pl-6">
                  <h3 className="text-2xl font-bold mb-6">Dietary Requirements</h3>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="dietaryRestrictions" className="block text-sm font-semibold mb-2">
                        Dietary Restrictions/Allergies
                      </label>
                      <textarea
                        id="dietaryRestrictions"
                        name="dietaryRestrictions"
                        rows={3}
                        value={formData.dietaryRestrictions}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#0066FF] focus:ring-4 focus:ring-[#0066FF]/20 transition-all outline-none resize-none"
                        placeholder="E.g., 5 vegetarian, 2 vegan, 3 gluten-free, 1 nut allergy"
                      />
                    </div>

                    <div className="flex gap-8">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="halalRequired"
                          checked={formData.halalRequired}
                          onChange={handleChange}
                          className="w-5 h-5 text-[#0066FF] border-2 border-gray-300 rounded focus:ring-[#0066FF]"
                        />
                        <span className="text-gray-700 font-semibold">Halal Required</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="kosherRequired"
                          checked={formData.kosherRequired}
                          onChange={handleChange}
                          className="w-5 h-5 text-[#0066FF] border-2 border-gray-300 rounded focus:ring-[#0066FF]"
                        />
                        <span className="text-gray-700 font-semibold">Kosher Required</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Additional Details */}
                <div className="border-l-4 border-[#0066FF] pl-6">
                  <h3 className="text-2xl font-bold mb-6">Additional Details</h3>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="additionalInfo" className="block text-sm font-semibold mb-2">
                        Additional Information
                      </label>
                      <textarea
                        id="additionalInfo"
                        name="additionalInfo"
                        rows={4}
                        value={formData.additionalInfo}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#0066FF] focus:ring-4 focus:ring-[#0066FF]/20 transition-all outline-none resize-none"
                        placeholder="Tell us anything else about your event: special requests, setup requirements, theme, equipment needs, etc."
                      />
                    </div>

                    <div>
                      <label htmlFor="howHeard" className="block text-sm font-semibold mb-2">
                        How did you hear about us? <span className="text-gray-400">(optional)</span>
                      </label>
                      <select
                        id="howHeard"
                        name="howHeard"
                        value={formData.howHeard}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#0066FF] focus:ring-4 focus:ring-[#0066FF]/20 transition-all outline-none"
                      >
                        <option value="">Select...</option>
                        <option value="google">Google Search</option>
                        <option value="social">Social Media</option>
                        <option value="referral">Friend/Family Referral</option>
                        <option value="previous">Previous Customer</option>
                        <option value="planner">Event Planner</option>
                        <option value="funeral-home">Funeral Home</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full bg-[#0066FF] text-white px-8 py-5 rounded-lg text-xl font-bold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    GET MY FREE QUOTE →
                  </button>
                  <p className="text-sm text-gray-500 text-center mt-4">
                    We'll respond within 24 hours. For urgent requests, call us at{' '}
                    <a href="tel:+16473408001" className="text-[#0066FF] hover:underline font-semibold">
                      +1 (647) 340-8001
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Why Quote With Us Section */}
      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Get Your Quote from Gyro City?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <div className="bg-white border-4 border-[#0066FF] rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-3">Fast Response</h3>
              <p className="text-lg font-semibold text-[#0066FF] mb-3">Within 24 hours, often same day</p>
              <p className="text-gray-700">
                We respect your time. Most quotes are sent within 4-8 business hours. Urgent event? Call us directly for immediate assistance.
              </p>
            </div>

            <div className="bg-white border-4 border-[#0066FF] rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-2xl font-bold mb-3">Transparent Pricing</h3>
              <p className="text-lg font-semibold text-[#0066FF] mb-3">No hidden fees, all-inclusive quotes</p>
              <p className="text-gray-700">
                Our quotes include everything: food, serving supplies, setup, and service. What you see is what you pay. No surprises.
              </p>
            </div>

            <div className="bg-white border-4 border-[#0066FF] rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold mb-3">Fully Customizable</h3>
              <p className="text-lg font-semibold text-[#0066FF] mb-3">Tailored to your event & budget</p>
              <p className="text-gray-700">
                Every event is unique. We customize menus to match your preferences, dietary needs, and budget. Not locked into packages.
              </p>
            </div>

            <div className="bg-white border-4 border-[#0066FF] rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold mb-3">No Obligation</h3>
              <p className="text-lg font-semibold text-[#0066FF] mb-3">Free quotes with zero pressure</p>
              <p className="text-gray-700">
                Get your quote, take your time deciding. No pushy sales tactics. We're here when you're ready.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* What's Included Section */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What's Included in Your Quote?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
              <div className="text-4xl mb-3">✅</div>
              <h3 className="text-xl font-bold mb-2">Detailed Menu Breakdown</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• All dishes with descriptions</li>
                <li>• Portion sizes</li>
                <li>• Ingredient lists</li>
                <li>• Dietary labels</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
              <div className="text-4xl mb-3">✅</div>
              <h3 className="text-xl font-bold mb-2">Complete Pricing</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• Per person cost</li>
                <li>• Total event cost</li>
                <li>• Service fees (if any)</li>
                <li>• Delivery/setup fees</li>
                <li>• Tax breakdown</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
              <div className="text-4xl mb-3">✅</div>
              <h3 className="text-xl font-bold mb-2">Service Details</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• Delivery time</li>
                <li>• Setup requirements</li>
                <li>• Service staff (if applicable)</li>
                <li>• Equipment included</li>
                <li>• Cleanup information</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
              <div className="text-4xl mb-3">✅</div>
              <h3 className="text-xl font-bold mb-2">Dietary Accommodations</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• How we handle special diets</li>
                <li>• Separate preparation details</li>
                <li>• Labeling system</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
              <div className="text-4xl mb-3">✅</div>
              <h3 className="text-xl font-bold mb-2">Terms & Policies</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• Booking process</li>
                <li>• Payment schedule</li>
                <li>• Cancellation policy</li>
                <li>• Modification procedures</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
              <div className="text-4xl mb-3">✅</div>
              <h3 className="text-xl font-bold mb-2">Contact Information</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• Your dedicated contact</li>
                <li>• Phone & email</li>
                <li>• Next steps</li>
                <li>• How to finalize booking</li>
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Popular Package Previews */}
      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Popular Catering Packages to Get You Started
          </h2>
          <p className="text-gray-600 text-center mb-12 text-lg">
            Quick reference for common requests - all fully customizable
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <div className="bg-white border-4 border-[#0066FF] rounded-xl p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-2">Office Lunch</h3>
              <p className="text-3xl font-bold text-[#0066FF] mb-2">$15.99<span className="text-lg">/person</span></p>
              <p className="text-sm text-gray-600 mb-4">Min 10 people</p>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>• Individual lunch boxes</li>
                <li>• Choice of protein</li>
                <li>• Greek salad</li>
                <li>• Rice & pita</li>
                <li>• Tzatziki sauce</li>
              </ul>
              <a href="#form" className="block text-center bg-[#0066FF] text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Get This Quote →
              </a>
            </div>

            <div className="bg-white border-4 border-[#0066FF] rounded-xl p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-2">Corporate Event</h3>
              <p className="text-3xl font-bold text-[#0066FF] mb-2">$24.99<span className="text-lg">/person</span></p>
              <p className="text-sm text-gray-600 mb-4">Min 30 people</p>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>• Premium buffet setup</li>
                <li>• Multiple proteins</li>
                <li>• Mezze platter</li>
                <li>• Sides & salads</li>
                <li>• Professional service</li>
              </ul>
              <a href="#form" className="block text-center bg-[#0066FF] text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Get This Quote →
              </a>
            </div>

            <div className="bg-white border-4 border-[#0066FF] rounded-xl p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-2">Wedding Reception</h3>
              <p className="text-3xl font-bold text-[#0066FF] mb-2">$29.99<span className="text-lg">/person</span></p>
              <p className="text-sm text-gray-600 mb-4">Min 50 people</p>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>• Elegant plated or buffet</li>
                <li>• Premium meats</li>
                <li>• Appetizer service</li>
                <li>• Full sides selection</li>
                <li>• Dessert included</li>
              </ul>
              <a href="#form" className="block text-center bg-[#0066FF] text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Get This Quote →
              </a>
            </div>

            <div className="bg-white border-4 border-[#0066FF] rounded-xl p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-2">Funeral Service</h3>
              <p className="text-3xl font-bold text-[#0066FF] mb-2">$19.99<span className="text-lg">/person</span></p>
              <p className="text-sm text-gray-600 mb-4">Min 20 people</p>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>• Compassionate service</li>
                <li>• Buffet or drop-off</li>
                <li>• Flexible menu</li>
                <li>• Quick turnaround</li>
                <li>• Professional setup</li>
              </ul>
              <a href="#form" className="block text-center bg-[#0066FF] text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Get This Quote →
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Our Customers Say About Our Service
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white border-4 border-[#0066FF] rounded-xl p-8 text-center">
              <div className="text-[#0066FF] text-3xl mb-4">⭐⭐⭐⭐⭐</div>
              <h3 className="text-xl font-bold mb-3">"Quote was detailed and accurate"</h3>
              <p className="text-gray-700 mb-4 italic">
                "The quote we received was incredibly detailed - every dish explained, pricing transparent. The actual event matched the quote perfectly. Professional service from start to finish."
              </p>
              <p className="font-bold">— Jennifer L.</p>
              <p className="text-sm text-gray-600">Corporate Event</p>
            </div>

            <div className="bg-white border-4 border-[#0066FF] rounded-xl p-8 text-center">
              <div className="text-[#0066FF] text-3xl mb-4">⭐⭐⭐⭐⭐</div>
              <h3 className="text-xl font-bold mb-3">"Fast response, great communication"</h3>
              <p className="text-gray-700 mb-4 italic">
                "Submitted quote request at 2 PM, had detailed quote by 5 PM same day. They answered all my questions and customized the menu perfectly. Easy process!"
              </p>
              <p className="font-bold">— David K.</p>
              <p className="text-sm text-gray-600">Wedding Reception</p>
            </div>

            <div className="bg-white border-4 border-[#0066FF] rounded-xl p-8 text-center">
              <div className="text-[#0066FF] text-3xl mb-4">⭐⭐⭐⭐⭐</div>
              <h3 className="text-xl font-bold mb-3">"No pressure, helpful guidance"</h3>
              <p className="text-gray-700 mb-4 italic">
                "They provided a thorough quote without any pressure to book. Helped us understand our options and work within our budget. Made the whole process stress-free."
              </p>
              <p className="font-bold">— Sarah M.</p>
              <p className="text-sm text-gray-600">Birthday Party</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Quote & Booking FAQ
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white border-l-4 border-[#0066FF] p-6 rounded-r-xl shadow-md">
              <h3 className="text-xl font-bold mb-2">Q: How long does it take to get a quote?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> Most quotes sent within 24 hours, often same day. Urgent? Call us for immediate assistance at +1 (647) 340-8001.
              </p>
            </div>

            <div className="bg-white border-l-4 border-[#0066FF] p-6 rounded-r-xl shadow-md">
              <h3 className="text-xl font-bold mb-2">Q: Is the quote binding?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> Quotes are valid for 30 days. Final pricing confirmed when you book. Minor adjustments possible up to 72 hours before event.
              </p>
            </div>

            <div className="bg-white border-l-4 border-[#0066FF] p-6 rounded-r-xl shadow-md">
              <h3 className="text-xl font-bold mb-2">Q: Do I have to book immediately?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> No! Take your time reviewing. We'll hold dates with a deposit when you're ready to book.
              </p>
            </div>

            <div className="bg-white border-l-4 border-[#0066FF] p-6 rounded-r-xl shadow-md">
              <h3 className="text-xl font-bold mb-2">Q: Can I make changes after getting a quote?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> Absolutely! We'll revise the quote until it's perfect. Changes up to 72 hours before event.
              </p>
            </div>

            <div className="bg-white border-l-4 border-[#0066FF] p-6 rounded-r-xl shadow-md">
              <h3 className="text-xl font-bold mb-2">Q: What if I don't know exact guest count?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> Give us your best estimate. We can adjust within 24-48 hours of the event (depending on size).
              </p>
            </div>

            <div className="bg-white border-l-4 border-[#0066FF] p-6 rounded-r-xl shadow-md">
              <h3 className="text-xl font-bold mb-2">Q: Do you charge for quotes?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> No, all quotes are completely free with no obligation.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Urgent Needs Section */}
      <AnimatedSection className="py-16 bg-[#0066FF] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Catering Urgently?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't have time for the form? Call us directly!
          </p>
          
          <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <div className="mb-6">
              <a 
                href="tel:+16473408001" 
                className="inline-block bg-white text-[#0066FF] px-10 py-5 rounded-lg text-2xl font-bold hover:bg-gray-100 transition-all shadow-lg hover:scale-105"
              >
                📞 Call +1 (647) 340-8001
              </a>
            </div>
            
            <div className="text-left max-w-md mx-auto space-y-2">
              <h3 className="font-bold text-xl mb-3">Office hours:</h3>
              <p>• Monday - Friday: 8 AM - 8 PM</p>
              <p>• Saturday: 9 AM - 6 PM</p>
              <p>• Sunday: 10 AM - 5 PM</p>
              <p className="mt-4 font-semibold">
                <strong>Emergency/urgent:</strong> Available 7 days for same-day and next-day catering needs.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Final CTA Section */}
      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Your Quote?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Scroll up and fill out the form - takes just 2 minutes!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="#form" 
              className="bg-[#0066FF] text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-blue-700 transition-all shadow-lg hover:scale-105"
            >
              Fill Out Quote Form →
            </a>
            <a 
              href="tel:+16473408001" 
              className="bg-white border-4 border-[#0066FF] text-[#0066FF] px-10 py-4 rounded-lg text-lg font-bold hover:bg-gray-50 transition-all shadow-lg hover:scale-105"
            >
              Or Call +1 (647) 340-8001
            </a>
          </div>

          <div className="mt-12 pt-12 border-t-2 border-gray-200">
            <h3 className="text-2xl font-bold mb-4">Related Pages</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/catering/office" className="text-[#0066FF] hover:underline font-semibold">
                Office Catering →
              </Link>
              <Link href="/catering/corporate" className="text-[#0066FF] hover:underline font-semibold">
                Corporate Catering →
              </Link>
              <Link href="/catering/events" className="text-[#0066FF] hover:underline font-semibold">
                Event Catering →
              </Link>
              <Link href="/menu" className="text-[#0066FF] hover:underline font-semibold">
                View Menu →
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-xl mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/menu" className="hover:text-[#0066FF] transition">Menu</Link></li>
                <li><Link href="/about" className="hover:text-[#0066FF] transition">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-[#0066FF] transition">Contact</Link></li>
                <li><Link href="/quote" className="hover:text-[#0066FF] transition">Get Quote</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4">Catering Services</h3>
              <ul className="space-y-2">
                <li><Link href="/catering/office" className="hover:text-[#0066FF] transition">Office Catering</Link></li>
                <li><Link href="/catering/corporate" className="hover:text-[#0066FF] transition">Corporate Events</Link></li>
                <li><Link href="/catering/events" className="hover:text-[#0066FF] transition">Event Catering</Link></li>
                <li><Link href="/catering/funeral" className="hover:text-[#0066FF] transition">Funeral Catering</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>Phone: <a href="tel:+16473408001" className="hover:text-[#0066FF] transition">+1 (647) 340-8001</a></li>
                <li>Email: <a href="mailto:info@gyrocity.ca" className="hover:text-[#0066FF] transition">info@gyrocity.ca</a></li>
                <li>898 College St, Toronto ON M6H1A4</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="hover:text-[#0066FF] transition">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-[#0066FF] transition">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Gyro City. All rights reserved. Toronto Greek Catering.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
