'use client'

// components/category/CategoryReadyCta.jsx
// Bottom CTA banner — replaces generic CtaBannerSection on category pages
// Heading + subtitle change per category, 2 buttons: white filled + outlined
// Matches all 3 screenshots exactly

import Link from 'next/link'

const CONTENT = {
  moving: {
    heading: 'Ready to Move?',
    sub: 'Join thousands who booked their move in under 60 seconds. Insured movers, transparent pricing, same-day availability.',
  },
  delivery: {
    heading: 'Ready to Book Delivery?',
    sub: 'Join thousands who booked their delivery in under 60 seconds. Insured teams, transparent pricing, same-day availability.',
  },
  'junk-removal': {
    heading: 'Ready for a Clean Space?',
    sub: 'Join thousands who booked junk removal in under 60 seconds. Insured haulers, transparent pricing, same-day availability.',
  },
}

export default function CategoryReadyCta({ categorySlug }) {
  const data = CONTENT[categorySlug] || CONTENT['delivery']

  return (
    <section className="ready-cta">
      <div className="cta-inner">
        <h2 className="cta-heading">{data.heading}</h2>
        <p className="cta-sub">{data.sub}</p>
        <div className="cta-btns">
          <Link href="/book" className="btn-white">Get Your Free Quote</Link>
          <Link href="/book" className="btn-outline">Book in 60 Seconds</Link>
        </div>
      </div>

      <style jsx>{`
        .ready-cta {
          background: linear-gradient(135deg, #1e2139 0%, #2a2f4a 50%, #1e2139 100%);
          padding: 88px 24px;
          position: relative;
          overflow: hidden;
        }

        /* Subtle gold ambient glows */
        .ready-cta::before {
          content: '';
          position: absolute;
          top: -60px; right: -60px;
          width: 360px; height: 360px;
          background: radial-gradient(circle, rgba(255 196 37 / 0.1) 0%, transparent 70%);
          pointer-events: none;
        }
        .ready-cta::after {
          content: '';
          position: absolute;
          bottom: -60px; left: -40px;
          width: 300px; height: 300px;
          background: radial-gradient(circle, rgba(255 196 37 / 0.07) 0%, transparent 70%);
          pointer-events: none;
        }

        .cta-inner {
          position: relative;
          z-index: 1;
          max-width: 600px;
          margin: 0 auto;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .cta-heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.75rem, 4vw, 2.75rem);
          font-weight: 800;
          color: #fff;
          margin: 0;
          letter-spacing: -0.02em;
          line-height: 1.15;
        }

        .cta-sub {
          color: rgba(255 255 255 / 0.6);
          font-size: 15.5px;
          line-height: 1.65;
          max-width: 440px;
          margin: 0;
        }

        /* Two buttons side by side */
        .cta-btns {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 8px;
        }

        /* White filled button */
        .btn-white {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #fff;
          color: #1e2139;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 800;
          padding: 15px 32px;
          border-radius: 999px;
          text-decoration: none;
          letter-spacing: 0.01em;
          transition: background 0.15s, transform 0.1s, box-shadow 0.15s;
        }

        .btn-white:hover {
          background: #f3f4f6;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0 0 0 / 0.15);
        }

        /* Outlined button */
        .btn-outline {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 700;
          padding: 15px 32px;
          border-radius: 999px;
          border: 2px solid rgba(255 255 255 / 0.4);
          text-decoration: none;
          letter-spacing: 0.01em;
          transition: border-color 0.15s, background 0.15s, transform 0.1s;
        }

        .btn-outline:hover {
          border-color: #ffc425;
          background: rgba(255 196 37 / 0.1);
          transform: translateY(-2px);
        }

        @media (max-width: 480px) {
          .cta-btns { flex-direction: column; width: 100%; }
          .btn-white, .btn-outline { width: 100%; }
          .ready-cta { padding: 64px 20px; }
        }
      `}</style>
    </section>
  )
}