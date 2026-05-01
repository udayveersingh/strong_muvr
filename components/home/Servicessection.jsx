'use client'

// components/home/ServicesSection.jsx
import Link from 'next/link'

const SERVICES = {
  delivery: [
    { name: 'Furniture Delivery',   slug: 'furniture-delivery',   icon: '🛋️' },
    { name: 'Appliance Delivery',   slug: 'appliance-delivery',   icon: '📦' },
    { name: 'Mattress Delivery',    slug: 'mattress-delivery',    icon: '🛏️' },
    { name: 'IKEA Delivery',        slug: 'ikea-delivery',        icon: '🪑' },
    { name: 'TV Delivery',          slug: 'tv-delivery',          icon: '📺' },
    { name: 'Store Delivery',       slug: 'store-delivery',       icon: '🛒' },
    { name: 'Big Box Delivery',     slug: 'big-box-delivery',     icon: '🏪' },
    { name: 'Large Item Delivery',  slug: 'large-item-delivery',  icon: '📫' },
    { name: 'Same-Day Delivery',    slug: 'same-day-delivery',    icon: '⚡' },
    { name: 'Apartment Delivery',   slug: 'apartment-delivery',   icon: '🏠' },
    { name: 'Assembly Delivery',    slug: 'assembly-delivery',    icon: '🔧' },
    { name: 'Fridge Delivery',      slug: 'fridge-delivery',      icon: '❄️' },
    { name: 'Couch Delivery',       slug: 'couch-delivery',       icon: '🛋️' },
    { name: 'Curbside Delivery',    slug: 'curbside-delivery',    icon: '🚪' },
    { name: 'Office Delivery',      slug: 'office-delivery',      icon: '🏢' },
    { name: 'Washer Delivery',      slug: 'washer-delivery',      icon: '🧺' },
    { name: 'Piano Delivery',       slug: 'piano-delivery',       icon: '🎹' },
    { name: 'Hauling',              slug: 'hauling',              icon: '🚛' },
    { name: 'White Glove Delivery', slug: 'white-glove-delivery', icon: '🤍' },
    { name: 'Pickup & Delivery',    slug: 'pickup-and-delivery',  icon: '📍' },
    { name: 'Home Depot Delivery',  slug: 'home-depot-delivery',  icon: '🏗️' },
    { name: "Lowe's Delivery",      slug: 'lowes-delivery',       icon: '🔨' },
    { name: 'Item Pickup',          slug: 'item-pickup',          icon: '🛍️' },
    { name: 'Costco Delivery',      slug: 'costco-delivery',      icon: '🏬' },
  ],
  moving: [
    { name: 'Apartment Moving',     slug: 'apartment-moving',     icon: '🏠' },
    { name: 'Home Moving',          slug: 'home-moving',          icon: '🏡' },
    { name: 'Office Moving',        slug: 'office-moving',        icon: '🏢' },
    { name: 'Long-Distance Moving', slug: 'long-distance-moving', icon: '🗺️' },
    { name: 'Same-Day Moving',      slug: 'same-day-moving',      icon: '⚡' },
    { name: 'Last-Minute Moving',   slug: 'last-minute-moving',   icon: '⏰' },
    { name: 'Local Moving',         slug: 'local-moving',         icon: '📍' },
    { name: 'Labor-Only Moving',    slug: 'labor-only-moving',    icon: '💪' },
    { name: 'Senior Moving',        slug: 'senior-moving',        icon: '🤝' },
    { name: 'Furniture Moving',     slug: 'furniture-moving',     icon: '🛋️' },
    { name: 'Storage Moving',       slug: 'storage-moving',       icon: '📦' },
    { name: 'Dorm Moving',          slug: 'dorm-moving',          icon: '🎓' },
  ],
  'junk-removal': [
    { name: 'Furniture Removal',    slug: 'furniture-removal',    icon: '🛋️' },
    { name: 'Couch Removal',        slug: 'couch-removal',        icon: '🛋️' },
    { name: 'Mattress Removal',     slug: 'mattress-removal',     icon: '🛏️' },
    { name: 'Appliance Removal',    slug: 'appliance-removal',    icon: '📦' },
    { name: 'E-Waste Removal',      slug: 'e-waste-removal',      icon: '💻' },
    { name: 'Construction Debris',  slug: 'construction-debris',  icon: '🏗️' },
    { name: 'Garage Cleanout',      slug: 'garage-cleanout',      icon: '🏠' },
    { name: 'Estate Cleanout',      slug: 'estate-cleanout',      icon: '🏚️' },
    { name: 'Yard Waste',           slug: 'yard-waste',           icon: '🌿' },
    { name: 'Donation Pickup',      slug: 'donation-pickup',      icon: '❤️' },
  ],
}

