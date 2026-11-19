import { useRef, useState } from 'react'
import { Award, BadgeCheck, ChevronLeft, ChevronRight, Mail, Star } from 'lucide-react'
import { journalPosts, summerBannerImage, testimonials, trustMarks } from './storefrontData'

export function Testimonials() {
  const testimonialTrack = useRef(null)

  const scrollTestimonials = (direction) => {
    testimonialTrack.current?.scrollBy({
      left: direction * testimonialTrack.current.clientWidth * 0.8,
      behavior: 'smooth',
    })
  }

  return (
    <section className="reveal-on-scroll bg-white px-6 pb-24 pt-[72px] md:px-10 md:pb-28 md:pt-[80px]">
      <div className="mx-auto max-w-[1470px]">
        <div className="mb-14 text-center md:mb-[72px]">
          <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.42em] text-[#ad622b]">
            Real stories with our furniture
          </p>
          <h2 className="text-[36px] font-bold leading-tight tracking-[-0.04em] text-black md:text-[52px]">
            What Our Customers Are Saying
          </h2>
        </div>

        <div className="relative">
          <div
            ref={testimonialTrack}
            className="flex snap-x snap-mandatory gap-7 overflow-x-auto scroll-smooth pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:gap-10"
            aria-label="Customer testimonials"
          >
            {testimonials.map((testimonial, index) => (
              <article
                key={testimonial.name}
                className={`flex min-h-[470px] flex-[0_0_86%] snap-start flex-col border border-dashed p-8 sm:flex-[0_0_70%] md:p-10 lg:flex-[0_0_31.5%] lg:p-12 ${
                  index === 1 ? 'border-[#bf6c2d]' : 'border-[#d9d9d9]'
                }`}
              >
                <div className="mb-8 flex gap-1 text-[#f79432]" aria-label="Rated 5 out of 5">
                  {Array.from({ length: 5 }, (_, starIndex) => (
                    <Star key={starIndex} size={20} fill="currentColor" strokeWidth={1.5} />
                  ))}
                </div>
                <h3 className="text-[25px] font-semibold leading-[1.45] tracking-[-0.02em] text-black md:text-[30px]">
                  {testimonial.title}
                </h3>
                <p className="mt-6 text-[17px] leading-[1.65] text-[#282828] md:text-[19px]">
                  {testimonial.review}
                </p>
                <div className="mt-7 flex items-center gap-5">
                  <img
                    src={testimonial.image}
                    alt=""
                    className="h-[88px] w-[88px] rounded-full object-cover"
                  />
                  <div>
                    <p className="text-[18px] font-semibold text-[#171717] md:text-[20px]">
                      {testimonial.name}
                    </p>
                    <p className="mt-2 text-[15px] text-[#7b7b7b] md:text-[17px]">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollTestimonials(-1)}
            aria-label="Previous testimonials"
            className="absolute left-2 top-1/2 z-10 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#171717] shadow-[0_3px_15px_rgba(0,0,0,0.12)] transition hover:text-[#ad622b] md:left-3"
          >
            <ChevronLeft size={27} strokeWidth={1.8} />
          </button>
          <button
            type="button"
            onClick={() => scrollTestimonials(1)}
            aria-label="Next testimonials"
            className="absolute right-2 top-1/2 z-10 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#171717] shadow-[0_3px_15px_rgba(0,0,0,0.12)] transition hover:text-[#ad622b] md:right-3"
          >
            <ChevronRight size={27} strokeWidth={1.8} />
          </button>
        </div>
      </div>
    </section>
  )
}

export function Journal() {
  return (
    <section className="reveal-on-scroll bg-white px-6 pb-24 pt-10 md:px-10 md:pb-28 md:pt-12">
      <div className="mx-auto max-w-[1600px]">
        <h2 className="mb-14 text-center text-[36px] font-bold leading-tight tracking-[-0.04em] text-black md:mb-[76px] md:text-[52px]">
          From Our Journal
        </h2>
        <div className="grid grid-cols-1 gap-x-10 gap-y-12 lg:grid-cols-2 lg:gap-y-12">
          {journalPosts.map((post) => (
            <article
              key={post.title}
              className="grid grid-cols-1 items-center gap-6 sm:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] sm:gap-8"
            >
              <img src={post.image} alt={post.alt} className="aspect-[3/2] w-full object-cover" />
              <div className="flex flex-col items-start">
                <p className="text-[16px] font-medium text-[#b36528] md:text-[20px]">{post.date}</p>
                <h3 className="mt-4 text-[22px] font-semibold leading-[1.4] text-[#171717] md:text-[28px]">
                  {post.title}
                </h3>
                <a
                  href="#blog"
                  className="mt-4 text-[17px] font-medium text-[#171717] transition hover:text-[#b36528] md:text-[20px]"
                >
                  Read more
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function NewsletterSection() {
  const [newsletterMessage, setNewsletterMessage] = useState('')

  return (
    <section className="reveal-on-scroll bg-[#faf5f2] px-6 pb-16 pt-12 md:px-10 md:pb-20 md:pt-16">
      <div className="mx-auto max-w-[1640px]">
        <div className="grid grid-cols-2 items-center justify-items-center gap-8 pb-12 sm:grid-cols-3 lg:grid-cols-6 lg:gap-6 lg:pb-16">
          {trustMarks.map((mark, index) => (
            <div
              key={`${mark.title}-${index}`}
              className={`flex h-[92px] w-[142px] flex-col items-center justify-center border-2 border-dotted border-[#77736f] px-2 text-center text-[#686460] grayscale ${mark.shape}`}
            >
              {index % 2 === 0 ? <BadgeCheck size={23} strokeWidth={1.6} /> : <Award size={23} strokeWidth={1.6} />}
              <span className="mt-1 text-[10px] font-black uppercase tracking-[0.12em]">{mark.title}</span>
              <span className="mt-0.5 text-[8px] uppercase tracking-[0.08em]">{mark.detail}</span>
            </div>
          ))}
        </div>

        <div className="relative flex min-h-[480px] items-center overflow-hidden rounded-lg bg-[#161616] md:min-h-[560px]">
          <img
            src={summerBannerImage}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative m-6 flex w-full flex-col items-center justify-center bg-white/70 px-6 py-12 text-center backdrop-blur-[2px] sm:m-8 md:ml-[3%] md:min-h-[480px] md:w-[44%] md:px-10 lg:px-14">
            <p className="mb-5 text-[11px] font-bold uppercase leading-7 tracking-[0.34em] text-[#ad622b] md:text-[14px]">
              Get the latest in furniture trends,
              <br />
              exclusive offers
            </p>
            <h2 className="max-w-[510px] text-[34px] font-bold leading-tight tracking-[-0.035em] text-black md:text-[44px]">
              Stay Inspired, Stay Comfortable
            </h2>
            <form
              className="relative mt-10 w-full max-w-[570px]"
              onSubmit={(event) => {
                event.preventDefault()
                setNewsletterMessage('Thanks for your interest! This demo signup is not connected yet.')
              }}
            >
              <label htmlFor="newsletter-email" className="sr-only">Your email</label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                required
                placeholder="Your email"
                className="h-[72px] w-full rounded-md border border-[#777] bg-white px-6 pr-16 text-[17px] text-[#171717] outline-none transition focus:border-[#ad622b] focus:ring-2 focus:ring-[#ad622b]/20"
              />
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-[#333] transition hover:text-[#ad622b]"
              >
                <Mail size={27} strokeWidth={1.6} />
              </button>
              {newsletterMessage && (
                <p role="status" className="mt-3 text-sm text-[#171717]">{newsletterMessage}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
