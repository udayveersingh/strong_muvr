'use client'

// components/city/CityNeighborhoods.jsx
// "Service Area" section — neighborhood grid
// 6-col grid of plain bordered cells, no links (just text labels)
// Heading + subtitle include city name

// Neighborhoods per city slug — add more cities as needed
const NEIGHBORHOODS = {
  'los-angeles-ca': [
    'Downtown LA', 'Beverly Hills', 'Santa Monica', 'Hollywood', 'Silver Lake', 'Los Feliz',
    'Pasadena', 'Long Beach', 'Torrance', 'Manhattan Beach', 'Culver City', 'West Hollywood',
  ],
  'new-york-ny': [
    'Manhattan', 'Brooklyn', 'Queens', 'The Bronx', 'Staten Island', 'Harlem',
    'Astoria', 'Hoboken', 'Jersey City', 'Flushing', 'Long Island City', 'Williamsburg',
  ],
  'chicago-il': [
    'Lincoln Park', 'Wicker Park', 'River North', 'Lakeview', 'Hyde Park', 'Pilsen',
    'Evanston', 'Oak Park', 'Naperville', 'Schaumburg', 'Bucktown', 'Logan Square',
  ],
  'houston-tx': [
    'Midtown', 'The Heights', 'Montrose', 'River Oaks', 'Memorial', 'Galleria',
    'Sugar Land', 'Katy', 'Pearland', 'The Woodlands', 'Pasadena', 'Friendswood',
  ],
  'dallas-tx': [
    'Uptown', 'Deep Ellum', 'Oak Cliff', 'Plano', 'Frisco', 'McKinney',
    'Irving', 'Garland', 'Mesquite', 'Arlington', 'Richardson', 'Allen',
  ],
  'miami-fl': [
    'Brickell', 'Wynwood', 'Coral Gables', 'Coconut Grove', 'South Beach', 'Little Havana',
    'Doral', 'Hialeah', 'Aventura', 'Fort Lauderdale', 'Pembroke Pines', 'Hollywood',
  ],
  'phoenix-az': [
    'Scottsdale', 'Tempe', 'Mesa', 'Chandler', 'Gilbert', 'Glendale',
    'Peoria', 'Surprise', 'Goodyear', 'Avondale', 'Paradise Valley', 'Ahwatukee',
  ],
  'seattle-wa': [
    'Capitol Hill', 'Fremont', 'Ballard', 'Queen Anne', 'Bellevue', 'Redmond',
    'Kirkland', 'Renton', 'Kent', 'Tacoma', 'Shoreline', 'Bothell',
  ],
  'denver-co': [
    'Capitol Hill', 'LoDo', 'Highland', 'Cherry Creek', 'Aurora', 'Lakewood',
    'Englewood', 'Arvada', 'Westminster', 'Thornton', 'Boulder', 'Centennial',
  ],
  'atlanta-ga': [
    'Midtown', 'Buckhead', 'Decatur', 'Little Five Points', 'Sandy Springs', 'Marietta',
    'Alpharetta', 'Smyrna', 'Roswell', 'Dunwoody', 'Kennesaw', 'Johns Creek',
  ],
  'boston-ma': [
    'Back Bay', 'South End', 'Beacon Hill', 'Cambridge', 'Somerville', 'Brookline',
    'Newton', 'Quincy', 'Lynn', 'Waltham', 'Medford', 'Malden',
  ],
  'san-francisco-ca': [
    'Mission District', 'Castro', 'SOMA', 'North Beach', 'Pacific Heights', 'Richmond',
    'Oakland', 'Berkeley', 'San Jose', 'Palo Alto', 'Daly City', 'South SF',
  ],
}

// Fallback generic neighborhoods
const FALLBACK_NEIGHBORHOODS = (cityName) => [
  `Downtown ${cityName}`, `North ${cityName}`, `South ${cityName}`,
  `East ${cityName}`,    `West ${cityName}`,   `Central ${cityName}`,
  `${cityName} Heights`, `${cityName} Park`,   `${cityName} Hills`,
  `Old ${cityName}`,     `New ${cityName}`,    `Greater ${cityName}`,
]

const SERVICE_HEADINGS = {
  moving:         (city) => `Moving Services Across ${city.name}`,
  delivery:       (city) => `Delivery Services Across ${city.name}`,
  'junk-removal': (city) => `Junk Removal Across ${city.name}`,
}

export default function CityNeighborhoods({ categorySlug, city }) {
  const neighborhoods = NEIGHBORHOODS[city.slug] || FALLBACK_NEIGHBORHOODS(city.name)
  const heading = (SERVICE_HEADINGS[categorySlug] || SERVICE_HEADINGS['delivery'])(city)

  return (
    <section className="city-neighborhoods">
      <div className="container">

        {/* Header */}
        <div className="section-header">
          <span className="eyebrow">Service Area</span>
          <h2>{heading}</h2>
          <p className="section-sub">
            Serving neighborhoods throughout {city.name}, {city.state}.
          </p>
        </div>

        {/* Neighborhood grid */}
        <div className="neighborhoods-grid">
          {neighborhoods.map((name, i) => (
            <div key={i} className="neighborhood-cell">
              {name}
            </div>
          ))}
        </div>

      </div>

      <style jsx>{`
        .city-neighborhoods {
          padding: 72px 0 80px;
          background: #fff;
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
          text-transform: uppercase;
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
        }

        /* ── Grid — 6 cols, plain bordered cells ── */
        .neighborhoods-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 0;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          overflow: hidden;
        }

        .neighborhood-cell {
          padding: 16px 12px;
          text-align: center;
          font-size: 13.5px;
          font-weight: 600;
          color: #1e2139;
          background: #fafafa;
          border-right: 1px solid #e5e7eb;
          border-bottom: 1px solid #e5e7eb;
          transition: background 0.15s, color 0.15s;
          cursor: default;
        }

        /* Remove right border on last in each row */
        .neighborhood-cell:nth-child(6n) {
          border-right: none;
        }

        /* Remove bottom border on last row */
        .neighborhood-cell:nth-last-child(-n+6) {
          border-bottom: none;
        }

        .neighborhood-cell:hover {
          background: #fffbec;
          color: #ffc425;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .neighborhoods-grid { grid-template-columns: repeat(4, 1fr); }
          .neighborhood-cell:nth-child(6n)  { border-right: 1px solid #e5e7eb; }
          .neighborhood-cell:nth-child(4n)  { border-right: none; }
          .neighborhood-cell:nth-last-child(-n+6) { border-bottom: 1px solid #e5e7eb; }
          .neighborhood-cell:nth-last-child(-n+4) { border-bottom: none; }
        }

        @media (max-width: 640px) {
          .neighborhoods-grid { grid-template-columns: repeat(3, 1fr); }
          .neighborhood-cell:nth-child(4n)  { border-right: 1px solid #e5e7eb; }
          .neighborhood-cell:nth-child(3n)  { border-right: none; }
          .neighborhood-cell:nth-last-child(-n+4) { border-bottom: 1px solid #e5e7eb; }
          .neighborhood-cell:nth-last-child(-n+3) { border-bottom: none; }
          .city-neighborhoods { padding: 56px 0; }
        }

        @media (max-width: 420px) {
          .neighborhoods-grid { grid-template-columns: repeat(2, 1fr); }
          .neighborhood-cell:nth-child(3n)  { border-right: 1px solid #e5e7eb; }
          .neighborhood-cell:nth-child(2n)  { border-right: none; }
        }
      `}</style>
    </section>
  )
}