export default function ServicesSection({ categories = [] }) {
  return (
    <section className="services-section">
      <div className="container">
        <div className="section-header">
          <h2>Every Type of Service, Handled</h2>
          <p className="section-sub">From a single piece of furniture to a full home move, we have a service for every need.</p>
        </div>

        {categories.map((cat) => {
          const services = cat.services || SERVICES[cat.slug] || []
          return (
            <div key={cat.slug} className="category-block">
              <div className="category-header">
                <h3 className="category-title">
                  <span className="cat-icon" aria-hidden="true">{cat.icon}</span>
                  {cat.name}
                </h3>
                <Link href={`/${cat.slug}`} className="view-all">View all {cat.name} services →</Link>
              </div>
              <div className="services-grid">
                {services.map((svc) => (
                  <Link key={svc.slug} href={`/${cat.slug}/${svc.slug}`} className="service-card">
                    <span className="svc-icon" aria-hidden="true">{svc.icon}</span>
                    <div className="svc-info">
                      <span className="svc-name">{svc.name}</span>
                      <span className="svc-cta">Book in 60 seconds</span>
                    </div>
                    <span className="svc-arrow" aria-hidden="true">›</span>
                  </Link>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      <style jsx>{`
        .services-section { padding: 80px 0; background: #f9fafb; }
        .container { max-width: 1280px; margin: 0 auto; padding: 0 24px; }
        .section-header { text-align: center; margin-bottom: 56px; }
        .section-header h2 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.75rem, 3.5vw, 2.4rem);
          font-weight: 800; color: #1e2139; margin-bottom: 12px;
        }
        .section-sub { color: #6b7280; font-size: 17px; max-width: 500px; margin: 0 auto; }
        .category-block { margin-bottom: 52px; }
        .category-block:last-child { margin-bottom: 0; }
        .category-header {
          display: flex; align-items: center;
          justify-content: space-between; margin-bottom: 20px; gap: 12px;
        }
        .category-title {
          font-family: 'Syne', sans-serif; font-size: 1.25rem;
          font-weight: 700; color: #1e2139;
          display: flex; align-items: center; gap: 10px; margin: 0;
        }
        .cat-icon { font-size: 22px; }
        .view-all {
          color: #ffc425; font-size: 14px; font-weight: 700;
          text-decoration: none; white-space: nowrap; transition: color 0.15s;
        }
        .view-all:hover { color: #e6b020; }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 12px;
        }
        .service-card {
          display: flex; align-items: center; gap: 12px;
          background: #fff; border: 1.5px solid #e5e7eb;
          border-radius: 12px; padding: 14px 16px;
          text-decoration: none;
          transition: border-color 0.15s, box-shadow 0.15s, transform 0.15s;
        }
        .service-card:hover {
          border-color: #ffc425;
          box-shadow: 0 4px 16px rgba(255 196 37 / 0.2);
          transform: translateY(-2px);
        }
        .svc-icon {
          font-size: 24px; flex-shrink: 0;
          width: 40px; height: 40px;
          display: flex; align-items: center; justify-content: center;
          background: #fffbec; border-radius: 8px;
        }
        .svc-info { flex: 1; display: flex; flex-direction: column; gap: 2px; min-width: 0; }
        .svc-name { font-size: 14px; font-weight: 600; color: #1e2139; line-height: 1.3; }
        .svc-cta  { font-size: 12px; color: #9ca3af; }
        .svc-arrow { color: #d1d5db; font-size: 20px; flex-shrink: 0; transition: color 0.15s, transform 0.15s; }
        .service-card:hover .svc-arrow { color: #ffc425; transform: translateX(2px); }
        @media (max-width: 640px) {
          .services-grid { grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); }
          .category-header { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </section>
  )
}