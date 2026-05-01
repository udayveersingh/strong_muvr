'use client';
// components/home/WhatWeHandleSection.jsx
// SERVER COMPONENT — "What we handle" section on home page
// 3 category cards side by side, each with icon, title, desc, service pills, view all link
// Matches Muvr screenshot exactly

import Link from 'next/link'

const CATEGORY_DATA = [
  {
    slug: 'moving',
    name: 'Moving',
    icon: '🚛',
    description:
      'Local apartment moves, home relocations, office moves, and long-distance moving. All with vetted movers, flat-rate pricing, and same-day availability.',
    services: [
      { name: 'Apartment Moving',    slug: 'apartment-moving'    },
      { name: 'Home Moving',         slug: 'home-moving'         },
      { name: 'Office Moving',       slug: 'office-moving'       },
      { name: 'Long-Distance Moving',slug: 'long-distance-moving'},
      { name: 'Same-Day Moving',     slug: 'same-day-moving'     },
      { name: 'Last-Minute Moving',  slug: 'last-minute-moving'  },
      { name: 'Local Moving',        slug: 'local-moving'        },
      { name: 'Labor-Only Moving',   slug: 'labor-only-moving'   },
      { name: 'Senior Moving',       slug: 'senior-moving'       },
      { name: 'Storage Moving',      slug: 'storage-moving'      },
      { name: 'Furniture Moving',    slug: 'furniture-moving'    },
      { name: 'Dorm Moving',         slug: 'dorm-moving'         },
    ],
  },
  {
    slug: 'delivery',
    name: 'Delivery',
    icon: '📦',
    description:
      'Same-day furniture delivery, appliance delivery, and large-item transport. No truck rental, no asking favors. We pick it up and bring it to you, fully insured.',
    services: [
      { name: 'Furniture Delivery',   slug: 'furniture-delivery'   },
      { name: 'Couch Delivery',       slug: 'couch-delivery'       },
      { name: 'Mattress Delivery',    slug: 'mattress-delivery'    },
      { name: 'Appliance Delivery',   slug: 'appliance-delivery'   },
      { name: 'Marketplace Delivery', slug: 'marketplace-delivery' },
      { name: 'White Glove Delivery', slug: 'white-glove-delivery' },
      { name: 'Same-Day Delivery',    slug: 'same-day-delivery'    },
      { name: 'Retail Store Delivery',slug: 'retail-store-delivery'},
      { name: 'Large Item Delivery',  slug: 'large-item-delivery'  },
      { name: 'Facebook Marketplace', slug: 'facebook-marketplace' },
      { name: 'Multi-Stop Delivery',  slug: 'multi-stop-delivery'  },
      { name: 'Store to Apartment',   slug: 'store-to-apartment'   },
    ],
  },
  {
    slug: 'junk-removal',
    name: 'Junk Removal',
    icon: '🗑️',
    description:
      'Same-day junk removal, furniture disposal, appliance removal, and full property cleanouts. We haul it, recycle what we can, and keep as much out of the landfill as possible.',
    services: [
      { name: 'Furniture Removal',  slug: 'furniture-removal'  },
      { name: 'Couch Removal',      slug: 'couch-removal'      },
      { name: 'Mattress Removal',   slug: 'mattress-removal'   },
      { name: 'Appliance Removal',  slug: 'appliance-removal'  },
      { name: 'E-Waste Removal',    slug: 'e-waste-removal'    },
      { name: 'Construction Debris',slug: 'construction-debris'},
      { name: 'Garage Cleanout',    slug: 'garage-cleanout'    },
      { name: 'Estate Cleanout',    slug: 'estate-cleanout'    },
      { name: 'Property Cleanout',  slug: 'property-cleanout'  },
      { name: 'Hoarder Cleanout',   slug: 'hoarder-cleanout'   },
      { name: 'Yard Waste',         slug: 'yard-waste'         },
      { name: 'Donation Pickup',    slug: 'donation-pickup'    },
    ],
  },
]

// SEO intro paragraph — shown above the cards (matches Muvr's keyword-rich blurb)
const SEO_INTRO = (
  <p className="seo-intro">
    Need <strong>movers</strong>? We are the fastest way to book{' '}
    <strong>local moving services</strong>,{' '}
    <strong>same-day furniture delivery</strong>, and{' '}
    <strong>junk removal</strong> across Los Angeles, Chicago, Houston, Dallas,
    Columbus, and 100+ cities in California, Illinois, Ohio, and Texas. When you
    search for <strong>movers near me</strong>, we are what shows up. Vetted,
    insured pros. Flat-rate pricing. Book{' '}
    <strong>trusted local movers</strong> in 60 seconds. No phone calls, no surprises.
  </p>
)

