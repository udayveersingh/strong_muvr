'use client'

// components/home/CitiesSection.jsx
// Accepts:
//   cities     — from API: [{ name, slug, state, stateCode }]
//   categories — from API: [{ name, slug }]
// Each city card shows city name + one link per category

import { useState, useMemo } from 'react'
import Link from 'next/link'

// Fallback if API not ready
const FALLBACK_CITIES = [
  { name: 'Los Angeles',   slug: 'los-angeles-ca',  state: 'California',   stateCode: 'CA' },
  { name: 'Houston',       slug: 'houston-tx',      state: 'Texas',        stateCode: 'TX' },
  { name: 'Dallas',        slug: 'dallas-tx',       state: 'Texas',        stateCode: 'TX' },
  { name: 'Miami',         slug: 'miami-fl',        state: 'Florida',      stateCode: 'FL' },
  { name: 'New York City', slug: 'new-york-city-ny',state: 'New York',     stateCode: 'NY' },
  { name: 'Philadelphia',  slug: 'philadelphia-pa', state: 'Pennsylvania', stateCode: 'PA' },
  { name: 'Chicago',       slug: 'chicago-il',      state: 'Illinois',     stateCode: 'IL' },
  { name: 'Atlanta',       slug: 'atlanta-ga',      state: 'Georgia',      stateCode: 'GA' },
  { name: 'Seattle',       slug: 'seattle-wa',      state: 'Washington',   stateCode: 'WA' },
  { name: 'Phoenix',       slug: 'phoenix-az',      state: 'Arizona',      stateCode: 'AZ' },
  { name: 'Boston',        slug: 'boston-ma',       state: 'Massachusetts',stateCode: 'MA' },
  { name: 'Denver',        slug: 'denver-co',       state: 'Colorado',     stateCode: 'CO' },
]

const FALLBACK_CATEGORIES = [
  { name: 'Delivery',     slug: 'delivery'      },
  { name: 'Moving',       slug: 'moving'        },
  { name: 'Junk Removal', slug: 'junk-removal'  },
]

export default function CitiesSection({ cities = [], categories = [] }) {
  const [query, setQuery] = useState('')

  const cityList     = cities.length     ? cities     : FALLBACK_CITIES
  const categoryList = categories.length ? categories : FALLBACK_CATEGORIES

  const filtered = useMemo(() => {
    if (!query.trim()) return cityList
    const q = query.toLowerCase()
    return cityList.filter(c =>
      c.name.toLowerCase().includes(q) ||
      c.state?.toLowerCase().includes(q) ||
      c.stateCode?.toLowerCase().includes(q)
    )
  }, [query, cityList])

  return (
    <section className="cities-section">
      <div className="container">

        {/* Header */}
        <div className="section-header">
          <h2>Top Cities We Serve</h2>
          <p className="section-sub">
            Search your city — moving, delivery, and junk removal available across 100+ markets.
          </p>
        </div>

        {/* Search */}
        <div className="search-wrap">
          <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
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

        {/* City cards grid */}
        {filtered.length > 0 ? (
          <div className="cities-grid">
            {filtered.map(city => (
              <div key={city.slug} className="city-card">
                {/* City name */}
                <h3 className="city-name">{city.name}</h3>

                {/* One link per category — dynamic from API */}
                <div className="service-links">
                  {categoryList.map(cat => (
                    <Link
                      key={cat.slug}
                      href={`/${cat.slug}/${city.slug}`}
                      className="service-link"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <p>No cities found for "<strong>{query}</strong>"</p>
            <button onClick={() => setQuery('')}>Clear search</button>
          </div>
        )}

        {/* CTA */}
        {!query && (
          <div className="cities-cta">
            <Link href="/cities" className="btn-browse">Browse All Cities →</Link>
          </div>
        )}

      </div>

      <style jsx>{`
        .cities-section {
          padding: 88px 0;
          background: #f4f5f9;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Header */
        .section-header {
          text-align: center;
          margin-bottom: 36px;
        }

        .section-header h2 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.75rem, 3.5vw, 2.4rem);
          font-weight: 800;
          color: #1e2139;
          margin-bottom: 10px;
        }

        .section-sub {
          color: #6b7280;
          font-size: 15px;
          max-width: 500px;
          margin: 0 auto;
        }

        /* Search */
        .search-wrap {
          position: relative;
          max-width: 520px;
          margin: 0 auto 40px;
        }

        .search-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: #9ca3af;
          pointer-events: none;
        }

        .city-search {
          width: 100%;
          padding: 14px 44px 14px 46px;
          border: 1.5px solid #e5e7eb;
          border-radius: 12px;
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

        /* Grid — 4 columns */
        .cities-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-bottom: 40px;
        }

        /* City card */
        .city-card {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 14px;
          padding: 20px 20px 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          transition: box-shadow 0.2s, transform 0.2s;
        }

        .city-card:hover {
          box-shadow: 0 6px 20px rgba(0 0 0 / 0.07);
          transform: translateY(-2px);
        }

        .city-name {
          font-family: 'Syne', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          color: #1e2139;
          margin: 0;
        }

        /* Service links — stacked vertically */
        .service-links {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .service-link {
          color: #1e2139;
          font-size: 14px;
          font-weight: 500;
          text-decoration: underline;
          text-underline-offset: 2px;
          text-decoration-color: rgba(30 33 57 / 0.3);
          transition: color 0.15s, text-decoration-color 0.15s;
        }

        .service-link:hover {
          color: #ffc425;
          text-decoration-color: #ffc425;
        }

        /* No results */
        .no-results {
          text-align: center;
          padding: 40px;
          color: #6b7280;
          margin-bottom: 40px;
        }

        .no-results strong { color: #1e2139; }

        .no-results button {
          display: block;
          margin: 12px auto 0;
          background: none;
          border: none;
          color: #ffc425;
          font-weight: 700;
          cursor: pointer;
        }

        /* CTA */
        .cities-cta { display: flex; justify-content: center; }

        .btn-browse {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #1e2139;
          color: #ffc425;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 800;
          padding: 15px 40px;
          border-radius: 999px;
          text-decoration: none;
          transition: background 0.15s, transform 0.1s;
        }

        .btn-browse:hover {
          background: #2a2f4a;
          transform: translateY(-2px);
        }

        /* Responsive */
        @media (max-width: 960px) {
          .cities-grid { grid-template-columns: repeat(3, 1fr); }
        }

        @media (max-width: 640px) {
          .cities-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 400px) {
          .cities-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}