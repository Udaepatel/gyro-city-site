'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/animated-section'

export default function OfficeCateringPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Moving Text Marquee */}
      <div className="bg-white text-black py-3 overflow-hidden border-b border-gray-200">
        <div className="whitespace-nowrap animate-marquee-slow text-base md:text-lg font-medium tracking-wide">
          Office Catering • Same Day Catering • Lunch Box Catering • Buffet Style Trays • Sandwich Platter
          &nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;
          Office Catering • Same Day Catering • Lunch Box Catering • Buffet Style Trays • Sandwich Platter
          &nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;
          Office Catering • Same Day Catering • Lunch Box Catering • Buffet Style Trays • Sandwich Platter
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#0066FF] backdrop-blur-lg text-white shadow-lg">
        <div className="container mx-auto px-4 py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
              <Image 
                src="/gyro-city-logo-black.jpg" 
                alt="Gyro City - Authentic Greek Catering" 
                width={300} 
                height={90} 
                className="h-12 w-auto group-hover:opacity-80 transition-opacity" 
                priority
              />
            </div>
          </Link>
          <div className="hidden md:flex gap-10 items-center">
            <Link href="/" className="hover:text-white/80 transition-colors duration-200 font-medium">Home</Link>
            <Link href="/about" className="hover:text-white/80 transition-colors duration-200 font-medium">About Us</Link>
            <Link href="/catering/corporate" className="hover:text-white/80 transition-colors duration-200 font-medium">Corporate Catering</Link>
            <Link href="/menu" className="hover:text-white/80 transition-colors duration-200 font-medium">Our Menu</Link>
            <Link href="/catering/office" className="hover:text-white/80 transition-colors duration-200 font-medium underline underline-offset-4">Office Catering</Link>
            <Link href="/quote" className="bg-white text-[#0066FF] px-6 py-2.5 rounded-lg text-base font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg">
              Get a Quote
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0066FF] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-playfair leading-tight mb-6">
            Downtown Toronto Office Catering
          </h1>
          <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto">
            Make Lunch the Best Part of Your Team's Day
          </p>
          <p className="text-lg mb-10 max-w-2xl mx-auto opacity-90">
            Delicious Greek cuisine delivered fresh to your office. Reliable, affordable, and loved by Toronto teams.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/order" className="bg-white text-[#0066FF] px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all">
              ORDER OFFICE LUNCH
            </Link>
            <Link href="/quote" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#0066FF] transition-all">
              GET FREE QUOTE
            </Link>
            <Link href="/menu" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#0066FF] transition-all">
              VIEW MENU
            </Link>
          </div>
          <p className="mt-8 text-xl font-semibold">
            Trusted by 200+ Toronto businesses for daily office lunch delivery
          </p>
        </div>
      </section>

      {/* Hero Intro */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
            Fresh Greek Office Catering That Your Team Will Actually Look Forward To
          </h2>
          <div className="space-y-4 text-lg text-gray-700">
            <p>
              Tired of the same boring office lunches? <strong>Gyro City</strong> brings authentic Greek flavors straight to your downtown Toronto office. From classic gyros and souvlaki to fresh Mediterranean salads, we make feeding your team easy, delicious, and stress-free.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Why Choose Section */}
      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-12 text-center italic">
            Why Downtown Toronto Offices Love Gyro City
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Always On Time */}
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-2xl md:text-3xl font-bold font-playfair mb-4">Always On Time</h3>
              <p className="text-gray-700 mb-4">
                Your lunch arrives exactly when promised. We understand busy schedules and respect your team's time.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold mb-2">Delivery Windows:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Early lunch: 11:00 AM - 11:30 AM</li>
                  <li>• Standard lunch: 12:00 PM - 12:30 PM</li>
                  <li>• Late lunch: 1:00 PM - 1:30 PM</li>
                </ul>
              </div>
            </div>

            {/* Fresh & Delicious */}
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
              <div className="text-4xl mb-4">🥙</div>
              <h3 className="text-2xl md:text-3xl font-bold font-playfair mb-4">Fresh & Delicious</h3>
              <p className="text-gray-700 mb-4">
                Made fresh every morning. Never frozen. Real ingredients. Authentic Greek recipes that keep your team energized.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold mb-2">What makes us different:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Meat marinated 24 hours</li>
                  <li>• Vegetables cut fresh daily</li>
                  <li>• Homemade tzatziki & sauces</li>
                  <li>• Traditional Greek cooking methods</li>
                </ul>
              </div>
            </div>

            {/* Budget-Friendly */}
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl md:text-3xl font-bold font-playfair mb-4">Budget-Friendly</h3>
              <p className="text-gray-700 mb-4">
                Quality office catering that fits your budget. Packages starting at $14.99/person with no hidden fees.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold mb-2">Transparent pricing:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Competitive delivery rates</li>
                  <li>• No setup charges</li>
                  <li>• No minimum on recurring orders</li>
                  <li>• Volume discounts available</li>
                </ul>
              </div>
            </div>

            {/* Hassle-Free Service */}
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
              <div className="text-4xl mb-4">🍽️</div>
              <h3 className="text-2xl md:text-3xl font-bold font-playfair mb-4">Hassle-Free Service</h3>
              <p className="text-gray-700 mb-4">
                We handle everything - delivery, setup, supplies, and cleanup. You just enjoy great food.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold mb-2">Included with every order:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Plates, cutlery, napkins</li>
                  <li>• Serving utensils</li>
                  <li>• Condiments & sauces</li>
                  <li>• Setup at your office</li>
                  <li>• Packaging for easy cleanup</li>
                </ul>
              </div>
            </div>

            {/* Dietary Flexibility */}
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-2xl md:text-3xl font-bold font-playfair mb-4">Dietary Flexibility</h3>
              <p className="text-gray-700 mb-4">
                Halal, vegetarian, vegan, gluten-free - we accommodate all dietary needs without compromise on flavor.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold mb-2">Popular options:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Halal chicken & lamb</li>
                  <li>• Vegetarian falafel & dolmades</li>
                  <li>• Vegan Mediterranean bowls</li>
                  <li>• Gluten-free pita available</li>
                </ul>
              </div>
            </div>

            {/* Easy Ordering */}
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-2xl md:text-3xl font-bold font-playfair mb-4">Easy Ordering</h3>
              <p className="text-gray-700 mb-4">
                Order online in 2 minutes. Set up recurring deliveries. Modify orders easily. Track delivery in real-time.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold mb-2">Simple process:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>1. Choose your package</li>
                  <li>2. Select delivery time</li>
                  <li>3. Checkout securely</li>
                  <li>4. Receive confirmation</li>
                </ul>
              </div>
              <Link href="/order" className="inline-block mt-4 text-[#0066FF] font-semibold hover:underline">
                Start Ordering →
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Office Lunch Packages */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-12 text-center italic">
            Office Lunch Packages - Perfect for Toronto Teams
          </h2>
          
          <div className="space-y-8 max-w-5xl mx-auto">
            {/* Individual Office Lunch Boxes */}
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold font-playfair mb-4">Individual Office Lunch Boxes</h3>
                  <p className="text-[#0066FF] font-semibold text-lg">$15.99/person</p>
                </div>
                <div className="bg-[#0066FF] text-white px-4 py-2 rounded-lg font-bold">
                  MOST POPULAR
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">Minimum 10 people</p>
              
              <div className="mb-6">
                <p className="font-semibold mb-3">Each box includes:</p>
                <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
                  <li>• Choice of gyro or souvlaki (chicken, beef, lamb)</li>
                  <li>• Greek salad</li>
                  <li>• Rice pilaf or Greek fries</li>
                  <li>• Pita bread</li>
                  <li>• Tzatziki sauce</li>
                  <li>• Cookie</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="font-semibold mb-2">Perfect for:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Regular team lunches</li>
                  <li>• Small offices (10-30 people)</li>
                  <li>• Mixed dietary needs</li>
                </ul>
                <p className="font-semibold mt-4 mb-2">Popular combinations:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 50% Chicken Souvlaki / 50% Gyro</li>
                  <li>• 70% Meat options / 30% Vegetarian</li>
                  <li>• Custom mix available</li>
                </ul>
              </div>
              
              <Link href="/order" className="inline-block bg-[#0066FF] text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all">
                Order Lunch Boxes →
              </Link>
            </div>

            {/* Office Platter Package */}
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-2">Office Platter Package</h3>
              <p className="text-[#0066FF] font-semibold text-lg mb-1">$17.99/person</p>
              <p className="text-sm text-gray-600 mb-4">Minimum 15 people</p>
              
              <div className="mb-6">
                <p className="font-semibold mb-3">Family-style service includes:</p>
                <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
                  <li>• Mixed gyro & souvlaki platters</li>
                  <li>• Large Greek salad</li>
                  <li>• Rice pilaf & roasted potatoes</li>
                  <li>• Pita bread basket</li>
                  <li>• Trio of dips (tzatziki, hummus, hot sauce)</li>
                  <li>• Greek cookies</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="font-semibold mb-2">Perfect for:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Team bonding</li>
                  <li>• Casual office atmosphere</li>
                  <li>• Sharing & variety</li>
                </ul>
                <p className="text-sm text-gray-600 mt-3 italic">Best for: Teams that like to share and try multiple items</p>
              </div>
              
              <Link href="/quote" className="inline-block bg-white border-2 border-[#0066FF] text-[#0066FF] px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-all">
                Get Quote →
              </Link>
            </div>

            {/* Healthy Office Lunch */}
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-2">Healthy Office Lunch</h3>
              <p className="text-[#0066FF] font-semibold text-lg mb-1">$16.99/person</p>
              <p className="text-sm text-gray-600 mb-4">Minimum 10 people</p>
              
              <div className="mb-6">
                <p className="font-semibold mb-3">Lighter, nutritious option includes:</p>
                <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
                  <li>• Grilled chicken or falafel</li>
                  <li>• Large Mediterranean quinoa salad</li>
                  <li>• Grilled vegetables</li>
                  <li>• Hummus & tzatziki</li>
                  <li>• Whole wheat pita</li>
                  <li>• Fresh fruit</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="font-semibold mb-2">Perfect for:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Health-conscious teams</li>
                  <li>• Afternoon energy</li>
                  <li>• Low-carb preferences</li>
                </ul>
                <p className="text-sm text-gray-600 mt-3 italic">Popular with: Tech companies, wellness-focused teams</p>
              </div>
              
              <Link href="/order" className="inline-block bg-white border-2 border-[#0066FF] text-[#0066FF] px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-all">
                Order Healthy Lunch →
              </Link>
            </div>

            {/* Executive Office Lunch */}
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-2">Executive Office Lunch</h3>
              <p className="text-[#0066FF] font-semibold text-lg mb-1">$22.99/person</p>
              <p className="text-sm text-gray-600 mb-4">Minimum 12 people</p>
              
              <div className="mb-6">
                <p className="font-semibold mb-3">Premium office catering includes:</p>
                <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
                  <li>• Mixed grill (gyro, chicken, beef souvlaki)</li>
                  <li>• Greek salad with imported feta</li>
                  <li>• Spanakopita</li>
                  <li>• Roasted lemon potatoes & rice</li>
                  <li>• Premium pita & 4 dips</li>
                  <li>• Baklava</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="font-semibold mb-2">Perfect for:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Client meetings</li>
                  <li>• Executive lunches</li>
                  <li>• Important presentations</li>
                </ul>
                <p className="text-sm text-gray-600 mt-3 italic">Presentation: Upscale serving with premium packaging</p>
              </div>
              
              <Link href="/quote" className="inline-block bg-white border-2 border-[#0066FF] text-[#0066FF] px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-all">
                Get Quote →
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Recurring Office Catering */}
      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6 text-center">
            Recurring Office Lunch Program
          </h2>
          <p className="text-xl text-center mb-10 text-gray-700">Save Time & Money</p>

          <div className="bg-white border-2 border-[#0066FF] rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6">Set It and Forget It - Weekly Office Lunches</h3>
            
            <p className="mb-6 text-gray-700">Set up a recurring lunch schedule and enjoy:</p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <p className="font-semibold mb-3">Benefits:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong className="text-[#0066FF]">10% discount</strong> on all recurring orders</li>
                  <li>• Priority delivery slots</li>
                  <li>• Dedicated account manager</li>
                  <li>• Flexible menu rotation</li>
                  <li>• Easy modifications online</li>
                  <li>• Automatic invoicing</li>
                </ul>
              </div>
              
              <div>
                <p className="font-semibold mb-3">Popular schedules:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Every Friday (Team Lunch Day)</li>
                  <li>• Every Monday & Wednesday</li>
                  <li>• Daily lunch service</li>
                  <li>• Custom schedule</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="font-semibold mb-3">How it works:</p>
              <ol className="space-y-2 text-gray-700">
                <li>1. Choose your preferred days</li>
                <li>2. Select default menu (change anytime)</li>
                <li>3. Set delivery time</li>
                <li>4. We deliver automatically</li>
                <li>5. Modify or skip online 24 hours in advance</li>
              </ol>
            </div>

            <Link href="/quote" className="inline-block bg-[#0066FF] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all">
              Setup Recurring Lunch →
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Office Meeting Packages */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-12 text-center">
            Office Meeting & Working Lunch Packages
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Lunch & Learn Package */}
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-2">Lunch & Learn Package</h3>
              <p className="text-[#0066FF] font-semibold text-lg mb-1">$18.99/person</p>
              <p className="text-sm text-gray-600 mb-4">Minimum 12 people</p>
              
              <p className="mb-4 text-gray-700">Designed for productive meetings:</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• Individual boxes for easy handling</li>
                <li>• Quiet packaging (no rustling)</li>
                <li>• Minimal mess options</li>
                <li>• Quick eating time (30 mins)</li>
              </ul>

              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="font-semibold mb-2">Includes:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Protein box (gyro or souvlaki wrap)</li>
                  <li>• Side salad</li>
                  <li>• Chips or fruit</li>
                  <li>• Dessert</li>
                  <li>• Napkins & wet wipes</li>
                </ul>
              </div>
              
              <Link href="/order" className="inline-block bg-white border-2 border-[#0066FF] text-[#0066FF] px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-all">
                Order Meeting Lunch →
              </Link>
            </div>

            {/* Boardroom Lunch Package */}
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-2">Boardroom Lunch Package</h3>
              <p className="text-[#0066FF] font-semibold text-lg mb-1">$24.99/person</p>
              <p className="text-sm text-gray-600 mb-4">Minimum 8 people</p>
              
              <p className="mb-4 text-gray-700">Impressive presentation for important meetings:</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• Elegant platter presentation</li>
                <li>• Premium proteins (lamb, beef tenderloin)</li>
                <li>• Gourmet sides & salads</li>
                <li>• Fine serving dishes (not disposable)</li>
                <li>• Professional setup</li>
              </ul>

              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="font-semibold mb-2">Perfect for:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Client presentations</li>
                  <li>• Board meetings</li>
                  <li>• VIP lunches</li>
                </ul>
              </div>
              
              <Link href="/quote" className="inline-block bg-white border-2 border-[#0066FF] text-[#0066FF] px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-all">
                Get Custom Quote →
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Office Party & Celebration */}
      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-12 text-center">
            Office Celebrations & Team Events
          </h2>
          
          <div className="bg-white border-2 border-[#0066FF] rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-2">Team Celebration Package</h3>
            <p className="text-[#0066FF] font-semibold text-lg mb-1">$19.99/person</p>
            <p className="text-sm text-gray-600 mb-4">Minimum 15 people</p>
            
            <p className="mb-4 text-gray-700 font-semibold">Make your office party special:</p>
            <ul className="grid md:grid-cols-2 gap-2 text-gray-700 mb-6">
              <li>• Build-your-own gyro station</li>
              <li>• Multiple proteins & toppings</li>
              <li>• Greek salad & fries</li>
              <li>• Dessert platter</li>
              <li>• Beverages included</li>
              <li>• Fun, interactive setup</li>
            </ul>

            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p className="font-semibold mb-2">Great for:</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Birthday celebrations</li>
                <li>• Project completions</li>
                <li>• Team milestones</li>
                <li>• Friday socials</li>
              </ul>
            </div>
            
            <Link href="/quote" className="inline-block bg-[#0066FF] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all">
              Get Party Quote →
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Delivery Information */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-12 text-center">
            Downtown Toronto Office Delivery
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Delivery Service Areas */}
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Delivery Service Areas</h3>
              <ul className="grid grid-cols-2 gap-2 text-gray-700 mb-6">
                <li>• Financial District</li>
                <li>• Entertainment District</li>
                <li>• Harbourfront</li>
                <li>• King West</li>
                <li>• Queen West</li>
                <li>• Yorkville</li>
                <li>• The Annex</li>
                <li>• Liberty Village</li>
              </ul>
              <p className="text-sm text-gray-600 mb-4">Delivery radius: 5 km from downtown core</p>
              <Link href="/contact" className="text-[#0066FF] font-semibold hover:underline">
                Check Your Address →
              </Link>
            </div>

            {/* Delivery Times */}
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Delivery Times</h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li><strong>Breakfast catering:</strong> 7:30 AM - 10:00 AM</li>
                <li><strong>Lunch catering:</strong> 11:00 AM - 2:00 PM</li>
                <li><strong>Afternoon meetings:</strong> 2:00 PM - 4:00 PM</li>
              </ul>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold mb-2">Advance notice:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• First-time orders: 24 hours</li>
                  <li>• Recurring orders: Same-day available</li>
                  <li>• Large orders (50+): 48 hours</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* How It Works */}
      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-12 text-center">
            How Office Catering Works
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex gap-6 items-start">
              <div className="bg-[#0066FF] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Choose Your Package</h3>
                <p className="text-gray-700">Browse our office lunch menu and select individual boxes, platters, or custom packages.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="bg-[#0066FF] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Place Your Order</h3>
                <p className="text-gray-700">Order online in minutes or call +1 (647) 340-8001. Specify dietary needs and delivery details.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="bg-[#0066FF] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">We Prepare Fresh</h3>
                <p className="text-gray-700">Your order is prepared fresh the morning of delivery using premium ingredients.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="bg-[#0066FF] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">On-Time Delivery</h3>
                <p className="text-gray-700">We arrive at your specified time with everything needed - food, supplies, and setup.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="bg-[#0066FF] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                5
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Enjoy & Cleanup</h3>
                <p className="text-gray-700">Your team enjoys delicious Greek food. We provide everything for easy cleanup.</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/order" className="inline-block bg-[#0066FF] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all">
              Start Ordering →
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Dietary Accommodations */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6 text-center">
            Office Dietary Needs - We've Got You Covered
          </h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            We understand the importance of accommodating all dietary requirements in the workplace.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Halal Office Catering</h3>
              <p className="text-gray-700">All chicken and lamb available halal upon request. Prepared separately with dedicated equipment.</p>
            </div>

            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Vegetarian & Vegan Options</h3>
              <p className="text-gray-700">Extensive plant-based menu including falafel, dolmades, salads, hummus, and grilled vegetables.</p>
            </div>

            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Gluten-Free Office Lunches</h3>
              <p className="text-gray-700">Gluten-free pita available. Many naturally gluten-free options like grilled meats and salads.</p>
            </div>

            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Allergy Accommodations</h3>
              <p className="text-gray-700">Nut-free preparation available. We accommodate all allergies with advance notice.</p>
            </div>
          </div>

          <p className="text-center mt-8 text-gray-600">
            <strong>Pro tip:</strong> Use our <Link href="/quote" className="text-[#0066FF] hover:underline">catering inquiry form</Link> to specify all dietary needs upfront.
          </p>
        </div>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-12 text-center uppercase">
            What Toronto Offices Say About Gyro City
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-8 text-center">
              <div className="text-4xl mb-4">•</div>
              <div className="mb-4 text-[#0066FF]">⭐⭐⭐⭐⭐</div>
              <p className="font-bold text-xl mb-2">"Best decision we made for our office!"</p>
              <p className="text-gray-700 mb-4 italic">
                "We've been ordering from Gyro City every Friday for 6 months. The team genuinely gets excited about lunch day. The gyros are amazing and they're always on time!"
              </p>
              <p className="font-bold">— Sarah Chen</p>
              <p className="text-sm text-gray-600">Office Manager at Tech Startup, King West</p>
            </div>

            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-8 text-center">
              <div className="text-4xl mb-4">•</div>
              <div className="mb-4 text-[#0066FF]">⭐⭐⭐⭐⭐</div>
              <p className="font-bold text-xl mb-2">"Solved our lunch meetings problem"</p>
              <p className="text-gray-700 mb-4 italic">
                "Finding good office catering downtown was challenging until we found Gyro City. Professional, delicious, and they handle everything. Our clients always compliment the food."
              </p>
              <p className="font-bold">— Michael Roberts</p>
              <p className="text-sm text-gray-600">Partner at Law Firm, Financial District</p>
            </div>

            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-8 text-center">
              <div className="text-4xl mb-4">•</div>
              <div className="mb-4 text-[#0066FF]">⭐⭐⭐⭐⭐</div>
              <p className="font-bold text-xl mb-2">"Finally, healthy office lunches!"</p>
              <p className="text-gray-700 mb-4 italic">
                "As a health-conscious team, we struggled to find catering that was both healthy and delicious. Gyro City's Mediterranean options are perfect - fresh, nutritious, and flavorful."
              </p>
              <p className="font-bold">— Jennifer Lee</p>
              <p className="text-sm text-gray-600">Wellness Director, Harbourfront</p>
            </div>

            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-8 text-center">
              <div className="text-4xl mb-4">•</div>
              <div className="mb-4 text-[#0066FF]">⭐⭐⭐⭐⭐</div>
              <p className="font-bold text-xl mb-2">"Recurring delivery is a game-changer"</p>
              <p className="text-gray-700 mb-4 italic">
                "The recurring lunch program saves me so much time. It's automatic, flexible, and we get a discount. The team loves the variety and the food is consistently excellent."
              </p>
              <p className="font-bold">— David Kim</p>
              <p className="text-sm text-gray-600">HR Manager, Entertainment District</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-12 text-center">
            Office Catering FAQ
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white border-l-4 border-[#0066FF] p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">What's the minimum order for office delivery?</h3>
              <p className="text-gray-700">10 people for individual boxes, 15 people for platters. No minimum for recurring weekly orders.</p>
            </div>

            <div className="bg-white border-l-4 border-[#0066FF] p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">How far in advance should we order?</h3>
              <p className="text-gray-700">24 hours for first-time orders. Same-day available for recurring customers (before 9 AM).</p>
            </div>

            <div className="bg-white border-l-4 border-[#0066FF] p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Can we accommodate last-minute headcount changes?</h3>
              <p className="text-gray-700">Yes! Changes up to 4 hours before delivery for +/- 20% of original order.</p>
            </div>

            <div className="bg-white border-l-4 border-[#0066FF] p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Do you deliver on weekends?</h3>
              <p className="text-gray-700">Yes, Saturday delivery available with 48 hours notice (Sunday by special request).</p>
            </div>

            <div className="bg-white border-l-4 border-[#0066FF] p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">What about dietary restrictions?</h3>
              <p className="text-gray-700">We accommodate all dietary needs - halal, vegetarian, vegan, gluten-free, allergies. Just specify when ordering.</p>
            </div>

            <div className="bg-white border-l-4 border-[#0066FF] p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Is there a delivery fee?</h3>
              <p className="text-gray-700">Delivery fee applies based on location and order size (typically $15-50). Contact us for a quote.</p>
            </div>

            <div className="bg-white border-l-4 border-[#0066FF] p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Can we get the same delivery time every week?</h3>
              <p className="text-gray-700">Absolutely! Recurring orders get priority time slots.</p>
            </div>

            <div className="bg-white border-l-4 border-[#0066FF] p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">What if someone doesn't eat their lunch?</h3>
              <p className="text-gray-700">Our boxes are packaged for easy refrigeration and reheat well. Many teams save for dinner!</p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/contact" className="text-[#0066FF] font-semibold hover:underline text-lg">
              More Questions? Contact Us →
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Industries We Serve */}
      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6 text-center">
            Toronto Office Catering for All Industries
          </h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            We proudly serve businesses across Toronto with customized Greek catering solutions
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6 text-center">
              <h3 className="font-bold text-lg mb-2">Technology Companies</h3>
              <p className="text-gray-600 text-sm">Fast-paced teams love our healthy, energizing Mediterranean cuisine</p>
            </div>

            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6 text-center">
              <h3 className="font-bold text-lg mb-2">Law Firms</h3>
              <p className="text-gray-600 text-sm">Professional presentation for client meetings and working lunches</p>
            </div>

            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6 text-center">
              <h3 className="font-bold text-lg mb-2">Financial Services</h3>
              <p className="text-gray-600 text-sm">Reliable, on-time delivery for busy schedules downtown</p>
            </div>

            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6 text-center">
              <h3 className="font-bold text-lg mb-2">Marketing Agencies</h3>
              <p className="text-gray-600 text-sm">Creative teams appreciate authentic, flavorful food</p>
            </div>

            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6 text-center">
              <h3 className="font-bold text-lg mb-2">Healthcare Offices</h3>
              <p className="text-gray-600 text-sm">Nutritious options for health-conscious professionals</p>
            </div>

            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6 text-center">
              <h3 className="font-bold text-lg mb-2">Real Estate</h3>
              <p className="text-gray-600 text-sm">Impress clients with upscale Greek catering</p>
            </div>

            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6 text-center">
              <h3 className="font-bold text-lg mb-2">Startups</h3>
              <p className="text-gray-600 text-sm">Budget-friendly packages with generous portions</p>
            </div>

            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6 text-center">
              <h3 className="font-bold text-lg mb-2">Education</h3>
              <p className="text-gray-600 text-sm">Flexible options for staff meetings and events</p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/order" className="inline-block bg-[#0066FF] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all">
              Get Started →
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Office Lunch Planning Tips */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-12 text-center">
            Office Catering Pro Tips
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
              <h3 className="font-bold text-xl mb-4">Ordering for mixed groups:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Plan for 40% chicken, 30% beef/lamb, 30% vegetarian</li>
                <li>• Always have at least 2 vegetarian options</li>
                <li>• Ask about dietary restrictions in advance</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
              <h3 className="font-bold text-xl mb-4">Timing your delivery:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Order for 12:00 PM for maximum team attendance</li>
                <li>• 11:30 AM works for early lunch crowds</li>
                <li>• Avoid 12:30 PM+ if people eat at their desks</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
              <h3 className="font-bold text-xl mb-4">Budget planning:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Individual boxes: $15-17/person (most economical)</li>
                <li>• Platters: $18-20/person (good for sharing)</li>
                <li>• Premium: $22-25/person (client meetings)</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-[#0066FF] rounded-xl p-6">
              <h3 className="font-bold text-xl mb-4">Making it special:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Rotate menu items weekly to keep it interesting</li>
                <li>• Surprise the team with premium add-ons (baklava!)</li>
                <li>• Set up a nice presentation area</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/quote" className="inline-block bg-white border-2 border-[#0066FF] text-[#0066FF] px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all">
              Get Your Custom Office Menu →
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Final CTA */}
      <AnimatedSection className="py-20 bg-[#0066FF] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6">
            Ready to Upgrade Your Office Lunch?
          </h2>
          <p className="text-xl mb-4 max-w-2xl mx-auto">
            Join 200+ Toronto businesses enjoying fresh Greek office catering
          </p>
          <p className="text-lg mb-10 max-w-xl mx-auto opacity-90">
            <strong>Special Offer:</strong> Get 10% off your first order with code OFFICE10
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/order" className="bg-white text-[#0066FF] px-10 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all shadow-lg">
              ORDER OFFICE LUNCH
            </Link>
            <Link href="/quote" className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#0066FF] transition-all">
              GET FREE QUOTE
            </Link>
            <Link href="tel:+16473408001" className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#0066FF] transition-all">
              CALL +1 (647) 340-8001
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Related Services */}
      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-playfair mb-8">
            Explore More Catering Services
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Link href="/catering/corporate" className="bg-gray-50 border-2 border-gray-200 hover:border-[#0066FF] rounded-xl p-6 transition-all">
              <h3 className="font-bold text-lg mb-2">Corporate Catering</h3>
              <p className="text-sm text-gray-600">Large corporate events, conferences, and business functions</p>
            </Link>

            <Link href="/catering/events" className="bg-gray-50 border-2 border-gray-200 hover:border-[#0066FF] rounded-xl p-6 transition-all">
              <h3 className="font-bold text-lg mb-2">Event Catering</h3>
              <p className="text-sm text-gray-600">Office parties, celebrations, and team building events</p>
            </Link>

            <Link href="/menu" className="bg-gray-50 border-2 border-gray-200 hover:border-[#0066FF] rounded-xl p-6 transition-all">
              <h3 className="font-bold text-lg mb-2">View Full Menu</h3>
              <p className="text-sm text-gray-600">Browse our complete Greek catering menu</p>
            </Link>

            <Link href="/blog" className="bg-gray-50 border-2 border-gray-200 hover:border-[#0066FF] rounded-xl p-6 transition-all">
              <h3 className="font-bold text-lg mb-2">Catering Blog</h3>
              <p className="text-sm text-gray-600">Tips for office lunch planning and team meal ideas</p>
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4">GYRO CITY</h3>
              <p className="text-gray-400">Toronto's Authentic Greek Catering</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/menu" className="hover:text-white">Menu</Link></li>
                <li><Link href="/catering" className="hover:text-white">Catering</Link></li>
                <li><Link href="/about" className="hover:text-white">About</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Catering Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/catering/office" className="hover:text-white">Office Catering</Link></li>
                <li><Link href="/catering/corporate" className="hover:text-white">Corporate Events</Link></li>
                <li><Link href="/catering/events" className="hover:text-white">Event Catering</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>898 College St, Toronto ON M6H1A4</li>
                <li>Phone: +1 (647) 340-8001</li>
                <li>Email: info@gyrocity.ca</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Gyro City. All rights reserved. | Office Catering Toronto Downtown | Greek Lunch Delivery</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
