'use client'

import Link from 'next/link'
import { AnimatedSection } from '@/components/ui/animated-section'

interface RelatedService {
  href: string
  title: string
  description: string
}

interface RelatedCateringServicesProps {
  currentPage: 'corporate' | 'office' | 'events' | 'funeral'
}

export function RelatedCateringServices({ currentPage }: RelatedCateringServicesProps) {
  const allServices: Record<string, RelatedService> = {
    corporate: {
      href: '/catering/corporate',
      title: 'Corporate Catering',
      description: 'Large corporate events, conferences, and business functions'
    },
    office: {
      href: '/catering/office',
      title: 'Office Catering',
      description: 'Daily office lunches, team meetings, and workplace events'
    },
    events: {
      href: '/catering/events',
      title: 'Event Catering',
      description: 'Weddings, birthdays, anniversaries, and celebrations'
    },
    funeral: {
      href: '/catering/funeral',
      title: 'Funeral Catering',
      description: 'Compassionate service for memorial gatherings and receptions'
    }
  }

  // Filter out the current page
  const relatedServices = Object.entries(allServices)
    .filter(([key]) => key !== currentPage)
    .map(([, service]) => service)

  return (
    <AnimatedSection className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4 text-center text-black">
          Related Catering Services
        </h2>
        <p className="text-lg text-center text-gray-700 mb-12">
          Explore our complete range of Greek catering solutions
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {relatedServices.map((service) => (
            <Link 
              key={service.href}
              href={service.href} 
              className="bg-white border-2 border-[#0066FF] rounded-xl p-6 hover:shadow-lg transition-all group"
            >
              <h3 className="font-bold text-xl mb-3 text-black group-hover:text-[#0066FF] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <span className="text-[#0066FF] font-semibold group-hover:underline">
                Learn More →
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link 
            href="/catering" 
            className="inline-block text-[#0066FF] font-semibold hover:underline text-lg"
          >
            View All Catering Services →
          </Link>
        </div>
      </div>
    </AnimatedSection>
  )
}
