import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy | Gyro City',
  description: 'Gyro City privacy policy and data protection information.',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 bg-[#1E3A8A] text-white shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/gyro-city-logo.png" alt="Gyro City" width={50} height={50} className="rounded-full" />
            <span className="text-2xl font-bold">GYRO CITY</span>
          </Link>
          <Link href="/" className="text-sm hover:text-[#B8860B] transition">← Back to Home</Link>
        </div>
      </nav>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-[#1E3A8A] mb-8">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: January 30, 2026</p>

          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">1. Information We Collect</h2>
              <p className="mb-4">When you request a quote or place an order, we collect:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name and contact information (email, phone number)</li>
                <li>Delivery address and event location</li>
                <li>Event details (date, time, guest count)</li>
                <li>Dietary requirements and preferences</li>
                <li>Payment information (processed securely through our payment processor)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Process and fulfill your catering orders</li>
                <li>Communicate about your order status and delivery</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send promotional emails (with your consent - you can opt out anytime)</li>
                <li>Improve our services and customer experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">3. Information Sharing</h2>
              <p className="mb-4">We do not sell, trade, or rent your personal information to third parties. We may share information with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Payment processors to complete transactions</li>
                <li>Delivery partners for order fulfillment</li>
                <li>Service providers who assist in business operations</li>
                <li>Legal authorities when required by law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">4. Data Security</h2>
              <p>We implement industry-standard security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">5. Cookies</h2>
              <p>Our website uses cookies to improve user experience, analyze site traffic, and remember your preferences. You can disable cookies in your browser settings, though some features may not function properly.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">6. Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your information</li>
                <li>Opt out of marketing communications</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">7. Contact Us</h2>
              <p className="mb-4">If you have questions about this Privacy Policy or your personal information, contact us:</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>Email:</strong> info@gyrocity.ca</p>
                <p><strong>Phone:</strong> (647) 548-8740</p>
                <p><strong>Address:</strong> Downtown Toronto, Ontario</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">8. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.</p>
            </section>
          </div>
        </div>
      </section>

      <footer className="bg-[#1E3A8A] text-white py-12 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2026 Gyro City. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
