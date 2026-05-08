'use client'

// components/home/HowItWorksSection.jsx
// Now accepts `howItWorks` prop from API
// Falls back to hardcoded if prop not provided

import Link from 'next/link'

const DEFAULT_STEPS = [
  { number: 1, title: 'Choose your service',                description: 'Select moving, delivery, or junk removal. Enter your details and get a flat-rate quote instantly. No back-and-forth, no surprises.' },
  { number: 2, title: 'We match you with a vetted local pro', description: 'Background-checked, insured movers near you are matched to your job. Track them in real time as they head your way.' },
  { number: 3, title: 'Sit back. We handle everything.',    description: 'Your pro arrives on time, gets the job done, and you pay the flat rate you were quoted. Rate your experience after.' },
]

export default function HowItWorksSection({ howItWorks }) {
  const heading  = howItWorks?.heading   ?? 'Booked. Matched. Done.'
  const sub      = howItWorks?.sub       ?? 'How to Book Moving, Delivery or Junk Removal in 60 Seconds'
  const ctaLabel = howItWorks?.cta_label ?? 'Book Now'
  const steps    = howItWorks?.steps?.length ? howItWorks.steps : DEFAULT_STEPS

  return (
    <section className="hiw">
      <div className="container">
        <div className="hiw-header">
          <h2 className="hiw-heading">{heading}</h2>
          <p className="hiw-sub">{sub}</p>
        </div>

        <div className="steps-row">
          {steps.map((step, i) => (
            <div key={i} className="step-item">
              <div className="step-circle" aria-hidden="true">{step.number}</div>
              {i < steps.length - 1 && <div className="step-line" aria-hidden="true" />}
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="hiw-cta">
          <Link href="/book" className="btn-cta">{ctaLabel}</Link>
        </div>
      </div>

      <style jsx>{`
        .hiw { padding: 88px 0; background: #f4f5f9; }
        .container { max-width: 1100px; margin: 0 auto; padding: 0 24px; }
        .hiw-header { text-align: center; margin-bottom: 56px; }
        .hiw-heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2rem, 4.5vw, 3rem);
          font-weight: 800; color: #1e2139;
          letter-spacing: -0.02em; margin-bottom: 12px;
        }
        .hiw-sub { font-size: 14px; color: #9ca3af; font-style: italic; }
        .steps-row {
          display: grid; grid-template-columns: repeat(3,1fr);
          gap: 0 40px; margin-bottom: 56px; align-items: start;
        }
        .step-item { display: flex; flex-direction: column; align-items: center; text-align: center; position: relative; }
        .step-circle {
          width: 64px; height: 64px; border-radius: 50%;
          background: #1e2139; color: #ffc425;
          font-family: 'Syne', sans-serif; font-size: 1.6rem; font-weight: 800;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 20px; position: relative; z-index: 1;
          box-shadow: 0 4px 16px rgba(30 33 57 / 0.2); flex-shrink: 0;
        }
        .step-line {
          position: absolute; top: 32px; left: calc(50% + 36px);
          width: calc(100% + 40px - 72px); height: 2px;
          background: linear-gradient(90deg, #ffc425, rgba(255 196 37 / 0.15)); z-index: 0;
        }
        .step-title { font-family: 'Syne', sans-serif; font-size: 1rem; font-weight: 800; color: #1e2139; margin-bottom: 10px; }
        .step-desc { color: #6b7280; font-size: 14px; line-height: 1.7; max-width: 280px; margin: 0 auto; }
        .hiw-cta { display: flex; justify-content: center; }
        .btn-cta {
          display: inline-flex; align-items: center; justify-content: center;
          background: #1e2139; color: #ffc425;
          font-family: 'DM Sans', sans-serif; font-size: 16px; font-weight: 800;
          padding: 16px 52px; border-radius: 999px; text-decoration: none;
          transition: background 0.15s, transform 0.1s, box-shadow 0.15s;
        }
        .btn-cta:hover { background: #2a2f4a; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(30 33 57 / 0.25); }
        @media (max-width: 768px) {
          .steps-row { grid-template-columns: 1fr; gap: 40px 0; }
          .step-line { left: 50%; top: 64px; width: 2px; height: calc(100% + 40px - 64px); background: linear-gradient(180deg, #ffc425, rgba(255 196 37 / 0.15)); transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}