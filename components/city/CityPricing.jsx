'use client'

// components/city/CityPricing.jsx
// Same 4-card pricing layout as CategoryPricing
// City name injected into eyebrow, heading, note, and CTA link
// CTA is a plain text link (not pill button) — matches screenshot

import Link from 'next/link'

const PRICING_DATA = {
  moving: (city) => ({
    eyebrow: `${city.name} Moving Costs`.toUpperCase(),
    heading: `What Does It Cost to Move in ${city.name}, ${city.stateCode}?`,
    sub: 'Transparent, upfront pricing. No hidden fees. Prices vary based on distance, volume, and timing.',
    note: `All ${city.name} moves start with 2 movers. Get your exact ${city.name} quote in 60 seconds with no commitment required.`,
    tiers: [
      { label: 'Studio Move',    price: '$499–$699',    detail: '2 movers, 2–3 hrs'        },
      { label: '1–2 Bedroom',    price: '$749–$949',    detail: '2 movers, 3–5 hrs'        },
      { label: '3–4+ Bedroom',   price: '$999–$1,600+', detail: '2–3 movers, 5–8+ hrs'     },
      { label: 'Labor Only',     price: '$69–$99+',     detail: 'per mover / per hour'     },
    ],
  }),
  delivery: (city) => ({
    eyebrow: `${city.name} Delivery Costs`.toUpperCase(),
    heading: `What Does Delivery Cost in ${city.name}, ${city.stateCode}?`,
    sub: 'Transparent, upfront pricing. No hidden fees. Prices vary based on distance and item size.',
    note: `All ${city.name} deliveries start with 2 professionals. Get your exact ${city.name} quote in 60 seconds with no commitment required.`,
    tiers: [
      { label: 'Single Item',    price: '$99–$149',     detail: '2 movers, 1–2 hrs'        },
      { label: 'Multi-Item',     price: '$149–$249',    detail: '2 movers, 2–3 hrs'        },
      { label: 'Large Pickup',   price: '$249–$399',    detail: '2 movers, 3–4+ hrs'       },
      { label: 'Labor Only',     price: '$69–$99+',     detail: 'per mover / per hour'     },
    ],
  }),
  'junk-removal': (city) => ({
    eyebrow: `${city.name} Junk Removal Costs`.toUpperCase(),
    heading: `What Does Junk Removal Cost in ${city.name}, ${city.stateCode}?`,
    sub: 'Transparent, upfront pricing. No hidden fees. Prices vary based on volume and item type.',
    note: `All ${city.name} junk removal jobs start with 2 professionals. Get your exact ${city.name} quote in 60 seconds with no commitment required.`,
    tiers: [
      { label: 'Single Item',    price: '$99–$149',     detail: 'couch, mattress, appliance' },
      { label: '1/4 Truck',      price: '$149–$249',    detail: 'small cleanout'             },
      { label: '1/2 Truck',      price: '$249–$399',    detail: 'garage or room'             },
      { label: 'Full Truck',     price: '$399–$599+',   detail: 'estate or large cleanout'   },
    ],
  }),
}

export default function CityPricing({ categorySlug, city }) {
  const template = PRICING_DATA[categorySlug] || PRICING_DATA['delivery']
  const { eyebrow, heading, sub, note, tiers } = template(city)

  return (
    <section className="city-pricing">
      <div className="container">

        {/* Header */}
        <div className="section-header">
          <span className="eyebrow">{eyebrow}</span>
          <h2>{heading}</h2>
          <p className="section-sub">{sub}</p>
        </div>

        {/* 4 price cards */}
        <div className="price-grid">
          {tiers.map((tier, i) => (
            <div key={i} className="price-card">
              <span className="tier-label">{tier.label}</span>
              <span className="tier-price">{tier.price}</span>
              <span className="tier-detail">{tier.detail}</span>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="pricing-note">{note}</p>

        {/* CTA — plain text link matching screenshot */}
        <div className="pricing-cta">
          <Link href="/book" className="cta-link">Get Your Free Quote</Link>
        </div>

      </div>

      <style jsx>{`
        .city-pricing {
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
          line-height: 1.6;
          max-width: 480px;
          margin: 0 auto;
        }

        /* ── 4 price cards ── */
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
          color: #6b7280;
          font-size: 14px;
          line-height: 1.6;
          max-width: 560px;
          margin: 0 auto 20px;
        }

        /* ── CTA — plain underlined text link ── */
        .pricing-cta {
          display: flex;
          justify-content: center;
        }

        .cta-link {
          color: #ffc425;
          font-size: 15px;
          font-weight: 700;
          text-decoration: underline;
          text-underline-offset: 3px;
          transition: color 0.15s;
        }

        .cta-link:hover { color: #e6b020; }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .price-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 480px) {
          .price-grid { grid-template-columns: 1fr; }
          .city-pricing { padding: 56px 0; }
        }
      `}</style>
    </section>
  )
}