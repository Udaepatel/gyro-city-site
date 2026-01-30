import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'About Us | Gyro City Toronto Greek Catering',
  description: 'Learn about Gyro City - Downtown Toronto\'s trusted Greek catering company. Fresh, authentic Mediterranean food for offices, events, and celebrations.',
}

export default function AboutPage() {
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
            <Link href="/about" className="text-[#B8860B] font-semibold">About</Link>
            <Link href="/contact" className="hover:text-[#B8860B] transition">Contact</Link>
          </div>
          <Link href="/quote" className="bg-[#B8860B] text-white px-6 py-2 rounded-lg hover:bg-[#9A7209] transition font-semibold">
            Get Quote
          </Link>
        </div>
      </nav>

      <section className="bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About Gyro City</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Bringing authentic Greek flavors to downtown Toronto since 2024
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8 text-lg text-gray-700">
            <p>
              <strong className="text-[#1E3A8A]">Gyro City</strong> was founded with a simple mission: to bring the authentic flavors of Greece to the heart of downtown Toronto. We believe that great food brings people together, and our passion for traditional Greek cuisine drives everything we do.
            </p>
            <p>
              Our recipes have been passed down through generations, perfected over decades, and adapted to serve the modern Toronto business community. Every gyro is hand-wrapped, every souvlaki is marinated with care, and every dish is prepared fresh daily in our downtown kitchen.
            </p>
            <p>
              We specialize in <strong>corporate catering</strong>, <strong>office lunches</strong>, and <strong>event catering</strong> for businesses and organizations throughout Toronto. Whether you're hosting a team meeting, celebrating a milestone, or feeding hungry employees, we deliver fresh, delicious Mediterranean food that makes your event memorable.
            </p>

            <div className="bg-gray-50 p-8 rounded-lg my-12">
              <h2 className="text-3xl font-bold text-[#1E3A8A] mb-6 text-center">Our Values</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: 'Fresh, Never Frozen', desc: 'All ingredients sourced fresh daily - no shortcuts, no frozen meals.' },
                  { title: 'Authentic Recipes', desc: 'Traditional family recipes honoring our Greek heritage.' },
                  { title: 'Customer First', desc: 'Your satisfaction is our priority. We go the extra mile.' },
                  { title: 'Community Focused', desc: 'Proud to serve downtown Toronto businesses and neighbors.' }
                ].map((value, i) => (
                  <div key={i}>
                    <h3 className="font-bold text-[#1E3A8A] text-xl mb-2">{value.title}</h3>
                    <p className="text-gray-700">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <p>
              Based in <strong>downtown Toronto</strong>, we deliver throughout the GTA. Our team is dedicated to providing exceptional service, reliable delivery, and food that exceeds your expectations every single time.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#1E3A8A] text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience Gyro City?</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/quote" className="bg-[#B8860B] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#9A7209] transition">
              Get Free Quote
            </Link>
            <Link href="/contact" className="bg-white text-[#1E3A8A] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition">
              Contact Us
            </Link>
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
