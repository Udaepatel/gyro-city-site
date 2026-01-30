'use client'

import Link from 'next/link'
import { SharedNav } from '@/components/shared-nav'
import { SharedFooter } from '@/components/shared-footer'
import { AnimatedSection } from '@/components/ui/animated-section'
import { GyroButton } from '@/components/ui/gyro-button'

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Moving Text Marquee */}
      <div className="bg-white text-black py-3 overflow-hidden border-b border-gray-200">
        <div className="whitespace-nowrap animate-marquee-slow text-base md:text-lg font-medium tracking-wide">
          Authentic Greek Menu • Fresh Daily • Gyros • Souvlaki • Platters • Halal Options • Vegetarian • Gluten-Free Available
          &nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;
          Authentic Greek Menu • Fresh Daily • Gyros • Souvlaki • Platters • Halal Options • Vegetarian • Gluten-Free Available
          &nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;
          Authentic Greek Menu • Fresh Daily • Gyros • Souvlaki • Platters • Halal Options • Vegetarian • Gluten-Free Available
        </div>
      </div>
      
      <SharedNav />

      {/* Hero Section */}
      <AnimatedSection className="bg-white py-16 border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-playfair text-black leading-tight mb-6">
            Authentic Greek Catering Menu - Fresh Mediterranean Cuisine for Toronto
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8">
            Handcrafted gyros, perfectly seasoned souvlaki, and traditional Greek specialties. All items made fresh daily with premium ingredients.
          </p>
          
          {/* Image Placeholder */}
          <div className="max-w-4xl mx-auto mb-10 bg-gray-100 border-2 border-[#0066FF] rounded-lg h-64 md:h-96 flex items-center justify-center">
            <p className="text-gray-500 text-lg">[ Hero Image Placeholder - Greek Food Spread ]</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/order" className="bg-[#0066FF] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all shadow-lg">
              ORDER ONLINE NOW
            </Link>
            <Link href="/quote" className="bg-transparent border-2 border-[#0066FF] text-[#0066FF] px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#0066FF] hover:text-white transition-all">
              GET CUSTOM QUOTE
            </Link>
            <Link href="#" className="bg-gray-100 border-2 border-gray-300 text-black px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-200 transition-all">
              DOWNLOAD MENU PDF
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Quick Navigation */}
      <AnimatedSection className="bg-gray-50 py-8 border-b sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm font-semibold text-gray-600 mb-4">QUICK JUMP TO:</p>
          <div className="flex flex-wrap gap-3 justify-center text-sm">
            <a href="#individual-boxes" className="bg-white border-2 border-[#0066FF] text-[#0066FF] px-4 py-2 rounded-lg font-semibold hover:bg-[#0066FF] hover:text-white transition-all">
              Individual Lunch Boxes
            </a>
            <a href="#party-platters" className="bg-white border-2 border-[#0066FF] text-[#0066FF] px-4 py-2 rounded-lg font-semibold hover:bg-[#0066FF] hover:text-white transition-all">
              Party Platters
            </a>
            <a href="#group-packages" className="bg-white border-2 border-[#0066FF] text-[#0066FF] px-4 py-2 rounded-lg font-semibold hover:bg-[#0066FF] hover:text-white transition-all">
              Group Catering
            </a>
            <a href="#appetizers" className="bg-white border-2 border-[#0066FF] text-[#0066FF] px-4 py-2 rounded-lg font-semibold hover:bg-[#0066FF] hover:text-white transition-all">
              Appetizers
            </a>
            <a href="#salads" className="bg-white border-2 border-[#0066FF] text-[#0066FF] px-4 py-2 rounded-lg font-semibold hover:bg-[#0066FF] hover:text-white transition-all">
              Salads
            </a>
            <a href="#sides" className="bg-white border-2 border-[#0066FF] text-[#0066FF] px-4 py-2 rounded-lg font-semibold hover:bg-[#0066FF] hover:text-white transition-all">
              Sides
            </a>
            <a href="#desserts" className="bg-white border-2 border-[#0066FF] text-[#0066FF] px-4 py-2 rounded-lg font-semibold hover:bg-[#0066FF] hover:text-white transition-all">
              Desserts
            </a>
            <a href="#beverages" className="bg-white border-2 border-[#0066FF] text-[#0066FF] px-4 py-2 rounded-lg font-semibold hover:bg-[#0066FF] hover:text-white transition-all">
              Beverages
            </a>
          </div>
        </div>
      </AnimatedSection>

      {/* Individual Lunch Boxes */}
      <section id="individual-boxes" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-black mb-4 text-center">
              Individual Catering Lunch Boxes
            </h2>
            <p className="text-xl text-center text-gray-700 mb-2">Perfect for office lunches, meetings, and individual servings</p>
            <p className="text-lg text-center text-[#0066FF] font-semibold mb-8">Minimum 10 boxes | Starting at $14.99/person</p>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Each box includes: Choice of main, Greek salad, rice or fries, pita bread, tzatziki sauce, and a cookie
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Classic Gyro Box */}
            <AnimatedSection delay={0.1}>
              <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6 h-full flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold font-playfair">Classic Gyro Box</h3>
                  <span className="bg-[#0066FF] text-white px-3 py-1 rounded-full text-sm font-semibold">POPULAR</span>
                </div>
                <p className="text-3xl font-bold text-[#0066FF] mb-3">$15.99</p>
                <p className="text-gray-700 mb-4">Slow-roasted beef and lamb gyro meat, shaved thin and seasoned with authentic Greek spices</p>
                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <p>• Options: Regular or Large portion</p>
                  <p>• Halal Available: Chicken gyro substitution</p>
                  <p>• Gluten-Free: GF pita available (+$2)</p>
                </div>
                <div className="mt-auto">
                  <Link href="/order" className="block w-full text-center bg-[#0066FF] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all">
                    Order Gyro Boxes →
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            {/* Chicken Souvlaki Box */}
            <AnimatedSection delay={0.2}>
              <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6 h-full flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold font-playfair">Chicken Souvlaki Box</h3>
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">#1 CHOICE</span>
                </div>
                <p className="text-3xl font-bold text-[#0066FF] mb-3">$16.99</p>
                <p className="text-gray-700 mb-4">Marinated chicken breast grilled on skewers with lemon, olive oil, and oregano</p>
                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <p>• Protein: 6 oz grilled chicken</p>
                  <p>• Halal: Prepared halal upon request</p>
                  <p>• Popular: Our #1 office lunch choice</p>
                </div>
                <div className="mt-auto">
                  <Link href="/order" className="block w-full text-center bg-[#0066FF] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all">
                    Order Chicken Souvlaki →
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            {/* Beef Souvlaki Box */}
            <AnimatedSection delay={0.3}>
              <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6 h-full flex flex-col">
                <h3 className="text-2xl font-bold font-playfair mb-3">Beef Souvlaki Box</h3>
                <p className="text-3xl font-bold text-[#0066FF] mb-3">$17.99</p>
                <p className="text-gray-700 mb-4">Premium AAA beef tenderloin cubes marinated and grilled to perfection</p>
                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <p>• Protein: 6 oz premium beef</p>
                  <p>• Preparation: Medium-rare to medium</p>
                  <p>• Pairs with: Our signature garlic sauce</p>
                </div>
                <div className="mt-auto">
                  <Link href="/order" className="block w-full text-center bg-[#0066FF] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all">
                    Order Beef Souvlaki →
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            {/* Lamb Souvlaki Box */}
            <AnimatedSection delay={0.4}>
              <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6 h-full flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold font-playfair">Lamb Souvlaki Box</h3>
                  <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">PREMIUM</span>
                </div>
                <p className="text-3xl font-bold text-[#0066FF] mb-3">$18.99</p>
                <p className="text-gray-700 mb-4">Tender New Zealand lamb leg, marinated in Greek herbs and chargrilled</p>
                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <p>• Protein: 6 oz lamb</p>
                  <p>• Halal: Available upon request</p>
                  <p>• Premium: Our most flavorful option</p>
                </div>
                <div className="mt-auto">
                  <Link href="/order" className="block w-full text-center bg-[#0066FF] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all">
                    Order Lamb Souvlaki →
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            {/* Vegetarian Mediterranean Box */}
            <AnimatedSection delay={0.5}>
              <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6 h-full flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold font-playfair">Vegetarian Mediterranean Box</h3>
                  <div className="flex gap-1">
                    <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold">V</span>
                    <span className="bg-green-700 text-white px-2 py-1 rounded text-xs font-semibold">VG</span>
                  </div>
                </div>
                <p className="text-3xl font-bold text-[#0066FF] mb-3">$14.99</p>
                <p className="text-gray-700 mb-4">Crispy falafel, hummus, dolmades, and Greek salad</p>
                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <p>• Plant-based protein: Falafel (4 pieces)</p>
                  <p>• Vegan: Available without tzatziki</p>
                  <p>• Popular with: Health-conscious teams</p>
                </div>
                <div className="mt-auto">
                  <Link href="/order" className="block w-full text-center bg-[#0066FF] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all">
                    Order Vegetarian Box →
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            {/* Mixed Grill Box */}
            <AnimatedSection delay={0.6}>
              <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6 h-full flex flex-col">
                <h3 className="text-2xl font-bold font-playfair mb-3">Mixed Grill Box</h3>
                <p className="text-3xl font-bold text-[#0066FF] mb-3">$19.99</p>
                <p className="text-gray-700 mb-4">Can't decide? Get a taste of everything!</p>
                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <p>• Includes: Gyro meat, chicken souvlaki, and beef souvlaki</p>
                  <p>• Best for: First-time orders</p>
                  <p>• Generous portions: Perfect for hearty appetites</p>
                </div>
                <div className="mt-auto">
                  <Link href="/order" className="block w-full text-center bg-[#0066FF] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all">
                    Order Mixed Grill →
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Party Platters */}
      <section id="party-platters" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-black mb-4 text-center">
              Greek Party Platters for Toronto Catering
            </h2>
            <p className="text-xl text-center text-gray-700 mb-2">Ideal for parties, meetings, and gatherings of 6-50 people</p>
            <p className="text-lg text-center text-[#0066FF] font-semibold mb-12">Mix and match platters for larger events</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Gyro Meat Platter */}
            <AnimatedSection delay={0.1}>
              <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6 h-full flex flex-col">
                <h3 className="text-2xl font-bold font-playfair mb-2">Gyro Meat Platter</h3>
                <p className="text-3xl font-bold text-[#0066FF] mb-2">$89.99</p>
                <p className="text-sm font-semibold text-gray-600 mb-4">Serves 6-8 people</p>
                <div className="space-y-2 mb-4 text-gray-700">
                  <p>• 3 lbs mixed gyro meat (beef & lamb)</p>
                  <p>• 12 warm pita breads</p>
                  <p>• Tzatziki sauce (16 oz)</p>
                  <p>• Sliced tomatoes, onions, lettuce</p>
                  <p>• Hot sauce & garlic sauce</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg mb-4">
                  <p className="text-sm font-semibold">Halal Option: Chicken gyro meat - $92.99</p>
                </div>
                <div className="mt-auto">
                  <Link href="/order" className="block w-full text-center bg-[#0066FF] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all">
                    Order Gyro Platter →
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            {/* Souvlaki Skewer Platter */}
            <AnimatedSection delay={0.2}>
              <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6 h-full flex flex-col">
                <h3 className="text-2xl font-bold font-playfair mb-2">Souvlaki Skewer Platter</h3>
                <p className="text-3xl font-bold text-[#0066FF] mb-2">$119.99</p>
                <p className="text-sm font-semibold text-gray-600 mb-4">Serves 8-10 people</p>
                <div className="space-y-2 mb-4 text-gray-700">
                  <p>• 20 skewers (choice of chicken, beef, or lamb)</p>
                  <p>• Mix & match proteins</p>
                  <p>• Lemon wedges & oregano</p>
                  <p>• Grilled vegetables</p>
                  <p>• 2 dipping sauces</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg mb-4">
                  <p className="text-sm font-semibold">Popular Mix: 10 chicken + 10 beef skewers</p>
                </div>
                <div className="mt-auto">
                  <Link href="/order" className="block w-full text-center bg-[#0066FF] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all">
                    Order Souvlaki Platter →
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            {/* Deluxe Mixed Grill Platter */}
            <AnimatedSection delay={0.3}>
              <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6 h-full flex flex-col relative">
                <span className="absolute top-0 right-0 bg-[#0066FF] text-white px-3 py-1 rounded-bl-lg rounded-tr-lg text-xs font-bold">
                  BEST VALUE
                </span>
                <h3 className="text-2xl font-bold font-playfair mb-2">Deluxe Mixed Grill Platter</h3>
                <p className="text-3xl font-bold text-[#0066FF] mb-2">$149.99</p>
                <p className="text-sm font-semibold text-gray-600 mb-4">Serves 10-12 people</p>
                <div className="space-y-2 mb-4 text-gray-700">
                  <p>• 2 lbs gyro meat</p>
                  <p>• 12 souvlaki skewers (mixed proteins)</p>
                  <p>• 15 pita breads</p>
                  <p>• Greek salad (large)</p>
                  <p>• Rice pilaf</p>
                  <p>• Trio of sauces</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg mb-4">
                  <p className="text-sm font-semibold text-green-700">Most popular catering platter!</p>
                </div>
                <div className="mt-auto">
                  <Link href="/order" className="block w-full text-center bg-[#0066FF] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all">
                    Order Deluxe Platter →
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            {/* Mezze Appetizer Platter */}
            <AnimatedSection delay={0.4}>
              <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6 h-full flex flex-col">
                <h3 className="text-2xl font-bold font-playfair mb-2">Mezze Appetizer Platter</h3>
                <p className="text-3xl font-bold text-[#0066FF] mb-2">$79.99</p>
                <p className="text-sm font-semibold text-gray-600 mb-4">Serves 8-10 people</p>
                <div className="space-y-2 mb-4 text-gray-700">
                  <p>• Hummus (16 oz)</p>
                  <p>• Tzatziki (16 oz)</p>
                  <p>• Baba ghanoush (12 oz)</p>
                  <p>• Dolmades (20 pieces)</p>
                  <p>• Feta cheese & olives</p>
                  <p>• Pita bread & vegetables</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg mb-4">
                  <p className="text-sm font-semibold">Perfect for: Meeting starters, cocktail parties</p>
                </div>
                <div className="mt-auto">
                  <Link href="/order" className="block w-full text-center bg-[#0066FF] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all">
                    Order Mezze Platter →
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            {/* Mediterranean Feast Platter */}
            <AnimatedSection delay={0.5}>
              <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6 h-full flex flex-col">
                <h3 className="text-2xl font-bold font-playfair mb-2">Mediterranean Feast Platter</h3>
                <p className="text-3xl font-bold text-[#0066FF] mb-2">$189.99</p>
                <p className="text-sm font-semibold text-gray-600 mb-4">Serves 12-15 people</p>
                <div className="space-y-2 mb-4 text-gray-700 text-sm">
                  <p>• 3 lbs mixed proteins (gyro, chicken, beef)</p>
                  <p>• Large Greek salad</p>
                  <p>• Spanakopita (12 pieces)</p>
                  <p>• Rice pilaf & roasted potatoes</p>
                  <p>• 20 pita breads</p>
                  <p>• Multiple dips & sauces</p>
                  <p>• Dolmades (15 pieces)</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg mb-4">
                  <p className="text-sm font-semibold">Complete meal: Everything you need for a full lunch</p>
                </div>
                <div className="mt-auto">
                  <Link href="/order" className="block w-full text-center bg-[#0066FF] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all">
                    Order Feast Platter →
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Group Catering Packages */}
      <section id="group-packages" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-black mb-4 text-center">
              Group Catering Packages - Full Service Greek Catering
            </h2>
            <p className="text-xl text-center text-gray-700 mb-2">For corporate events, parties, and large gatherings</p>
            <p className="text-lg text-center text-[#0066FF] font-semibold mb-12">Minimum 15 people | Includes setup, serving supplies, and delivery</p>
          </AnimatedSection>

          <div className="space-y-6 max-w-5xl mx-auto">
            {/* Corporate Lunch Package */}
            <AnimatedSection delay={0.1}>
              <div className="bg-white border-2 border-[#0066FF] rounded-xl p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-3xl font-bold font-playfair mb-2">Corporate Lunch Package</h3>
                    <p className="text-gray-600">Minimum 15 people</p>
                  </div>
                  <p className="text-4xl font-bold text-[#0066FF]">$18.99<span className="text-xl text-gray-600">/person</span></p>
                </div>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="font-semibold mb-3">Includes per person:</p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Choice of gyro or souvlaki (chicken, beef, or lamb)</li>
                      <li>• Greek salad or Caesar salad</li>
                      <li>• Rice pilaf or Greek fries</li>
                      <li>• Pita bread</li>
                      <li>• Tzatziki & hot sauce</li>
                      <li>• Baklava or Greek cookie</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-3">Add-ons available:</p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Appetizer course (+$4.99/person)</li>
                      <li>• Premium proteins (+$2-4/person)</li>
                      <li>• Additional sides (+$2.99/person)</li>
                    </ul>
                  </div>
                </div>
                <Link href="/quote" className="inline-block bg-[#0066FF] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all">
                  Get Custom Quote →
                </Link>
              </div>
            </AnimatedSection>

            {/* Mediterranean Feast Package */}
            <AnimatedSection delay={0.2}>
              <div className="bg-white border-2 border-[#0066FF] rounded-xl p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-3xl font-bold font-playfair mb-2">Mediterranean Feast Package</h3>
                    <p className="text-gray-600">Minimum 20 people</p>
                  </div>
                  <p className="text-4xl font-bold text-[#0066FF]">$22.99<span className="text-xl text-gray-600">/person</span></p>
                </div>
                <p className="font-semibold mb-3">Includes per person:</p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <ul className="space-y-2 text-gray-700">
                    <li>• Mixed grill (gyro + souvlaki skewers)</li>
                    <li>• Greek salad</li>
                    <li>• Spanakopita (spinach pie)</li>
                    <li>• Rice pilaf & roasted potatoes</li>
                  </ul>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Pita bread & trio of dips</li>
                    <li>• Greek dessert selection</li>
                  </ul>
                </div>
                <p className="text-sm text-gray-600 mb-6">Perfect for: Corporate events, celebrations, office parties</p>
                <Link href="/quote" className="inline-block bg-[#0066FF] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all">
                  Get Custom Quote →
                </Link>
              </div>
            </AnimatedSection>

            {/* Build-Your-Own Gyro Bar */}
            <AnimatedSection delay={0.3}>
              <div className="bg-white border-2 border-[#0066FF] rounded-xl p-8 relative">
                <span className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 rounded-bl-lg rounded-tr-lg text-xs font-bold">
                  INTERACTIVE
                </span>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-3xl font-bold font-playfair mb-2">Build-Your-Own Gyro Bar</h3>
                    <p className="text-gray-600">Minimum 20 people</p>
                  </div>
                  <p className="text-4xl font-bold text-[#0066FF]">$24.99<span className="text-xl text-gray-600">/person</span></p>
                </div>
                <p className="font-semibold mb-3">Interactive dining experience includes:</p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <ul className="space-y-2 text-gray-700">
                    <li>• 3 protein options (unlimited servings)</li>
                    <li>• Fresh pita bread station</li>
                    <li>• Toppings bar: lettuce, tomatoes, onions, cucumbers, peppers</li>
                  </ul>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Sauce station: tzatziki, hot sauce, garlic sauce, hummus</li>
                    <li>• Greek fries or rice pilaf</li>
                    <li>• Greek salad</li>
                    <li>• Professional setup & serving supplies</li>
                  </ul>
                </div>
                <p className="text-sm text-gray-600 mb-6">Great for: Team building, casual corporate events</p>
                <Link href="/quote" className="inline-block bg-[#0066FF] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all">
                  Get Custom Quote →
                </Link>
              </div>
            </AnimatedSection>

            {/* Premium Celebration Package */}
            <AnimatedSection delay={0.4}>
              <div className="bg-white border-2 border-[#0066FF] rounded-xl p-8 relative">
                <span className="absolute top-0 right-0 bg-purple-500 text-white px-3 py-1 rounded-bl-lg rounded-tr-lg text-xs font-bold">
                  PREMIUM
                </span>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-3xl font-bold font-playfair mb-2">Premium Celebration Package</h3>
                    <p className="text-gray-600">Minimum 25 people</p>
                  </div>
                  <p className="text-4xl font-bold text-[#0066FF]">$29.99<span className="text-xl text-gray-600">/person</span></p>
                </div>
                <p className="font-semibold mb-3">Upscale Greek catering includes:</p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <ul className="space-y-2 text-gray-700">
                    <li>• Premium proteins: Lamb souvlaki, beef tenderloin, jumbo shrimp</li>
                    <li>• Mezze platter (hummus, tzatziki, dolmades)</li>
                    <li>• Greek salad with imported feta</li>
                    <li>• Spanakopita & tiropita</li>
                  </ul>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Roasted lemon potatoes & rice pilaf</li>
                    <li>• Premium baklava & galaktoboureko</li>
                    <li>• Greek coffee or tea service</li>
                  </ul>
                </div>
                <p className="text-sm text-gray-600 mb-6">Perfect for: Weddings, galas, VIP corporate events</p>
                <Link href="/quote" className="inline-block bg-[#0066FF] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all">
                  Get Custom Quote →
                </Link>
              </div>
            </AnimatedSection>

            {/* Budget-Friendly Office Package */}
            <AnimatedSection delay={0.5}>
              <div className="bg-white border-2 border-[#0066FF] rounded-xl p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-3xl font-bold font-playfair mb-2">Budget-Friendly Office Package</h3>
                    <p className="text-gray-600">Minimum 15 people</p>
                  </div>
                  <p className="text-4xl font-bold text-[#0066FF]">$15.99<span className="text-xl text-gray-600">/person</span></p>
                </div>
                <p className="font-semibold mb-3">Value-packed includes:</p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li>• Choice of 2 proteins (gyro or chicken souvlaki)</li>
                  <li>• Simple Greek salad</li>
                  <li>• Rice or fries</li>
                  <li>• Pita bread & tzatziki</li>
                  <li>• Cookie</li>
                </ul>
                <p className="text-sm text-gray-600 mb-6">Best for: Regular office lunches, budget-conscious events</p>
                <Link href="/quote" className="inline-block bg-[#0066FF] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all">
                  Get Custom Quote →
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Appetizers & Mezze */}
      <section id="appetizers" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-black mb-12 text-center">
              Greek Appetizers & Mezze
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Hummus */}
            <AnimatedSection delay={0.1}>
              <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
                <h3 className="text-xl font-bold font-playfair mb-2">Hummus</h3>
                <div className="flex gap-2 mb-3">
                  <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold">V</span>
                  <span className="bg-green-700 text-white px-2 py-1 rounded text-xs font-semibold">VG</span>
                  <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">GF</span>
                </div>
                <p className="text-2xl font-bold text-[#0066FF] mb-3">Small $12.99 | Large $22.99</p>
                <p className="text-gray-700 mb-2">Creamy chickpea dip with tahini, garlic, lemon, and olive oil</p>
                <p className="text-sm text-gray-600 mb-4">Serves: Small 4-6 | Large 10-12</p>
                <Link href="/order" className="block w-full text-center bg-gray-100 border-2 border-[#0066FF] text-[#0066FF] px-4 py-2 rounded-lg font-semibold hover:bg-[#0066FF] hover:text-white transition-all">
                  Order
                </Link>
              </div>
            </AnimatedSection>

            {/* Tzatziki */}
            <AnimatedSection delay={0.2}>
              <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
                <h3 className="text-xl font-bold font-playfair mb-2">Tzatziki</h3>
                <div className="flex gap-2 mb-3">
                  <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold">V</span>
                  <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">GF</span>
                </div>
                <p className="text-2xl font-bold text-[#0066FF] mb-3">Small $11.99 | Large $19.99</p>
                <p className="text-gray-700 mb-2">Traditional Greek yogurt, cucumber, garlic, and dill sauce</p>
                <p className="text-sm text-gray-600 mb-4">Serves: Small 4-6 | Large 10-12</p>
                <Link href="/order" className="block w-full text-center bg-gray-100 border-2 border-[#0066FF] text-[#0066FF] px-4 py-2 rounded-lg font-semibold hover:bg-[#0066FF] hover:text-white transition-all">
                  Order
                </Link>
              </div>
            </AnimatedSection>

            {/* Baba Ghanoush */}
            <AnimatedSection delay={0.3}>
              <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
                <h3 className="text-xl font-bold font-playfair mb-2">Baba Ghanoush</h3>
                <div className="flex gap-2 mb-3">
                  <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold">V</span>
                  <span className="bg-green-700 text-white px-2 py-1 rounded text-xs font-semibold">VG</span>
                  <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">GF</span>
                </div>
                <p className="text-2xl font-bold text-[#0066FF] mb-3">Small $13.99 | Large $23.99</p>
                <p className="text-gray-700 mb-2">Smoky roasted eggplant dip with tahini and spices</p>
                <p className="text-sm text-gray-600 mb-4">Serves: Small 4-6 | Large 10-12</p>
                <Link href="/order" className="block w-full text-center bg-gray-100 border-2 border-[#0066FF] text-[#0066FF] px-4 py-2 rounded-lg font-semibold hover:bg-[#0066FF] hover:text-white transition-all">
                  Order
                </Link>
              </div>
            </AnimatedSection>

            {/* Dolmades */}
            <AnimatedSection delay={0.4}>
              <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
                <h3 className="text-xl font-bold font-playfair mb-2">Dolmades</h3>
                <div className="flex gap-2 mb-3">
                  <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold">V</span>
                </div>
                <p className="text-2xl font-bold text-[#0066FF] mb-3">$24.99/dozen</p>
                <p className="text-gray-700 mb-2">Grape leaves stuffed with rice, herbs, and lemon</p>
                <p className="text-sm text-gray-600 mb-4">Popular: Order 2-3 dozen for parties</p>
                <Link href="/order" className="block w-full text-center bg-gray-100 border-2 border-[#0066FF] text-[#0066FF] px-4 py-2 rounded-lg font-semibold hover:bg-[#0066FF] hover:text-white transition-all">
                  Order
                </Link>
              </div>
            </AnimatedSection>

            {/* Spanakopita */}
            <AnimatedSection delay={0.5}>
              <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
                <h3 className="text-xl font-bold font-playfair mb-2">Spanakopita</h3>
                <div className="flex gap-2 mb-3">
                  <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold">V</span>
                </div>
                <p className="text-2xl font-bold text-[#0066FF] mb-3">$29.99/dozen</p>
                <p className="text-gray-700 mb-2">Flaky phyllo triangles filled with spinach and feta</p>
                <p className="text-sm text-gray-600 mb-4">Served: Hot from the oven</p>
                <Link href="/order" className="block w-full text-center bg-gray-100 border-2 border-[#0066FF] text-[#0066FF] px-4 py-2 rounded-lg font-semibold hover:bg-[#0066FF] hover:text-white transition-all">
                  Order
                </Link>
              </div>
            </AnimatedSection>

            {/* Tiropita */}
            <AnimatedSection delay={0.6}>
              <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
                <h3 className="text-xl font-bold font-playfair mb-2">Tiropita</h3>
                <div className="flex gap-2 mb-3">
                  <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold">V</span>
                  <span className="bg-orange-500 text-white px-2 py-1 rounded text-xs font-semibold">POPULAR</span>
                </div>
                <p className="text-2xl font-bold text-[#0066FF] mb-3">$27.99/dozen</p>
                <p className="text-gray-700 mb-2">Golden phyllo pastries filled with Greek cheeses</p>
                <p className="text-sm text-gray-600 mb-4">Popular appetizer: Best seller</p>
                <Link href="/order" className="block w-full text-center bg-gray-100 border-2 border-[#0066FF] text-[#0066FF] px-4 py-2 rounded-lg font-semibold hover:bg-[#0066FF] hover:text-white transition-all">
                  Order
                </Link>
              </div>
            </AnimatedSection>

            {/* Falafel Platter */}
            <AnimatedSection delay={0.7}>
              <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
                <h3 className="text-xl font-bold font-playfair mb-2">Falafel Platter</h3>
                <div className="flex gap-2 mb-3">
                  <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold">V</span>
                  <span className="bg-green-700 text-white px-2 py-1 rounded text-xs font-semibold">VG</span>
                </div>
                <p className="text-2xl font-bold text-[#0066FF] mb-3">$34.99</p>
                <p className="text-gray-700 mb-2">20 crispy falafel balls with tahini sauce</p>
                <p className="text-sm text-gray-600 mb-4">Serves: 8-10 people</p>
                <Link href="/order" className="block w-full text-center bg-gray-100 border-2 border-[#0066FF] text-[#0066FF] px-4 py-2 rounded-lg font-semibold hover:bg-[#0066FF] hover:text-white transition-all">
                  Order
                </Link>
              </div>
            </AnimatedSection>

            {/* Saganaki */}
            <AnimatedSection delay={0.8}>
              <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
                <h3 className="text-xl font-bold font-playfair mb-2">Saganaki (Fried Cheese)</h3>
                <div className="flex gap-2 mb-3">
                  <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold">V</span>
                </div>
                <p className="text-2xl font-bold text-[#0066FF] mb-3">$44.99</p>
                <p className="text-gray-700 mb-2">Pan-fried kefalograviera cheese, flambéed tableside</p>
                <p className="text-sm text-gray-600 mb-4">Serves: 10-12 | Dramatic presentation!</p>
                <Link href="/order" className="block w-full text-center bg-gray-100 border-2 border-[#0066FF] text-[#0066FF] px-4 py-2 rounded-lg font-semibold hover:bg-[#0066FF] hover:text-white transition-all">
                  Order
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Salads */}
      <section id="salads" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-black mb-12 text-center">
              Fresh Greek Salads
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Traditional Greek Salad */}
            <AnimatedSection delay={0.1}>
              <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
                <h3 className="text-xl font-bold font-playfair mb-2">Traditional Greek Salad</h3>
                <div className="flex gap-2 mb-3">
                  <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold">V</span>
                  <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">GF</span>
                </div>
                <p className="text-2xl font-bold text-[#0066FF] mb-3">Small $24.99 | Large $44.99</p>
                <p className="text-gray-700 mb-2">Tomatoes, cucumbers, red onions, green peppers, kalamata olives, feta, oregano, olive oil</p>
                <p className="text-sm text-gray-600 mb-4">Small: 6-8 | Large: 12-15</p>
                <Link href="/order" className="block w-full text-center bg-gray-100 border-2 border-[#0066FF] text-[#0066FF] px-4 py-2 rounded-lg font-semibold hover:bg-[#0066FF] hover:text-white transition-all">
                  Order
                </Link>
              </div>
            </AnimatedSection>

            {/* Horiatiki */}
            <AnimatedSection delay={0.2}>
              <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
                <h3 className="text-xl font-bold font-playfair mb-2">Horiatiki (Village Salad)</h3>
                <div className="flex gap-2 mb-3">
                  <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold">V</span>
                  <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">GF</span>
                </div>
                <p className="text-2xl font-bold text-[#0066FF] mb-3">Small $26.99 | Large $48.99</p>
                <p className="text-gray-700 mb-2">Authentic Greek salad with large chunks of vegetables, no lettuce, premium imported feta</p>
                <p className="text-sm text-gray-600 mb-4">Small: 6-8 | Large: 12-15</p>
                <Link href="/order" className="block w-full text-center bg-gray-100 border-2 border-[#0066FF] text-[#0066FF] px-4 py-2 rounded-lg font-semibold hover:bg-[#0066FF] hover:text-white transition-all">
                  Order
                </Link>
              </div>
            </AnimatedSection>

            {/* Mediterranean Quinoa Salad */}
            <AnimatedSection delay={0.3}>
              <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
                <h3 className="text-xl font-bold font-playfair mb-2">Mediterranean Quinoa Salad</h3>
                <div className="flex gap-2 mb-3">
                  <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold">V</span>
                  <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">GF</span>
                </div>
                <p className="text-2xl font-bold text-[#0066FF] mb-3">Small $27.99 | Large $49.99</p>
                <p className="text-gray-700 mb-2">Quinoa, chickpeas, cucumber, tomatoes, red onion, feta, lemon vinaigrette</p>
                <p className="text-sm text-gray-600 mb-4">Small: 6-8 | Large: 12-15</p>
                <Link href="/order" className="block w-full text-center bg-gray-100 border-2 border-[#0066FF] text-[#0066FF] px-4 py-2 rounded-lg font-semibold hover:bg-[#0066FF] hover:text-white transition-all">
                  Order
                </Link>
              </div>
            </AnimatedSection>

            {/* Caesar Salad */}
            <AnimatedSection delay={0.4}>
              <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
                <h3 className="text-xl font-bold font-playfair mb-2">Caesar Salad</h3>
                <p className="text-2xl font-bold text-[#0066FF] mb-3">Small $22.99 | Large $39.99</p>
                <p className="text-gray-700 mb-2">Romaine lettuce, parmesan, croutons, Caesar dressing</p>
                <p className="text-sm text-gray-600 mb-4">Small: 6-8 | Large: 12-15<br/>Add grilled chicken: +$15</p>
                <Link href="/order" className="block w-full text-center bg-gray-100 border-2 border-[#0066FF] text-[#0066FF] px-4 py-2 rounded-lg font-semibold hover:bg-[#0066FF] hover:text-white transition-all">
                  Order
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Sides */}
      <section id="sides" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-black mb-12 text-center">
              Traditional Greek Sides
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Rice Pilaf */}
            <AnimatedSection delay={0.1}>
              <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
                <h3 className="text-xl font-bold font-playfair mb-2">Rice Pilaf</h3>
                <div className="flex gap-2 mb-3">
                  <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold">V</span>
                  <span className="bg-green-700 text-white px-2 py-1 rounded text-xs font-semibold">VG</span>
                  <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">GF</span>
                </div>
                <p className="text-2xl font-bold text-[#0066FF] mb-3">Small $19.99 | Large $34.99</p>
                <p className="text-gray-700 mb-2">Fluffy basmati rice with herbs and lemon</p>
                <p className="text-sm text-gray-600 mb-4">Small: 6-8 | Large: 12-15</p>
                <Link href="/order" className="block w-full text-center bg-gray-100 border-2 border-[#0066FF] text-[#0066FF] px-4 py-2 rounded-lg font-semibold hover:bg-[#0066FF] hover:text-white transition-all">
                  Order
                </Link>
              </div>
            </AnimatedSection>

            {/* Greek Fries */}
            <AnimatedSection delay={0.2}>
              <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
                <h3 className="text-xl font-bold font-playfair mb-2">Greek Fries</h3>
                <div className="flex gap-2 mb-3">
                  <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold">V</span>
                </div>
                <p className="text-2xl font-bold text-[#0066FF] mb-3">Small $22.99 | Large $39.99</p>
                <p className="text-gray-700 mb-2">Hand-cut fries with oregano, feta, and lemon</p>
                <p className="text-sm text-gray-600 mb-4">Small: 6-8 | Large: 12-15</p>
                <Link href="/order" className="block w-full text-center bg-gray-100 border-2 border-[#0066FF] text-[#0066FF] px-4 py-2 rounded-lg font-semibold hover:bg-[#0066FF] hover:text-white transition-all">
                  Order
                </Link>
              </div>
            </AnimatedSection>

            {/* Roasted Lemon Potatoes */}
            <AnimatedSection delay={0.3}>
              <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
                <h3 className="text-xl font-bold font-playfair mb-2">Roasted Lemon Potatoes</h3>
                <div className="flex gap-2 mb-3">
                  <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold">V</span>
                  <span className="bg-green-700 text-white px-2 py-1 rounded text-xs font-semibold">VG</span>
                  <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">GF</span>
                </div>
                <p className="text-2xl font-bold text-[#0066FF] mb-3">Small $21.99 | Large $37.99</p>
                <p className="text-gray-700 mb-2">Oven-roasted potatoes with lemon, garlic, and oregano</p>
                <p className="text-sm text-gray-600 mb-4">Small: 6-8 | Large: 12-15</p>
                <Link href="/order" className="block w-full text-center bg-gray-100 border-2 border-[#0066FF] text-[#0066FF] px-4 py-2 rounded-lg font-semibold hover:bg-[#0066FF] hover:text-white transition-all">
                  Order
                </Link>
              </div>
            </AnimatedSection>

            {/* Grilled Vegetables */}
            <AnimatedSection delay={0.4}>
              <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
                <h3 className="text-xl font-bold font-playfair mb-2">Grilled Vegetables</h3>
                <div className="flex gap-2 mb-3">
                  <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold">V</span>
                  <span className="bg-green-700 text-white px-2 py-1 rounded text-xs font-semibold">VG</span>
                  <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">GF</span>
                </div>
                <p className="text-2xl font-bold text-[#0066FF] mb-3">Small $24.99 | Large $42.99</p>
                <p className="text-gray-700 mb-2">Seasonal Mediterranean vegetables, chargrilled</p>
                <p className="text-sm text-gray-600 mb-4">Small: 6-8 | Large: 12-15</p>
                <Link href="/order" className="block w-full text-center bg-gray-100 border-2 border-[#0066FF] text-[#0066FF] px-4 py-2 rounded-lg font-semibold hover:bg-[#0066FF] hover:text-white transition-all">
                  Order
                </Link>
              </div>
            </AnimatedSection>

            {/* Pita Bread */}
            <AnimatedSection delay={0.5}>
              <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
                <h3 className="text-xl font-bold font-playfair mb-2">Pita Bread</h3>
                <p className="text-2xl font-bold text-[#0066FF] mb-3">$1.99 each | $18.99/dozen</p>
                <p className="text-gray-700 mb-2">Fresh, warm pita bread</p>
                <p className="text-sm text-gray-600 mb-4">Gluten-free pita: +$1 each</p>
                <Link href="/order" className="block w-full text-center bg-gray-100 border-2 border-[#0066FF] text-[#0066FF] px-4 py-2 rounded-lg font-semibold hover:bg-[#0066FF] hover:text-white transition-all">
                  Order
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Desserts */}
      <section id="desserts" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-black mb-12 text-center">
              Traditional Greek Desserts
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Baklava */}
            <AnimatedSection delay={0.1}>
              <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold font-playfair">Baklava</h3>
                  <span className="bg-orange-500 text-white px-2 py-1 rounded text-xs font-semibold">POPULAR</span>
                </div>
                <p className="text-2xl font-bold text-[#0066FF] mb-3">$3.99 each | $39.99/dozen</p>
                <p className="text-gray-700 mb-2">Layers of phyllo, walnuts, honey syrup</p>
                <p className="text-sm text-gray-600 mb-4">Most popular Greek dessert</p>
                <Link href="/order" className="block w-full text-center bg-gray-100 border-2 border-[#0066FF] text-[#0066FF] px-4 py-2 rounded-lg font-semibold hover:bg-[#0066FF] hover:text-white transition-all">
                  Order
                </Link>
              </div>
            </AnimatedSection>

            {/* Galaktoboureko */}
            <AnimatedSection delay={0.2}>
              <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
                <h3 className="text-xl font-bold font-playfair mb-2">Galaktoboureko</h3>
                <p className="text-2xl font-bold text-[#0066FF] mb-3">$4.49 each | $44.99/dozen</p>
                <p className="text-gray-700 mb-2">Custard-filled phyllo pastry with syrup</p>
                <p className="text-sm text-gray-600 mb-4">Creamy & delicious</p>
                <Link href="/order" className="block w-full text-center bg-gray-100 border-2 border-[#0066FF] text-[#0066FF] px-4 py-2 rounded-lg font-semibold hover:bg-[#0066FF] hover:text-white transition-all">
                  Order
                </Link>
              </div>
            </AnimatedSection>

            {/* Loukoumades */}
            <AnimatedSection delay={0.3}>
              <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
                <h3 className="text-xl font-bold font-playfair mb-2">Loukoumades</h3>
                <p className="text-2xl font-bold text-[#0066FF] mb-3">$34.99/platter</p>
                <p className="text-gray-700 mb-2">Greek honey donuts with cinnamon</p>
                <p className="text-sm text-gray-600 mb-4">Serves: 10-12 people<br/>Served warm</p>
                <Link href="/order" className="block w-full text-center bg-gray-100 border-2 border-[#0066FF] text-[#0066FF] px-4 py-2 rounded-lg font-semibold hover:bg-[#0066FF] hover:text-white transition-all">
                  Order
                </Link>
              </div>
            </AnimatedSection>

            {/* Greek Cookies Assortment */}
            <AnimatedSection delay={0.4}>
              <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
                <h3 className="text-xl font-bold font-playfair mb-2">Greek Cookies Assortment</h3>
                <p className="text-2xl font-bold text-[#0066FF] mb-3">$29.99/dozen</p>
                <p className="text-gray-700 mb-2">Kourambiedes, melomakarona, and butter cookies</p>
                <p className="text-sm text-gray-600 mb-4">Perfect for: Coffee breaks</p>
                <Link href="/order" className="block w-full text-center bg-gray-100 border-2 border-[#0066FF] text-[#0066FF] px-4 py-2 rounded-lg font-semibold hover:bg-[#0066FF] hover:text-white transition-all">
                  Order
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Beverages */}
      <section id="beverages" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-black mb-12 text-center">
              Beverages
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Greek Coffee Service */}
            <AnimatedSection delay={0.1}>
              <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
                <h3 className="text-xl font-bold font-playfair mb-2">Greek Coffee Service</h3>
                <p className="text-2xl font-bold text-[#0066FF] mb-3">$3.99/person</p>
                <p className="text-gray-700 mb-2">Traditional Greek coffee, sugar, water</p>
                <p className="text-sm text-gray-600 mb-4">Minimum 10 people</p>
                <Link href="/order" className="block w-full text-center bg-gray-100 border-2 border-[#0066FF] text-[#0066FF] px-4 py-2 rounded-lg font-semibold hover:bg-[#0066FF] hover:text-white transition-all">
                  Order
                </Link>
              </div>
            </AnimatedSection>

            {/* Soft Drinks */}
            <AnimatedSection delay={0.2}>
              <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
                <h3 className="text-xl font-bold font-playfair mb-2">Soft Drinks</h3>
                <p className="text-2xl font-bold text-[#0066FF] mb-3">$1.99 each</p>
                <p className="text-gray-700 mb-2">Coke, Diet Coke, Sprite, Ginger Ale</p>
                <p className="text-sm text-gray-600 mb-4">By the case: $22.99/24 cans</p>
                <Link href="/order" className="block w-full text-center bg-gray-100 border-2 border-[#0066FF] text-[#0066FF] px-4 py-2 rounded-lg font-semibold hover:bg-[#0066FF] hover:text-white transition-all">
                  Order
                </Link>
              </div>
            </AnimatedSection>

            {/* Bottled Water */}
            <AnimatedSection delay={0.3}>
              <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
                <h3 className="text-xl font-bold font-playfair mb-2">Bottled Water</h3>
                <p className="text-2xl font-bold text-[#0066FF] mb-3">$1.49 each</p>
                <p className="text-gray-700 mb-4">Premium bottled water</p>
                <p className="text-sm text-gray-600 mb-4">By the case: $16.99/24 bottles</p>
                <Link href="/order" className="block w-full text-center bg-gray-100 border-2 border-[#0066FF] text-[#0066FF] px-4 py-2 rounded-lg font-semibold hover:bg-[#0066FF] hover:text-white transition-all">
                  Order
                </Link>
              </div>
            </AnimatedSection>

            {/* Fresh Lemonade */}
            <AnimatedSection delay={0.4}>
              <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
                <h3 className="text-xl font-bold font-playfair mb-2">Fresh Lemonade</h3>
                <p className="text-2xl font-bold text-[#0066FF] mb-3">$24.99/pitcher</p>
                <p className="text-gray-700 mb-2">House-made with real lemons</p>
                <p className="text-sm text-gray-600 mb-4">Serves: 8-10 glasses</p>
                <Link href="/order" className="block w-full text-center bg-gray-100 border-2 border-[#0066FF] text-[#0066FF] px-4 py-2 rounded-lg font-semibold hover:bg-[#0066FF] hover:text-white transition-all">
                  Order
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Dietary Options */}
      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-black mb-8 text-center">
            Dietary Accommodations
          </h2>
          <p className="text-center text-gray-700 mb-12 text-lg">Please specify dietary requirements when ordering</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6 text-center">
              <div className="text-5xl mb-4">☪️</div>
              <h3 className="font-bold text-xl mb-2">Halal</h3>
              <p className="text-gray-600">All chicken and lamb available halal</p>
            </div>
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6 text-center">
              <div className="text-5xl mb-4">🥗</div>
              <h3 className="font-bold text-xl mb-2">Vegetarian</h3>
              <p className="text-gray-600">Extensive meatless options</p>
            </div>
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6 text-center">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="font-bold text-xl mb-2">Vegan</h3>
              <p className="text-gray-600">Plant-based dishes available</p>
            </div>
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6 text-center">
              <div className="text-5xl mb-4">🌾</div>
              <h3 className="font-bold text-xl mb-2">Gluten-Free</h3>
              <p className="text-gray-600">GF pita and naturally GF items</p>
            </div>
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6 text-center">
              <div className="text-5xl mb-4">🥛</div>
              <h3 className="font-bold text-xl mb-2">Dairy-Free</h3>
              <p className="text-gray-600">Many options available</p>
            </div>
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6 text-center">
              <div className="text-5xl mb-4">🥜</div>
              <h3 className="font-bold text-xl mb-2">Nut Allergies</h3>
              <p className="text-gray-600">We can accommodate</p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/order" className="inline-block bg-[#0066FF] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all">
              View Dietary Options →
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Special Requests */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-black mb-6 text-center">
            Custom Menu Options
          </h2>
          <p className="text-xl text-center text-gray-700 mb-8">
            Need something special? We can customize our menu for your event!
          </p>
          
          <div className="bg-white border-2 border-[#0066FF] rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Available Customizations:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#0066FF] mr-2">✓</span>
                  <span>Custom protein selections</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0066FF] mr-2">✓</span>
                  <span>Adjusted portion sizes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0066FF] mr-2">✓</span>
                  <span>Special dietary menus</span>
                </li>
              </ul>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#0066FF] mr-2">✓</span>
                  <span>Themed presentations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0066FF] mr-2">✓</span>
                  <span>Family-style serving</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0066FF] mr-2">✓</span>
                  <span>Buffet setups</span>
                </li>
              </ul>
            </div>
            <div className="text-center mt-8">
              <Link href="/quote" className="inline-block bg-[#0066FF] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all">
                Request Custom Menu →
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Final CTA */}
      <AnimatedSection className="py-20 bg-[#0066FF]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6 text-white">
            Ready to Order Fresh Greek Catering?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-white">
            Browse our authentic Mediterranean menu and order online today
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/order" className="bg-white text-[#0066FF] px-10 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all shadow-lg">
              ORDER ONLINE NOW
            </Link>
            <Link href="/quote" className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#0066FF] transition-all">
              GET CUSTOM QUOTE
            </Link>
            <Link href="#" className="bg-gray-100 text-black px-10 py-4 rounded-lg text-lg font-semibold hover:bg-white transition-all">
              DOWNLOAD MENU PDF
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Trust Signals */}
      <AnimatedSection className="py-12 bg-white border-t">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold font-playfair text-center mb-8">Why Toronto Businesses Choose Gyro City</h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto text-center">
            <div>
              <div className="text-3xl mb-2">🌟</div>
              <p className="text-sm font-semibold">Fresh, never frozen ingredients</p>
            </div>
            <div>
              <div className="text-3xl mb-2">👨‍🍳</div>
              <p className="text-sm font-semibold">Made to order daily</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🇬🇷</div>
              <p className="text-sm font-semibold">Authentic Greek recipes</p>
            </div>
            <div>
              <div className="text-3xl mb-2">📏</div>
              <p className="text-sm font-semibold">Flexible portions & packages</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🥗</div>
              <p className="text-sm font-semibold">Dietary accommodations</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🚚</div>
              <p className="text-sm font-semibold">Professional delivery & setup</p>
            </div>
          </div>
          <p className="text-center mt-8 text-lg font-semibold text-[#0066FF]">500+ satisfied Toronto businesses | 4.9/5 rating</p>
        </div>
      </AnimatedSection>

      <SharedFooter />
    </main>
  )
}
