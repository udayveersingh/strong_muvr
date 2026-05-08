'use client'

// components/home/WhatWeHandleSection.jsx
// Accepts:
//   categories   — from API (with services array)
//   heading      — "What we handle." from API
//   introParagraph — SEO paragraph from API

import Link from 'next/link'

export default function WhatWeHandleSection({ categories = [], heading, introParagraph }) {
  const sectionHeading = heading ?? 'What we handle.'

  return (
    <section className="wwh-section">
      <div className="container">

        {/* SEO intro paragraph — from API */}
        {introParagraph && (
          <div className="seo-intro-wrap">
            <p className="seo-intro">{introParagraph}</p>
          </div>
        )}

        <h2 className="wwh-heading">{sectionHeading}</h2>

        <div className="cards-grid">
          {categories.map((cat) => (
            <div key={cat.slug} className="cat-card">
              <div className="card-accent" aria-hidden="true" />
              <div className="card-icon" aria-hidden="true">{cat.icon}</div>
              <h3 className="card-title">{cat.name}</h3>
              <p className="card-desc">{cat.description}</p>
              <div className="card-divider" aria-hidden="true" />
              <div className="pills-grid">
                {(cat.services || []).slice(0, 8).map((svc) => (
                  <Link key={svc.slug} href={`/${cat.slug}/${svc.slug}`} className="pill">
                    {svc.name}
                  </Link>
                ))}
              </div>
              <Link href={`/${cat.slug}`} className="view-all-link">
                View all {cat.name.toLowerCase()} services →
              </Link>
            </div>
          ))}
        </div>

        <div className="cta-row">
          <Link href="/book" className="btn-see-prices">See Prices</Link>
        </div>
      </div>

      <style jsx>{`
        .wwh-section { padding: 64px 0 80px; background: #fff; }
        .container { max-width: 1280px; margin: 0 auto; padding: 0 24px; }
        .seo-intro-wrap { max-width: 760px; margin: 0 auto 64px; text-align: center; }
        .seo-intro { color: #6b7280; font-size: 15.5px; line-height: 1.8; margin: 0; }
        .wwh-heading { font-family: 'Syne', sans-serif; font-size: clamp(2rem,4vw,3rem); font-weight: 800; color: #1e2139; text-align: center; margin-bottom: 48px; letter-spacing: -0.02em; }
        .cards-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; margin-bottom: 48px; align-items: start; }
        .cat-card { background: #fff; border: 1.5px solid #e5e7eb; border-radius: 16px; padding: 36px 28px 28px; display: flex; flex-direction: column; gap: 0; position: relative; overflow: hidden; transition: box-shadow 0.2s, transform 0.2s; }
        .cat-card:hover { box-shadow: 0 8px 32px rgba(255 196 37 / 0.12); transform: translateY(-3px); }
        .card-accent { position: absolute; top: 0; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, #ffc425, #ffd666); border-radius: 16px 16px 0 0; }
        .card-icon { font-size: 48px; margin-bottom: 20px; display: flex; align-items: center; justify-content: center; width: 72px; height: 72px; background: #fffbec; border-radius: 16px; margin-left: auto; margin-right: auto; }
        .card-title { font-family: 'Syne', sans-serif; font-size: 1.5rem; font-weight: 800; color: #1e2139; text-align: center; margin-bottom: 16px; }
        .card-desc { color: #6b7280; font-size: 14.5px; line-height: 1.7; text-align: left; margin-bottom: 24px; }
        .card-divider { height: 1px; background: #e5e7eb; margin-bottom: 20px; }
        .pills-grid { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px; }
        .pill { display: inline-block; padding: 6px 14px; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 999px; font-size: 13px; font-weight: 500; color: #374151; text-decoration: none; white-space: nowrap; transition: background 0.15s, border-color 0.15s, color 0.15s; }
        .pill:hover { background: #fffbec; border-color: #ffc425; color: #1e2139; }
        .view-all-link { display: inline-flex; align-items: center; color: #ffc425; font-size: 14px; font-weight: 700; text-decoration: none; margin-top: auto; transition: color 0.15s; }
        .view-all-link:hover { color: #e6b020; }
        .cta-row { display: flex; justify-content: center; padding-top: 8px; }
        .btn-see-prices { display: inline-flex; align-items: center; justify-content: center; background: #1e2139; color: #ffc425; font-family: 'DM Sans', sans-serif; font-size: 16px; font-weight: 800; padding: 16px 48px; border-radius: 999px; text-decoration: none; transition: background 0.15s, transform 0.1s; }
        .btn-see-prices:hover { background: #2a2f4a; transform: translateY(-2px); }
        @media (max-width: 960px) { .cards-grid { grid-template-columns: 1fr; max-width: 540px; margin-left: auto; margin-right: auto; } }
      `}</style>
    </section>
  )
}