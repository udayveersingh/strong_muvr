// components/shared/Header.jsx
import Link from 'next/link'
import { getCategories } from '@/lib/api'
import MobileMenu from './MobileMenu'

export default async function Header() {
  const categories = await getCategories()

  return (
    <header className="header">
      <div className="header-inner">

        <Link href="/" className="logo" aria-label="Go to homepage">
          <span className="logo-text">Muvr</span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {categories.map((cat) => (
            <Link key={cat.slug} href={`/${cat.slug}`} className="nav-link">
              {cat.name}
            </Link>
          ))}
          <Link href="/business" className="nav-link">Business</Link>
          <Link href="/driver" className="nav-link">Driver</Link>
        </nav>

        <div className="header-actions">
          <a href="tel:+13107308270" className="phone-link">
            +1 (310) 730-8270
          </a>
          <Link href="/book" className="btn-book">
            Book Now
          </Link>
          <MobileMenu categories={categories} />
        </div>

      </div>

    </header>
  )
}