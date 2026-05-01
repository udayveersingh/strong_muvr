// lib/api.js
// Central place for all API calls used by server components
// Replace BASE_URL with your actual backend URL once set up

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'

// ─── Categories ────────────────────────────────────────────────────────────────
// Returns all top-level categories like Delivery, Moving, Junk Removal
// Each category becomes a nav link and a tab in BookingWidget

export async function getCategories() {
//   try {
//     const res = await fetch(`${BASE_URL}/api/categories`, {
//       next: { revalidate: 3600 }, // cache for 1 hour (ISR)
//     })
//     if (!res.ok) throw new Error('Failed to fetch categories')
//     return res.json()
//   } catch {
    // Fallback static data so the site works even before DB is set up
    return FALLBACK_CATEGORIES
//   }
}

// ─── Cities ────────────────────────────────────────────────────────────────────
// Returns featured cities shown in footer and city search section

export async function getFeaturedCities() {
//   try {
//     const res = await fetch(`${BASE_URL}/api/cities?featured=true`, {
//       next: { revalidate: 3600 },
//     })
//     if (!res.ok) throw new Error('Failed to fetch cities')
//     return res.json()
//   } catch {
    return FALLBACK_CITIES
//   }
}

// ─── Services ──────────────────────────────────────────────────────────────────
// Returns services for a given category slug

export async function getServicesByCategory(categorySlug) {
//   try {
//     const res = await fetch(`${BASE_URL}/api/services?category=${categorySlug}`, {
//       next: { revalidate: 3600 },
//     })
//     if (!res.ok) throw new Error('Failed to fetch services')
//     return res.json()
//   } catch {
    return []
//   }
}

// ─── Fallback data (used until DB/API is ready) ─────────────────────────────

export const FALLBACK_CATEGORIES = [
  {
    id: 1,
    name: 'Delivery',
    slug: 'delivery',
    icon: '🚚',
    description: 'Large item delivery from any store or marketplace',
  },
  {
    id: 2,
    name: 'Moving',
    slug: 'moving',
    icon: '📦',
    description: 'Local and long-distance moving services',
  },
  {
    id: 3,
    name: 'Junk Removal',
    slug: 'junk-removal',
    icon: '🗑️',
    description: 'Same-day junk and furniture removal',
  },
]

export const FALLBACK_CITIES = [
  { id: 1, name: 'Los Angeles', state: 'CA', slug: 'los-angeles-ca' },
  { id: 2, name: 'Houston', state: 'TX', slug: 'houston-tx' },
  { id: 3, name: 'Dallas', state: 'TX', slug: 'dallas-tx' },
  { id: 4, name: 'Miami', state: 'FL', slug: 'miami-fl' },
  { id: 5, name: 'New York City', state: 'NY', slug: 'new-york-city-ny' },
  { id: 6, name: 'Philadelphia', state: 'PA', slug: 'philadelphia-pa' },
  { id: 7, name: 'Chicago', state: 'IL', slug: 'chicago-il' },
  { id: 8, name: 'Atlanta', state: 'GA', slug: 'atlanta-ga' },
  { id: 9, name: 'Seattle', state: 'WA', slug: 'seattle-wa' },
  { id: 10, name: 'Phoenix', state: 'AZ', slug: 'phoenix-az' },
  { id: 11, name: 'Boston', state: 'MA', slug: 'boston-ma' },
  { id: 12, name: 'Denver', state: 'CO', slug: 'denver-co' },
]