'use client'

// components/city/CityNearby.jsx
// "Moving Near Los Angeles, CA" — nearby cities grid
// Pink pin cards linking to /{category}/{nearby-city-slug}
// Subtitle: "Movers/Delivery/Junk Removal near Los Angeles"

import Link from 'next/link'

// Nearby cities per city slug
const NEARBY_CITIES = {
  'los-angeles-ca': [
    { name: 'Glendale',     slug: 'glendale-ca',     state: 'CA' },
    { name: 'Pasadena',     slug: 'pasadena-ca',     state: 'CA' },
    { name: 'Burbank',      slug: 'burbank-ca',      state: 'CA' },
    { name: 'Santa Monica', slug: 'santa-monica-ca', state: 'CA' },
    { name: 'Inglewood',    slug: 'inglewood-ca',    state: 'CA' },
    { name: 'Long Beach',   slug: 'long-beach-ca',   state: 'CA' },
    { name: 'Torrance',     slug: 'torrance-ca',     state: 'CA' },
    { name: 'Culver City',  slug: 'culver-city-ca',  state: 'CA' },
    { name: 'Alhambra',     slug: 'alhambra-ca',     state: 'CA' },
    { name: 'Downey',       slug: 'downey-ca',       state: 'CA' },
    { name: 'Whittier',     slug: 'whittier-ca',     state: 'CA' },
    { name: 'Pomona',       slug: 'pomona-ca',       state: 'CA' },
  ],
  'new-york-ny': [
    { name: 'Brooklyn',      slug: 'brooklyn-ny',      state: 'NY' },
    { name: 'Queens',        slug: 'queens-ny',         state: 'NY' },
    { name: 'The Bronx',     slug: 'the-bronx-ny',      state: 'NY' },
    { name: 'Hoboken',       slug: 'hoboken-nj',        state: 'NJ' },
    { name: 'Jersey City',   slug: 'jersey-city-nj',    state: 'NJ' },
    { name: 'Yonkers',       slug: 'yonkers-ny',        state: 'NY' },
    { name: 'Newark',        slug: 'newark-nj',         state: 'NJ' },
    { name: 'Stamford',      slug: 'stamford-ct',       state: 'CT' },
    { name: 'White Plains',  slug: 'white-plains-ny',   state: 'NY' },
    { name: 'Long Island',   slug: 'long-island-ny',    state: 'NY' },
    { name: 'Astoria',       slug: 'astoria-ny',        state: 'NY' },
    { name: 'Flushing',      slug: 'flushing-ny',       state: 'NY' },
  ],
  'chicago-il': [
    { name: 'Evanston',    slug: 'evanston-il',    state: 'IL' },
    { name: 'Oak Park',    slug: 'oak-park-il',    state: 'IL' },
    { name: 'Naperville',  slug: 'naperville-il',  state: 'IL' },
    { name: 'Schaumburg',  slug: 'schaumburg-il',  state: 'IL' },
    { name: 'Aurora',      slug: 'aurora-il',      state: 'IL' },
    { name: 'Joliet',      slug: 'joliet-il',      state: 'IL' },
    { name: 'Waukegan',    slug: 'waukegan-il',    state: 'IL' },
    { name: 'Elgin',       slug: 'elgin-il',       state: 'IL' },
    { name: 'Gary',        slug: 'gary-in',        state: 'IN' },
    { name: 'Cicero',      slug: 'cicero-il',      state: 'IL' },
    { name: 'Berwyn',      slug: 'berwyn-il',      state: 'IL' },
    { name: 'Bolingbrook', slug: 'bolingbrook-il', state: 'IL' },
  ],
  'houston-tx': [
    { name: 'Sugar Land',    slug: 'sugar-land-tx',    state: 'TX' },
    { name: 'Katy',          slug: 'katy-tx',          state: 'TX' },
    { name: 'Pearland',      slug: 'pearland-tx',      state: 'TX' },
    { name: 'The Woodlands', slug: 'the-woodlands-tx', state: 'TX' },
    { name: 'Pasadena',      slug: 'pasadena-tx',      state: 'TX' },
    { name: 'Baytown',       slug: 'baytown-tx',       state: 'TX' },
    { name: 'League City',   slug: 'league-city-tx',   state: 'TX' },
    { name: 'Friendswood',   slug: 'friendswood-tx',   state: 'TX' },
    { name: 'Conroe',        slug: 'conroe-tx',        state: 'TX' },
    { name: 'Missouri City', slug: 'missouri-city-tx', state: 'TX' },
    { name: 'Spring',        slug: 'spring-tx',        state: 'TX' },
    { name: 'Cypress',       slug: 'cypress-tx',       state: 'TX' },
  ],
  'dallas-tx': [
    { name: 'Plano',       slug: 'plano-tx',       state: 'TX' },
    { name: 'Frisco',      slug: 'frisco-tx',      state: 'TX' },
    { name: 'McKinney',    slug: 'mckinney-tx',    state: 'TX' },
    { name: 'Irving',      slug: 'irving-tx',      state: 'TX' },
    { name: 'Garland',     slug: 'garland-tx',     state: 'TX' },
    { name: 'Arlington',   slug: 'arlington-tx',   state: 'TX' },
    { name: 'Richardson',  slug: 'richardson-tx',  state: 'TX' },
    { name: 'Allen',       slug: 'allen-tx',       state: 'TX' },
    { name: 'Mesquite',    slug: 'mesquite-tx',    state: 'TX' },
    { name: 'Denton',      slug: 'denton-tx',      state: 'TX' },
    { name: 'Lewisville',  slug: 'lewisville-tx',  state: 'TX' },
    { name: 'Carrollton',  slug: 'carrollton-tx',  state: 'TX' },
  ],
  'miami-fl': [
    { name: 'Fort Lauderdale',   slug: 'fort-lauderdale-fl',   state: 'FL' },
    { name: 'Hialeah',           slug: 'hialeah-fl',           state: 'FL' },
    { name: 'Coral Gables',      slug: 'coral-gables-fl',      state: 'FL' },
    { name: 'Doral',             slug: 'doral-fl',             state: 'FL' },
    { name: 'Aventura',          slug: 'aventura-fl',          state: 'FL' },
    { name: 'Boca Raton',        slug: 'boca-raton-fl',        state: 'FL' },
    { name: 'Hollywood',         slug: 'hollywood-fl',         state: 'FL' },
    { name: 'Pembroke Pines',    slug: 'pembroke-pines-fl',    state: 'FL' },
    { name: 'Miramar',           slug: 'miramar-fl',           state: 'FL' },
    { name: 'West Palm Beach',   slug: 'west-palm-beach-fl',   state: 'FL' },
    { name: 'Homestead',         slug: 'homestead-fl',         state: 'FL' },
    { name: 'North Miami',       slug: 'north-miami-fl',       state: 'FL' },
  ],
  'seattle-wa': [
    { name: 'Bellevue',   slug: 'bellevue-wa',   state: 'WA' },
    { name: 'Redmond',    slug: 'redmond-wa',    state: 'WA' },
    { name: 'Kirkland',   slug: 'kirkland-wa',   state: 'WA' },
    { name: 'Renton',     slug: 'renton-wa',     state: 'WA' },
    { name: 'Kent',       slug: 'kent-wa',       state: 'WA' },
    { name: 'Tacoma',     slug: 'tacoma-wa',     state: 'WA' },
    { name: 'Shoreline',  slug: 'shoreline-wa',  state: 'WA' },
    { name: 'Bothell',    slug: 'bothell-wa',    state: 'WA' },
    { name: 'Everett',    slug: 'everett-wa',    state: 'WA' },
    { name: 'Sammamish',  slug: 'sammamish-wa',  state: 'WA' },
    { name: 'Issaquah',   slug: 'issaquah-wa',   state: 'WA' },
    { name: 'Auburn',     slug: 'auburn-wa',     state: 'WA' },
  ],
  'denver-co': [
    { name: 'Aurora',      slug: 'aurora-co',      state: 'CO' },
    { name: 'Lakewood',    slug: 'lakewood-co',    state: 'CO' },
    { name: 'Englewood',   slug: 'englewood-co',   state: 'CO' },
    { name: 'Arvada',      slug: 'arvada-co',      state: 'CO' },
    { name: 'Westminster', slug: 'westminster-co', state: 'CO' },
    { name: 'Thornton',    slug: 'thornton-co',    state: 'CO' },
    { name: 'Boulder',     slug: 'boulder-co',     state: 'CO' },
    { name: 'Centennial',  slug: 'centennial-co',  state: 'CO' },
    { name: 'Littleton',   slug: 'littleton-co',   state: 'CO' },
    { name: 'Highlands Ranch', slug: 'highlands-ranch-co', state: 'CO' },
    { name: 'Parker',      slug: 'parker-co',      state: 'CO' },
    { name: 'Fort Collins', slug: 'fort-collins-co', state: 'CO' },
  ],
  'atlanta-ga': [
    { name: 'Sandy Springs', slug: 'sandy-springs-ga', state: 'GA' },
    { name: 'Marietta',      slug: 'marietta-ga',      state: 'GA' },
    { name: 'Alpharetta',    slug: 'alpharetta-ga',    state: 'GA' },
    { name: 'Smyrna',        slug: 'smyrna-ga',        state: 'GA' },
    { name: 'Roswell',       slug: 'roswell-ga',       state: 'GA' },
    { name: 'Decatur',       slug: 'decatur-ga',       state: 'GA' },
    { name: 'Dunwoody',      slug: 'dunwoody-ga',      state: 'GA' },
    { name: 'Kennesaw',      slug: 'kennesaw-ga',      state: 'GA' },
    { name: 'Johns Creek',   slug: 'johns-creek-ga',   state: 'GA' },
    { name: 'Peachtree City',slug: 'peachtree-city-ga',state: 'GA' },
    { name: 'Gainesville',   slug: 'gainesville-ga',   state: 'GA' },
    { name: 'Columbus',      slug: 'columbus-ga',      state: 'GA' },
  ],
}

