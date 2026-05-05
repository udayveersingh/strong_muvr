// app/[category]/page.js
// Single template for /moving, /delivery, /junk-removal
// generateStaticParams pre-renders all 3 at build time
// generateMetadata gives each page unique SEO title + description

import { notFound } from 'next/navigation'
import { getCategoryContent, CATEGORY_SLUGS } from '@/lib/categoryData'
import { getCategories, getFeaturedCities, getServicesByCategory } from '@/lib/api'
import CategoryHero    from '@/components/category/CategoryHero'
import TrustSection from '@/components/home/Trustsection'
import CategoryIntro from '@/components/category/CategoryIntro'
import CategoryServicesSection from '@/components/category/CategoryServicesSection'
import CategoryHowItWorks from '@/components/category/CategoryHowItWorks'
import CategoryWhyUs from '@/components/category/CategoryWhyUs'
import CategoryPricing from '@/components/category/CategoryPricing'
import CategoryCities from '@/components/category/CategoryCities'
import CategoryAlsoFrom from '@/components/category/CategoryAlsoFrom'
import CategoryFaq from '@/components/category/CategoryFaq'
import CategoryReadyCta from '@/components/category/CategoryReadyCta'


// Pre-render all category pages at build time
export async function generateStaticParams() {
  return CATEGORY_SLUGS.map(slug => ({ category: slug }))
}

// Unique SEO meta per category
// Next.js 15: params is a Promise — must be awaited
export async function generateMetadata({ params }) {
  const { category } = await params
  const content = getCategoryContent(category)
  if (!content) return {}
  return {
    title: content.metaTitle,
    description: content.metaDesc,
    openGraph: {
      title: content.metaTitle,
      description: content.metaDesc,
    },
  }
}

export default async function CategoryPage({ params }) {
  // Next.js 15: params is a Promise — must be awaited
  const { category } = await params

  // 404 if slug is not a valid category
  const content = getCategoryContent(category)
  if (!content) notFound()

  // Fetch all data in parallel
  const [categories, cities, services] = await Promise.all([
    getCategories(),
    getFeaturedCities(),
    getServicesByCategory(category),
  ])

  return (
    <>
      {/* 1. Hero with booking widget */}
        <CategoryHero content={content} categories={categories} />

         <CategoryIntro content={content} />

        <TrustSection />

         {/* 4. All services grid for this category */}
      <CategoryServicesSection
        categorySlug={category}
        content={content}
        services={services}
      />

      <CategoryHowItWorks />
      <CategoryWhyUs />
      <CategoryPricing />
      <CategoryCities categorySlug={category} />
      <CategoryAlsoFrom />
      <CategoryFaq />
      <CategoryReadyCta />
      {/* More sections coming next:
          CategoryServicesSection
          CategoryHowItWorksSection
          CategoryTrustSection
          CategoryCitiesSection
          CtaBannerSection
      */}
    </>
  )
}