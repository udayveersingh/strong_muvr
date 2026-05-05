'use client'

// components/city/CityFaq.jsx
// City-specific FAQ — heading and every question includes city name
// 13 questions for moving, 10 for delivery/junk-removal

import { useState } from 'react'

const FAQ_TEMPLATES = {
  moving: (city) => [
    { q: `How much do movers cost in ${city.name}?`, a: `${city.name} moving costs start at $499 for studios, $749 for 1–2 bedrooms, and $999+ for larger homes. All prices are flat-rate and locked in before the job starts — no hourly surprises.` },
    { q: `How do I book movers in ${city.name}?`, a: `Enter your pickup and drop-off locations, choose your date and time, and get an instant flat-rate quote. Confirm online in under 60 seconds — no phone calls needed.` },
    { q: `Are movers in ${city.name} insured?`, a: `Yes. Every ${city.name} mover on our platform is fully insured, background-checked, and reviewed by real customers. Your belongings are protected on every job.` },
    { q: `Can I book same-day movers in ${city.name}?`, a: `Yes. Same-day moving is available in ${city.name}. Book online and we will match you with an available ${city.name} team — often within a few hours.` },
    { q: `What types of moves do you handle in ${city.name}?`, a: `We handle studio apartments, 1–4+ bedroom homes, office moves, long-distance moves, and labor-only jobs in ${city.name}. All with vetted movers and flat-rate pricing.` },
    { q: `Do ${city.name} movers provide packing services?`, a: `Yes. Many of our ${city.name} movers offer full packing and unpacking services. Select the packing add-on during booking and they will bring all the materials.` },
    { q: `What if I need to cancel or reschedule my ${city.name} move?`, a: `You can cancel or reschedule up to 24 hours before your move at no charge. Cancellations within 24 hours may be subject to a fee. Contact our support team and we will help.` },
    { q: `How far in advance should I book movers in ${city.name}?`, a: `For weekend moves in ${city.name}, we recommend booking 3–7 days in advance. For weekday moves, same-day or next-day availability is often available.` },
    { q: `Do movers in ${city.name} handle stairs and elevators?`, a: `Yes. Our ${city.name} movers are experienced with stairs, elevators, narrow hallways, and tight spaces. Let us know about access details when booking.` },
    { q: `How long does a typical move take in ${city.name}?`, a: `Studio moves in ${city.name} typically take 2–3 hours. 1–2 bedroom moves take 3–5 hours, and larger homes take 5–8+ hours depending on distance and complexity.` },
    { q: `Do I need to tip movers in ${city.name}?`, a: `Tipping is not required but always appreciated. Most customers tip $20–$50 per mover for a job well done. You can add a tip through the app after your move.` },
    { q: `What areas near ${city.name} do you serve?`, a: `In addition to ${city.name}, we serve surrounding cities and neighborhoods throughout ${city.state}. Enter your address at booking to confirm availability in your area.` },
    { q: `Do you serve all neighborhoods in ${city.name}?`, a: `Yes. We serve all neighborhoods and zip codes throughout ${city.name}, ${city.stateCode}. Enter your exact address when booking to get your flat-rate quote.` },
  ],
  delivery: (city) => [
    { q: `How much does delivery cost in ${city.name}?`, a: `${city.name} delivery starts at $99–$149 for single items, $149–$249 for multi-item jobs, and $249–$399 for large pickups. All prices are flat-rate and shown upfront.` },
    { q: `How do I book delivery in ${city.name}?`, a: `Enter your pickup and drop-off locations, describe what needs to be delivered, and get an instant flat-rate price. Book in under 60 seconds — no phone calls needed.` },
    { q: `Are delivery teams in ${city.name} insured?`, a: `Yes. Every ${city.name} delivery team on our platform is fully insured and background-checked. Your items are protected from pickup to drop-off.` },
    { q: `Can I book same-day delivery in ${city.name}?`, a: `Yes. Same-day delivery is available in ${city.name}. Book online and we will match you with an available ${city.name} driver — often within hours.` },
    { q: `What items can you deliver in ${city.name}?`, a: `We deliver furniture, appliances, mattresses, TVs, exercise equipment, marketplace purchases, and most large items throughout ${city.name}. If it fits in a truck, we can deliver it.` },
    { q: `Do you pick up from stores in ${city.name}?`, a: `Yes. We pick up from IKEA, Home Depot, Costco, Wayfair, Facebook Marketplace, and any store or seller in ${city.name}. Just provide the address and we handle the rest.` },
    { q: `Do you offer white-glove delivery in ${city.name}?`, a: `Yes. Our white-glove service in ${city.name} includes careful wrapping, carrying, placement, and light assembly. Select it during booking for an upgraded experience.` },
    { q: `What areas near ${city.name} do you serve?`, a: `In addition to ${city.name}, we serve surrounding cities throughout ${city.state}. Enter your address at booking to confirm delivery availability in your area.` },
    { q: `How far in advance should I book delivery in ${city.name}?`, a: `For scheduled deliveries in ${city.name}, booking 1–3 days ahead is ideal. Same-day slots are often available for urgent deliveries.` },
    { q: `What if I need to cancel or reschedule my ${city.name} delivery?`, a: `You can cancel or reschedule up to 24 hours before your delivery at no charge. Contact our support team and we will help you reschedule quickly.` },
  ],
  'junk-removal': (city) => [
    { q: `How much does junk removal cost in ${city.name}?`, a: `${city.name} junk removal starts at $99–$149 for single items, $149–$249 for a quarter truck, $249–$399 for a half truck, and $399–$599+ for a full truck. All prices are flat-rate with no hidden dump fees.` },
    { q: `How do I book junk removal in ${city.name}?`, a: `Tell us what needs to go and your ${city.name} address, choose your pickup date, and get an instant flat-rate quote. Book in under 60 seconds online.` },
    { q: `Are junk removal teams in ${city.name} insured?`, a: `Yes. Every ${city.name} hauler on our platform is fully insured and background-checked. Every job is covered by our protection policy.` },
    { q: `Can I book same-day junk removal in ${city.name}?`, a: `Yes. Same-day junk removal is available in ${city.name}. Book online and a team will often arrive within hours of booking.` },
    { q: `What items do you remove in ${city.name}?`, a: `We remove furniture, appliances, mattresses, electronics, construction debris, yard waste, and general clutter throughout ${city.name}. We handle single items up to full estate cleanouts.` },
    { q: `Do you recycle or donate items in ${city.name}?`, a: `Yes. We donate reusable items to local ${city.name} charities and recycle whatever we can. Responsible disposal is part of every job.` },
    { q: `What items do you NOT take in ${city.name}?`, a: `We do not take hazardous materials including paint, chemicals, asbestos, or propane tanks anywhere in ${city.name}. Contact us if you are unsure about a specific item.` },
    { q: `What areas near ${city.name} do you serve?`, a: `In addition to ${city.name}, we serve surrounding cities and neighborhoods throughout ${city.state}. Enter your address at booking to confirm availability.` },
    { q: `Do you serve all neighborhoods in ${city.name}?`, a: `Yes. We serve all neighborhoods and zip codes throughout ${city.name}, ${city.stateCode}. Enter your exact address when booking to get your flat-rate quote.` },
    { q: `What if I need to cancel or reschedule my ${city.name} junk removal?`, a: `You can cancel or reschedule up to 24 hours before your appointment at no charge. Contact our support team and we will sort it out quickly.` },
  ],
}

