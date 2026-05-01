'use client';
// components/home/TrustSection.jsx
// SERVER COMPONENT — matches Muvr's dark stats bar exactly
// 5 stats in a row on near-black background, gold values, uppercase gray labels

export default function TrustSection() {
  const stats = [
    { value: '50,000+',  label: 'Jobs Completed'  },
    { value: '4.9★',     label: 'Average Rating'  },
    { value: '60 sec',   label: 'To Book Online'  },
    { value: 'Same Day', label: 'Availability'    },
    { value: '$0',       label: 'Hidden Fees'     },
  ]

  return (
    <section className="trust-bar" aria-label="Trust statistics">
      <div className="stats-inner">
        {stats.map((s, i) => (
          <div key={i} className="stat-item">
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        .trust-bar {
          background: #0d0e14;
          padding: 36px 24px;
          border-top: 1px solid rgba(255 255 255 / 0.05);
          border-bottom: 1px solid rgba(255 255 255 / 0.05);
        }

        .stats-inner {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
          text-align: center;
          align-items: center;
        }

        /* Vertical divider between items */
        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          position: relative;
          padding: 4px 8px;
        }

        .stat-item:not(:last-child)::after {
          content: '';
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 36px;
          width: 1px;
          background: rgba(255 255 255 / 0.08);
        }

        .stat-value {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.4rem, 2.5vw, 2rem);
          font-weight: 800;
          color: #ffc425;
          line-height: 1;
          letter-spacing: -0.02em;
        }

        .stat-label {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: rgba(255 255 255 / 0.45);
          white-space: nowrap;
        }

        @media (max-width: 768px) {
          .stats-inner {
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }
          .stat-item:not(:last-child)::after { display: none; }
        }

        @media (max-width: 480px) {
          .stats-inner { grid-template-columns: repeat(2, 1fr); }
          .trust-bar { padding: 28px 16px; }
        }
      `}</style>
    </section>
  )
}