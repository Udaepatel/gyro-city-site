import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Contact Us | Gyro City Toronto Greek Catering',
  description: 'Get in touch with Gyro City for Greek catering in downtown Toronto. Call (647) 548-8740 or email us today.',
}

export default function ContactPage() {
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
            <Link href="/contact" className="text-[#B8860B] font-semibold">Contact</Link>
          </div>
          <Link href="/quote" className="bg-[#B8860B] text-white px-6 py-2 rounded-lg hover:bg-[#9A7209] transition font-semibold">
            Get Quote
          </Link>
        </div>
      </nav>

      <section className="bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Gyro City</h1>
          <p className="text-xl max-w-2xl mx-auto">
            We're here to help! Reach out for catering inquiries, questions, or feedback.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-[#1E3A8A] mb-8">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">📞</div>
                  <div>
                    <h3 className="font-bold text-[#1E3A8A] text-lg mb-1">Phone</h3>
                    <a href="tel:6475488740" className="text-[#B8860B] text-xl font-semibold hover:underline">
                      (647) 548-8740
                    </a>
                    <p className="text-sm text-gray-600">Mon-Fri: 9am-6pm EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl">📧</div>
                  <div>
                    <h3 className="font-bold text-[#1E3A8A] text-lg mb-1">Email</h3>
                    <a href="mailto:info@gyrocity.ca" className="text-[#B8860B] text-xl font-semibold hover:underline">
                      info@gyrocity.ca
                    </a>
                    <p className="text-sm text-gray-600">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl">📍</div>
                  <div>
                    <h3 className="font-bold text-[#1E3A8A] text-lg mb-1">Location</h3>
                    <p className="text-gray-700">
                      Downtown Toronto, Ontario<br />
                      Serving GTA & surrounding areas
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl">🕐</div>
                  <div>
                    <h3 className="font-bold text-[#1E3A8A] text-lg mb-1">Hours</h3>
                    <p className="text-gray-700">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t-2 border-gray-200">
                <h3 className="font-bold text-[#1E3A8A] text-xl mb-4">Delivery Areas</h3>
                <p className="text-gray-700 mb-3">We deliver throughout:</p>
                <ul className="text-gray-700 space-y-2">
                  <li>✓ Downtown Toronto</li>
                  <li>✓ North York</li>
                  <li>✓ Etobicoke</li>
                  <li>✓ Mississauga</li>
                  <li>✓ Markham</li>
                  <li>✓ Scarborough</li>
                  <li>✓ Vaughan</li>
                  <li className="text-sm italic">+ other GTA locations</li>
                </ul>
              </div>
            </div>

            {/* Quick Links / CTAs */}
            <div>
              <h2 className="text-3xl font-bold text-[#1E3A8A] mb-8">Quick Actions</h2>
              
              <div className="space-y-6">
                <Link href="/quote" className="block bg-[#B8860B] text-white p-6 rounded-lg hover:bg-[#9A7209] transition">
                  <h3 className="font-bold text-xl mb-2">📋 Request a Quote</h3>
                  <p className="text-white/90">Get a custom catering quote for your event in 24 hours</p>
                </Link>

                <Link href="/menu" className="block bg-[#1E3A8A] text-white p-6 rounded-lg hover:bg-[#2563EB] transition">
                  <h3 className="font-bold text-xl mb-2">🥙 View Menu</h3>
                  <p className="text-white/90">Explore our authentic Greek catering menu and pricing</p>
                </Link>

                <Link href="/order" className="block bg-gray-100 text-[#1E3A8A] p-6 rounded-lg hover:bg-gray-200 transition border-2 border-[#1E3A8A]">
                  <h3 className="font-bold text-xl mb-2">🛒 Order Online</h3>
                  <p className="text-gray-700">Place your catering order directly through our website</p>
                </Link>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-[#1E3A8A] text-xl mb-4">Frequently Asked Questions</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="text-sm">
                      <strong>Minimum order?</strong><br />
                      15 guests for catering packages, 10 for individual boxes
                    </li>
                    <li className="text-sm">
                      <strong>Delivery fee?</strong><br />
                      Free for orders over $200 within downtown Toronto
                    </li>
                    <li className="text-sm">
                      <strong>How far in advance?</strong><br />
                      48 hours preferred, but we accommodate rush orders when possible
                    </li>
                    <li className="text-sm">
                      <strong>Dietary needs?</strong><br />
                      We offer halal, vegetarian, vegan, and gluten-free options
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
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
