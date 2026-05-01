'use client'

// components/category/CategoryHowItWorks.jsx
// "Book in 3 Steps" section — same layout for all categories
// Only the CTA button label changes per category

import Link from 'next/link'

const STEPS = [
  {
    number: 1,
    title: 'Get Your Quote',
    desc: 'Tell us your pickup and drop-off locations, choose your date, and get an instant transparent quote.',
  },
  {
    number: 2,
    title: 'We Match You',
    desc: 'We pair you with insured, background-checked professionals who specialize in your job type.',
  },
  {
    number: 3,
    title: 'Sit Back and Relax',
    desc: 'Your team arrives on time, handles everything with care, and keeps you updated every step of the way.',
  },
]

// CTA button label per category
const CTA_LABELS = {
  moving:        'Book Your Move Now',
  delivery:      'Book Your Delivery Now',
  'junk-removal':'Book Junk Removal Now',
}

export default function CategoryHowItWorks({ categorySlug }) {
  const ctaLabel = CTA_LABELS[categorySlug] || 'Book Now'

  return (
    <section className="cat-hiw">
      <div className="container">

        {/* Header */}
        <div className="hiw-header">
          <span className="eyebrow">Simple Process</span>
          <h2>Book in 3 Steps</h2>
          <p className="hiw-sub">No phone calls, no waiting. Book and manage everything online.</p>
        </div>

        {/* Steps */}
        <div className="steps-row">
          {STEPS.map((step, i) => (
            <div key={i} className="step-item">
              {/* Circle number */}
              <div className="step-circle" aria-hidden="true">
                {step.number}
              </div>

              {/* Connector line between circles */}
              {i < STEPS.length - 1 && (
                <div className="step-line" aria-hidden="true" />
              )}

              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA button — label changes per category */}
        <div className="hiw-cta">
          <Link href="/book" className="btn-cta">
            {ctaLabel}
          </Link>
        </div>

      </div>

      <style jsx>{`
        .cat-hiw {
          padding: 80px 0;
          background: #f4f5f9;
        }

        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* ── Header ── */
        .hiw-header {
          text-align: center;
          margin-bottom: 56px;
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

        .hiw-header h2 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.75rem, 3.5vw, 2.5rem);
          font-weight: 800;
          color: #1e2139;
          margin-bottom: 10px;
          letter-spacing: -0.02em;
        }

        .hiw-sub {
          color: #9ca3af;
          font-size: 15px;
        }

        /* ── Steps row ── */
        .steps-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0 40px;
          margin-bottom: 52px;
          align-items: start;
        }

        .step-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
        }

        /* Number circle */
        .step-circle {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: #1e2139;
          color: #ffc425;
          font-family: 'Syne', sans-serif;
          font-size: 1.6rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          position: relative;
          z-index: 1;
          box-shadow: 0 4px 16px rgba(30 33 57 / 0.2);
          flex-shrink: 0;
        }

        /* Connector line between circles */
        .step-line {
          position: absolute;
          top: 32px;
          left: calc(50% + 36px);
          width: calc(100% + 40px - 72px);
          height: 2px;
          background: linear-gradient(90deg, #ffc425, rgba(255 196 37 / 0.15));
          z-index: 0;
        }

        .step-title {
          font-family: 'Syne', sans-serif;
          font-size: 1rem;
          font-weight: 800;
          color: #1e2139;
          margin-bottom: 10px;
        }

        .step-desc {
          color: #6b7280;
          font-size: 14px;
          line-height: 1.7;
          max-width: 280px;
          margin: 0 auto;
        }

        /* ── CTA ── */
        .hiw-cta {
          display: flex;
          justify-content: center;
        }

        .btn-cta {
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

        .btn-cta:hover {
          background: #2a2f4a;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(30 33 57 / 0.25);
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .steps-row {
            grid-template-columns: 1fr;
            gap: 40px 0;
          }
          .step-line {
            left: 50%;
            top: 64px;
            width: 2px;
            height: calc(100% + 40px - 64px);
            background: linear-gradient(180deg, #ffc425, rgba(255 196 37 / 0.15));
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  )
}