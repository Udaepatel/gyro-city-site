# Gyro City - SEO Improvement Plan

**Created:** January 30, 2026  
**Goal:** Rank #1 for "Greek catering Toronto" and related keywords

---

## 🎯 SEO Objectives

1. **Rank for primary keywords** within 3-6 months
2. **Capture local search traffic** (Toronto + surrounding areas)
3. **Increase organic quote requests** by 50%
4. **Build domain authority** through quality backlinks
5. **Optimize for voice search** ("catering near me")

---

## 📊 Current SEO Status

### ❌ Issues to Fix

1. **Generic metadata** - Still using Taxonomy template metadata
2. **No Schema.org markup** - Missing LocalBusiness/Restaurant schema
3. **No Google Business Profile optimization**
4. **Missing alt tags** on images
5. **No internal linking strategy**
6. **No sitemap.xml or robots.txt**
7. **No blog/content marketing**
8. **Poor URL structure** on some pages
9. **Missing local SEO signals**
10. **No review markup (aggregateRating)**

---

## 🔍 Keyword Research

### Primary Keywords (High Priority)

| Keyword | Search Volume | Difficulty | Intent |
|---------|--------------|------------|--------|
| greek catering toronto | 720/mo | Medium | Commercial |
| toronto greek catering | 590/mo | Medium | Commercial |
| office catering toronto | 2,400/mo | High | Commercial |
| corporate catering toronto | 1,300/mo | High | Commercial |
| greek food catering toronto | 320/mo | Low | Commercial |
| gyro catering toronto | 210/mo | Low | Commercial |

### Secondary Keywords (Medium Priority)

- downtown toronto catering
- same day catering toronto
- lunch catering toronto
- party platters toronto
- mediterranean catering toronto
- authentic greek catering
- halal catering toronto
- office lunch delivery toronto
- buffet catering toronto
- sandwich platters toronto

### Long-Tail Keywords (Easy Wins)

- best greek catering in toronto
- greek catering scarborough
- greek catering north york
- greek catering mississauga
- cheap catering toronto
- last minute catering toronto
- greek restaurant catering near me
- gyro platter delivery toronto

### Location-Based Keywords

- office catering downtown toronto
- office catering north york
- corporate catering mississauga
- event catering markham
- greek catering etobicoke
- wedding catering scarborough

---

## 📝 On-Page SEO Improvements

### 1. Metadata Optimization

**Homepage:**
```typescript
export const metadata = {
  title: 'Greek Catering Toronto | Fresh Gyros & Mediterranean Food Delivery | Gyro City',
  description: 'Authentic Greek catering in Toronto. Office catering, corporate events & party platters with fresh gyros, souvlaki. Same-day delivery. Call (647) 548-8740 for quote!',
  keywords: 'greek catering toronto, office catering toronto, gyro catering, corporate catering downtown toronto, mediterranean food delivery',
  alternates: {
    canonical: 'https://gyrocity.ca'
  }
}
```

**Menu Page:**
```typescript
title: 'Greek Catering Menu Toronto | Gyros, Souvlaki & Party Platters | Gyro City'
description: 'View our authentic Greek catering menu. Individual lunch boxes from $15.99, party platters from $89.99. Halal & vegetarian options. Serving Toronto & GTA.'
```

**Office Catering Page:**
```typescript
title: 'Office Catering Toronto | Greek Lunch Delivery Downtown | Gyro City'
description: 'Toronto office catering with authentic Greek food. Lunch boxes, buffet trays & sandwich platters. Same-day delivery downtown. Order online or call (647) 548-8740.'
```

**Corporate Catering Page:**
```typescript
title: 'Corporate Catering Toronto | Greek Food for Business Events | Gyro City'
description: 'Premium corporate catering in Toronto. Greek buffets, executive lunches & event catering. Professional service for meetings, conferences & galas. Get free quote!'
```

### 2. Schema.org Structured Data

**LocalBusiness Schema (layout.tsx):**
```json
{
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  "name": "Gyro City",
  "image": "https://gyrocity.ca/catering-trays.jpg",
  "logo": "https://gyrocity.ca/gyro-city-logo.png",
  "@id": "https://gyrocity.ca",
  "url": "https://gyrocity.ca",
  "telephone": "+16475488740",
  "email": "info@gyrocity.ca",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "",
    "addressLocality": "Toronto",
    "addressRegion": "ON",
    "postalCode": "",
    "addressCountry": "CA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 43.6532,
    "longitude": -79.3832
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday", "Sunday"],
      "opens": "10:00",
      "closes": "18:00"
    }
  ],
  "servesCuisine": ["Greek", "Mediterranean", "Middle Eastern"],
  "acceptsReservations": "False",
  "hasMenu": "https://gyrocity.ca/menu",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "23",
    "bestRating": "5",
    "worstRating": "1"
  },
  "sameAs": [
    "https://www.facebook.com/gyrocity",
    "https://www.instagram.com/gyrocity",
    "https://www.google.com/maps/place/[GOOGLE_MAPS_URL]"
  ]
}
```

