'use client'

// components/home/CtaBannerSection.jsx
// Full-width gradient CTA banner — matches screenshot exactly
// Gradient bg, bold white heading, gray subtitle, white pill button

import Link from 'next/link'

export default function CtaBannerSection() {
  return (
    <section className="cta-banner">
      <div className="cta-inner">
        <h2 className="cta-heading">
          Moving, Delivery &amp; Junk Removal Near You
        </h2>
        <p className="cta-sub">
          Need movers fast? We deliver instant flat-rate pricing. Vetted,
          insured pros. No phone calls, no hidden fees. Book in 60 seconds.
        </p>
        <Link href="/book" className="cta-btn">
          See prices
        </Link>
      </div>

      <style jsx>{`
        .cta-banner {
          background: linear-gradient(135deg, #1e2139 0%, #2a2f4a 40%, #1e2139 100%);
          padding: 88px 24px;
          position: relative;
          overflow: hidden;
        }

        /* Subtle gold glow top-right */
        .cta-banner::before {
          content: '';
          position: absolute;
          top: -80px;
          right: -80px;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(255 196 37 / 0.12) 0%, transparent 70%);
          pointer-events: none;
        }

        /* Subtle gold glow bottom-left */
        .cta-banner::after {
          content: '';
          position: absolute;
          bottom: -80px;
          left: -60px;
          width: 360px;
          height: 360px;
          background: radial-gradient(circle, rgba(255 196 37 / 0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        .cta-inner {
          position: relative;
          z-index: 1;
          max-width: 700px;
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
          color: #ffffff;
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin: 0;
        }

        .cta-sub {
          color: rgba(255 255 255 / 0.6);
          font-size: 15.5px;
          line-height: 1.65;
          max-width: 460px;
          margin: 0;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #ffc425;
          color: #1e2139;
          font-family: 'DM Sans', sans-serif;
          font-size: 16px;
          font-weight: 800;
          padding: 16px 48px;
          border-radius: 999px;
          text-decoration: none;
          letter-spacing: 0.01em;
          margin-top: 8px;
          transition: background 0.15s, transform 0.1s, box-shadow 0.15s;
        }

        .cta-btn:hover {
          background: #e6b020;
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(255 196 37 / 0.4);
        }

        @media (max-width: 640px) {
          .cta-banner { padding: 64px 20px; }
          .cta-heading { font-size: 1.75rem; }
          .cta-btn { padding: 14px 36px; font-size: 15px; }
        }
      `}</style>
    </section>
  )
}