const HEADING = {
  moving:         (city) => `${city.name} Moving: Common Questions`,
  delivery:       (city) => `${city.name} Delivery: Common Questions`,
  'junk-removal': (city) => `${city.name} Junk Removal: Common Questions`,
}

const SUB = {
  moving:         (city) => `Everything you need to know about booking movers in ${city.name}.`,
  delivery:       (city) => `Everything you need to know about booking delivery in ${city.name}.`,
  'junk-removal': (city) => `Everything you need to know about booking junk removal in ${city.name}.`,
}

export default function CityFaq({ categorySlug, city }) {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs    = (FAQ_TEMPLATES[categorySlug] || FAQ_TEMPLATES['delivery'])(city)
  const heading = (HEADING[categorySlug] || HEADING['delivery'])(city)
  const sub     = (SUB[categorySlug]     || SUB['delivery'])(city)

  return (
    <section className="city-faq">
      <div className="container">

        {/* Header */}
        <div className="faq-header">
          <span className="eyebrow">FAQ</span>
          <h2>{heading}</h2>
          <p className="faq-sub">{sub}</p>
        </div>

        {/* Accordion */}
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
        .city-faq {
          padding: 80px 0;
          background: #f4f5f9;
        }

        .container {
          max-width: 840px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Header */
        .faq-header {
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
          font-size: clamp(1.5rem, 3vw, 2.2rem);
          font-weight: 800;
          color: #1e2139;
          margin-bottom: 10px;
          letter-spacing: -0.02em;
          line-height: 1.2;
        }

        .faq-sub {
          color: #9ca3af;
          font-size: 15px;
        }

        /* Accordion */
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

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

        .faq-trigger {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 18px 24px;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
        }

        .faq-question {
          font-family: 'DM Sans', sans-serif;
          font-size: 14.5px;
          font-weight: 700;
          color: #1e2139;
          line-height: 1.4;
          flex: 1;
        }

        .faq-icon {
          font-size: 20px;
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

        .faq-answer {
          overflow: hidden;
          transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .faq-answer p {
          padding: 0 24px 20px;
          padding-top: 14px;
          margin: 0;
          font-size: 14px;
          color: #6b7280;
          line-height: 1.75;
          border-top: 1px solid #f3f4f6;
        }

        @media (max-width: 640px) {
          .faq-trigger { padding: 16px 18px; }
          .faq-answer p { padding: 12px 18px 18px; }
        }
      `}</style>
    </section>
  )
}