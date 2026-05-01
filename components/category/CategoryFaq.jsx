'use client'

// components/category/CategoryFaq.jsx
// "Common Questions" accordion — questions differ per category
// Same card-based accordion style as home FaqSection

import { useState } from 'react'

const FAQS = {
  moving: [
    { q: 'How much do movers cost?', a: 'Our moves start at $499 for studios, $749 for 1–2 bedrooms, and $999+ for larger homes. All prices are flat-rate and locked in before the job starts. No hourly surprises.' },
    { q: 'How do I book movers?', a: 'Enter your pickup and drop-off locations on our site, choose your date and time, and get an instant flat-rate quote. Confirm and pay online — the whole process takes under 60 seconds.' },
    { q: 'Are the movers insured and background-checked?', a: 'Yes. Every mover on our platform is fully insured, background-checked, and reviewed by real customers before being listed. Your belongings are protected on every job.' },
    { q: 'Can I book same-day moving services?', a: 'Yes. Same-day moving is available in most major cities. Book online and we will match you with an available team — often within a few hours.' },
    { q: 'Which cities do you serve?', a: 'We serve 1,000+ cities across the US including Los Angeles, Chicago, Dallas, Houston, Phoenix, New York, Philadelphia, San Antonio, and many more.' },
    { q: 'What types of moves do you handle?', a: 'We handle studio apartments, 1–4+ bedroom homes, office moves, long-distance moves, and labor-only jobs. All with vetted movers and flat-rate pricing.' },
    { q: 'Do movers offer packing services?', a: 'Yes. Many of our movers offer full packing and unpacking services. Select the packing add-on during booking and we will bring all the materials.' },
    { q: 'What if I need to cancel or reschedule my move?', a: 'You can cancel or reschedule up to 24 hours before your move at no charge. Cancellations within 24 hours may be subject to a fee. Contact our support team and we will take care of you.' },
  ],
  delivery: [
    { q: 'How much does delivery cost?', a: 'Single-item deliveries start at $99–$149. Multi-item jobs range from $149–$249, and large pickups from $249–$399. All prices are flat-rate and shown upfront before you confirm.' },
    { q: 'How do I book a delivery?', a: 'Enter your pickup and drop-off locations, describe what needs to be delivered, and get an instant flat-rate price. Book in under 60 seconds — no phone calls needed.' },
    { q: 'Are the delivery teams insured?', a: 'Yes. Every delivery professional on our platform is fully insured, background-checked, and rated by real customers. Your items are protected from pickup to drop-off.' },
    { q: 'Can I book same-day delivery?', a: 'Yes. Same-day delivery is available in most major cities. Book online and we will match you with an available driver — often within hours.' },
    { q: 'What items can you deliver?', a: 'We deliver furniture, appliances, mattresses, TVs, exercise equipment, marketplace purchases, store pickups, and most other large items. If it fits in a truck, we can deliver it.' },
    { q: 'Do you pick up from stores?', a: 'Yes. We pick up from IKEA, Home Depot, Costco, Wayfair, Facebook Marketplace, Craigslist, and any other store or seller. Just give us the address and we handle the rest.' },
    { q: 'Do you offer white-glove or assembly service?', a: 'Yes. Our white-glove service includes careful wrapping, carrying, placement, and light assembly. Select it during booking for an upgraded experience.' },
    { q: 'What if I need to cancel or reschedule?', a: 'You can cancel or reschedule up to 24 hours before your delivery at no charge. Contact our support team and we will sort it out quickly.' },
  ],
  'junk-removal': [
    { q: 'How much does junk removal cost?', a: 'Single-item removal starts at $99–$149. A quarter truck load is $149–$249, half truck $249–$399, and a full truck $399–$599+. All prices are flat-rate with no hidden dump fees.' },
    { q: 'How do I book junk removal?', a: 'Tell us what needs to go and where you are located. Get an instant flat-rate quote and book online in under 60 seconds. No phone calls, no back-and-forth.' },
    { q: 'Are the junk removal teams insured?', a: 'Yes. Every hauler on our platform is fully insured, background-checked, and reviewed by real customers. Every job is covered by our protection policy.' },
    { q: 'Can I book same-day junk removal?', a: 'Yes. Same-day junk removal is available in most major cities. Book online and a team will arrive — often within hours of booking.' },
    { q: 'What items do you take away?', a: 'We remove furniture, appliances, mattresses, electronics, construction debris, yard waste, and general clutter. We handle single items all the way up to full estate cleanouts.' },
    { q: 'Do you recycle or donate items?', a: 'Yes. We donate reusable items to local charities and recycle whatever we can to keep items out of landfills. Responsible disposal is part of every job.' },
    { q: 'What items do you NOT take?', a: 'We do not take hazardous materials including paint, chemicals, asbestos, propane tanks, or medical waste. Contact us if you are unsure about a specific item.' },
    { q: 'What if I need to cancel or reschedule?', a: 'You can cancel or reschedule up to 24 hours before your appointment at no charge. Cancellations within 24 hours may incur a fee. Reach out to our support team.' },
  ],
}

export default function CategoryFaq({ categorySlug }) {
  const [openIndex, setOpenIndex] = useState(null)
  const faqs = FAQS[categorySlug] || FAQS['delivery']

  return (
    <section className="cat-faq">
      <div className="container">

        {/* Header */}
        <div className="faq-header">
          <span className="eyebrow">FAQ</span>
          <h2>Common Questions</h2>
          <p className="faq-sub">Everything you need to know about booking with us.</p>
        </div>

        {/* Accordion cards */}
        <div className="faq-list">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div key={i} className={`faq-card ${isOpen ? 'open' : ''}`}>
                <button
                  className="faq-trigger"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question">{faq.q}</span>
                  <span className="faq-icon" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                </button>
                <div
                  className="faq-answer"
                  style={{ maxHeight: isOpen ? '400px' : '0' }}
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
        .cat-faq {
          padding: 80px 0;
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
        }

        /* ── List ── */
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
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

        /* ── Trigger ── */
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

        .faq-icon {
          font-size: 20px;
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
          padding-top: 16px;
          margin: 0;
          font-size: 14.5px;
          color: #6b7280;
          line-height: 1.75;
          border-top: 1px solid #f3f4f6;
        }

        @media (max-width: 640px) {
          .faq-trigger { padding: 16px 18px; }
          .faq-answer p { padding: 14px 18px 18px; }
        }
      `}</style>
    </section>
  )
}