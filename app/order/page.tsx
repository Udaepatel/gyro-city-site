import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Order Online | Gyro City Toronto Greek Catering',
  description: 'Order authentic Greek catering online for your Toronto event. Quick, easy ordering with delivery throughout the GTA.',
}

export default function OrderPage() {
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
          <h1 className="text-5xl font-bold mb-6">Order Greek Catering Online</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Three easy ways to place your catering order
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <div className="bg-white p-8 rounded-lg shadow-xl text-center">
              <div className="text-6xl mb-4">📞</div>
              <h3 className="text-2xl font-bold text-[#1E3A8A] mb-4">Call Us</h3>
              <p className="text-gray-700 mb-6">
                Speak directly with our catering team for personalized assistance
              </p>
              <a 
                href="tel:6475488740" 
                className="inline-block bg-[#B8860B] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#9A7209] transition"
              >
                (647) 548-8740
              </a>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-xl text-center border-4 border-[#B8860B]">
              <div className="bg-[#B8860B] text-white px-4 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                RECOMMENDED
              </div>
              <div className="text-6xl mb-4">📋</div>
              <h3 className="text-2xl font-bold text-[#1E3A8A] mb-4">Request Quote</h3>
              <p className="text-gray-700 mb-6">
                Fill out our form and get a custom quote within 24 hours
              </p>
              <Link 
                href="/quote" 
                className="inline-block bg-[#B8860B] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#9A7209] transition"
              >
                Get Free Quote
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-xl text-center">
              <div className="text-6xl mb-4">📧</div>
              <h3 className="text-2xl font-bold text-[#1E3A8A] mb-4">Email Us</h3>
              <p className="text-gray-700 mb-6">
                Send your catering requirements and we'll respond promptly
              </p>
              <a 
                href="mailto:info@gyrocity.ca" 
                className="inline-block bg-[#1E3A8A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2563EB] transition"
              >
                info@gyrocity.ca
              </a>
            </div>
          </div>

          {/* Order Process */}
          <div className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-[#1E3A8A] text-center mb-8">How It Works</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Choose', desc: 'Select your menu items and package' },
                { step: '2', title: 'Request', desc: 'Submit quote or call us directly' },
                { step: '3', title: 'Confirm', desc: 'Review quote and approve order' },
                { step: '4', title: 'Deliver', desc: 'We deliver fresh, hot food on time' }
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 bg-[#B8860B] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-[#1E3A8A] mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Menu Preview */}
          <div className="max-w-4xl mx-auto mt-16">
            <h2 className="text-3xl font-bold text-[#1E3A8A] text-center mb-8">Popular Catering Options</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-xl text-[#1E3A8A] mb-2">Individual Boxes</h3>
                <p className="text-2xl font-bold text-[#B8860B] mb-2">$15.99+</p>
                <p className="text-gray-700 text-sm">Perfect for office lunches and meetings</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-xl text-[#1E3A8A] mb-2">Party Platters</h3>
                <p className="text-2xl font-bold text-[#B8860B] mb-2">$89.99+</p>
                <p className="text-gray-700 text-sm">Ideal for small gatherings (6-8 people)</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-xl text-[#1E3A8A] mb-2">Group Catering</h3>
                <p className="text-2xl font-bold text-[#B8860B] mb-2">$18.99+/person</p>
                <p className="text-gray-700 text-sm">Full service for large events (15+)</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link href="/menu" className="inline-block bg-[#1E3A8A] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#2563EB] transition">
                View Full Menu →
              </Link>
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
