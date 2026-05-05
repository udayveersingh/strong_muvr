'use client'

// components/city/CityWhyUs.jsx
// Same 3x2 grid as CategoryWhyUs but city name injected throughout
// "Why Los Angeles Residents Choose Us"

const CONTENT = {
  moving: (city) => ({
    heading: `Why ${city.name} Residents Choose Us`,
    sub: `Trusted by thousands of ${city.name} residents for fast, affordable, and reliable moving services.`,
    cards: [
      {
        icon: '🛡️',
        title: 'Insured and Background-Checked',
        desc: `Every ${city.name} mover on our platform is fully insured and background-checked for your peace of mind.`,
      },
      {
        icon: '⚡',
        title: 'Same-Day Availability',
        desc: `Need to move today? We connect you with available ${city.name} movers for same-day and next-day moves.`,
      },
      {
        icon: '💰',
        title: 'Transparent Pricing',
        desc: `Get your moving price upfront before you book. No hidden fees, no surprises. Just honest rates for ${city.name} moves.`,
      },
      {
        icon: '📱',
        title: 'Real-Time Tracking',
        desc: `Track your ${city.name} movers in real time from pickup to delivery. Always know exactly where your belongings are.`,
      },
      {
        icon: '⭐',
        title: '4.9-Star Rated',
        desc: `Our ${city.name} movers maintain a 4.9-star average rating across thousands of completed moves.`,
      },
      {
        icon: '⏱️',
        title: '60-Second Booking',
        desc: `Book ${city.name} movers in under a minute. No phone calls, no waiting on hold. Instant confirmation.`,
      },
    ],
  }),
  delivery: (city) => ({
    heading: `Why ${city.name} Residents Choose Us`,
    sub: `Trusted by thousands of ${city.name} residents for fast, careful, and reliable delivery services.`,
    cards: [
      {
        icon: '🛡️',
        title: 'Insured and Background-Checked',
        desc: `Every ${city.name} delivery team on our platform is fully insured and background-checked for your peace of mind.`,
      },
      {
        icon: '⚡',
        title: 'Same-Day Availability',
        desc: `Need it delivered today? We connect you with available ${city.name} delivery teams for same-day and next-day service.`,
      },
      {
        icon: '💰',
        title: 'Transparent Pricing',
        desc: `Get your delivery price upfront before you book. No hidden fees, no surprises. Just honest rates for ${city.name} deliveries.`,
      },
      {
        icon: '📱',
        title: 'Real-Time Tracking',
        desc: `Track your ${city.name} delivery in real time from pickup to drop-off. Always know exactly where your items are.`,
      },
      {
        icon: '⭐',
        title: '4.9-Star Rated',
        desc: `Our ${city.name} delivery teams maintain a 4.9-star average rating across thousands of completed deliveries.`,
      },
      {
        icon: '⏱️',
        title: '60-Second Booking',
        desc: `Book ${city.name} delivery in under a minute. No phone calls, no waiting on hold. Instant confirmation.`,
      },
    ],
  }),
  'junk-removal': (city) => ({
    heading: `Why ${city.name} Residents Choose Us`,
    sub: `Trusted by thousands of ${city.name} residents for fast, careful, and responsible junk removal.`,
    cards: [
      {
        icon: '🛡️',
        title: 'Insured and Background-Checked',
        desc: `Every ${city.name} hauler on our platform is fully insured and background-checked for your peace of mind.`,
      },
      {
        icon: '⚡',
        title: 'Same-Day Availability',
        desc: `Need it gone today? We connect you with available ${city.name} haulers for same-day and next-day pickups.`,
      },
      {
        icon: '💰',
        title: 'Transparent Pricing',
        desc: `Get your junk removal price upfront before you book. No hidden dump fees, no surprises. Just honest rates for ${city.name}.`,
      },
      {
        icon: '♻️',
        title: 'Responsible Disposal',
        desc: `We donate, recycle, and dispose responsibly in ${city.name}. We keep reusable items out of landfills whenever possible.`,
      },
      {
        icon: '⭐',
        title: '4.9-Star Rated',
        desc: `Our ${city.name} haulers maintain a 4.9-star average rating across thousands of completed jobs.`,
      },
      {
        icon: '⏱️',
        title: '60-Second Booking',
        desc: `Book ${city.name} junk removal in under a minute. No phone calls, no waiting on hold. Instant confirmation.`,
      },
    ],
  }),
}

export default function CityWhyUs({ categorySlug, city }) {
  const template = CONTENT[categorySlug] || CONTENT['delivery']
  const { heading, sub, cards } = template(city)

  return (
    <section className="city-why">
      <div className="container">

        {/* Header */}
        <div className="section-header">
          <span className="eyebrow">Why Us</span>
          <h2>{heading}</h2>
          <p className="section-sub">{sub}</p>
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
        .city-why {
          padding: 80px 0;
          background: #fff;
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

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

        /* 3×2 grid */
        .cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

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
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
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

        @media (max-width: 900px) {
          .cards-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 560px) {
          .cards-grid { grid-template-columns: 1fr; }
          .city-why { padding: 56px 0; }
        }
      `}</style>
    </section>
  )
}