import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Terms of Service | Gyro City',
  description: 'Gyro City terms of service and catering policies.',
}

export default function TermsPage() {
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
          <h1 className="text-4xl font-bold text-[#1E3A8A] mb-8">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last updated: January 30, 2026</p>

          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">1. Ordering & Quotes</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>All catering orders require a minimum of 48 hours advance notice (rush orders may be accommodated when possible)</li>
                <li>Quotes are valid for 14 days from the date of issue</li>
                <li>Final guest count must be confirmed 48 hours before the event</li>
                <li>Minimum order requirements: 15 guests for catering packages, 10 guests for individual boxes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">2. Payment Terms</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>A 50% deposit is required to confirm your order</li>
                <li>Final payment is due 24 hours before the event</li>
                <li>We accept credit card, debit, e-transfer, and corporate accounts</li>
                <li>Prices are subject to applicable taxes (HST)</li>
                <li>Late payments may result in order cancellation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">3. Cancellations & Changes</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>More than 7 days before event:</strong> Full refund minus 10% processing fee</li>
                <li><strong>3-7 days before event:</strong> 50% refund</li>
                <li><strong>Less than 3 days before event:</strong> No refund</li>
                <li>Menu changes can be made up to 72 hours before the event</li>
                <li>Guest count increases accepted up to 48 hours before (subject to availability)</li>
                <li>Guest count decreases within 48 hours will be charged at the original count</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">4. Delivery</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Free delivery on orders over $200 within downtown Toronto</li>
                <li>Delivery fee of $25-$50 for orders under $200 or outside core area</li>
                <li>Delivery windows are 2-hour blocks (we will notify you 30 minutes before arrival)</li>
                <li>Customer must provide accessible delivery location and parking if required</li>
                <li>Gyro City is not responsible for delays caused by traffic, weather, or access issues beyond our control</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">5. Food Safety</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>All food is prepared fresh using safe food handling practices</li>
                <li>Hot food should be consumed within 2 hours of delivery or kept above 140°F</li>
                <li>Cold food should be kept refrigerated below 40°F</li>
                <li>Customer is responsible for proper food storage after delivery</li>
                <li>Gyro City is not liable for foodborne illness resulting from improper storage or handling after delivery</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">6. Allergies & Dietary Restrictions</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>We accommodate dietary needs (halal, vegetarian, vegan, gluten-free) when specified in advance</li>
                <li>Customer must inform us of all allergies and dietary restrictions at time of order</li>
                <li>While we take precautions, we cannot guarantee 100% allergen-free food due to shared kitchen equipment</li>
                <li>Customer assumes responsibility for verifying ingredients for severe allergies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">7. Equipment & Rentals</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Chafing dishes and serving equipment are available for rent</li>
                <li>Rented equipment must be returned clean within 24 hours</li>
                <li>Damaged or unreturned equipment will be charged at replacement cost</li>
                <li>Disposable serving ware is included in most packages</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">8. Liability</h2>
              <p className="mb-4">Gyro City's liability is limited to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Refund or replacement of defective food items</li>
                <li>Our total liability shall not exceed the amount paid for the order</li>
                <li>We are not responsible for indirect, incidental, or consequential damages</li>
                <li>Customer must report any issues within 24 hours of delivery</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">9. Force Majeure</h2>
              <p>Gyro City is not liable for failure to perform due to circumstances beyond our reasonable control, including but not limited to: natural disasters, severe weather, power outages, strikes, or government restrictions.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">10. Contact</h2>
              <p className="mb-4">Questions about these terms? Contact us:</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>Email:</strong> info@gyrocity.ca</p>
                <p><strong>Phone:</strong> (647) 548-8740</p>
                <p><strong>Address:</strong> Downtown Toronto, Ontario</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">11. Changes to Terms</h2>
              <p>Gyro City reserves the right to modify these terms at any time. Changes will be posted on this page with an updated date. Continued use of our services constitutes acceptance of updated terms.</p>
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
