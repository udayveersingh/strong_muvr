// components/shared/MobileMenu.jsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function MobileMenu({ categories = [] }) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => { setOpen(false) }, [pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <button
        className="hamburger"
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
      >
        <span className={`bar ${open ? 'open' : ''}`} />
        <span className={`bar mid ${open ? 'open' : ''}`} />
        <span className={`bar ${open ? 'open' : ''}`} />
      </button>

      {open && <div className="backdrop" onClick={() => setOpen(false)} aria-hidden="true" />}

      <nav className={`drawer ${open ? 'drawer-open' : ''}`} aria-label="Mobile navigation">
        <div className="drawer-header">
          <span className="drawer-logo">Muvr</span>
          <button className="drawer-close" onClick={() => setOpen(false)} aria-label="Close">✕</button>
        </div>

        <div className="drawer-section-label">Services</div>
        {categories.map((cat) => (
          <Link key={cat.slug} href={`/${cat.slug}`} className="drawer-link">
            <span className="drawer-icon">{cat.icon}</span>
            {cat.name}
          </Link>
        ))}
        <div className="drawer-divider" />
        <Link href="/business" className="drawer-link">Business</Link>
        <Link href="/driver" className="drawer-link">Driver</Link>
        <Link href="/cities" className="drawer-link">All Cities</Link>

        <div className="drawer-footer">
          <a href="tel:+13107308270" className="drawer-phone">📞 +1 (310) 730-8270</a>
          <Link href="/book" className="drawer-book-btn">Book Now</Link>
        </div>
      </nav>

      <style jsx>{`
        .hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          width: 36px; height: 36px;
          background: none; border: none;
          cursor: pointer; padding: 4px;
          border-radius: 6px;
        }
        .hamburger:hover { background: rgba(255 255 255 / 0.1); }
        .bar {
          display: block;
          width: 22px; height: 2px;
          background: white;
          border-radius: 2px;
          transition: transform 0.25s, opacity 0.25s;
          transform-origin: center;
        }
        .bar.open:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .bar.mid.open { opacity: 0; transform: scaleX(0); }
        .bar.open:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
        .backdrop {
          position: fixed; inset: 0;
          background: rgba(0 0 0 / 0.55);
          z-index: 150;
          animation: fadeIn 0.2s ease;
        }
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        .drawer {
          position: fixed; top: 0; right: 0;
          width: 300px; height: 100dvh;
          background: #fff;
          z-index: 200;
          display: flex; flex-direction: column;
          padding: 0 0 24px;
          transform: translateX(100%);
          transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
          overflow-y: auto;
        }
        .drawer-open {
          transform: translateX(0);
          box-shadow: -8px 0 40px rgba(0 0 0 / 0.15);
        }
        .drawer-header {
          display: flex; align-items: center;
          justify-content: space-between;
          padding: 20px 20px 16px;
          border-bottom: 1px solid #f0f0f0;
        }
        .drawer-logo {
          font-family: 'Syne', sans-serif;
          font-size: 22px; font-weight: 800;
          color: #1e2139;
        }
        .drawer-close {
          background: none; border: none;
          font-size: 18px; color: #6b7280;
          cursor: pointer; padding: 4px 8px;
          border-radius: 6px;
        }
        .drawer-close:hover { background: #f3f4f6; }
        .drawer-section-label {
          padding: 16px 20px 8px;
          font-size: 11px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.08em;
          color: #9ca3af;
        }
        .drawer-link {
          display: flex; align-items: center; gap: 10px;
          padding: 12px 20px;
          color: #1e2139; text-decoration: none;
          font-size: 15px; font-weight: 500;
          transition: background 0.1s;
        }
        .drawer-link:hover { background: #f9fafb; color: #ffc425; }
        .drawer-icon { font-size: 18px; }
        .drawer-divider {
          margin: 12px 20px;
          border: none; border-top: 1px solid #f0f0f0;
        }
        .drawer-footer {
          margin-top: auto; padding: 20px 20px 0;
          display: flex; flex-direction: column; gap: 12px;
        }
        .drawer-phone {
          text-align: center; color: #1e2139;
          font-weight: 600; text-decoration: none; font-size: 14px;
        }
        .drawer-book-btn {
          display: block;
          background: #ffc425; color: #1e2139;
          text-align: center; padding: 14px;
          border-radius: 12px; font-weight: 800;
          text-decoration: none; font-size: 15px;
          transition: background 0.15s;
        }
        .drawer-book-btn:hover { background: #e6b020; }
        @media (max-width: 768px) { .hamburger { display: flex; } }
      `}</style>
    </>
  )
}