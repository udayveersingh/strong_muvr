// app/page.js
// HOME PAGE — Server Component
// Fetches all data server-side, passes down to section components
// Each section is its own component file in /components/home/

import { getCategories, getFeaturedCities } from '@/lib/api'
import HeroSection from '@/components/home/Herosection'
import ServicesSection from '@/components/home/Servicessection'
import HowItWorksSection from '@/components/home/Howitworkssection'
import CitiesSection from '@/components/home/Citiessection'
import TrustSection from '@/components/home/Trustsection'
import ReviewsSection from '@/components/home/Reviewssection'
import FaqSection from '@/components/home/Faqsection'
import AppDownloadSection from '@/components/home/Appdownloadsection'
import WhatWeHandleSection from '@/components/home/Whatwehandlesection'
import DifferenceSection from '@/components/home/Differencesection'
import CtaBannerSection from '@/components/home/Ctabannersection'

// ── Page-level SEO metadata ─────────────────────────────────────────────────
export const metadata = {
  title: 'Book Movers, Delivery & Junk Removal in 60 Seconds',
  description:
    'Muvr connects you with vetted movers, same-day delivery pros, and junk removal teams in 1,000+ cities. Flat-rate pricing. No hidden fees. Book online in 60 seconds.',
  openGraph: {
    title: 'Muvr — Book Movers & Delivery in 60 Seconds',
    description:
      'Vetted pros for moving, delivery, and junk removal. Flat-rate pricing. Same-day available in 1,000+ cities.',
    url: 'https://yourdomain.com',
    images: [{ url: '/og-home.jpg', width: 1200, height: 630 }],
  },
}

export default async function HomePage() {
  // Both fetches run in parallel — fast
  const [categories, cities] = await Promise.all([
    getCategories(),
    getFeaturedCities(),
  ])

  return (
    <>
      {/* 1. Hero with booking widget */}
      <HeroSection categories={categories} />

      {/* 4. Trust badges — vetted, insured, flat-rate */}
      <TrustSection />

        <WhatWeHandleSection />
      {/* 2. Service cards grid — "Every Type of Delivery, Handled" */}
      {/* <ServicesSection categories={categories} /> */}

      {/* 3. How it works — 3 steps */}
      <HowItWorksSection />

      <DifferenceSection />

      {/* 6. Customer reviews */}
      <ReviewsSection />

       {/* 5. City search + featured cities */}
      <CitiesSection cities={cities} categories={categories} />

      {/* 7. FAQ */}
      <FaqSection categories={categories} />

      <CtaBannerSection />
      {/* 8. App download CTA */}
      {/* <AppDownloadSection /> */}
    </>
  )
}