'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function CityHero({ city }) {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState(city?.categorySlug || 'moving')
  const [pickup, setPickup]   = useState('')
  const [dropoff, setDropoff] = useState('')

  const cityName    = city?.name        || 'Los Angeles'
  const categorySlug = city?.categorySlug || 'moving'

  const headlines = {
    moving:        `${cityName} Movers`,
    delivery:      `${cityName} Delivery`,
    'junk-removal': `${cityName} Junk Removal`,
  }
  const sublines = {
    moving:        `Book insured, background-checked ${cityName} movers in 60 seconds.\nSame-day availability. Transparent rates. Zero hidden fees.`,
    delivery:      `Book insured, background-checked ${cityName} delivery drivers in 60 seconds.\nSame-day availability. Transparent rates. Zero hidden fees.`,
    'junk-removal': `Book insured, background-checked ${cityName} junk removal pros in 60 seconds.\nSame-day availability. Transparent rates. Zero hidden fees.`,
  }

  const categories = [
    { slug: 'delivery',      name: 'Deliveries',   icon: '🚚' },
    { slug: 'junk-removal',  name: 'Junk Removal', icon: '🗑️' },
    { slug: 'moving',        name: 'Moves',        icon: '🏠' },
  ]

  function handleSeePrices(e) {
    e.preventDefault()
    if (!pickup) return
    const params = new URLSearchParams({
      category: activeTab,
      pickup,
      ...(dropoff && activeTab !== 'junk-removal' && { dropoff }),
    })
    router.push(`/book?${params.toString()}`)
  }

  const headingLines = (headlines[categorySlug] || headlines.moving).split('\n')
  const subLines     = (sublines[categorySlug]  || sublines.moving).split('\n')

  return (
    <section className="cat-hero">
      {/* Ambient background blobs */}
      <div className="hero-bg" aria-hidden="true">
        <div className="blob b1" />
        <div className="blob b2" />
      </div>

      <div className="hero-inner">

        {/* Heading */}
        <h1 className="hero-heading">
          {headingLines.map((line, i) => (
            <span key={i}>
              {line}
              {i < headingLines.length - 1 && <br />}
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <p className="hero-sub">
          {subLines.map((line, i) => (
            <span key={i}>
              {line}
              {i < subLines.length - 1 && <br />}
            </span>
          ))}
        </p>

        {/* Booking widget */}
        <div className="widget">

          {/* Category tabs */}
          <div className="tabs" role="tablist" aria-label="Service type">
            {categories.map((cat) => (
              <button
                key={cat.slug}
                role="tab"
                aria-selected={activeTab === cat.slug}
                className={`tab ${activeTab === cat.slug ? 'active' : ''}`}
                onClick={() => setActiveTab(cat.slug)}
              >
                <span className="tab-icon" aria-hidden="true">{cat.icon}</span>
                <span className="tab-label">{cat.name}</span>
              </button>
            ))}
          </div>

          {/* Form */}
          <form className="widget-form" onSubmit={handleSeePrices}>
            {/* Pickup */}
            <div className="input-row">
              <span className="loc-dot pickup" aria-hidden="true" />
              <input
                type="text"
                placeholder="Pick up location"
                value={pickup}
                onChange={e => setPickup(e.target.value)}
                className="loc-input"
                aria-label="Pick up location"
                required
              />
            </div>

            {/* Dropoff — hide for junk removal */}
            {activeTab !== 'junk-removal' && (
              <div className="input-row">
                <span className="loc-dot dropoff" aria-hidden="true" />
                <input
                  type="text"
                  placeholder="Drop-off location"
                  value={dropoff}
                  onChange={e => setDropoff(e.target.value)}
                  className="loc-input"
                  aria-label="Drop-off location"
                />
              </div>
            )}

            <button type="submit" className="btn-prices">
              See prices
            </button>
          </form>

        </div>
      </div>

      <style jsx>{`
        /* ── Shell ── */
        .cat-hero {
          position: relative;
          background: linear-gradient(135deg, #141629 0%, #1e2139 50%, #2a2f4a 100%);
          min-height: 560px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 24px 100px;
          overflow: hidden;
          text-align: center;
        }

        /* Ambient blobs */
        .hero-bg { position: absolute; inset: 0; pointer-events: none; }
        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.15;
        }
        .b1 {
          width: 500px; height: 500px;
          background: #ffc425;
          top: -150px; right: -100px;
          animation: drift 10s ease-in-out infinite;
        }
        .b2 {
          width: 350px; height: 350px;
          background: #ffd666;
          bottom: -100px; left: -60px;
          animation: drift 13s ease-in-out infinite reverse;
        }
        @keyframes drift {
          0%,100% { transform: translate(0,0); }
          50%      { transform: translate(20px,-20px); }
        }

        /* ── Inner ── */
        .hero-inner {
          position: relative;
          z-index: 1;
          max-width: 720px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        /* ── Heading ── */
        .hero-heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2rem, 5vw, 3.25rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin: 0;
          animation: fadeUp 0.6s ease both;
        }

        /* ── Subtitle ── */
        .hero-sub {
          color: rgba(255 255 255 / 0.68);
          font-size: 16.5px;
          line-height: 1.7;
          max-width: 560px;
          margin: 0;
          animation: fadeUp 0.6s ease 0.1s both;
        }

        /* ── Widget ── */
        .widget {
          width: 100%;
          max-width: 560px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          animation: fadeUp 0.6s ease 0.2s both;
        }

        /* Tabs */
        .tabs {
          display: flex;
          gap: 24px;
          justify-content: center;
        }

        .tab {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px 8px;
          border-radius: 8px;
          opacity: 0.45;
          transition: opacity 0.15s;
        }

        .tab.active { opacity: 1; }
        .tab:hover  { opacity: 0.75; }

        .tab-icon {
          font-size: 26px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px; height: 48px;
          background: rgba(255 255 255 / 0.12);
          border-radius: 12px;
          transition: background 0.15s;
        }

        .tab.active .tab-icon {
          background: rgba(255 196 37 / 0.2);
          border: 2px solid rgba(255 196 37 / 0.5);
        }

        .tab-label {
          font-size: 11px;
          font-weight: 600;
          color: #fff;
          white-space: nowrap;
          letter-spacing: 0.03em;
        }

        /* Form */
        .widget-form {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .input-row {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(255 255 255 / 0.95);
          border: 2px solid transparent;
          border-radius: 12px;
          padding: 14px 18px;
          transition: border-color 0.15s;
        }

        .input-row:focus-within {
          border-color: #ffc425;
          background: #fff;
        }

        .loc-dot {
          width: 12px; height: 12px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .pickup  { background: #1e2139; }
        .dropoff { background: #fff; border: 2.5px solid #1e2139; }

        .loc-input {
          flex: 1;
          border: none;
          background: none;
          font-size: 15px;
          font-family: 'DM Sans', sans-serif;
          color: #1e2139;
          outline: none;
        }

        .loc-input::placeholder { color: #9ca3af; }

        /* See prices button */
        .btn-prices {
          width: 180px;
          align-self: flex-start;
          padding: 14px 28px;
          background: #ffc425;
          color: #1e2139;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 800;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          transition: background 0.15s, transform 0.1s, box-shadow 0.15s;
          letter-spacing: 0.01em;
        }

        .btn-prices:hover {
          background: #e6b020;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(255 196 37 / 0.4);
        }

        /* ── Animation ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Responsive ── */
        @media (max-width: 640px) {
          .cat-hero { padding: 60px 16px 80px; min-height: auto; }
          .hero-heading { font-size: 2rem; }
          .tabs { gap: 12px; }
          .tab-icon { width: 40px; height: 40px; font-size: 20px; }
          .btn-prices { width: 100%; }
        }
      `}</style>
    </section>
  )
}