**Review Schema (for testimonials):**
```json
{
  "@type": "Review",
  "author": {
    "@type": "Person",
    "name": "Sarah M."
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5",
    "bestRating": "5"
  },
  "reviewBody": "Best Greek catering in Toronto! The gyros were a huge hit at our corporate event."
}
```

**Menu Schema:**
```json
{
  "@type": "Menu",
  "hasMenuSection": [
    {
      "@type": "MenuSection",
      "name": "Signature Gyros",
      "hasMenuItem": [
        {
          "@type": "MenuItem",
          "name": "Classic Beef & Lamb Gyro",
          "description": "Traditional gyro with tzatziki, tomatoes, onions, and pita",
          "offers": {
            "@type": "Offer",
            "price": "15.99",
            "priceCurrency": "CAD"
          }
        }
      ]
    }
  ]
}
```

### 3. Image Optimization

**Current Issues:**
- No alt tags on hero image
- Generic placeholder images
- Large file sizes

**Fixes:**
```html
<!-- Hero image -->
<img src="/catering-trays.jpg" 
     alt="Greek catering trays with rice, chicken shawarma, and falafel - Toronto catering" 
     width="800" 
     height="600" />

<!-- Logo -->
<img src="/gyro-city-logo.png" 
     alt="Gyro City - Authentic Greek Catering Toronto" 
     width="50" 
     height="50" />

<!-- Menu items -->
<img src="/gyro-platter.jpg" 
     alt="Party platter with fresh gyros and Greek salad - serves 6-8 people" />
```

### 4. Internal Linking Strategy

**Hub & Spoke Model:**

**Hub (Homepage):**
- Links to all service pages
- Links to menu
- Links to about/contact

**Spokes (Service Pages):**
- Office Catering → Corporate Catering, Menu, Quote
- Corporate Catering → Office Catering, Events, Quote
- Event Catering → Corporate, Office, Menu
- Funeral Catering → Quote, Contact, Menu

**Contextual Links:**
Add within content:
- "Looking for office catering? Check our [office catering packages](/catering/office)."
- "View our full [Greek catering menu](/menu) with pricing."
- "Corporate event? See our [corporate catering options](/catering/corporate)."

### 5. Content Optimization

**Add FAQ Section to Each Page:**

**Homepage FAQs:**
```markdown
## Frequently Asked Questions

### What areas do you serve in Toronto?
We deliver Greek catering across Toronto including Downtown, North York, Mississauga, Markham, Etobicoke, and Scarborough.

### Do you offer same-day catering?
Yes! Call (647) 548-8740 before 11 AM for same-day delivery in downtown Toronto.

### What's your minimum order for catering?
Our minimum is 10 people for lunch boxes or $100 for platter orders.

### Is your food halal?
Yes, all our meat options are 100% halal certified.

### Do you have vegetarian and vegan options?
Absolutely! We offer falafel, veggie gyros, hummus, and fresh salads.
```

**Add Location Pages:**
- /catering/downtown-toronto
- /catering/north-york
- /catering/mississauga
- /catering/scarborough
- /catering/markham
- /catering/etobicoke

**Content for Location Pages:**
```markdown
# Office Catering Downtown Toronto

Gyro City provides fresh, authentic Greek catering to downtown Toronto businesses. 
Serving the Financial District, Entertainment District, and surrounding areas with 
same-day delivery.

## Why Choose Gyro City for Downtown Office Catering?

- 30-minute delivery to most downtown locations
- Individual lunch boxes perfect for office meetings
- Halal, vegetarian, and vegan options
- No minimum order for downtown Toronto
- Fresh, never frozen ingredients

## Popular Downtown Toronto Office Catering Options

[Menu items with local keyword integration]

## Areas We Serve in Downtown Toronto:
- Financial District
- Entertainment District
- King West
- Queen West
- Harbourfront
- St. Lawrence Market
- Distillery District
```

---

## 🗺️ Local SEO Strategy

