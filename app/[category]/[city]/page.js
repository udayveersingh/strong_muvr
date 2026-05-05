// app/[category]/[city]/page.js
// City page template — e.g. /moving/los-angeles-ca
// Next.js 15: params must be awaited

import { notFound } from 'next/navigation'
import TrustSection from '@/components/home/Trustsection'
import CityHero    from '@/components/city/CityHero'
import CityIntro   from '@/components/city/CityIntro'
import CityServices from '@/components/city/CityServices'
import CityHowItWorks from '@/components/city/CityHowItWorks'
import CityWhyUs       from '@/components/city/CityWhyUs'
import CityPricing       from '@/components/city/CityPricing'
import CityNeighborhoods from '@/components/city/CityNeighborhoods'
import CityNearby from '@/components/city/CityNearby'
import CityAlsoFrom from '@/components/city/CityAlsoFrom'
import CityFaq from '@/components/city/CityFaq'

// ─── Data helpers (replace with real API calls) ───────────────────────────────

async function getCategories() {
  return ['moving', 'delivery', 'junk-removal']
}

async function getCities() {
  return [
    { name: 'Los Angeles',   slug: 'los-angeles-ca',   state: 'California', stateCode: 'CA' },
    { name: 'New York',      slug: 'new-york-ny',      state: 'New York',   stateCode: 'NY' },
    { name: 'Chicago',       slug: 'chicago-il',       state: 'Illinois',   stateCode: 'IL' },
    { name: 'Houston',       slug: 'houston-tx',       state: 'Texas',      stateCode: 'TX' },
    { name: 'Dallas',        slug: 'dallas-tx',        state: 'Texas',      stateCode: 'TX' },
    { name: 'Miami',         slug: 'miami-fl',         state: 'Florida',    stateCode: 'FL' },
    { name: 'Phoenix',       slug: 'phoenix-az',       state: 'Arizona',    stateCode: 'AZ' },
    { name: 'Philadelphia',  slug: 'philadelphia-pa',  state: 'Pennsylvania',stateCode: 'PA' },
    { name: 'San Antonio',   slug: 'san-antonio-tx',   state: 'Texas',      stateCode: 'TX' },
    { name: 'San Diego',     slug: 'san-diego-ca',     state: 'California', stateCode: 'CA' },
    { name: 'San Francisco', slug: 'san-francisco-ca', state: 'California', stateCode: 'CA' },
    { name: 'Seattle',       slug: 'seattle-wa',       state: 'Washington', stateCode: 'WA' },
    { name: 'Denver',        slug: 'denver-co',        state: 'Colorado',   stateCode: 'CO' },
    { name: 'Atlanta',       slug: 'atlanta-ga',       state: 'Georgia',    stateCode: 'GA' },
    { name: 'Boston',        slug: 'boston-ma',        state: 'Massachusetts',stateCode:'MA' },
    { name: 'Austin',        slug: 'austin-tx',        state: 'Texas',      stateCode: 'TX' },
    { name: 'Columbus',      slug: 'columbus-oh',      state: 'Ohio',       stateCode: 'OH' },
    { name: 'Sacramento',    slug: 'sacramento-ca',    state: 'California', stateCode: 'CA' },
    { name: 'Cleveland',     slug: 'cleveland-oh',     state: 'Ohio',       stateCode: 'OH' },
    { name: 'San Jose',      slug: 'san-jose-ca',      state: 'California', stateCode: 'CA' },
  ]
}

async function getCityBySlug(slug) {
  const cities = await getCities()
  return cities.find(c => c.slug === slug) || null
}

// ─── generateStaticParams ─────────────────────────────────────────────────────

export async function generateStaticParams() {
  const [categories, cities] = await Promise.all([getCategories(), getCities()])
  return categories.flatMap(category =>
    cities.map(city => ({ category, city: city.slug }))
  )
}

// ─── generateMetadata ─────────────────────────────────────────────────────────

export async function generateMetadata({ params }) {
  const { category, city: citySlug } = await params
  const city = await getCityBySlug(citySlug)
  if (!city) return {}

  const serviceMap = {
    moving:         'Movers',
    delivery:       'Delivery',
    'junk-removal': 'Junk Removal',
  }
  const service = serviceMap[category] || 'Services'

  return {
    title: `${city.name} ${service} | Book in 60 Seconds`,
    description: `Book insured, background-checked ${city.name} ${service.toLowerCase()} in 60 seconds. Same-day availability. Transparent rates. Zero hidden fees.`,
    openGraph: {
      title: `${city.name} ${service} | Book in 60 Seconds`,
      description: `Book insured ${city.name} ${service.toLowerCase()} in 60 seconds. Flat-rate pricing.`,
    },
  }
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function CityPage({ params }) {
  const { category, city: citySlug } = await params

  const [categories, city] = await Promise.all([
    getCategories(),
    getCityBySlug(citySlug),
  ])

  if (!categories.includes(category) || !city) notFound()

  return (
    <>
      {/* 1. Hero */}
      <CityHero city={city} categorySlug={category} categories={categories} />

      {/* 2. Stats bar */}
      <TrustSection />

      {/* 3. Breadcrumb + city SEO intro paragraph */}
      <CityIntro city={city} categorySlug={category} />

      {/* 4. All services grid for this city + category */}
      <CityServices categorySlug={category} city={city} />

       <CityHowItWorks categorySlug={category} city={city} />

      <CityWhyUs categorySlug={category} city={city} />

      <CityPricing categorySlug={category} city={city} />
      <CityNeighborhoods categorySlug={category} city={city} />
      <CityNearby categorySlug={category} city={city} />
      <CityAlsoFrom categorySlug={category} city={city} />
      <CityFaq categorySlug={category} city={city} />
      {/* More sections coming:
        <CityServices   categorySlug={category} city={city} />
        <CityHowItWorks categorySlug={category} />
        <CityWhyUs      categorySlug={category} city={city} />
        <CityPricing    categorySlug={category} />
        <CityFaq        categorySlug={category} city={city} />
        <CityReadyCta   categorySlug={category} city={city} />
      */}
    </>
  )
}