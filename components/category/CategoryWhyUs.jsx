'use client'

// components/category/CategoryWhyUs.jsx
// "Why Thousands Choose Us" section — 3x2 grid of feature cards
// Heading, subtitle, and bottom-left card change per category
// Matches all 3 screenshots exactly

const CONTENT = {
  moving: {
    heading: 'Why Thousands Choose Us for Moving',
    sub: 'Trusted by customers across the country for fast, affordable, and reliable moving services.',
    uniqueCard: {
      icon: '📱',
      title: 'Real-Time Tracking',
      desc: 'Track your movers in real time from pickup to delivery. Always know exactly where your belongings are.',
    },
  },
  delivery: {
    heading: 'Why Thousands Choose Us for Delivery',
    sub: 'Trusted by customers across the country for fast, careful, and reliable delivery.',
    uniqueCard: {
      icon: '📱',
      title: 'Real-Time Tracking',
      desc: 'Track your delivery in real time from pickup to drop-off. Always know exactly where your items are.',
    },
  },
  'junk-removal': {
    heading: 'Why Thousands Choose Us for Junk Removal',
    sub: 'Trusted by customers across the country for fast, careful, and responsible junk removal.',
    uniqueCard: {
      icon: '♻️',
      title: 'Responsible Disposal',
      desc: 'We donate, recycle, and dispose responsibly. We keep reusable items out of landfills whenever possible.',
    },
  },
}

// Shared cards — same across all 3 categories (slots 1,2,3,5,6)
const SHARED_CARDS = {
  insured: (cat) => ({
    icon: '🛡️',
    title: 'Insured and Background-Checked',
    desc: `Every ${cat === 'junk-removal' ? 'hauler' : cat === 'delivery' ? 'delivery team' : 'mover'} on our platform is fully insured and background-checked for your peace of mind.`,
  }),
  sameDay: (cat) => ({
    icon: '⚡',
    title: 'Same-Day Availability',
    desc: cat === 'moving'
      ? 'Need to move today? We connect you with available movers for same-day and next-day service.'
      : cat === 'delivery'
      ? 'Need it delivered today? We connect you with available teams for same-day and next-day delivery.'
      : 'Need it gone today? We connect you with available haulers for same-day and next-day pickups.',
  }),
  pricing: (cat) => ({
    icon: '💰',
    title: 'Transparent Pricing',
    desc: `Get your ${cat === 'junk-removal' ? 'junk removal' : cat} price upfront before you book. No hidden fees, no surprises.`,
  }),
  rating: (cat) => ({
    icon: '⭐',
    title: '4.9-Star Rated',
    desc: `Our ${cat === 'junk-removal' ? 'haulers' : cat === 'delivery' ? 'delivery teams' : 'movers'} maintain a 4.9-star average rating across thousands of completed jobs nationwide.`,
  }),
  booking: (cat) => ({
    icon: '⏱️',
    title: '60-Second Booking',
    desc: `Book ${cat === 'junk-removal' ? 'junk removal' : cat === 'delivery' ? 'delivery' : 'movers'} in under a minute. No phone calls, no waiting on hold. Instant confirmation.`,
  }),
}

export default function CategoryWhyUs({ categorySlug }) {
  const data = CONTENT[categorySlug] || CONTENT['delivery']

  // Build the 6 cards — row 1: insured, sameDay, pricing | row 2: uniqueCard, rating, booking
  const cards = [
    SHARED_CARDS.insured(categorySlug),
    SHARED_CARDS.sameDay(categorySlug),
    SHARED_CARDS.pricing(categorySlug),
    data.uniqueCard,
    SHARED_CARDS.rating(categorySlug),
    SHARED_CARDS.booking(categorySlug),
  ]

  return (
    <section className="why-us">
      <div className="container">

        {/* Header */}
        <div className="section-header">
          <span className="eyebrow">Why Us</span>
          <h2>{data.heading}</h2>
          <p className="section-sub">{data.sub}</p>
        </div>

        {/* 3×2 grid */}
        <div className="cards-grid">
          {cards.map((card, i) => (
            <div key={i} className="why-card">
              <span className="card-icon" aria-hidden="true">{card.icon}</span>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-desc">{card.desc}</p>
            </div>
          ))}
        </div>

      </div>

      <style jsx>{`
        .why-us {
          padding: 80px 0;
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
          margin-bottom: 52px;
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
          margin-bottom: 12px;
          letter-spacing: -0.02em;
        }

        .section-sub {
          color: #6b7280;
          font-size: 15.5px;
          line-height: 1.65;
          max-width: 540px;
          margin: 0 auto;
        }

        /* ── Grid ── */
        .cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        /* ── Card ── */
        .why-card {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 14px;
          padding: 36px 28px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          transition: box-shadow 0.2s, transform 0.2s, border-color 0.2s;
        }

        .why-card:hover {
          box-shadow: 0 6px 24px rgba(255 196 37 / 0.1);
          transform: translateY(-3px);
          border-color: #ffd666;
        }

        .card-icon {
          font-size: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 64px;
          height: 64px;
          background: #fffbec;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .card-title {
          font-family: 'Syne', sans-serif;
          font-size: 1rem;
          font-weight: 800;
          color: #1e2139;
          margin: 0;
        }

        .card-desc {
          color: #6b7280;
          font-size: 13.5px;
          line-height: 1.7;
          margin: 0;
          max-width: 300px;
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .cards-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 560px) {
          .cards-grid { grid-template-columns: 1fr; }
          .why-us { padding: 56px 0; }
        }
      `}</style>
    </section>
  )
}