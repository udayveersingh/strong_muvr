'use client'

// components/category/CategoryAlsoFrom.jsx
// "Also From Muvr" — shows the OTHER 2 categories as wide cards
// Current category is excluded automatically
// Matches all 3 screenshots: eyebrow, heading, sub, 2-col wide cards with icon + title + desc

import Link from 'next/link'

const ALL_CATEGORIES = [
  {
    slug: 'moving',
    name: 'Moving Services',
    desc: 'Local, long-distance & interstate moving',
    icon: '🚛',
  },
  {
    slug: 'delivery',
    name: 'Delivery Services',
    desc: 'Furniture, appliance & large item delivery',
    icon: '📦',
  },
  {
    slug: 'junk-removal',
    name: 'Junk Removal',
    desc: 'Furniture removal, cleanouts & hauling',
    icon: '🗑️',
  },
]

export default function CategoryAlsoFrom({ categorySlug }) {
  // Show the other 2 categories — exclude current
  const others = ALL_CATEGORIES.filter(c => c.slug !== categorySlug)

  return (
    <section className="also-from">
      <div className="container">

        {/* Header */}
        <div className="section-header">
          <span className="eyebrow">More Services</span>
          <h2>Also From Us</h2>
          <p className="section-sub">
            We handle moving, delivery, and junk removal nationwide.
          </p>
        </div>

        {/* 2 wide cards */}
        <div className="cards-row">
          {others.map(cat => (
            <Link
              key={cat.slug}
              href={`/${cat.slug}`}
              className="also-card"
            >
              <span className="card-icon" aria-hidden="true">{cat.icon}</span>
              <div className="card-info">
                <span className="card-name">{cat.name}</span>
                <span className="card-desc">{cat.desc}</span>
              </div>
            </Link>
          ))}
        </div>

      </div>

      <style jsx>{`
        .also-from {
          padding: 72px 0 80px;
          background: #fff;
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* ── Header ── */
        .section-header {
          text-align: center;
          margin-bottom: 44px;
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

        /* ── 2 cards side by side ── */
        .cards-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        /* ── Card ── */
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

        /* ── Responsive ── */
        @media (max-width: 640px) {
          .cards-row { grid-template-columns: 1fr; }
          .also-from { padding: 56px 0; }
        }
      `}</style>
    </section>
  )
}