const HEADING = {
  moving:         (city) => `Moving Near ${city.name}, ${city.stateCode}`,
  delivery:       (city) => `Delivery Near ${city.name}, ${city.stateCode}`,
  'junk-removal': (city) => `Junk Removal Near ${city.name}, ${city.stateCode}`,
}

const EYEBROW = {
  moving:         (city) => `Greater ${city.name} Coverage`.toUpperCase(),
  delivery:       (city) => `Greater ${city.name} Coverage`.toUpperCase(),
  'junk-removal': (city) => `Greater ${city.name} Coverage`.toUpperCase(),
}

const CARD_SUB = {
  moving:         (city) => `Movers near ${city.name}`,
  delivery:       (city) => `Delivery near ${city.name}`,
  'junk-removal': (city) => `Junk Removal near ${city.name}`,
}

const SUB = {
  moving:         (city) => `We also serve these cities near ${city.name}. Click to see moving services and pricing.`,
  delivery:       (city) => `We also serve these cities near ${city.name}. Click to see delivery services and pricing.`,
  'junk-removal': (city) => `We also serve these cities near ${city.name}. Click to see junk removal services and pricing.`,
}

export default function CityNearby({ categorySlug, city }) {
  const nearbyCities = NEARBY_CITIES[city.slug] || []
  if (!nearbyCities.length) return null

  const heading = (HEADING[categorySlug] || HEADING['delivery'])(city)
  const eyebrow = (EYEBROW[categorySlug] || EYEBROW['delivery'])(city)
  const cardSub = (CARD_SUB[categorySlug] || CARD_SUB['delivery'])(city)
  const sub     = (SUB[categorySlug]     || SUB['delivery'])(city)

  return (
    <section className="city-nearby">
      <div className="container">

        {/* Header */}
        <div className="section-header">
          <span className="eyebrow">{eyebrow}</span>
          <h2>{heading}</h2>
          <p className="section-sub">{sub}</p>
        </div>

        {/* Nearby city cards — 6-col grid with pink pin */}
        <div className="nearby-grid">
          {nearbyCities.map((nearby) => (
            <Link
              key={nearby.slug}
              href={`/${categorySlug}/${nearby.slug}`}
              className="nearby-card"
            >
              <span className="pin-icon" aria-hidden="true">
                <svg width="14" height="18" viewBox="0 0 16 20" fill="none">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 5.25 8 12 8 12s8-6.75 8-12c0-4.42-3.58-8-8-8zm0 11a3 3 0 110-6 3 3 0 010 6z" fill="#f43f5e"/>
                </svg>
              </span>
              <div className="nearby-info">
                <span className="nearby-name">{nearby.name}, {nearby.state}</span>
                <span className="nearby-sub">{cardSub}</span>
              </div>
            </Link>
          ))}
        </div>

      </div>

      <style jsx>{`
        .city-nearby {
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
          margin-bottom: 44px;
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
          margin-bottom: 16px;
        }

        .section-header h2 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.75rem, 3.5vw, 2.5rem);
          font-weight: 800;
          color: #1e2139;
          margin-bottom: 10px;
          letter-spacing: -0.02em;
        }

        .section-sub {
          color: #9ca3af;
          font-size: 15px;
          line-height: 1.6;
          max-width: 480px;
          margin: 0 auto;
        }

        /* ── Grid — 6 cols ── */
        .nearby-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 10px;
        }

        /* ── Card ── */
        .nearby-card {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          padding: 14px 14px;
          text-decoration: none;
          transition: border-color 0.15s, box-shadow 0.15s, transform 0.15s;
        }

        .nearby-card:hover {
          border-color: #ffc425;
          box-shadow: 0 4px 14px rgba(255 196 37 / 0.12);
          transform: translateY(-2px);
        }

        .pin-icon {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .nearby-info {
          display: flex;
          flex-direction: column;
          gap: 3px;
          min-width: 0;
        }

        .nearby-name {
          font-size: 13px;
          font-weight: 700;
          color: #1e2139;
          line-height: 1.2;
        }

        .nearby-sub {
          font-size: 11px;
          color: #9ca3af;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* ── Responsive ── */
        @media (max-width: 1100px) {
          .nearby-grid { grid-template-columns: repeat(4, 1fr); }
        }
        @media (max-width: 768px) {
          .nearby-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 480px) {
          .nearby-grid { grid-template-columns: repeat(2, 1fr); }
          .city-nearby { padding: 56px 0; }
        }
      `}</style>
    </section>
  )
}