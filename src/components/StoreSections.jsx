import { useRef } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import {
  bestSellers,
  comfortBannerImage,
  collections,
  heroImage,
  shippingBannerImage,
  summerBannerImage,
} from './storefrontData'

export function HeroSection() {
  return (
    <section className="reveal-on-scroll relative mt-[188px] min-h-[520px] overflow-hidden bg-[#f2f1f1] md:min-h-[600px] lg:min-h-[650px]">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Modern armchair and side table"
          className="h-full w-full object-cover object-[58%_55%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/55 to-transparent md:via-white/25" />
      </div>

      <div className="relative mx-auto flex min-h-[520px] max-w-[1480px] items-center px-7 md:min-h-[600px] lg:min-h-[650px] lg:px-10">
        <div className="max-w-[520px] pb-16 pt-10">
          <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.34em] text-[#bf6f42]">
            Minimal meets functional
          </p>
          <h1 className="text-[46px] leading-[1.08] text-[#1d1d1d] md:text-[58px]">
            Redefine Comfort
            <br />
            <span>&amp; Luxury</span>
          </h1>
          <p className="mt-6 max-w-[470px] text-[15px] leading-7 text-[#3f3f3f] md:text-[17px]">
            Experience the latest trends in sustainable furniture.
            <br className="hidden sm:block" />
            Stylish designs that bring warmth to your living space.
          </p>
          <a
            href="#shop"
            className="mt-8 inline-block rounded-[2px] bg-[#17182a] px-7 py-[14px] text-[11px] font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#ad6531]"
          >
            Shop now
          </a>
        </div>
      </div>
    </section>
  )
}

