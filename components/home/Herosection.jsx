// components/home/HeroSection.jsx
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function HeroSection({ categories = [] }) {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState(categories[0]?.slug || 'delivery')
  const [pickup, setPickup]   = useState('')
  const [dropoff, setDropoff] = useState('')

  function handleSeePrices(e) {
    e.preventDefault()
    if (!pickup) return
    const params = new URLSearchParams({ category: activeTab, pickup, ...(dropoff && { dropoff }) })
    router.push(`/book?${params.toString()}`)
  }

  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="circle c1" /><div className="circle c2" /><div className="circle c3" />
      </div>

      <div className="hero-inner">
        {/* Left text */}
        <div className="hero-text">
          <div className="hero-badge">⚡ Same-day available</div>
          <h1 className="hero-heading">
            Moving, Delivery &amp;<br />
            <span className="accent">Junk Removal</span><br />
            in 60 Seconds
          </h1>
          <p className="hero-sub">
            Book vetted, insured pros in 1,000+ cities.
            See your exact flat-rate price before you confirm.
          </p>
          <div className="trust-row">
            <span>✓ Background-checked pros</span>
            <span>✓ Flat-rate pricing</span>
            <span>✓ No hidden fees</span>
          </div>
          <div className="rating-strip">
            <span className="stars" aria-label="4.9 out of 5 stars">★★★★★</span>
            <span className="rating-text"><strong>4.9/5</strong> from 12,000+ reviews</span>
          </div>
        </div>

        {/* Booking widget */}
        <div className="widget-card">
          <div className="widget-tabs" role="tablist">
            {categories.map((cat) => (
              <button
                key={cat.slug}
                role="tab"
                aria-selected={activeTab === cat.slug}
                className={`widget-tab ${activeTab === cat.slug ? 'active' : ''}`}
                onClick={() => setActiveTab(cat.slug)}
              >
                <span className="tab-icon" aria-hidden="true">{cat.icon}</span>
                <span className="tab-label">{cat.name}</span>
              </button>
            ))}
          </div>

          <form className="widget-form" onSubmit={handleSeePrices}>
            <div className="input-group">
              <span className="dot pickup-dot" aria-hidden="true" />
              <input
                type="text" placeholder="Pick up location"
                value={pickup} onChange={(e) => setPickup(e.target.value)}
                className="loc-input" aria-label="Pick up location" required
              />
            </div>
            {activeTab !== 'junk-removal' && (
              <>
                <div className="connector" aria-hidden="true" />
                <div className="input-group">
                  <span className="dot dropoff-dot" aria-hidden="true" />
                  <input
                    type="text" placeholder="Drop-off location"
                    value={dropoff} onChange={(e) => setDropoff(e.target.value)}
                    className="loc-input" aria-label="Drop-off location"
                  />
                </div>
              </>
            )}
            <button type="submit" className="btn-prices">
              See prices <span aria-hidden="true">→</span>
            </button>
          </form>

          <p className="widget-note">Free quote · No credit card required</p>
        </div>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          background: linear-gradient(135deg, #141629 0%, #1e2139 55%, #2a2f4a 100%);
          padding: 80px 24px 100px;
          overflow: hidden;
          min-height: 580px;
          display: flex;
          align-items: center;
        }
        .hero-bg { position: absolute; inset: 0; pointer-events: none; }
        .circle { position: absolute; border-radius: 50%; filter: blur(70px); opacity: 0.18; }
        .c1 { width:420px; height:420px; background:#ffc425; top:-120px; right:-80px; animation: drift 9s ease-in-out infinite; }
        .c2 { width:300px; height:300px; background:#ffd666; bottom:-80px; left:8%; animation: drift 11s ease-in-out infinite reverse; }
        .c3 { width:200px; height:200px; background:#ffc425; top:35%; left:42%; animation: drift 13s ease-in-out infinite 2s; }
        @keyframes drift { 0%,100% { transform:translate(0,0); } 50% { transform:translate(18px,-18px); } }

        .hero-inner {
          position: relative; z-index: 1;
          max-width: 1280px; margin: 0 auto; width: 100%;
          display: grid; grid-template-columns: 1fr 420px;
          gap: 60px; align-items: center;
        }

        /* Text */
        .hero-badge {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(255 196 37 / 0.15);
          border: 1px solid rgba(255 196 37 / 0.35);
          color: #ffc425;
          font-size: 13px; font-weight: 600;
          padding: 6px 14px; border-radius: 999px;
          margin-bottom: 20px; letter-spacing: 0.02em;
          animation: fadeUp 0.6s ease both;
        }
        .hero-heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.2rem, 4.5vw, 3.5rem);
          font-weight: 800; color: #fff;
          line-height: 1.1; margin-bottom: 20px;
          animation: fadeUp 0.6s ease 0.1s both;
        }
        .accent { color: #ffc425; }
        .hero-sub {
          color: rgba(255 255 255 / 0.72);
          font-size: 17px; line-height: 1.65;
          max-width: 480px; margin-bottom: 24px;
          animation: fadeUp 0.6s ease 0.2s both;
        }
        .trust-row {
          display: flex; flex-wrap: wrap; gap: 10px 20px;
          margin-bottom: 24px;
          animation: fadeUp 0.6s ease 0.3s both;
        }
        .trust-row span { color: rgba(255 255 255 / 0.8); font-size: 14px; font-weight: 500; }
        .rating-strip { display: flex; align-items: center; gap: 10px; animation: fadeUp 0.6s ease 0.4s both; }
        .stars { color: #ffc425; font-size: 18px; letter-spacing: 2px; }
        .rating-text { color: rgba(255 255 255 / 0.75); font-size: 14px; }
        .rating-text strong { color: #fff; }

        /* Widget */
        .widget-card {
          background: #fff;
          border-radius: 20px; padding: 28px;
          box-shadow: 0 24px 60px rgba(0 0 0 / 0.3), 0 8px 20px rgba(0 0 0 / 0.1);
          animation: fadeUp 0.6s ease 0.15s both;
        }
        .widget-tabs {
          display: flex; gap: 4px;
          background: #f3f4f6; border-radius: 12px;
          padding: 4px; margin-bottom: 20px;
        }
        .widget-tab {
          flex: 1; display: flex; flex-direction: column;
          align-items: center; gap: 4px;
          padding: 10px 6px; border: none; background: none;
          border-radius: 9px; cursor: pointer;
          transition: background 0.15s, color 0.15s;
          color: #6b7280; font-family: 'DM Sans', sans-serif;
        }
        .widget-tab.active {
          background: #1e2139; color: #ffc425;
          box-shadow: 0 2px 8px rgba(30 33 57 / 0.3);
        }
        .tab-icon { font-size: 20px; }
        .tab-label { font-size: 12px; font-weight: 600; white-space: nowrap; }

        .widget-form { display: flex; flex-direction: column; gap: 0; }
        .input-group {
          display: flex; align-items: center; gap: 12px;
          background: #f9fafb; border: 1.5px solid #e5e7eb;
          border-radius: 12px; padding: 14px 16px;
          transition: border-color 0.15s;
        }
        .input-group:focus-within { border-color: #ffc425; background: #fff; }
        .dot { width: 12px; height: 12px; border-radius: 50%; flex-shrink: 0; }
        .pickup-dot  { background: #1e2139; }
        .dropoff-dot { background: #fff; border: 2.5px solid #1e2139; }
        .connector { width:2px; height:12px; background:#d1d5db; margin-left:21px; }
        .loc-input {
          flex: 1; border: none; background: none;
          font-size: 15px; font-family: 'DM Sans', sans-serif;
          color: #1e2139; outline: none;
        }
        .loc-input::placeholder { color: #9ca3af; }
        .btn-prices {
          display: flex; align-items: center; justify-content: center;
          gap: 8px; margin-top: 14px; padding: 16px;
          background: #ffc425; color: #1e2139;
          font-size: 16px; font-weight: 800;
          font-family: 'DM Sans', sans-serif;
          border: none; border-radius: 12px;
          cursor: pointer; letter-spacing: 0.01em;
          transition: background 0.15s, transform 0.1s, box-shadow 0.15s;
        }
        .btn-prices:hover {
          background: #e6b020;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(255 196 37 / 0.45);
        }
        .widget-note { text-align:center; color:#9ca3af; font-size:12.5px; margin-top:12px; }

        @keyframes fadeUp { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }

        @media (max-width: 900px) {
          .hero-inner { grid-template-columns:1fr; gap:40px; }
          .hero { padding:60px 20px 80px; min-height:auto; }
          .widget-card { max-width:480px; }
        }
        @media (max-width: 520px) {
          .tab-label { font-size:10px; }
          .tab-icon  { font-size:16px; }
        }
      `}</style>
    </section>
  )
}