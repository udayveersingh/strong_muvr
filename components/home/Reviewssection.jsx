'use client'

// components/home/ReviewsSection.jsx
// Matches screenshot: rating summary on top, 3 review cards below
// No colored avatars — just stars, quote text, bold name, gray service·location

const REVIEWS = [
  {
    name: 'Marcus T.',
    detail: 'Apartment move · Los Angeles, CA',
    rating: 5,
    body: '"Booked same-day movers at 9am and they were at my apartment by noon. Flat rate was exactly what I paid. Fast and careful with everything."',
  },
  {
    name: 'Sandra K.',
    detail: 'Junk removal · Chicago, IL',
    rating: 5,
    body: '"Used Muvr for junk removal after clearing out my mom\'s house. The team showed up on time, worked quickly, and were really respectful. Would absolutely use again."',
  },
  {
    name: 'Priya M.',
    detail: 'Furniture delivery · Austin, TX',
    rating: 5,
    body: '"Got a sectional sofa delivered from Facebook Marketplace. Wrapped it, carried it up 3 flights, and did not scratch a thing. Way easier than renting a truck."',
  },
]

function Stars({ count = 5 }) {
  return (
    <div className="stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} aria-hidden="true">★</span>
      ))}
      <style jsx>{`
        .stars { color: #ffc425; font-size: 18px; letter-spacing: 2px; display: flex; gap: 1px; }
      `}</style>
    </div>
  )
}

export default function ReviewsSection() {
  return (
    <section className="reviews">
      <div className="container">

        {/* ── Section heading ── */}
        <div className="section-header">
          <h2 className="heading">What Customers Say About Us</h2>
          <p className="sub">Real reviews from verified customers across the US.</p>
        </div>

        {/* ── Rating summary (top, centered) ── */}
        <div className="rating-summary">
          <div className="rating-number">4.9</div>
          <Stars count={5} />
          <p className="rating-count">Based on 2,455+ verified reviews</p>
        </div>

        {/* ── 3 review cards ── */}
        <div className="reviews-grid">
          {REVIEWS.map((r, i) => (
            <article key={i} className="review-card">
              <Stars count={r.rating} />
              <blockquote className="review-body">{r.body}</blockquote>
              <div className="review-footer">
                <span className="reviewer-name">{r.name}</span>
                <span className="reviewer-detail">{r.detail}</span>
              </div>
            </article>
          ))}
        </div>

      </div>

      <style jsx>{`
        .reviews {
          padding: 88px 0;
          background: #f9fafb;
        }

        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* ── Header ── */
        .section-header {
          text-align: center;
          margin-bottom: 36px;
        }

        .heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.75rem, 3.5vw, 2.4rem);
          font-weight: 800;
          color: #1e2139;
          margin-bottom: 10px;
        }

        .sub {
          color: #9ca3af;
          font-size: 15px;
        }

        /* ── Rating summary ── */
        .rating-summary {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          margin-bottom: 52px;
        }

        .rating-number {
          font-family: 'Syne', sans-serif;
          font-size: 4.5rem;
          font-weight: 800;
          color: #1e2139;
          line-height: 1;
        }

        .rating-count {
          color: #9ca3af;
          font-size: 14px;
          margin: 0;
        }

        /* ── Cards grid ── */
        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        /* ── Card ── */
        .review-card {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 14px;
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: box-shadow 0.2s, transform 0.2s;
        }

        .review-card:hover {
          box-shadow: 0 6px 24px rgba(0 0 0 / 0.07);
          transform: translateY(-3px);
        }

        .review-body {
          color: #374151;
          font-size: 14.5px;
          line-height: 1.75;
          font-style: normal;
          flex: 1;
          margin: 0;
        }

        /* ── Footer ── */
        .review-footer {
          display: flex;
          flex-direction: column;
          gap: 3px;
          padding-top: 16px;
          border-top: 1px solid #f0f0f0;
        }

        .reviewer-name {
          font-size: 14px;
          font-weight: 700;
          color: #1e2139;
        }

        .reviewer-detail {
          font-size: 12.5px;
          color: #9ca3af;
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .reviews-grid { grid-template-columns: 1fr; max-width: 480px; margin: 0 auto; }
          .rating-number { font-size: 3.5rem; }
        }
      `}</style>
    </section>
  )
}