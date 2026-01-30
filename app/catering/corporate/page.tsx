'use client'

import { SharedNav } from '@/components/shared-nav'
import { SharedFooter } from '@/components/shared-footer'
import { AnimatedSection } from '@/components/ui/animated-section'
import { GyroButton } from '@/components/ui/gyro-button'
import { GyroCard } from '@/components/ui/gyro-card'

export default function CorporateCateringPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <SharedNav />

      {/* Hero Section */}
      <AnimatedSection className="bg-gradient-to-br from-gyro-navy via-blue-900 to-gyro-navy text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-playfair mb-6">
            Corporate Catering
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Impress your clients with exquisite Greek cuisine at your next corporate event
          </p>
        </div>
      </AnimatedSection>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left - Details */}
          <AnimatedSection>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold font-playfair text-gyro-navy mb-6">
                Sophisticated Greek Catering for Your Business
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Elevate your corporate events with Gyro City's premium Greek catering. We provide full-service catering with customizable menus to suit any business occasion.
                </p>
                <p>
                  From intimate meetings to large-scale conferences, our catering solutions are designed to meet the highest standards of quality and presentation.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Professional setup and presentation</li>
                  <li>Customized menu options to fit your event theme and dietary needs</li>
                  <li>On-time delivery with exceptional service</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>

          {/* Right - Image Placeholder */}
          <AnimatedSection delay={0.2}>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-gyro-gold/30 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold backdrop-blur-sm bg-gyro-navy/40">
                [Corporate Event Image]
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Packages Section */}
        <AnimatedSection className="mt-16">
          <h2 className="text-3xl font-bold font-playfair text-gyro-navy text-center mb-8">
            Popular Corporate Packages
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Executive Luncheon",
                price: "$29.99/person",
                features: [
                  "Choice of gourmet gyros and souvlaki",
                  "Premium sides and salads",
                  "Dessert selection",
                  "Ideal for executive meetings"
                ],
                link: "/quote"
              },
              {
                name: "Conference Buffet",
                price: "$39.99/person",
                features: [
                  "Full-service buffet with setup",
                  "Variety of Greek specialties",
                  "Individual dietary accommodations",
                  "Great for large events"
                ],
                link: "/quote"
              },
              {
                name: "Gala Dinner Service",
                price: "$49.99/person",
                features: [
                  "Select entrees, appetizers, and desserts",
                  "Professional waitstaff and plating",
                  "Complimentary wine service",
                  "Memorable evening experience"
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
                  Request Quote →
                </GyroButton>
              </GyroCard>
            ))}
          </div>
        </AnimatedSection>

        {/* Testimonials Section */}
        <AnimatedSection className="mt-16">
          <h2 className="text-3xl font-bold font-playfair text-gyro-navy text-center mb-8">
            What Our Corporate Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                text: "Gyro City exceeded our expectations at our annual gala. The food was exceptional, and the service was impeccable.",
                name: "Linda T.",
                company: "Elite Financial Group"
              },
              {
                text: "The best catering experience our firm has had. Gyro City's flexibility and professionalism stood out.",
                name: "Mark R.",
                company: "Legal Innovators"
              },
              {
                text: "Delicious food, beautifully presented. Our clients were impressed!",
                name: "Jennifer D.",
                company: "Global Marketing Agency"
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
              Make Your Next Event a Culinary Success
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today to customize your corporate catering package
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
