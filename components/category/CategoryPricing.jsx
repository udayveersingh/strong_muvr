'use client'

// components/category/CategoryPricing.jsx
// Pricing section — 4 price cards in a row, all content dynamic per category
// Matches all 3 screenshots exactly

import Link from 'next/link'

const PRICING_DATA = {
  moving: {
    eyebrow: 'Moving Costs',
    heading: 'What Does It Cost to Move?',
    sub: 'Transparent, upfront pricing. Rates vary by city, distance, volume, and timing.',
    note: 'All moves start with 2 movers. Get your exact quote in seconds with no commitment required.',
    tiers: [
      { label: 'Studio Move',    price: '$499–$699',    detail: '2 movers, 2–3 hrs'        },
      { label: '1–2 Bedroom',    price: '$749–$949',    detail: '2 movers, 3–5 hrs'        },
      { label: '3–4+ Bedroom',   price: '$999–$1,600+', detail: '2–3 movers, 5–8+ hrs'     },
      { label: 'Labor Only',     price: '$69–$99+',     detail: 'per mover / per hour'     },
    ],
  },
  delivery: {
    eyebrow: 'Delivery Costs',
    heading: 'What Does Delivery Cost?',
    sub: 'Transparent, upfront pricing. Rates vary by city, distance, and item size.',
    note: 'All deliveries start with 2 professionals. Get your exact quote in seconds with no commitment required.',
    tiers: [
      { label: 'Single Item',    price: '$99–$149',     detail: '2 movers, 1–2 hrs'        },
      { label: 'Multi-Item',     price: '$149–$249',    detail: '2 movers, 2–3 hrs'        },
      { label: 'Large Pickup',   price: '$249–$399',    detail: '2 movers, 3–4+ hrs'       },
      { label: 'Labor Only',     price: '$69–$99+',     detail: 'per mover / per hour'     },
    ],
  },
  'junk-removal': {
    eyebrow: 'Junk Removal Costs',
    heading: 'What Does Junk Removal Cost?',
    sub: 'Transparent, upfront pricing. Rates vary by city, volume, and item type.',
    note: 'All jobs start with 2 professionals. Get your exact quote in seconds with no commitment required.',
    tiers: [
      { label: 'Single Item',    price: '$99–$149',     detail: 'couch, mattress, appliance' },
      { label: '1/4 Truck',      price: '$149–$249',    detail: 'small cleanout'             },
      { label: '1/2 Truck',      price: '$249–$399',    detail: 'garage or room'             },
      { label: 'Full Truck',     price: '$399–$599+',   detail: 'estate or large cleanout'   },
    ],
  },
}

export default function CategoryPricing({ categorySlug }) {
  const data = PRICING_DATA[categorySlug] || PRICING_DATA['delivery']

  return (
    <section className="pricing-section">
      <div className="container">

        {/* Header */}
        <div className="section-header">
          <span className="eyebrow">{data.eyebrow}</span>
          <h2>{data.heading}</h2>
          <p className="section-sub">{data.sub}</p>
        </div>

        {/* 4 price cards */}
        <div className="price-grid">
          {data.tiers.map((tier, i) => (
            <div key={i} className="price-card">
              <span className="tier-label">{tier.label}</span>
              <span className="tier-price">{tier.price}</span>
              <span className="tier-detail">{tier.detail}</span>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="pricing-note">{data.note}</p>

        {/* CTA */}
        <div className="pricing-cta">
          <Link href="/book" className="btn-quote">Get Your Free Quote</Link>
        </div>

      </div>

      <style jsx>{`
        .pricing-section {
          padding: 80px 0;
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

        /* ── Price cards ── */
        .price-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-bottom: 24px;
        }

        .price-card {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 14px;
          padding: 28px 20px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 8px;
          transition: box-shadow 0.2s, transform 0.2s, border-color 0.2s;
        }

        .price-card:hover {
          box-shadow: 0 6px 24px rgba(255 196 37 / 0.12);
          transform: translateY(-2px);
          border-color: #ffd666;
        }

        .tier-label {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #9ca3af;
        }

        .tier-price {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.4rem, 2.5vw, 1.75rem);
          font-weight: 800;
          color: #ffc425;
          line-height: 1;
        }

        .tier-detail {
          font-size: 12.5px;
          color: #9ca3af;
        }

        /* ── Note ── */
        .pricing-note {
          text-align: center;
          color: #9ca3af;
          font-size: 13.5px;
          margin-bottom: 28px;
        }

        /* ── CTA ── */
        .pricing-cta {
          display: flex;
          justify-content: center;
        }

        .btn-quote {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #1e2139;
          color: #ffc425;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 800;
          padding: 16px 40px;
          border-radius: 999px;
          text-decoration: none;
          letter-spacing: 0.01em;
          transition: background 0.15s, transform 0.1s, box-shadow 0.15s;
        }

        .btn-quote:hover {
          background: #2a2f4a;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(30 33 57 / 0.25);
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .price-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 480px) {
          .price-grid { grid-template-columns: 1fr; }
          .pricing-section { padding: 56px 0; }
        }
      `}</style>
    </section>
  )
}