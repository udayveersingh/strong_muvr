'use client'

// components/home/CitiesSection.jsx
// Matches screenshot: city name + 3 service buttons per card, 4-col grid
// Search filters cities live, "Browse All Cities" CTA at bottom

import { useState, useMemo } from 'react'
import Link from 'next/link'

// Service button styles — each category gets its own subtle color
const SERVICE_STYLES = {
  moving:        { bg: '#ede9fe', color: '#5b21b6', label: 'Moving'       },
  delivery:      { bg: '#dbeafe', color: '#1d4ed8', label: 'Delivery'     },
  'junk-removal':{ bg: '#dcfce7', color: '#15803d', label: 'Junk Removal' },
}

export default function CitiesSection({ cities = [], categories = [] }) {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    if (!query.trim()) return cities
    const q = query.toLowerCase()
    return cities.filter(c =>
      c.name.toLowerCase().includes(q) ||
      c.state?.toLowerCase().includes(q)
    )
  }, [query, cities])

  // Build service list from categories prop, fallback to defaults
  const services = categories.length
    ? categories.map(c => ({ slug: c.slug, label: c.name, ...SERVICE_STYLES[c.slug] }))
    : Object.entries(SERVICE_STYLES).map(([slug, v]) => ({ slug, ...v }))

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

        {/* Search bar */}
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
            <button className="clear-btn" onClick={() => setQuery('')} aria-label="Clear search">✕</button>
          )}
        </div>

        {/* City cards grid */}
        {filtered.length > 0 ? (
          <div className="cities-grid">
            {filtered.map(city => (
              <div key={city.slug} className="city-card">
                {/* City name */}
                <h3 className="city-name">{city.name}</h3>

                {/* One service button per category */}
                <div className="service-btns">
                  {services.map(svc => (
                    <Link
                      key={svc.slug}
                      href={`/${svc.slug}/${city.slug}`}
                      className="svc-btn"
                      style={{ '--bg': svc.bg, '--color': svc.color }}
                    >
                      {svc.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <span aria-hidden="true">🏙️</span>
            <p>No cities found for "<strong>{query}</strong>"</p>
            <button onClick={() => setQuery('')}>Clear search</button>
          </div>
        )}

        {/* CTA */}
        <div className="cities-cta">
          <Link href="/cities" className="btn-browse">
            Browse All Cities →
          </Link>
        </div>

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

        /* ── Header ── */
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

        /* ── Search ── */
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
          transition: border-color 0.15s, box-shadow 0.15s;
          box-shadow: 0 1px 4px rgba(0 0 0 / 0.05);
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
          line-height: 1;
        }

        /* ── Grid ── */
        .cities-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-bottom: 44px;
        }

        /* ── City card ── */
        .city-card {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 14px;
          padding: 20px 18px 18px;
          display: flex;
          flex-direction: columns;
          flex-direction: column;
          gap: 12px;
          transition: box-shadow 0.2s, transform 0.2s;
        }

        .city-card:hover {
          box-shadow: 0 6px 24px rgba(0 0 0 / 0.08);
          transform: translateY(-2px);
        }

        .city-name {
          font-family: 'Syne', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          color: #1e2139;
          margin: 0;
        }

        /* ── Service buttons ── */
        .service-btns {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .svc-btn {
          display: block;
          width: 100%;
          padding: 8px 12px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 600;
          font-family: 'DM Sans', sans-serif;
          text-decoration: none;
          text-align: center;
          background: var(--bg);
          color: var(--color);
          transition: opacity 0.15s, transform 0.15s;
        }

        .svc-btn:hover {
          opacity: 0.82;
          transform: translateX(2px);
        }

        /* ── No results ── */
        .no-results {
          text-align: center;
          padding: 48px 24px;
          color: #6b7280;
          margin-bottom: 44px;
        }

        .no-results span { font-size: 40px; display: block; margin-bottom: 12px; }
        .no-results p   { font-size: 15px; margin-bottom: 16px; }
        .no-results strong { color: #1e2139; }
        .no-results button {
          background: none; border: none;
          color: #ffc425; font-weight: 700;
          font-size: 14px; cursor: pointer;
        }

        /* ── CTA ── */
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
          letter-spacing: 0.01em;
          transition: background 0.15s, transform 0.1s, box-shadow 0.15s;
        }

        .btn-browse:hover {
          background: #2a2f4a;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(30 33 57 / 0.2);
        }

        /* ── Responsive ── */
        @media (max-width: 960px) {
          .cities-grid { grid-template-columns: repeat(3, 1fr); }
        }

        @media (max-width: 680px) {
          .cities-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 420px) {
          .cities-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}