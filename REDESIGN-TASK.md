# Gyro City - Full Redesign Task

## Your Mission
Implement the complete UI/UX redesign outlined in `REDESIGN-PLAN.md` for the Gyro City website.

## Context Files
1. **REDESIGN-PLAN.md** - Complete redesign specification (colors, typography, components, animations)
2. **UI-UX Master Skill** - Located at `/usr/local/lib/node_modules/clawdbot/skills/ui-ux-master/SKILL.md` - your design bible

## Current State
- 12 functional pages built
- Basic Tailwind styling
- No animations
- Generic system fonts
- Working but not elegant

## Target State
- Modern, elegant design
- Framer Motion animations
- Custom typography (Playfair Display + Inter)
- Refined color palette
- Professional food photography placeholders
- WCAG AA accessible
- Mobile-optimized
- High conversion design

## Implementation Order

### Phase 1: Foundation (Start Here)
1. Install Framer Motion: `npm install framer-motion`
2. Install Google Fonts: `npm install @next/font` (or use next/font from Next.js 14)
3. Update `tailwind.config.js` with new color system (see REDESIGN-PLAN.md)
4. Create `lib/fonts.ts` for Playfair Display + Inter

### Phase 2: Core Components
5. Create `components/ui/` folder
6. Build reusable components:
   - `Button.tsx` (primary, secondary, ghost variants)
   - `Card.tsx` (with hover effects, image support)
   - `Input.tsx` (with focus states, validation)
   - `Navigation.tsx` (glassmorphism, sticky)
   - `Footer.tsx` (improved layout)

### Phase 3: Homepage Redesign
7. Update `app/page.tsx`:
   - New hero section (split-screen, larger headline)
   - Add social proof section (reviews, testimonials)
   - Add "How It Works" section
   - Redesign package cards (use new Card component)
   - Add scroll animations (Framer Motion)
   - Update all sections per REDESIGN-PLAN.md

### Phase 4: Other Pages
8. Update `/menu` page (better typography, card layout)
9. Update `/about` page (2-column layout, storytelling)
10. Update `/quote` page (improved form with states)
11. Update `/contact` page (better layout)
12. Update `/order` page (clearer CTAs)
13. Update all 4 service pages (`/catering/*`)

### Phase 5: Mobile Optimization
14. Build hamburger menu component
15. Test all breakpoints (375px, 768px, 1024px, 1440px)
16. Ensure 44x44px touch targets
17. Mobile-specific optimizations

### Phase 6: Accessibility
18. Add skip navigation link
19. Improve focus indicators
20. Add ARIA labels where needed
21. Test keyboard navigation
22. Add `prefers-reduced-motion` support

### Phase 7: SEO
23. Add Schema.org LocalBusiness markup (layout.tsx)
24. Improve meta tags on all pages
25. Add Open Graph images
26. Create sitemap.xml
27. Add robots.txt

### Phase 8: Performance
28. Optimize images (use Next.js Image component)
29. Lazy load images
30. Code splitting check
31. Lighthouse audit (target >90 score)

## Key Design Decisions (from UI-UX Master Skill)

**Colors (oklch for perceptual uniformity):**
```js
// tailwind.config.js
colors: {
  primary: 'oklch(0.45 0.15 240)',        // Navy
  secondary: 'oklch(0.65 0.12 80)',       // Gold
  accent: 'oklch(0.55 0.18 25)',          // Terracotta
  'bg-cream': 'oklch(0.97 0.01 70)',
}
```

**Typography:**
- Headings: Playfair Display (elegant, serif)
- Body: Inter (modern, sans-serif)
- Scale: 12/14/16/18/24/32/40/56px

**Animations:**
- Fade-in on scroll (Framer Motion)
- Card hover lift (-translateY-2)
- Button press scale(0.95)
- Duration: 200-400ms
- Easing: ease-out

**Components:**
- 8px grid system
- Border radius: 8-12px
- Shadow: subtle, 1-2 layers
- Buttons: 44px min height (mobile)

## Success Criteria

✅ All pages redesigned per plan  
✅ Framer Motion animations working  
✅ Custom fonts loaded  
✅ Mobile responsive (tested)  
✅ WCAG AA contrast ratios  
✅ Lighthouse score >90  
✅ No console errors  
✅ Build succeeds (`npm run build`)  

## How to Work

1. **Read REDESIGN-PLAN.md first** - understand the vision
2. **Reference UI-UX Master Skill** - follow design principles
3. **Work incrementally** - commit after each component
4. **Test frequently** - run `npm run dev` and check localhost:3000
5. **Git commits** - commit working code often

## Testing Checklist

Before marking complete:
- [ ] `npm run build` succeeds
- [ ] All pages load without errors
- [ ] Navigation works on mobile
- [ ] Forms are functional
- [ ] Animations run smoothly
- [ ] Lighthouse score >90
- [ ] Accessible (keyboard nav works)

## Final Deliverable

When done:
1. Run `npm run build` to verify
2. Commit all changes
3. Push to GitHub
4. Update REDESIGN-PLAN.md with "✅ IMPLEMENTED" at top
5. Create summary of what was done

## Notes

- Dev server: `npm run dev` → http://localhost:3000
- The site is already functional - we're making it beautiful
- Focus on elegance, not complexity
- Every design choice should increase conversions
- When in doubt, reference the UI-UX Master Skill

Good luck! Make it beautiful. 🎨
