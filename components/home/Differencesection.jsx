'use client'

// components/home/DifferenceSection.jsx
// "The Muvr difference." section — dark bg, 2x3 grid of feature cards
// Matches screenshot exactly: near-black bg, dark cards, white titles, gray desc

export default function DifferenceSection() {
  const features = [
    {
      title: 'Book in 60 Seconds',
      desc: 'Get a flat-rate price instantly. No quotes, no waiting, no back-and-forth. Book online or in the app in under a minute.',
    },
    {
      title: 'Flat-Rate Pricing. No Surprises.',
      desc: 'What you see is what you pay. No hourly rate creep, no fuel surcharges, no hidden fees. Ever.',
    },
    {
      title: 'Insured & Background-Checked Movers',
      desc: 'Every pro is background-checked, insured, and rated by real customers. Your belongings are protected on every job.',
    },
    {
      title: 'Real-Time GPS Tracking',
      desc: 'Track your mover from dispatch to arrival, live on the map. No more guessing when they will show up.',
    },
    {
      title: 'All Three Services. One App.',
      desc: 'Moving, furniture delivery, junk removal. One account, one payment method, one place to manage all your jobs.',
    },
    {
      title: 'No Job Too Small',
      desc: 'Moving one couch or an entire house? Junk removal for a single appliance or a full cleanout? Any size, same great service.',
    },
  ]

  return (
    <section className="diff-section">
      <div className="container">

        {/* Header */}
        <div className="diff-header">
          <h2 className="diff-heading">The difference.</h2>
          <p className="diff-sub">Why Choose Us for Moving, Delivery &amp; Junk Removal</p>
        </div>

        {/* 2 × 3 grid */}
        <div className="diff-grid">
          {features.map((f, i) => (
            <div key={i} className="diff-card">
              <h3 className="card-title">{f.title}</h3>
              <p className="card-desc">{f.desc}</p>
            </div>
          ))}
        </div>

      </div>

      <style jsx>{`
        .diff-section {
          background: #0d0e14;
          padding: 88px 24px;
        }

        .container {
          max-width: 1100px;
          margin: 0 auto;
        }

        /* ── Header ── */
        .diff-header {
          text-align: center;
          margin-bottom: 56px;
        }

        .diff-heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2rem, 4.5vw, 3rem);
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.02em;
          margin-bottom: 12px;
        }

        .diff-sub {
          font-size: 14px;
          color: rgba(255 255 255 / 0.4);
          font-style: italic;
          letter-spacing: 0.01em;
        }

        /* ── Grid ── */
        .diff-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        /* ── Card ── */
        .diff-card {
          background: #1a1c28;
          border: 1px solid rgba(255 255 255 / 0.07);
          border-radius: 14px;
          padding: 32px 28px;
          transition: border-color 0.2s, background 0.2s, transform 0.2s;
        }

        .diff-card:hover {
          background: #1e2035;
          border-color: rgba(255 196 37 / 0.25);
          transform: translateY(-3px);
        }

        .card-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.05rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 12px;
          line-height: 1.3;
        }

        .card-desc {
          font-size: 14px;
          color: rgba(255 255 255 / 0.5);
          line-height: 1.7;
          margin: 0;
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .diff-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 560px) {
          .diff-grid { grid-template-columns: 1fr; }
          .diff-section { padding: 64px 16px; }
        }
      `}</style>
    </section>
  )
}