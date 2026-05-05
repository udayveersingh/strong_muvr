'use client'

// components/city/CityIntro.jsx
// Breadcrumb: Home > [Category] > [City, State]
// + centered SEO paragraph unique to city + category combo

import Link from 'next/link'

// SEO paragraph templates per category
// {city}, {state}, {stateCode} are replaced dynamically
const INTRO_TEMPLATES = {
  moving: (city, state) =>
    `Looking for reliable movers in ${city.name}, ${city.stateCode}? We connect you with insured, background-checked ${city.name} movers who serve every neighborhood in ${city.name} and beyond. Studio moves start at $499, 1–2 bedroom from $749, and larger homes from $999. Book ${city.name} moving services in under 60 seconds with transparent pricing and zero hidden fees.`,

  delivery: (city, state) =>
    `Looking for reliable delivery in ${city.name}, ${city.stateCode}? We connect you with insured, background-checked ${city.name} delivery teams who serve every neighborhood in ${city.name} and beyond. Single-item delivery starts at $99, multi-item from $149. Book ${city.name} delivery services in under 60 seconds with transparent pricing and zero hidden fees.`,

  'junk-removal': (city, state) =>
    `Looking for reliable junk removal in ${city.name}, ${city.stateCode}? We connect you with insured, background-checked ${city.name} haulers who serve every neighborhood in ${city.name} and beyond. Single-item removal starts at $99, full truck loads from $399. Book ${city.name} junk removal in under 60 seconds with transparent pricing and zero hidden fees.`,
}

// Category display names for breadcrumb
const CATEGORY_NAMES = {
  moving:         'Moving',
  delivery:       'Delivery',
  'junk-removal': 'Junk Removal',
}

export default function CityIntro({ city, categorySlug }) {
  const categoryName = CATEGORY_NAMES[categorySlug] || categorySlug
  const template     = INTRO_TEMPLATES[categorySlug] || INTRO_TEMPLATES['delivery']
  const paragraph    = template(city)

  return (
    <section className="city-intro">
      <div className="container">

        {/* Breadcrumb: Home > Moving > Los Angeles, CA */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/" className="bc-link">Home</Link>
          <span className="bc-sep" aria-hidden="true"> &gt; </span>
          <Link href={`/${categorySlug}`} className="bc-link">{categoryName}</Link>
          <span className="bc-sep" aria-hidden="true"> &gt; </span>
          <span className="bc-current">{city.name}, {city.stateCode}</span>
        </nav>

        {/* SEO paragraph */}
        <p className="intro-text">{paragraph}</p>

      </div>

      <style jsx>{`
        .city-intro {
          background: #fff;
          border-bottom: 1px solid #f0f0f0;
          padding: 24px 24px 52px;
        }

        .container {
          max-width: 720px;
          margin: 0 auto;
        }

        /* ── Breadcrumb ── */
        .breadcrumb {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 2px;
          font-size: 14px;
          margin-bottom: 36px;
        }

        .bc-link {
          color: #ffc425;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.15s;
        }

        .bc-link:hover { color: #e6b020; }

        .bc-sep {
          color: #9ca3af;
          padding: 0 2px;
        }

        .bc-current {
          color: #6b7280;
          font-weight: 400;
        }

        /* ── SEO paragraph ── */
        .intro-text {
          text-align: center;
          color: #4b5563;
          font-size: 16px;
          line-height: 1.8;
          margin: 0;
        }
      `}</style>
    </section>
  )
}