export default function WhatWeHandleSection({ categories }) {
  // Use passed-in categories from API if available, fallback to static data
  const data = categories?.length ? categories.map(cat => {
    const fallback = CATEGORY_DATA.find(c => c.slug === cat.slug) || CATEGORY_DATA[0]
    return { ...fallback, ...cat, services: cat.services || fallback.services }
  }) : CATEGORY_DATA

  return (
    <section className="wwh-section">
      <div className="container">

        {/* SEO keyword intro paragraph */}
        <div className="seo-intro-wrap">
          {SEO_INTRO}
        </div>

        {/* Section heading */}
        <h2 className="wwh-heading">What we handle.</h2>

        {/* 3 category cards */}
        <div className="cards-grid">
          {data.map((cat) => (
            <div key={cat.slug} className="cat-card">
              {/* Gold top border accent */}
              <div className="card-accent" aria-hidden="true" />

              {/* Icon */}
              <div className="card-icon" aria-hidden="true">{cat.icon}</div>

              {/* Title */}
              <h3 className="card-title">{cat.name}</h3>

              {/* Description */}
              <p className="card-desc">{cat.description}</p>

              {/* Divider */}
              <div className="card-divider" aria-hidden="true" />

              {/* Service pills */}
              <div className="pills-grid">
                {cat.services.map((svc) => (
                  <Link
                    key={svc.slug}
                    href={`/${cat.slug}/${svc.slug}`}
                    className="pill"
                  >
                    {svc.name}
                  </Link>
                ))}
              </div>

              {/* View all link */}
              <Link href={`/${cat.slug}`} className="view-all-link">
                View all {cat.name.toLowerCase()} services →
              </Link>
            </div>
          ))}
        </div>

        {/* See Prices CTA */}
        <div className="cta-row">
          <Link href="/book" className="btn-see-prices">
            See Prices
          </Link>
        </div>

      </div>

      <style jsx>{`
        .wwh-section {
          padding: 64px 0 80px;
          background: #fff;
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* ── SEO intro ── */
        .seo-intro-wrap {
          max-width: 760px;
          margin: 0 auto 64px;
          text-align: center;
        }

        :global(.seo-intro) {
          color: #6b7280;
          font-size: 15.5px;
          line-height: 1.8;
        }

        :global(.seo-intro strong) {
          color: #1e2139;
          font-weight: 700;
        }

        /* ── Heading ── */
        .wwh-heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          color: #1e2139;
          text-align: center;
          margin-bottom: 48px;
          letter-spacing: -0.02em;
        }

        /* ── Cards grid ── */
        .cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 48px;
          align-items: start;
        }

        /* ── Individual card ── */
        .cat-card {
          background: #fff;
          border: 1.5px solid #e5e7eb;
          border-radius: 16px;
          padding: 36px 28px 28px;
          display: flex;
          flex-direction: column;
          gap: 0;
          position: relative;
          overflow: hidden;
          transition: box-shadow 0.2s, transform 0.2s;
        }

        .cat-card:hover {
          box-shadow: 0 8px 32px rgba(255 196 37 / 0.12);
          transform: translateY(-3px);
        }

        /* Gold top accent bar */
        .card-accent {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: linear-gradient(90deg, #ffc425, #ffd666);
          border-radius: 16px 16px 0 0;
        }

        /* Icon */
        .card-icon {
          font-size: 48px;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 72px;
          height: 72px;
          background: #fffbec;
          border-radius: 16px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Title */
        .card-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.5rem;
          font-weight: 800;
          color: #1e2139;
          text-align: center;
          margin-bottom: 16px;
        }

        /* Description */
        .card-desc {
          color: #6b7280;
          font-size: 14.5px;
          line-height: 1.7;
          text-align: left;
          margin-bottom: 24px;
        }

        /* Divider */
        .card-divider {
          height: 1px;
          background: #e5e7eb;
          margin-bottom: 20px;
        }

        /* Pills */
        .pills-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 24px;
        }

        .pill {
          display: inline-block;
          padding: 6px 14px;
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 500;
          color: #374151;
          text-decoration: none;
          white-space: nowrap;
          transition: background 0.15s, border-color 0.15s, color 0.15s;
        }

        .pill:hover {
          background: #fffbec;
          border-color: #ffc425;
          color: #1e2139;
        }

        /* View all link */
        .view-all-link {
          display: inline-flex;
          align-items: center;
          color: #ffc425;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          margin-top: auto;
          transition: color 0.15s, gap 0.15s;
          gap: 4px;
        }

        .view-all-link:hover {
          color: #e6b020;
          gap: 8px;
        }

        /* ── See Prices CTA ── */
        .cta-row {
          display: flex;
          justify-content: center;
          padding-top: 8px;
        }

        .btn-see-prices {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #1e2139;
          color: #ffc425;
          font-family: 'DM Sans', sans-serif;
          font-size: 16px;
          font-weight: 800;
          padding: 16px 48px;
          border-radius: 999px;
          text-decoration: none;
          letter-spacing: 0.01em;
          transition: background 0.15s, transform 0.1s, box-shadow 0.15s;
        }

        .btn-see-prices:hover {
          background: #2a2f4a;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(30 33 57 / 0.25);
        }

        /* ── Responsive ── */
        @media (max-width: 960px) {
          .cards-grid {
            grid-template-columns: 1fr;
            max-width: 540px;
            margin-left: auto;
            margin-right: auto;
          }
        }

        @media (max-width: 640px) {
          .wwh-heading { font-size: 2rem; }
          .cat-card { padding: 28px 20px 24px; }
          .card-icon { font-size: 36px; width: 56px; height: 56px; }
        }
      `}</style>
    </section>
  )
}