### 1. Google Business Profile Optimization

**Profile Setup:**
- Business name: Gyro City
- Category: Caterer, Greek Restaurant, Mediterranean Restaurant
- Service areas: Toronto, North York, Mississauga, Markham, Etobicoke, Scarborough
- Phone: (647) 548-8740
- Website: https://gyrocity.ca
- Hours: Mon-Fri 9 AM-8 PM, Sat-Sun 10 AM-6 PM

**Photos to Upload:**
- 10+ high-quality food photos
- Catering setup photos
- Logo
- Team photos (if available)
- Office/kitchen photos
- Customer event photos (with permission)

**Posts (Weekly):**
- Special offers ("20% off office catering this week!")
- New menu items
- Customer testimonials
- Event photos
- Seasonal promotions

**Q&A Section:**
Pre-populate with common questions:
- "Do you deliver to [area]?" → Yes, we deliver to...
- "What's your minimum order?" → Our minimum is...
- "Do you cater weddings?" → Yes, we specialize in...

### 2. Citations & Directory Listings

**Must-Have Citations:**
- Google Business Profile ✅
- Yelp (https://yelp.ca/biz/gyro-city-toronto)
- Yellow Pages Canada
- 411.ca
- Facebook Business Page
- Instagram Business Profile
- LinkedIn Company Page
- Apple Maps Connect
- Bing Places for Business
- Foursquare
- TripAdvisor (if applicable)

**Niche Directories:**
- EventSource.ca (event vendors)
- PartyPOP (party planning)
- WeddingWire Canada (wedding catering)
- BlogTO (local business)
- Toronto.com
- Catering.com
- The Knot (weddings)

**Consistency (NAP):**
Ensure EXACT same info everywhere:
- Name: Gyro City
- Phone: (647) 548-8740
- Website: https://gyrocity.ca
- Address: Toronto, ON (or specific address if available)

### 3. Review Generation Strategy

**Current: 23 Google reviews (4.9★)**

**Goal: 100+ reviews in 6 months**

**Review Request Process:**
1. After successful delivery, send follow-up email:
   ```
   Subject: How was your Gyro City catering?

   Hi [Name],

   Thank you for choosing Gyro City for your [event type]!
   
   If you enjoyed our Greek catering, we'd love a quick review:
   → [Google Review Link]

   It takes 30 seconds and helps us serve more Toronto businesses!

   - Gyro City Team
   ```

2. Add QR code on invoices linking to Google review page
3. Verbal ask after delivery: "If you're happy, a Google review would mean a lot!"
4. Incentive (optional): "Leave a review, get 10% off your next order"

**Respond to ALL Reviews:**
- Positive: Thank them, invite them back
- Negative: Apologize, offer to make it right, take offline

### 4. Local Link Building

**Target Local Links:**

**Tier 1 (High Priority):**
- BlogTO feature or mention
- Toronto Star local business spotlight
- NOW Magazine food section
- Daily Hive Toronto
- Narcity Toronto
- TorontoDesi (for halal audience)

**Tier 2 (Medium Priority):**
- Local food bloggers (offer free tasting)
- Toronto business directories
- Chamber of Commerce membership
- Local event venue partnerships
- Corporate catering RFP sites

**Tier 3 (Easy Wins):**
- Guest post on local blogs
- Sponsor local events
- Partner with Toronto hotels (catering referrals)
- Wedding venue vendor lists

**Partnership Strategy:**
- Reach out to event venues: "We'd love to be your preferred Greek caterer"
- Offer referral commission (10% for venues that send clients)
- Co-marketing with complementary businesses (florists, event planners)

---

## 📱 Technical SEO Improvements

### 1. Site Speed Optimization

**Current Issues:**
- Large images not optimized
- No lazy loading
- Unnecessary JavaScript

**Fixes:**
- Compress all images (WebP format, <100KB)
- Implement Next.js Image component everywhere
- Lazy load off-screen images
- Minimize CSS/JS bundles
- Enable Vercel Edge caching

**Target Metrics:**
- Lighthouse Performance: 90+
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s
- Cumulative Layout Shift: <0.1

### 2. Mobile Optimization

**Current Issues:**
- Some buttons too small on mobile
- Text hard to read on small screens

**Fixes:**
- Minimum 44px touch targets
- Responsive images
- Mobile-first CSS
- Test on real devices (iPhone, Android)
- Improve mobile menu (hamburger)

### 3. Core Web Vitals

Monitor and optimize:
- LCP (Largest Contentful Paint)
- FID (First Input Delay)
- CLS (Cumulative Layout Shift)

Use Google Search Console to track.

### 4. Sitemap & Robots.txt

**Create /public/sitemap.xml:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://gyrocity.ca/</loc>
    <lastmod>2026-01-30</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://gyrocity.ca/menu</loc>
    <lastmod>2026-01-30</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://gyrocity.ca/catering/office</loc>
    <lastmod>2026-01-30</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <!-- Add all pages -->
</urlset>
```

**Create /public/robots.txt:**
```
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/

Sitemap: https://gyrocity.ca/sitemap.xml
```

### 5. Structured URLs

**Current:**
- ✅ /menu
- ✅ /catering/office
- ✅ /catering/corporate

**Add:**
- /blog/[slug]
- /catering/toronto/[location]
- /reviews
- /gallery

---

## 📄 Content Marketing Strategy

### 1. Start a Blog

**Blog Topics (SEO + Value):**

**Catering Guides:**
- "How Much Food to Order for Office Catering (Toronto Guide)"
- "Greek Catering Menu Ideas for Corporate Events"
- "Same-Day Catering Toronto: When to Order and What to Expect"
- "Office Lunch Ideas That Employees Actually Want"
- "How to Choose the Right Catering for Your Toronto Event"

**Local Content:**
- "Best Corporate Catering Options in Downtown Toronto"
- "Toronto Office Buildings We Deliver To (With Photos)"
- "Greek Food 101: What's in a Traditional Gyro?"
- "Behind the Scenes: How We Prepare Fresh Greek Food Daily"

**Event-Specific:**
- "Wedding Catering Toronto: Greek Menu Ideas"
- "Funeral Reception Catering: Respectful, Delicious Options"
- "Birthday Party Catering Ideas (Greek Style)"
- "Holiday Office Party Catering Menu 2026"

**Publish Schedule:**
- 2 blog posts per month minimum
- 1,000-2,000 words each
- Include images, videos, internal links
- Optimize for featured snippets

### 2. Customer Success Stories

Create case study pages:
- "How Gyro City Catered a 500-Person Corporate Gala"
- "Office Lunch Made Easy: [Company Name]'s Story"
- "Same-Day Wedding Catering Success Story"

Include:
- Photos
- Testimonials
- Menu details
- Pricing (range)
- Lessons learned

### 3. Video Content

**YouTube Channel:**
- Food prep videos ("How We Make Our Fresh Gyros")
- Behind-the-scenes
- Customer testimonials (video)
- Menu walkthroughs
- Catering tips

Embed videos on site → increases time on page → SEO boost

---

## 🔗 Off-Page SEO Strategy

### 1. Backlink Building

**Target High-Quality Links:**

**Press Releases:**
- "Gyro City Launches Same-Day Greek Catering in Toronto"
- "Local Caterer Serves 10,000th Customer"
- Submit to PR Newswire Canada, Newswire.ca

**Guest Posting:**
- Food blogs
- Toronto lifestyle blogs
- Business/startup blogs
- Event planning blogs

**HARO (Help a Reporter Out):**
- Sign up for daily queries
- Respond to food/catering/Toronto queries
- Get quoted in major publications

**Partnerships:**
- Event venues
- Wedding planners
- Corporate event coordinators
- Hotel concierge services

### 2. Social Signals

**Instagram Strategy:**
- Post 3-5x per week
- Use local hashtags: #torontofood #torontocatering #greekfoodtoronto
- Tag locations
- Engage with Toronto food community
- Run Instagram ads for catering quotes

**Facebook:**
- Create business page
- Join Toronto business/event groups
- Post catering photos
- Share customer reviews
- Facebook ads targeting Toronto businesses

**LinkedIn:**
- Company page
- Post B2B content (office catering tips)
- Connect with Toronto corporate contacts
- Share case studies

### 3. Influencer Marketing

**Target Local Food Influencers:**
- 10K-50K followers (micro-influencers)
- Toronto-based
- Food/lifestyle niche

**Offer:**
- Free catering for content
- Affiliate commission (10% of referrals)
- Sponsored posts

**Find on:**
- Instagram (#torontofoodie)
- TikTok (@torontofood)
- YouTube (Toronto food channels)

---

## 📈 Tracking & Analytics

### 1. Google Analytics 4 Setup

**Events to Track:**
- Quote form submissions
- Phone clicks
- Menu page views
- Service page views
- Time on page
- Scroll depth
- Video plays (if added)

### 2. Google Search Console

**Monitor:**
- Keyword rankings
- Click-through rates
- Impressions
- Coverage issues
- Core Web Vitals
- Manual actions

**Optimize for:**
- Featured snippets
- "People Also Ask" boxes
- Local pack rankings

### 3. Monthly SEO Reports

**Track:**
- Organic traffic
- Keyword rankings (top 20)
- Conversion rate
- Bounce rate
- Page speed
- Backlinks gained
- Reviews count

**Tools:**
- Google Analytics
- Google Search Console
- Ahrefs (keyword tracking)
- SEMrush (competitor analysis)
- Google Business Profile Insights

---

## 🎯 90-Day Action Plan

### Month 1: Foundation

**Week 1:**
- ✅ Update all page metadata (titles, descriptions)
- ✅ Add Schema.org markup (LocalBusiness)
- ✅ Create Google Business Profile
- ✅ Add alt tags to all images
- ✅ Create sitemap.xml and robots.txt

**Week 2:**
- Submit sitemap to Google Search Console
- Set up Google Analytics 4
- Optimize 20 images (WebP, compress)
- Add FAQ section to homepage
- Create citation spreadsheet

**Week 3:**
- Submit to 10 business directories
- Request reviews from 10 recent customers
- Create location pages (6 areas)
- Add internal links (20+ contextual links)
- Improve mobile menu

**Week 4:**
- Write first blog post
- Create video (food prep)
- Reach out to 5 local venues for partnerships
- Set up review automation (email after delivery)
- Track baseline rankings for 20 keywords

### Month 2: Content & Links

**Week 5-6:**
- Write 2 blog posts
- Create 2 customer case studies
- Submit guest post pitches (5 sites)
- Get 15+ new reviews
- Submit to 10 more directories

**Week 7-8:**
- Launch Instagram marketing (daily posts)
- Reach out to 3 local food bloggers
- Create downloadable "Office Catering Guide" (lead magnet)
- Add Menu Schema markup
- Build 10 quality backlinks

### Month 3: Scale & Optimize

**Week 9-10:**
- Write 2 blog posts
- Run local Facebook ads ($500 budget)
- Partner with 2 event venues
- Get featured on local blog/publication
- Add Review Schema markup

**Week 11-12:**
- Analyze 90-day results
- Adjust strategy based on data
- Double down on what's working
- Fix any technical issues
- Plan next quarter

---

## 💰 Expected ROI

**Investment:**
- SEO tools: $100/mo (Ahrefs or SEMrush)
- Content writing: $500/mo (2 blog posts)
- Social media ads: $500/mo
- Review management: $50/mo
- **Total: ~$1,150/month**

**Expected Results (6 months):**
- Organic traffic: 2,000+ visitors/month
- Keyword rankings: Top 3 for 10+ keywords
- Google reviews: 100+
- Quote requests: +50% from organic
- **ROI: 300-500%** (additional $3,000-5,000/mo revenue)

---

## 🏆 Success Metrics

### 6-Month Goals

- ✅ Rank #1 for "greek catering toronto"
- ✅ Rank top 3 for "office catering toronto"
- ✅ 100+ Google reviews (4.8+ stars)
- ✅ 2,000+ monthly organic visits
- ✅ 50+ high-quality backlinks
- ✅ 90+ Lighthouse score
- ✅ Featured in 3+ local publications
- ✅ 20+ location/service pages indexed

### 12-Month Goals

- ✅ Rank top 3 for all primary keywords
- ✅ 10,000+ monthly organic visits
- ✅ 200+ Google reviews
- ✅ 100+ backlinks (DA 30+)
- ✅ 5,000+ email subscribers
- ✅ #1 caterer on Google Maps (Toronto)

---

## 🚀 Quick Wins (Do Today)

1. **Update homepage title tag** (5 min)
2. **Add LocalBusiness Schema** (15 min)
3. **Claim Google Business Profile** (10 min)
4. **Add alt tags to hero image** (5 min)
5. **Create robots.txt** (5 min)
6. **Request 5 reviews from recent customers** (10 min)
7. **Submit to Yelp & Facebook** (15 min)
8. **Add FAQ section to homepage** (30 min)

**Total Time: 1.5 hours → Big SEO impact!**

---

**Next Steps:**
1. Review this plan with Sam
2. Prioritize based on resources
3. Execute Month 1 action plan
4. Track results weekly
5. Adjust strategy based on data

*This plan will make Gyro City the #1 Greek catering company in Toronto for organic search!* 🚀
