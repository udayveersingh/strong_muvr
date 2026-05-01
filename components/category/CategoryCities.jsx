'use client'

// components/category/CategoryCities.jsx
// "Find [Service] in Your City" — search bar + 6-col city grid
// Heading and city card subtitle change per category
// Matches all 3 screenshots exactly

import { useState, useMemo } from 'react'
import Link from 'next/link'

const HEADING = {
  moving:         'Find Movers in Your City',
  delivery:       'Find Delivery in Your City',
  'junk-removal': 'Find Junk Removal in Your City',
}

const SUB = {
  moving:         'Search your city for moving services available across 1,000+ markets.',
  delivery:       'Search your city for delivery services available across 1,000+ markets.',
  'junk-removal': 'Search your city for junk removal services available across 1,000+ markets.',
}

const CITY_LABEL = {
  moving:         (city) => `Movers in ${city}`,
  delivery:       (city) => `Delivery in ${city}`,
  'junk-removal': (city) => `Junk Removal in ${city}`,
}

// Fallback cities if API returns empty
const FALLBACK_CITIES = [
  { name: 'Los Angeles',   slug: 'los-angeles-ca',   state: 'CA' },
  { name: 'Houston',       slug: 'houston-tx',        state: 'TX' },
  { name: 'Dallas',        slug: 'dallas-tx',         state: 'TX' },
  { name: 'Miami',         slug: 'miami-fl',          state: 'FL' },
  { name: 'New York City', slug: 'new-york-city-ny',  state: 'NY' },
  { name: 'Philadelphia',  slug: 'philadelphia-pa',   state: 'PA' },
  { name: 'Chicago',       slug: 'chicago-il',        state: 'IL' },
  { name: 'Atlanta',       slug: 'atlanta-ga',        state: 'GA' },
  { name: 'Seattle',       slug: 'seattle-wa',        state: 'WA' },
  { name: 'Phoenix',       slug: 'phoenix-az',        state: 'AZ' },
  { name: 'Boston',        slug: 'boston-ma',         state: 'MA' },
  { name: 'Denver',        slug: 'denver-co',         state: 'CO' },
]

export default function CategoryCities({ categorySlug, cities = [] }) {
  const [query, setQuery] = useState('')

  const cityList = cities.length ? cities : FALLBACK_CITIES

  const filtered = useMemo(() => {
    if (!query.trim()) return cityList
    const q = query.toLowerCase()
    return cityList.filter(c =>
      c.name.toLowerCase().includes(q) ||
      c.state?.toLowerCase().includes(q)
    )
  }, [query, cityList])

  const heading   = HEADING[categorySlug]   || HEADING['delivery']
  const sub       = SUB[categorySlug]       || SUB['delivery']
  const cityLabel = CITY_LABEL[categorySlug] || CITY_LABEL['delivery']

  return (
    <section className="cat-cities">
      <div className="container">

        {/* Header */}
        <div className="section-header">
          <span className="eyebrow">Where We Serve</span>
          <h2>{heading}</h2>
          <p className="section-sub">{sub}</p>
        </div>

        {/* Search */}
        <div className="search-wrap">
          <input
            type="search"
            placeholder="Search a city..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="city-search"
            aria-label="Search cities"
          />
          {query && (
            <button className="clear-btn" onClick={() => setQuery('')} aria-label="Clear">✕</button>
          )}
        </div>

        {/* City grid */}
        {filtered.length > 0 ? (
          <div className="cities-grid">
            {filtered.map(city => (
              <Link
                key={city.slug}
                href={`/${categorySlug}/${city.slug}`}
                className="city-card"
              >
                {/* Pink pin icon matching screenshot */}
                <span className="pin-icon" aria-hidden="true">
                  <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
                    <path
                      d="M8 0C3.58 0 0 3.58 0 8c0 5.25 8 12 8 12s8-6.75 8-12c0-4.42-3.58-8-8-8zm0 11a3 3 0 110-6 3 3 0 010 6z"
                      fill="#f43f5e"
                    />
                  </svg>
                </span>
                <div className="city-info">
                  <span className="city-name">{city.name}</span>
                  <span className="city-sub">{cityLabel(city.name)}</span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <p>No cities found for "<strong>{query}</strong>"</p>
            <button onClick={() => setQuery('')}>Clear search</button>
          </div>
        )}

      </div>

      <style jsx>{`
        .cat-cities {
          padding: 80px 0;
          background: #f4f5f9;
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* ── Header ── */
        .section-header {
          text-align: center;
          margin-bottom: 36px;
        }

        .eyebrow {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #1e2139;
          background: #fff3cc;
          border: 1px solid #ffd666;
          padding: 5px 16px;
          border-radius: 999px;
          margin-bottom: 16px;
        }

        .section-header h2 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.75rem, 3.5vw, 2.5rem);
          font-weight: 800;
          color: #1e2139;
          margin-bottom: 10px;
          letter-spacing: -0.02em;
        }

        .section-sub {
          color: #6b7280;
          font-size: 15px;
        }

        /* ── Search ── */
        .search-wrap {
          position: relative;
          max-width: 480px;
          margin: 0 auto 40px;
        }

        .city-search {
          width: 100%;
          padding: 14px 44px 14px 18px;
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          font-size: 15px;
          font-family: 'DM Sans', sans-serif;
          background: #fff;
          color: #1e2139;
          outline: none;
          box-shadow: 0 1px 4px rgba(0 0 0 / 0.05);
          transition: border-color 0.15s, box-shadow 0.15s;
        }

        .city-search:focus {
          border-color: #ffc425;
          box-shadow: 0 0 0 3px rgba(255 196 37 / 0.15);
        }

        .city-search::placeholder { color: #9ca3af; }

        .clear-btn {
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: #9ca3af;
          cursor: pointer;
          font-size: 15px;
        }

        /* ── Grid — 6 columns ── */
        .cities-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 10px;
        }

        /* ── City card ── */
        .city-card {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          padding: 14px 14px;
          text-decoration: none;
          transition: border-color 0.15s, box-shadow 0.15s, transform 0.15s;
        }

        .city-card:hover {
          border-color: #ffc425;
          box-shadow: 0 4px 14px rgba(255 196 37 / 0.12);
          transform: translateY(-2px);
        }

        .pin-icon {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .city-info {
          display: flex;
          flex-direction: column;
          gap: 3px;
          min-width: 0;
        }

        .city-name {
          font-size: 13.5px;
          font-weight: 700;
          color: #1e2139;
          line-height: 1.2;
        }

        .city-sub {
          font-size: 11.5px;
          color: #9ca3af;
          line-height: 1.3;
        }

        /* ── No results ── */
        .no-results {
          text-align: center;
          padding: 40px;
          color: #6b7280;
        }

        .no-results strong { color: #1e2139; }

        .no-results button {
          background: none;
          border: none;
          color: #ffc425;
          font-weight: 700;
          cursor: pointer;
          margin-top: 8px;
          display: block;
          margin: 8px auto 0;
        }

        /* ── Responsive ── */
        @media (max-width: 1100px) {
          .cities-grid { grid-template-columns: repeat(4, 1fr); }
        }

        @media (max-width: 768px) {
          .cities-grid { grid-template-columns: repeat(3, 1fr); }
        }

        @media (max-width: 480px) {
          .cities-grid { grid-template-columns: repeat(2, 1fr); }
          .cat-cities { padding: 56px 0; }
        }
      `}</style>
    </section>
  )
}