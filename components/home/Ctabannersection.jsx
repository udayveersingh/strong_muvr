'use client'

// components/home/CtaBannerSection.jsx
// Accepts `cta` prop from API: { heading, sub, btn_primary, btn_secondary }

import Link from 'next/link'

export default function CtaBannerSection({ cta }) {
  const heading      = cta?.heading       ?? 'Moving, Delivery & Junk Removal Near You'
  const sub          = cta?.sub           ?? 'Need movers fast? We deliver instant flat-rate pricing. Vetted, insured pros. No phone calls, no hidden fees. Book in 60 seconds.'
  const btnPrimary   = cta?.btn_primary   ?? 'See prices'
  const btnSecondary = cta?.btn_secondary ?? 'Book in 60 Seconds'

  return (
    <section className="cta-banner">
      <div className="cta-inner">
        <h2 className="cta-heading">{heading}</h2>
        <p className="cta-sub">{sub}</p>
        <div className="cta-btns">
          <Link href="/book" className="btn-primary-cta">{btnPrimary}</Link>
          <Link href="/book" className="btn-outline-cta">{btnSecondary}</Link>
        </div>
      </div>

      <style jsx>{`
        .cta-banner { background: linear-gradient(135deg, #1e2139 0%, #2a2f4a 50%, #1e2139 100%); padding: 88px 24px; position: relative; overflow: hidden; }
        .cta-banner::before { content: ''; position: absolute; top: -60px; right: -60px; width: 360px; height: 360px; background: radial-gradient(circle, rgba(255 196 37 / 0.1) 0%, transparent 70%); pointer-events: none; }
        .cta-inner { position: relative; z-index: 1; max-width: 600px; margin: 0 auto; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 20px; }
        .cta-heading { font-family: 'Syne', sans-serif; font-size: clamp(1.75rem,4vw,2.75rem); font-weight: 800; color: #fff; margin: 0; letter-spacing: -0.02em; line-height: 1.15; }
        .cta-sub { color: rgba(255 255 255 / 0.6); font-size: 15.5px; line-height: 1.65; max-width: 440px; margin: 0; }
        .cta-btns { display: flex; gap: 14px; flex-wrap: wrap; justify-content: center; margin-top: 8px; }
        .btn-primary-cta { display: inline-flex; align-items: center; justify-content: center; background: #ffc425; color: #1e2139; font-family: 'DM Sans', sans-serif; font-size: 15px; font-weight: 800; padding: 15px 32px; border-radius: 999px; text-decoration: none; transition: background 0.15s, transform 0.1s, box-shadow 0.15s; }
        .btn-primary-cta:hover { background: #e6b020; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(255 196 37 / 0.4); }
        .btn-outline-cta { display: inline-flex; align-items: center; justify-content: center; background: transparent; color: #fff; font-family: 'DM Sans', sans-serif; font-size: 15px; font-weight: 700; padding: 15px 32px; border-radius: 999px; border: 2px solid rgba(255 255 255 / 0.4); text-decoration: none; transition: border-color 0.15s, background 0.15s, transform 0.1s; }
        .btn-outline-cta:hover { border-color: #ffc425; background: rgba(255 196 37 / 0.1); transform: translateY(-2px); }
        @media (max-width: 480px) { .cta-btns { flex-direction: column; width: 100%; } .btn-primary-cta, .btn-outline-cta { width: 100%; } }
      `}</style>
    </section>
  )
}