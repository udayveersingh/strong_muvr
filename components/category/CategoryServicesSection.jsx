'use client'

// components/category/CategoryServicesSection.jsx
// Matches screenshot: eyebrow pill, heading, subtitle, 6-col service card grid
// Services are dynamic per category — passed from page.js

import Link from 'next/link'

// Fallback services per category if API not ready yet
const FALLBACK_SERVICES = {
  moving: [
    { name: 'Apartment Movers',      slug: 'apartment-movers',      icon: '🏠' },
    { name: 'Appliance Movers',      slug: 'appliance-movers',      icon: '📦' },
    { name: 'College Movers',        slug: 'college-movers',        icon: '🎓' },
    { name: 'Commercial Movers',     slug: 'commercial-movers',     icon: '🏢' },
    { name: 'Condo Movers',          slug: 'condo-movers',          icon: '🏙️' },
    { name: 'Full Service Movers',   slug: 'full-service-movers',   icon: '⭐' },
    { name: 'Furniture Movers',      slug: 'furniture-movers',      icon: '🛋️' },
    { name: 'House Movers',          slug: 'house-movers',          icon: '🏡' },
    { name: 'Interstate Movers',     slug: 'interstate-movers',     icon: '🗺️' },
    { name: 'Labor-Only Movers',     slug: 'labor-only-movers',     icon: '💪' },
    { name: 'Last-Minute Movers',    slug: 'last-minute-movers',    icon: '⚡' },
    { name: 'Loading & Unloading',   slug: 'loading-unloading',     icon: '📫' },
    { name: 'Local Movers',          slug: 'local-movers',          icon: '🚛' },
    { name: 'Long-Distance Movers',  slug: 'long-distance-movers',  icon: '🛣️' },
    { name: 'Move-Out Movers',       slug: 'move-out-movers',       icon: '🚀' },
    { name: 'Moving Cost Guide',     slug: 'moving-cost-guide',     icon: '💰' },
    { name: 'Multi-Stop Movers',     slug: 'multi-stop-movers',     icon: '📍' },
    { name: 'Office Movers',         slug: 'office-movers',         icon: '🏢' },
    { name: 'Packing Services',      slug: 'packing-services',      icon: '📦' },
    { name: 'Residential Movers',    slug: 'residential-movers',    icon: '🏘️' },
    { name: 'Same-Day Movers',       slug: 'same-day-movers',       icon: '⚡' },
    { name: 'Senior Movers',         slug: 'senior-movers',         icon: '🤝' },
    { name: 'Storage Movers',        slug: 'storage-movers',        icon: '🗄️' },
    { name: 'Studio Movers',         slug: 'studio-movers',         icon: '📍' },
  ],
  delivery: [
    { name: 'Furniture Delivery',    slug: 'furniture-delivery',    icon: '🛋️' },
    { name: 'Appliance Delivery',    slug: 'appliance-delivery',    icon: '📦' },
    { name: 'Mattress Delivery',     slug: 'mattress-delivery',     icon: '🛏️' },
    { name: 'IKEA Delivery',         slug: 'ikea-delivery',         icon: '🪑' },
    { name: 'TV Delivery',           slug: 'tv-delivery',           icon: '📺' },
    { name: 'Store Delivery',        slug: 'store-delivery',        icon: '🛒' },
    { name: 'Big Box Delivery',      slug: 'big-box-delivery',      icon: '🏪' },
    { name: 'Large Item Delivery',   slug: 'large-item-delivery',   icon: '📫' },
    { name: 'Same-Day Delivery',     slug: 'same-day-delivery',     icon: '⚡' },
    { name: 'Apartment Delivery',    slug: 'apartment-delivery',    icon: '🏠' },
    { name: 'Assembly Delivery',     slug: 'assembly-delivery',     icon: '🔧' },
    { name: 'Fridge Delivery',       slug: 'fridge-delivery',       icon: '❄️' },
    { name: 'Couch Delivery',        slug: 'couch-delivery',        icon: '🛋️' },
    { name: 'Curbside Delivery',     slug: 'curbside-delivery',     icon: '🚪' },
    { name: 'Office Delivery',       slug: 'office-delivery',       icon: '🏢' },
    { name: 'Washer Delivery',       slug: 'washer-delivery',       icon: '🧺' },
    { name: 'Piano Delivery',        slug: 'piano-delivery',        icon: '🎹' },
    { name: 'Hauling',               slug: 'hauling',               icon: '🚛' },
    { name: "Lowe's Delivery",       slug: 'lowes-delivery',        icon: '🔨' },
    { name: 'Home Depot Delivery',   slug: 'home-depot-delivery',   icon: '🏗️' },
    { name: 'Item Pickup',           slug: 'item-pickup',           icon: '🛍️' },
    { name: 'White Glove Delivery',  slug: 'white-glove-delivery',  icon: '🤍' },
    { name: 'Costco Delivery',       slug: 'costco-delivery',       icon: '🏬' },
    { name: 'Pickup & Delivery',     slug: 'pickup-and-delivery',   icon: '📍' },
  ],
  'junk-removal': [
    { name: 'Furniture Removal',     slug: 'furniture-removal',     icon: '🛋️' },
    { name: 'Couch Removal',         slug: 'couch-removal',         icon: '🛋️' },
    { name: 'Mattress Removal',      slug: 'mattress-removal',      icon: '🛏️' },
    { name: 'Appliance Removal',     slug: 'appliance-removal',     icon: '📦' },
    { name: 'E-Waste Removal',       slug: 'e-waste-removal',       icon: '💻' },
    { name: 'Construction Debris',   slug: 'construction-debris',   icon: '🏗️' },
    { name: 'Garage Cleanout',       slug: 'garage-cleanout',       icon: '🏠' },
    { name: 'Estate Cleanout',       slug: 'estate-cleanout',       icon: '🏚️' },
    { name: 'Property Cleanout',     slug: 'property-cleanout',     icon: '🏘️' },
    { name: 'Hoarder Cleanout',      slug: 'hoarder-cleanout',      icon: '🧹' },
    { name: 'Yard Waste',            slug: 'yard-waste',            icon: '🌿' },
    { name: 'Donation Pickup',       slug: 'donation-pickup',       icon: '❤️' },
    { name: 'Hot Tub Removal',       slug: 'hot-tub-removal',       icon: '🛁' },
    { name: 'Shed Removal',          slug: 'shed-removal',          icon: '🏠' },
    { name: 'Tire Removal',          slug: 'tire-removal',          icon: '🚗' },
    { name: 'TV Disposal',           slug: 'tv-disposal',           icon: '📺' },
    { name: 'Refrigerator Removal',  slug: 'refrigerator-removal',  icon: '❄️' },
    { name: 'Piano Removal',         slug: 'piano-removal',         icon: '🎹' },
  ],
}

