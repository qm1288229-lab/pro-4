import { useEffect } from 'react'
import BackToTop from './components/BackToTop'
import { Journal, NewsletterSection, Testimonials } from './components/EditorialSections'
import SiteFooter from './components/SiteFooter'
import SiteHeader from './components/SiteHeader'
import {
  BestSellers,
  FeaturedCollections,
  HeroSection,
  PromoBanners,
  SummerCollection,
} from './components/StoreSections'

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('.reveal-on-scroll')

    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
      || !('IntersectionObserver' in window)
    ) {
      sections.forEach((section) => section.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main>
        <HeroSection />
        <FeaturedCollections />
        <BestSellers />
        <PromoBanners />
        <SummerCollection />
        <Testimonials />
        <Journal />
        <NewsletterSection />
      </main>
      <SiteFooter />
      <BackToTop />
    </div>
  )
}

export default App
