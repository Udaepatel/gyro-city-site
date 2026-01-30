'use client'

import { SharedNav } from '@/components/shared-nav'
import { SharedFooter } from '@/components/shared-footer'
import { AnimatedSection } from '@/components/ui/animated-section'
import { GyroButton } from '@/components/ui/gyro-button'
import { motion } from 'framer-motion'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <SharedNav />

      {/* Hero Section */}
      <AnimatedSection className="bg-gradient-to-br from-gyro-navy via-blue-900 to-gyro-navy text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-playfair mb-6">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            We're here to answer your questions and help plan your perfect catering experience
          </p>
        </div>
      </AnimatedSection>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left - Contact Info */}
          <AnimatedSection>
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h2 className="text-3xl font-bold font-playfair text-gyro-navy mb-6">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl flex-shrink-0">📞</div>
                    <div>
                      <h3 className="font-bold text-gyro-navy text-lg mb-2">Phone</h3>
                      <a 
                        href="tel:+16473408001" 
                        className="text-xl text-gyro-gold hover:underline font-semibold"
                      >
                        +1 (647) 340-8001
                      </a>
                      <p className="text-gray-600 mt-1">Monday - Sunday: 9 AM - 8 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-4xl flex-shrink-0">📧</div>
                    <div>
                      <h3 className="font-bold text-gyro-navy text-lg mb-2">Email</h3>
                      <a 
                        href="mailto:info@gyrocity.ca" 
                        className="text-xl text-gyro-gold hover:underline"
                      >
                        info@gyrocity.ca
                      </a>
                      <p className="text-gray-600 mt-1">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-4xl flex-shrink-0">📍</div>
                    <div>
                      <h3 className="font-bold text-gyro-navy text-lg mb-2">Location</h3>
                      <p className="text-lg">Downtown Toronto, Ontario</p>
                      <p className="text-gray-600 mt-1">Serving the Greater Toronto Area</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-4xl flex-shrink-0">⏰</div>
                    <div>
                      <h3 className="font-bold text-gyro-navy text-lg mb-2">Business Hours</h3>
                      <div className="space-y-1 text-gray-700">
                        <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                        <p>Saturday: 10:00 AM - 6:00 PM</p>
                        <p>Sunday: 10:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gyro-gold to-gyro-gold-hover rounded-2xl p-8 shadow-xl text-white">
                <h3 className="text-2xl font-bold font-playfair mb-4">
                  Ready to Order?
                </h3>
                <p className="mb-6 text-lg">
                  Skip the wait and request your free catering quote online
                </p>
                <GyroButton 
                  href="/quote" 
                  variant="secondary" 
                  className="w-full bg-white text-gyro-navy hover:bg-gray-100 border-0"
                >
                  Get Free Quote →
                </GyroButton>
              </div>
            </div>
          </AnimatedSection>

          {/* Right - Quick Actions */}
          <AnimatedSection delay={0.2}>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold font-playfair text-gyro-navy mb-6">
                Quick Actions
              </h2>

              <div className="space-y-4">
                {[
                  {
                    title: "Request a Quote",
                    desc: "Get a custom catering quote for your event",
                    icon: "📋",
                    link: "/quote",
                    cta: "Get Quote"
                  },
                  {
                    title: "View Menu",
                    desc: "Browse our authentic Greek menu and pricing",
                    icon: "🥙",
                    link: "/menu",
                    cta: "View Menu"
                  },
                  {
                    title: "Order Online",
                    desc: "Place your catering order now",
                    icon: "🛒",
                    link: "/order",
                    cta: "Order Now"
                  },
                  {
                    title: "Learn About Us",
                    desc: "Discover our story and what makes us different",
                    icon: "ℹ️",
                    link: "/about",
                    cta: "About Us"
                  },
                ].map((action, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="border border-gray-200 rounded-lg p-6 hover:border-gyro-gold hover:shadow-lg transition-all duration-200"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-4xl flex-shrink-0">{action.icon}</div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gyro-navy text-xl mb-2">{action.title}</h3>
                        <p className="text-gray-600 mb-4">{action.desc}</p>
                        <GyroButton href={action.link} variant="ghost" className="px-4 py-2">
                          {action.cta} →
                        </GyroButton>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Delivery Areas */}
        <AnimatedSection className="mt-16">
          <div className="bg-gyro-cream rounded-2xl p-8 shadow-xl text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-playfair text-gyro-navy mb-4">
              We Deliver Across Toronto
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Fast, reliable catering delivery to these areas and beyond
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Downtown Toronto", "North York", "Mississauga", "Markham", "Etobicoke", "Scarborough", "Richmond Hill", "Vaughan"].map((area, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white px-6 py-3 rounded-full border-2 border-gyro-navy/20 font-semibold text-gyro-navy"
                >
                  {area}
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>

      <SharedFooter />
    </main>
  )
}
