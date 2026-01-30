'use client'

import { SharedNav } from '@/components/shared-nav'
import { SharedFooter } from '@/components/shared-footer'
import { AnimatedSection } from '@/components/ui/animated-section'
import { GyroButton } from '@/components/ui/gyro-button'
import { GyroCard } from '@/components/ui/gyro-card'

export default function OfficeCateringPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <SharedNav />

      {/* Hero Section */}
      <AnimatedSection className="bg-gradient-to-br from-gyro-navy via-blue-900 to-gyro-navy text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-playfair mb-6">
            Office Catering
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Delicious Greek food delivered fresh to your downtown Toronto office
          </p>
        </div>
      </AnimatedSection>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left - Details */}
          <AnimatedSection>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold font-playfair text-gyro-navy mb-6">
                Why Choose Us for Your Office?
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Treat your team to authentic Greek flavors with our office catering services. We provide a variety of options tailored to fit your event size and preferences.
                </p>
                <p>
                  From individual gyro boxes to elaborate buffet setups, our catering is designed to make your office lunches and corporate events deliciously unique.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Halal, vegetarian, and vegan options available</li>
                  <li>Flexible packages for teams of all sizes</li>
                  <li>Dedicated service for timely delivery</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>

          {/* Right - Image Placeholder */}
          <AnimatedSection delay={0.2}>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-gyro-gold/30 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold backdrop-blur-sm bg-gyro-navy/40">
                [Office Event Image]
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Packages Section */}
        <AnimatedSection className="mt-16">
          <h2 className="text-3xl font-bold font-playfair text-gyro-navy text-center mb-8">
            Popular Office Packages
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Morning Meeting Package",
                price: "$199",
                features: [
                  "Bagels, pastries, and spreads",
                  "Fresh fruit platter",
                  "Coffee and tea service",
                  "Ideal for 10-15 people"
                ],
                link: "/quote"
              },
              {
                name: "Greek Lunch Box",
                price: "$15.99/person",
                features: [
                  "Choice of Gyro or Souvlaki",
                  "Greek salad and pita",
                  "Individually packaged",
                  "Perfect for office lunches"
                ],
                link: "/order"
              },
              {
                name: "Deluxe Corporate Buffet",
                price: "$25.99/person",
                features: [
                  "Full buffet setup",
                  "Selection of gyros, souvlaki, salads",
                  "Desserts and drinks included",
                  "Minimum 20 people"
                ],
                link: "/quote"
              }
            ].map((pkg, i) => (
              <GyroCard key={i} className="">
                <h3 className="text-2xl font-bold font-playfair text-gyro-navy mb-3">
                  {pkg.name}
                </h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-gyro-gold">{pkg.price}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-700">
                      <span className="text-gyro-gold mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <GyroButton href={pkg.link} variant="secondary" className="w-full">
                  Learn More →
                </GyroButton>
              </GyroCard>
            ))}
          </div>
        </AnimatedSection>

        {/* Testimonials Section */}
        <AnimatedSection className="mt-16">
          <h2 className="text-3xl font-bold font-playfair text-gyro-navy text-center mb-8">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                text: "Gyro City catered our office lunch, and it was amazing! Everyone loved the variety and quality. Highly recommend!",
                name: "Alex P.",
                company: "TechCorp Inc."
              },
              {
                text: "Perfect catering solution for our meeting. The individual boxes were convenient and delicious.",
                name: "Sarah K.",
                company: "Marketing Titans"
              },
              {
                text: "Professional and reliable. Our clients were impressed with the food and service.",
                name: "John M.",
                company: "Finance Solutions Group"
              }
            ].map((testimonial, i) => (
              <GyroCard key={i} className="">
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-bold text-gyro-navy">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.company}</p>
              </GyroCard>
            ))}
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection className="py-20 bg-gradient-to-r from-gyro-gold to-gyro-gold-hover text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6">
              Ready to Elevate Your Office Lunch?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Request a free quote today and discover our catering excellence
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <GyroButton href="/quote" variant="secondary" className="bg-white text-gyro-navy hover:bg-gray-100 border-0">
                Get Free Quote →
              </GyroButton>
              <GyroButton href="/order" variant="ghost" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gyro-gold">
                Order Online
              </GyroButton>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <SharedFooter />
    </main>
  )
}
