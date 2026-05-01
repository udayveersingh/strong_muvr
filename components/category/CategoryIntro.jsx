'use client'

// components/category/CategoryIntro.jsx
// Breadcrumb + centered SEO intro paragraph
// Matches screenshot: Home > Category breadcrumb, centered gray paragraph below

import Link from 'next/link'

export default function CategoryIntro({ content }) {
  return (
    <section className="cat-intro">
      <div className="container">

        {/* Breadcrumb */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/" className="bc-home">Home</Link>
          <span className="bc-sep" aria-hidden="true"> › </span>
          <span className="bc-current">{content.name}</span>
        </nav>

        {/* SEO paragraph — unique per category */}
        <p className="intro-text">{content.introParagraph}</p>

      </div>

      <style jsx>{`
        .cat-intro {
          background: #fff;
          border-bottom: 1px solid #f0f0f0;
          padding: 24px 24px 48px;
        }

        .container {
          max-width: 720px;
          margin: 0 auto;
        }

        /* Breadcrumb */
        .breadcrumb {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 14px;
          margin-bottom: 32px;
        }

        .bc-home {
          color: #ffc425;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.15s;
        }

        .bc-home:hover { color: #e6b020; }

        .bc-sep { color: #9ca3af; }

        .bc-current {
          color: #6b7280;
          font-weight: 400;
        }

        /* SEO paragraph */
        .intro-text {
          text-align: center;
          color: #4b5563;
          font-size: 16px;
          line-height: 1.8;
          margin: 0;
        }
      `}</style>
    </section>
  )
}