export default function CategoryServicesSection({ categorySlug, content, services }) {
  // Use API-provided services if available, else fallback
  const serviceList = services?.length
    ? services
    : (FALLBACK_SERVICES[categorySlug] || [])

  // Eyebrow label e.g. "ALL MOVING SERVICES"
  const eyebrowLabel = `ALL ${content.name.toUpperCase()} SERVICES`

  return (
    <section className="cat-services">
      <div className="container">

        {/* Eyebrow + heading + sub */}
        <div className="section-header">
          <span className="eyebrow">{eyebrowLabel}</span>
          <h2>{content.servicesHeading}</h2>
          <p className="section-sub">{content.servicesSub}</p>
        </div>

        {/* 6-column service grid */}
        <div className="services-grid">
          {serviceList.map((svc) => (
            <Link
              key={svc.slug}
              href={`/${categorySlug}/${svc.slug}`}
              className="service-card"
            >
              <span className="svc-icon" aria-hidden="true">{svc.icon}</span>
              <div className="svc-info">
                <span className="svc-name">{svc.name}</span>
                <span className="svc-sub">Book in 60 seconds</span>
              </div>
            </Link>
          ))}
        </div>

      </div>

      <style jsx>{`
        .cat-services {
          padding: 72px 0 80px;
          background: #f4f5f9;
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* ── Header ── */
        .section-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .eyebrow {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: #1e2139;
          background: #fff3cc;
          border: 1px solid #ffd666;
          padding: 5px 16px;
          border-radius: 999px;
          margin-bottom: 18px;
        }

        .section-header h2 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.75rem, 3.5vw, 2.5rem);
          font-weight: 800;
          color: #1e2139;
          margin-bottom: 12px;
          letter-spacing: -0.02em;
        }

        .section-sub {
          color: #6b7280;
          font-size: 16px;
          line-height: 1.65;
          max-width: 540px;
          margin: 0 auto;
        }

        /* ── Grid — 6 columns ── */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 1px;
          background: #e5e7eb;
          border: 1px solid #e5e7eb;
          border-radius: 14px;
          overflow: hidden;
        }

        /* ── Card ── */
        .service-card {
          display: flex;
          align-items: center;
          gap: 12px;
          background: #fff;
          padding: 16px 14px;
          text-decoration: none;
          transition: background 0.15s;
          min-height: 68px;
        }

        .service-card:hover {
          background: #fffbec;
        }

        .service-card:hover .svc-name {
          color: #ffc425;
        }

        /* Icon */
        .svc-icon {
          font-size: 22px;
          flex-shrink: 0;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Text */
        .svc-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
          min-width: 0;
        }

        .svc-name {
          font-size: 13px;
          font-weight: 600;
          color: #1e2139;
          line-height: 1.3;
          transition: color 0.15s;
        }

        .svc-sub {
          font-size: 11px;
          color: #9ca3af;
          white-space: nowrap;
        }

        /* ── Responsive ── */
        @media (max-width: 1100px) {
          .services-grid { grid-template-columns: repeat(4, 1fr); }
        }

        @media (max-width: 768px) {
          .services-grid { grid-template-columns: repeat(3, 1fr); }
        }

        @media (max-width: 480px) {
          .services-grid { grid-template-columns: repeat(2, 1fr); }
          .cat-services { padding: 48px 0 56px; }
        }
      `}</style>
    </section>
  )
}