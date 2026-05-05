'use client'

// components/city/CityAlsoFrom.jsx
// "More Services in Los Angeles, CA" — same 2-card layout as CategoryAlsoFrom
// City name injected in heading, subtitle, and card descriptions
// Shows the OTHER 2 categories for this city

import Link from 'next/link'

const ALL_CATEGORIES = [
  {
    slug: 'moving',
    name: 'Moving Services',
    icon: '🚛',
    desc: (city) => `Local, long-distance & interstate moving in ${city.name}`,
  },
  {
    slug: 'delivery',
    name: 'Delivery Services',
    icon: '📦',
    desc: (city) => `Furniture, appliance & large item delivery in ${city.name}`,
  },
  {
    slug: 'junk-removal',
    name: 'Junk Removal',
    icon: '🗑️',
    desc: (city) => `Furniture removal, cleanouts & hauling in ${city.name}`,
  },
]

const SUB = {
  moving:         (city) => `We also handle delivery and junk removal in ${city.name}.`,
  delivery:       (city) => `We also handle moving and junk removal in ${city.name}.`,
  'junk-removal': (city) => `We also handle moving and delivery in ${city.name}.`,
}

export default function CityAlsoFrom({ categorySlug, city }) {
  const others = ALL_CATEGORIES.filter(c => c.slug !== categorySlug)
  const sub    = (SUB[categorySlug] || SUB['delivery'])(city)

  return (
    <section className="city-also">
      <div className="container">

        {/* Header */}
        <div className="section-header">
          <span className="eyebrow">More Services</span>
          <h2>More Services in {city.name}, {city.stateCode}</h2>
          <p className="section-sub">{sub}</p>
        </div>

        {/* 2 wide cards */}
        <div className="cards-row">
          {others.map(cat => (
            <Link
              key={cat.slug}
              href={`/${cat.slug}/${city.slug}`}
              className="also-card"
            >
              <span className="card-icon" aria-hidden="true">{cat.icon}</span>
              <div className="card-info">
                <span className="card-name">{cat.name}</span>
                <span className="card-desc">{cat.desc(city)}</span>
              </div>
            </Link>
          ))}
        </div>

      </div>

      <style jsx>{`
        .city-also {
          padding: 72px 0 80px;
          background: #fff;
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .section-header {
          text-align: center;
          margin-bottom: 40px;
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
          margin-bottom: 14px;
        }

        .section-header h2 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.75rem, 3.5vw, 2.4rem);
          font-weight: 800;
          color: #1e2139;
          margin-bottom: 10px;
          letter-spacing: -0.02em;
        }

        .section-sub {
          color: #9ca3af;
          font-size: 15px;
        }

        /* 2 cards side by side */
        .cards-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .also-card {
          display: flex;
          align-items: center;
          gap: 16px;
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 20px 24px;
          text-decoration: none;
          transition: border-color 0.15s, box-shadow 0.15s, transform 0.15s;
        }

        .also-card:hover {
          border-color: #ffc425;
          box-shadow: 0 4px 20px rgba(255 196 37 / 0.12);
          transform: translateY(-2px);
        }

        .card-icon {
          font-size: 32px;
          flex-shrink: 0;
          width: 52px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fffbec;
          border-radius: 10px;
        }

        .card-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .card-name {
          font-family: 'Syne', sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: #1e2139;
        }

        .card-desc {
          font-size: 13px;
          color: #9ca3af;
        }

        @media (max-width: 640px) {
          .cards-row { grid-template-columns: 1fr; }
          .city-also { padding: 56px 0; }
        }
      `}</style>
    </section>
  )
}