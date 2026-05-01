'use client'

// components/home/AppDownloadSection.jsx
export default function AppDownloadSection() {
  const features = [
    { icon: '⚡', title: 'Instant quotes',  desc: 'See your flat-rate price in seconds.' },
    { icon: '📍', title: 'Live tracking',   desc: 'Track your pro from pickup to delivery.' },
    { icon: '💳', title: 'Secure payment',  desc: 'Pay safely in-app after the job is done.' },
    { icon: '⭐', title: 'Rate & review',   desc: 'Help keep quality high for everyone.' },
  ]
  return (
    <section className="app-section">
      <div className="app-inner">
        <div className="app-text">
          <span className="eyebrow">Mobile app</span>
          <h2>Book in 60 Seconds from Your Phone</h2>
          <p className="app-sub">Download the Muvr app and book moving, delivery, and junk removal from anywhere. Track your pro in real time, pay securely, and rate your experience.</p>
          <div className="app-badges">
            <a href="#" className="badge-btn" aria-label="Download on App Store">
              <div className="badge-icon">🍎</div>
              <div className="badge-text"><span className="badge-small">Download on the</span><span className="badge-big">App Store</span></div>
            </a>
            <a href="#" className="badge-btn" aria-label="Get it on Google Play">
              <div className="badge-icon">▶</div>
              <div className="badge-text"><span className="badge-small">Get it on</span><span className="badge-big">Google Play</span></div>
            </a>
          </div>
          <div className="online-cta">
            <span className="or-text">or</span>
            <a href="/book" className="book-online">Book online now →</a>
          </div>
        </div>
        <div className="app-features">
          {features.map((f, i) => (
            <div key={i} className="feature-row">
              <span className="feature-icon">{f.icon}</span>
              <div><strong className="feature-title">{f.title}</strong><p className="feature-desc">{f.desc}</p></div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .app-section { background: #1e2139; padding: 88px 24px; }
        .app-inner { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: 1fr 360px; gap: 60px; align-items: center; }
        .eyebrow { display: inline-block; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #1e2139; background: #ffc425; padding: 5px 14px; border-radius: 999px; margin-bottom: 16px; }
        .app-text h2 { font-family: 'Syne', sans-serif; font-size: clamp(1.75rem,3.5vw,2.6rem); font-weight: 800; color: #fff; margin-bottom: 16px; line-height: 1.15; }
        .app-sub { color: rgba(255 255 255 / 0.65); font-size: 16px; line-height: 1.7; margin-bottom: 32px; max-width: 480px; }
        .app-badges { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 24px; }
        .badge-btn {
          display: flex; align-items: center; gap: 10px;
          background: rgba(255 255 255 / 0.08); border: 1.5px solid rgba(255 255 255 / 0.15);
          border-radius: 12px; padding: 12px 20px; text-decoration: none; color: #fff;
          transition: background 0.15s, border-color 0.15s;
        }
        .badge-btn:hover { background: #ffc425; border-color: #ffc425; color: #1e2139; }
        .badge-icon { font-size: 22px; }
        .badge-text { display: flex; flex-direction: column; gap: 1px; }
        .badge-small { font-size: 11px; color: rgba(255 255 255 / 0.6); line-height: 1; }
        .badge-big { font-size: 15px; font-weight: 700; line-height: 1; }
        .badge-btn:hover .badge-small { color: rgba(30 33 57 / 0.7); }
        .online-cta { display: flex; align-items: center; gap: 14px; }
        .or-text { color: rgba(255 255 255 / 0.35); font-size: 13px; }
        .book-online { color: #ffc425; font-weight: 700; font-size: 15px; text-decoration: none; transition: color 0.15s; }
        .book-online:hover { color: #fff; }
        .app-features { display: flex; flex-direction: column; gap: 28px; }
        .feature-row { display: flex; align-items: flex-start; gap: 16px; }
        .feature-icon { font-size: 24px; background: rgba(255 196 37 / 0.1); border: 1px solid rgba(255 196 37 / 0.2); width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .feature-title { display: block; color: #fff; font-size: 15px; font-weight: 700; margin-bottom: 4px; }
        .feature-desc { color: rgba(255 255 255 / 0.55); font-size: 13.5px; line-height: 1.5; margin: 0; }
        @media (max-width: 900px) { .app-inner { grid-template-columns: 1fr; gap: 48px; } }
      `}</style>
    </section>
  )
}