'use client'

// components/home/FaqSection.jsx
// Matches screenshot: centered heading, each FAQ is its own rounded card
// + / - toggle on right, no left sidebar

import { useState } from 'react'

const FAQS = [
  {
    q: 'How much does it cost to hire movers?',
    a: 'We use flat-rate pricing locked in before the job starts. Studio moves typically start at $499, 1–2 bedroom moves from $749, and larger homes from $999+. You see your exact price at booking — no hourly surprises, no hidden fees.',
  },
  {
    q: 'Can I book same-day movers?',
    a: 'Yes. We offer same-day moving, delivery, and junk removal in most cities. Book online, enter your address, and we will match you with available pros often within hours.',
  },
  {
    q: 'Are the movers insured?',
    a: 'All professionals on our platform are background-checked, fully insured, and rated by real customers before being listed. Every job is covered by our protection policy.',
  },
  {
    q: 'What is the difference between moving and delivery?',
    a: 'Moving is for relocating your household or office — we bring the truck, pack, load, transport, and unload. Delivery is for transporting specific large items like furniture or appliances from one location to another. Both use flat-rate pricing.',
  },
  {
    q: 'How does junk removal work?',
    a: 'Book online, tell us what needs to go, and a vetted team shows up at your chosen time. They haul everything away, recycle what they can, and you pay the flat rate quoted upfront. No hidden dump fees.',
  },
  {
    q: 'What cities do we serve?',
    a: 'We currently serve 1,000+ cities across the US including Los Angeles, Chicago, Dallas, Houston, Phoenix, Philadelphia, San Antonio, San Diego, New York, and many more. Enter your address when booking to confirm availability.',
  },
  {
    q: 'How do I find the best movers in my area?',
    a: 'Simply enter your pickup and dropoff locations on our site. We instantly match you with vetted, insured movers near you — no phone calls, no haggling, just a flat-rate price and a confirmed booking.',
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null)

  function toggle(i) {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section className="faq">
      <div className="container">

        {/* Header */}
        <div className="faq-header">
          <h2>Frequently Asked Questions</h2>
          <p className="faq-sub">
            Everything you need to know about booking movers, delivery, and junk removal.
          </p>
        </div>

        {/* FAQ cards */}
        <div className="faq-list">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div key={i} className={`faq-card ${isOpen ? 'open' : ''}`}>
                <button
                  className="faq-trigger"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question">{faq.q}</span>
                  <span className="faq-icon" aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                <div
                  className="faq-answer"
                  style={{ maxHeight: isOpen ? '500px' : '0' }}
                  aria-hidden={!isOpen}
                >
                  <p>{faq.a}</p>
                </div>
              </div>
            )
          })}
        </div>

      </div>

      <style jsx>{`
        .faq {
          padding: 88px 0;
          background: #f4f5f9;
        }

        .container {
          max-width: 780px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* ── Header ── */
        .faq-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .faq-header h2 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.75rem, 3.5vw, 2.4rem);
          font-weight: 800;
          color: #1e2139;
          margin-bottom: 10px;
          letter-spacing: -0.01em;
        }

        .faq-sub {
          color: #9ca3af;
          font-size: 15px;
          line-height: 1.6;
          max-width: 500px;
          margin: 0 auto;
        }

        /* ── List ── */
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        /* ── Card ── */
        .faq-card {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          overflow: hidden;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .faq-card.open {
          border-color: #ffc425;
          box-shadow: 0 2px 16px rgba(255 196 37 / 0.1);
        }

        /* ── Trigger button ── */
        .faq-trigger {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 20px 24px;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
        }

        .faq-question {
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: #1e2139;
          line-height: 1.4;
          flex: 1;
        }

        .faq-card.open .faq-question {
          color: #1e2139;
        }

        .faq-icon {
          font-size: 22px;
          font-weight: 300;
          color: #ffc425;
          flex-shrink: 0;
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          border: 1.5px solid #ffc425;
          line-height: 1;
          transition: background 0.15s, color 0.15s;
        }

        .faq-card.open .faq-icon {
          background: #ffc425;
          color: #1e2139;
        }

        /* ── Answer ── */
        .faq-answer {
          overflow: hidden;
          transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .faq-answer p {
          padding: 0 24px 22px;
          margin: 0;
          font-size: 14.5px;
          color: #6b7280;
          line-height: 1.75;
          border-top: 1px solid #f3f4f6;
          padding-top: 16px;
        }

        /* ── Responsive ── */
        @media (max-width: 640px) {
          .faq-trigger { padding: 16px 18px; }
          .faq-answer p { padding: 0 18px 18px; padding-top: 14px; }
          .faq-question { font-size: 14px; }
        }
      `}</style>
    </section>
  )
}