export function FeaturedCollections() {
  return (
    <section id="collections" className="reveal-on-scroll bg-white px-6 pb-20 pt-[72px] md:px-10 md:pb-24 md:pt-[76px]">
      <div className="mx-auto max-w-[1470px]">
        <div className="mb-14 text-center md:mb-[76px]">
          <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.42em] text-[#ad622b]">
            Furniture picks every room style
          </p>
          <h2 className="text-[36px] font-bold leading-tight tracking-[-0.04em] text-black md:text-[52px]">
            Featured Collections
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4 md:gap-x-8 lg:gap-x-10">
          {collections.map((collection) => (
            <a
              key={collection.name}
              href="#shop"
              className="group flex flex-col items-center text-center"
            >
              <div className="aspect-square w-full max-w-[380px] overflow-hidden rounded-full border border-[#dce0e5] bg-white p-3 transition duration-300 group-hover:border-[#ad622b] md:p-5">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="h-full w-full rounded-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-5 text-base font-semibold text-[#24211f] transition group-hover:text-[#ad622b] md:text-lg">
                {collection.name}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export function BestSellers() {
  const sellerTrack = useRef(null)

  const scrollSellers = (direction) => {
    sellerTrack.current?.scrollBy({
      left: direction * sellerTrack.current.clientWidth * 0.8,
      behavior: 'smooth',
    })
  }

  return (
    <section className="reveal-on-scroll bg-white px-6 pb-24 pt-10 md:px-10 md:pt-12">
      <div className="mx-auto max-w-[1470px]">
        <div className="mb-12 text-center md:mb-[72px]">
          <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.42em] text-[#ad622b]">
            Customer favorites and design
          </p>
          <h2 className="text-[36px] font-bold leading-tight tracking-[-0.04em] text-black md:text-[52px]">
            Our Best Sellers
          </h2>
        </div>

        <div className="relative">
          <div
            ref={sellerTrack}
            className="flex snap-x snap-mandatory gap-7 overflow-x-auto scroll-smooth pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label="Best-selling furniture"
          >
            {bestSellers.map((product) => (
              <article
                key={product.name}
                className="group flex-[0_0_78%] snap-start sm:flex-[0_0_44%] lg:flex-[0_0_31%] xl:flex-[0_0_calc((100%_-_112px)/5)]"
              >
                <a href="#shop" className="block">
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#fff7f2]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                    {product.sale && (
                      <div className="absolute bottom-3 left-2 right-2 grid grid-cols-4 gap-1">
                        {[
                          ['1422', 'Days'],
                          ['13', 'Hours'],
                          ['21', 'Mins'],
                          ['08', 'Secs'],
                        ].map(([value, unit]) => (
                          <div key={unit} className="bg-white/95 px-1 py-1.5 text-center">
                            <span className="block text-[16px] leading-5 text-[#171717]">{value}</span>
                            <span className="text-[12px] text-gray-500">{unit}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <h3 className="mt-6 text-[18px] font-medium leading-snug text-[#171717] md:text-[20px]">
                    {product.name}
                  </h3>
                </a>
                <div className="mt-3 flex items-center gap-0.5 text-[#ac632a]" aria-label="Rated 5 out of 5">
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star key={index} size={22} strokeWidth={2} />
                  ))}
                </div>
                <p className="mt-2 text-[18px] text-[#171717]">{product.price}</p>
              </article>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollSellers(-1)}
            aria-label="Previous best sellers"
            className="absolute left-2 top-[68%] z-10 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#171717] shadow-[0_3px_15px_rgba(0,0,0,0.12)] transition hover:text-[#ad622b] md:left-3"
          >
            <ChevronLeft size={27} strokeWidth={1.8} />
          </button>
          <button
            type="button"
            onClick={() => scrollSellers(1)}
            aria-label="Next best sellers"
            className="absolute right-2 top-[68%] z-10 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#171717] shadow-[0_3px_15px_rgba(0,0,0,0.12)] transition hover:text-[#ad622b] md:right-3"
          >
            <ChevronRight size={27} strokeWidth={1.8} />
          </button>
        </div>
      </div>
    </section>
  )
}

export function PromoBanners() {
  return (
    <section id="promotions" className="reveal-on-scroll bg-[#fbf6f3] px-6 py-10 md:px-11 md:py-12">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-11">
        <article className="relative flex min-h-[340px] overflow-hidden rounded-lg text-white lg:min-h-[414px]">
          <img src={comfortBannerImage} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative flex w-full flex-col items-start justify-center px-8 py-12 md:px-12 lg:px-[7.5vw]">
            <p className="mb-8 text-[12px] font-semibold uppercase tracking-[0.42em] text-[#c67831] md:text-[14px]">
              Premium quality materials
            </p>
            <h2 className="text-[34px] font-bold leading-tight tracking-[-0.03em] md:text-[48px]">
              Crafted For Comfort
            </h2>
            <p className="mt-7 max-w-[600px] text-[16px] leading-7 md:text-[20px] md:leading-8">
              Thoughtfully made furniture with lasting materials and timeless design for your home.
            </p>
            <a
              href="#shop"
              className="mt-12 inline-flex min-w-[270px] items-center justify-center rounded border border-white px-6 py-5 text-[14px] font-bold uppercase tracking-[0.1em] transition hover:bg-white hover:text-[#171717]"
            >
              View products
            </a>
          </div>
        </article>

        <article className="relative flex min-h-[340px] overflow-hidden rounded-lg text-white lg:min-h-[414px]">
          <img src={shippingBannerImage} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative flex w-full flex-col items-center justify-center px-8 py-12 text-center md:px-12">
            <p className="mb-8 text-[12px] font-semibold uppercase tracking-[0.42em] text-[#c67831] md:text-[14px]">
              On orders over $500
            </p>
            <h2 className="text-[34px] font-bold leading-tight tracking-[-0.03em] md:text-[48px]">
              Fast &amp; Free Shipping
            </h2>
            <p className="mt-7 max-w-[600px] text-[16px] leading-7 md:text-[20px] md:leading-8">
              Find the perfect pieces for your space and enjoy complimentary delivery on qualifying orders.
            </p>
            <a
              href="#shop"
              className="mt-12 inline-flex min-w-[270px] items-center justify-center rounded border border-white px-6 py-5 text-[14px] font-bold uppercase tracking-[0.1em] transition hover:bg-white hover:text-[#171717]"
            >
              View products
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}

export function SummerCollection() {
  return (
    <section
      id="summer-collection"
      className="reveal-on-scroll relative flex min-h-[620px] items-center justify-center overflow-hidden bg-[#171717] px-6 py-24 text-center text-white md:min-h-[760px]"
    >
      <img
        src={summerBannerImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/65" />
      <div className="relative mx-auto max-w-[980px]">
        <p className="mb-8 text-[12px] font-semibold uppercase tracking-[0.42em] text-white md:text-[14px]">
          Summer collection 2025
        </p>
        <h2 className="text-[36px] font-bold leading-tight tracking-[-0.035em] md:text-[52px]">
          Smart Designs For Modern Living
        </h2>
        <p className="mx-auto mt-7 max-w-[700px] text-[16px] leading-7 text-white/95 md:text-[20px] md:leading-8">
          Maximize your space with versatile, sleek furniture.
          <br className="hidden sm:block" />
          Built to last, styled to impress.
        </p>
        <a
          href="#shop"
          className="mt-12 inline-flex min-w-[240px] items-center justify-center rounded border border-white px-7 py-5 text-[14px] font-bold uppercase tracking-[0.1em] transition hover:bg-white hover:text-[#171717]"
        >
          Discover now
        </a>
      </div>
    </section>
  )
}
