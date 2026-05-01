'use client'

// components/home/HowItWorksSection.jsx

export default function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: 'Choose your service',
      description:
        'Select moving, delivery, or junk removal. Enter your details and get a flat-rate quote instantly. No back-and-forth, no surprises.',
    },
    {
      number: 2,
      title: 'We match you with a vetted local pro',
      description:
        'Background-checked, insured movers near you are matched to your job. Track them in real time as they head your way.',
    },
    {
      number: 3,
      title: 'Sit back. We handle everything.',
      description:
        'Your pro arrives on time, gets the job done, and you pay the flat rate you were quoted. Rate your experience after.',
    },
  ]

  return (
    <section className="hiw">
      <div className="container">

        {/* Heading */}
        <div className="hiw-header">
          <h2 className="hiw-heading">Booked. Matched. Done.</h2>
          <p className="hiw-sub">How to Book Moving, Delivery or Junk Removal in 60 Seconds</p>
        </div>

        {/* Steps row */}
        <div className="steps-row">
          {steps.map((step, i) => (
            <div key={i} className="step-item">
              {/* Number circle */}
              <div className="step-circle" aria-hidden="true">
                {step.number}
              </div>

              {/* Connector line between circles (not after last) */}
              {i < steps.length - 1 && (
                <div className="step-line" aria-hidden="true" />
              )}

              {/* Text below */}
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="hiw-cta">
          <a href="/book" className="btn-book">Book Now</a>
        </div>

      </div>

      <style jsx>{`
        .hiw {
          padding: 88px 0 80px;
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
          margin-bottom: 60px;
        }

        .hiw-heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2rem, 4.5vw, 3rem);
          font-weight: 800;
          color: #1e2139;
          letter-spacing: -0.02em;
          margin-bottom: 12px;
        }

        .hiw-sub {
          font-size: 14px;
          color: #9ca3af;
          font-style: italic;
          letter-spacing: 0.01em;
        }

        /* ── Steps row ── */
        .steps-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0 40px;
          position: relative;
          margin-bottom: 56px;
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
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: #1e2139;
          color: #ffc425;
          font-family: 'Syne', sans-serif;
          font-size: 1.75rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 28px;
          position: relative;
          z-index: 1;
          box-shadow: 0 4px 20px rgba(30 33 57 / 0.2);
          flex-shrink: 0;
        }

        /* Horizontal connector line between circles */
        .step-line {
          position: absolute;
          top: 36px;
          left: calc(50% + 40px);
          width: calc(100% + 40px - 80px);
          height: 2px;
          background: linear-gradient(90deg, #ffc425, rgba(255 196 37 / 0.2));
          z-index: 0;
        }

        /* Step text */
        .step-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.05rem;
          font-weight: 800;
          color: #1e2139;
          margin-bottom: 12px;
          line-height: 1.3;
          max-width: 240px;
        }

        .step-desc {
          color: #6b7280;
          font-size: 14px;
          line-height: 1.7;
          max-width: 260px;
          margin: 0 auto;
        }

        /* ── CTA ── */
        .hiw-cta {
          display: flex;
          justify-content: center;
        }

        .btn-book {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #1e2139;
          color: #ffc425;
          font-family: 'DM Sans', sans-serif;
          font-size: 16px;
          font-weight: 800;
          padding: 16px 52px;
          border-radius: 999px;
          text-decoration: none;
          letter-spacing: 0.01em;
          transition: background 0.15s, transform 0.1s, box-shadow 0.15s;
        }

        .btn-book:hover {
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
            /* vertical line on mobile */
            left: 50%;
            top: 72px;
            width: 2px;
            height: calc(100% + 40px - 72px);
            background: linear-gradient(180deg, #ffc425, rgba(255 196 37 / 0.2));
            transform: translateX(-50%);
          }

          .step-item { padding-bottom: 0; }
          .hiw-heading { font-size: 2rem; }
        }
      `}</style>
    </section>
  )
}