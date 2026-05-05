// lib/categoryData.js
// Static content per category — drives all text on category pages
// When a new category is added to DB, add its content block here too
// All other page logic (services, cities) still comes from API dynamically

export const CATEGORY_CONTENT = {
  moving: {
    slug: 'moving',
    name: 'Moving',
    icon: '🚛',

    // Hero
    heroHeading: 'Moving Services: Local,\nLong-Distance & Same-Day',
    heroSub:
      'Book insured, background-checked movers in 60 seconds. Same-day availability in major metros nationwide. Transparent rates. Zero hidden fees.',

    // SEO meta
    metaTitle: 'Moving Services — Local, Long-Distance & Same-Day | Muvr',
    metaDesc:
      'Book vetted, insured movers in 60 seconds. Local apartment moves, long-distance moving, same-day movers. Flat-rate pricing in 1,000+ cities.',

    // Tabs for booking widget (override default)
    bookingTabs: ['moving', 'delivery', 'junk-removal'],

      // Breadcrumb intro paragraph (shown below hero)
    introParagraph:
      'We connect you with insured, professional moving teams across California, Illinois, Ohio, Texas, and beyond. Whether it is a studio apartment, a full home relocation, or a long-distance move, we handle it with care. Transparent pricing, same-day availability, zero hidden fees.',

    // Section headings
    servicesHeading: 'Every Type of Move, Handled',
    servicesSub: 'From studio apartments to full home relocations — flat-rate pricing on every job.',

    howItWorksHeading: 'How Moving Works',
    trustHeading: 'Why Choose Us for Moving',

    // Category-specific trust points
    trustPoints: [
      { icon: '🛡️', title: 'Fully Insured', desc: 'Every move is covered. Your belongings are protected from pickup to delivery.' },
      { icon: '📋', title: 'Background-Checked', desc: 'Every mover is vetted, background-checked, and reviewed by real customers.' },
      { icon: '💰', title: 'Flat-Rate Pricing', desc: 'See your exact price before you book. No hourly surprises ever.' },
      { icon: '⚡', title: 'Same-Day Available', desc: 'Need to move today? Book now and get matched within hours.' },
    ],
  },

  delivery: {
    slug: 'delivery',
    name: 'Delivery',
    icon: '📦',

    heroHeading: 'Large Item Delivery,\nDone Right',
    heroSub:
      'From furniture to appliances to marketplace pickups — we deliver anything, anywhere. Book in 60 seconds. Flat-rate pricing. No truck rental needed.',

    metaTitle: 'Large Item Delivery Service — Furniture, Appliances & More | Muvr',
    metaDesc:
      'Same-day furniture delivery, appliance delivery, and large-item transport. No truck rental. Vetted, insured pros. Flat-rate pricing in 1,000+ cities.',

    bookingTabs: ['delivery', 'moving', 'junk-removal'],

      // Breadcrumb intro paragraph (shown below hero)
    introParagraph:
      'We connect you with insured, professional moving teams across California, Illinois, Ohio, Texas, and beyond. Whether it is a studio apartment, a full home relocation, or a long-distance move, we handle it with care. Transparent pricing, same-day availability, zero hidden fees.',

    servicesHeading: 'Every Type of Delivery, Handled',
    servicesSub: 'From a single piece of furniture to a full store pickup — we have a delivery service for every item.',

    howItWorksHeading: 'How Delivery Works',
    trustHeading: 'Why Choose Us for Delivery',

    trustPoints: [
      { icon: '🚚', title: 'We Pick It Up', desc: 'No truck rental, no asking favors. We pick up your item and bring it to you.' },
      { icon: '🤍', title: 'White Glove Option', desc: 'Need extra care? Our white glove service wraps, carries, and places your items.' },
      { icon: '💰', title: 'Flat-Rate Pricing', desc: 'One price locked in before we arrive. No hourly rates, no hidden fees.' },
      { icon: '⚡', title: 'Same-Day Available', desc: 'Need it today? Book online and get matched with an available driver fast.' },
    ],
  },

  'junk-removal': {
    slug: 'junk-removal',
    name: 'Junk Removal',
    icon: '🗑️',

    heroHeading: 'Junk Removal Made\nFast & Easy',
    heroSub:
      'Same-day junk removal, furniture disposal, appliance removal, and full property cleanouts. We haul it, recycle what we can. Flat-rate pricing, no surprises.',

    metaTitle: 'Junk Removal Service — Same-Day Pickup & Hauling | Muvr',
    metaDesc:
      'Book same-day junk removal in 60 seconds. Furniture, appliances, estate cleanouts, and more. Vetted pros, flat-rate pricing in 1,000+ cities.',

    bookingTabs: ['junk-removal', 'delivery', 'moving'],

      // Breadcrumb intro paragraph (shown below hero)
    introParagraph:
      'We connect you with insured, professional moving teams across California, Illinois, Ohio, Texas, and beyond. Whether it is a studio apartment, a full home relocation, or a long-distance move, we handle it with care. Transparent pricing, same-day availability, zero hidden fees.',

    servicesHeading: 'Every Type of Junk Removal, Handled',
    servicesSub: 'From a single couch to a full property cleanout — we handle jobs of any size.',

    howItWorksHeading: 'How Junk Removal Works',
    trustHeading: 'Why Choose Us for Junk Removal',

    trustPoints: [
      { icon: '♻️', title: 'We Recycle', desc: 'We haul it and recycle or donate what we can to keep it out of the landfill.' },
      { icon: '📋', title: 'No Hidden Dump Fees', desc: 'Your flat-rate quote includes all disposal fees. No surprises at the end.' },
      { icon: '⚡', title: 'Same-Day Available', desc: 'Need it gone today? Book now and a team shows up fast.' },
      { icon: '🏠', title: 'Any Size Job', desc: 'One couch or a full property cleanout — same great flat-rate service.' },
    ],
  },
}

// Helper — get content for a category slug, fallback to delivery
export function getCategoryContent(slug) {
    console.log("slug coming ;;;;;;;", slug)
  return CATEGORY_CONTENT[slug] || CATEGORY_CONTENT['delivery']
}

// All valid category slugs — used in generateStaticParams
export const CATEGORY_SLUGS = Object.keys(CATEGORY_CONTENT)