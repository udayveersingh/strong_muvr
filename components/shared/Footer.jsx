// components/shared/Footer.jsx
import Link from 'next/link'
import { getCategories, getFeaturedCities } from '@/lib/api'

const DEFAULT_SERVICES = {
  delivery: [
    { name: 'Furniture Delivery', slug: 'furniture-delivery' },
    { name: 'Appliance Delivery', slug: 'appliance-delivery' },
    { name: 'Mattress Delivery',  slug: 'mattress-delivery'  },
    { name: 'Same-Day Delivery',  slug: 'same-day-delivery'  },
    { name: 'White Glove Delivery', slug: 'white-glove-delivery' },
  ],
  moving: [
    { name: 'Apartment Moving',     slug: 'apartment-moving'     },
    { name: 'Home Moving',          slug: 'home-moving'          },
    { name: 'Office Moving',        slug: 'office-moving'        },
    { name: 'Long-Distance Moving', slug: 'long-distance-moving' },
    { name: 'Same-Day Moving',      slug: 'same-day-moving'      },
  ],
  'junk-removal': [
    { name: 'Furniture Removal', slug: 'furniture-removal' },
    { name: 'Appliance Removal', slug: 'appliance-removal' },
    { name: 'Garage Cleanout',   slug: 'garage-cleanout'   },
    { name: 'Estate Cleanout',   slug: 'estate-cleanout'   },
    { name: 'Yard Waste Removal',slug: 'yard-waste-removal'},
  ],
}

export default async function Footer() {
  const [categories, cities] = await Promise.all([
    getCategories(),
    getFeaturedCities(),
  ])
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* Top grid */}
        <div className="footer-grid">
          {/* Brand */}
          <div className="brand-col">
            <Link href="/" className="footer-logo">Muvr</Link>
            <p className="footer-tagline">
              Book vetted movers, delivery pros, and junk removal in 60 seconds.
              Flat-rate pricing. No surprises.
            </p>
            <div className="contact-links">
              <a href="tel:+13107308270">+1 (310) 730-8270</a>
              <a href="mailto:bookings@muvr.io">bookings@muvr.io</a>
            </div>
          </div>

          {/* Dynamic service columns */}
          {categories.map((cat) => (
            <div key={cat.slug} className="link-col">
              <h3 className="col-heading">{cat.name}</h3>
              <ul className="col-links">
                {(cat.topServices || DEFAULT_SERVICES[cat.slug] || []).map((svc) => (
                  <li key={svc.slug}>
                    <Link href={`/${cat.slug}/${svc.slug}`}>{svc.name}</Link>
                  </li>
                ))}
                <li>
                  <Link href={`/${cat.slug}`} className="see-all">
                    View all →
                  </Link>
                </li>
              </ul>
            </div>
          ))}

          {/* Company */}
          <div className="link-col">
            <h3 className="col-heading">Company</h3>
            <ul className="col-links">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/how-it-works">How it works</Link></li>
              <li><Link href="/driver">Drive with us</Link></li>
              <li><Link href="/business">Business</Link></li>
              <li><Link href="/cities">All cities</Link></li>
              <li><Link href="/blog">Blog</Link></li>
            </ul>
          </div>
        </div>

        {/* Cities row */}
        <div className="cities-section">
          <h3 className="col-heading">Available in Top Cities</h3>
          <div className="cities-grid">
            {cities.map((city) => (
              <Link key={city.slug} href={`/delivery/${city.slug}`} className="city-link">
                {city.name}, {city.state}
              </Link>
            ))}
            <Link href="/cities" className="city-link see-all">View all cities →</Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="copyright">© {currentYear} Muvr Inc. All rights reserved.</p>
          <div className="legal-links">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/accessibility">Accessibility</Link>
          </div>
        </div>

      </div>

    </footer>
  )
}