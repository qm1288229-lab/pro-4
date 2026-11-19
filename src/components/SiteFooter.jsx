import { ChevronDown } from 'lucide-react'

const footerLinks = {
  Account: ['My Order', 'Shipping', 'Wishlist', 'Delivery', 'Returns'],
  Information: ['Term & Policy', 'Press', 'Career', 'Delivery', 'Services'],
  Store: ['Affiliates', 'Best Sellers', 'Discount', 'Latest Products', 'Orders'],
}

function FooterLinkGroup({ title, links }) {
  return (
    <div>
      <h2 className="mb-9 text-[22px] font-bold text-[#c2915f]">{title}</h2>
      <ul className="space-y-4 text-[16px] md:text-[18px]">
        {links.map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase().replaceAll(' ', '-')}`} className="transition hover:text-[#d4a36f]">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function SiteFooter() {
  return (
    <footer className="[&_div]:rounded-[2px] text-white">
      <div className="bg-[#2d1b08] px-6 py-14 md:px-10 md:py-16">
        <div className="mx-auto grid max-w-[1640px] grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div>
            <p className="max-w-[300px] text-[16px] leading-7 md:text-[18px]">
              Find a location nearest you. See{' '}
              <a href="#stores" className="underline underline-offset-4 hover:text-[#d4a36f]">
                Our Stores
              </a>
            </p>
            <p className="mt-8 text-[16px] leading-7 md:text-[18px]">
              T: + (08) 9055 0269
              <br />
              E: example@example.com
            </p>
            <div className="mt-8 flex gap-3">
              <a
                href="#facebook"
                aria-label="Facebook"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#a9610c] text-[21px] font-bold transition hover:bg-[#c17920]"
              >
                f
              </a>
              <a
                href="#twitter"
                aria-label="Twitter"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#a9610c] text-[18px] font-bold transition hover:bg-[#c17920]"
              >
                𝕏
              </a>
              <a
                href="#instagram"
                aria-label="Instagram"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#a9610c] text-[21px] transition hover:bg-[#c17920]"
              >
                ◎
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <FooterLinkGroup key={title} title={title} links={links} />
          ))}
        </div>
      </div>

      <div className="bg-[#241505] px-6 py-5 md:px-10">
        <div className="mx-auto flex max-w-[1640px] flex-wrap items-center gap-x-6 gap-y-4">
          <button className="flex items-center gap-2 rounded-[2px] border border-white/80 px-4 py-2 text-[16px]">
            English
            <ChevronDown size={16} />
          </button>
          <p className="flex-1 text-[14px] md:text-[17px]">
            © 2026, <strong>Qx Plank</strong>. Powered by Shopify
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-[2px] bg-[#123dc4] px-3 py-2 text-[12px] font-black italic text-white">VISA</span>
            <span className="flex h-[34px] items-center justify-center gap-[-4px] rounded-[2px] bg-[#222] px-2">
              <span className="h-4 w-4 rounded-full bg-[#eb3434]" />
              <span className="-ml-2 h-4 w-4 rounded-full bg-[#ffb126]/90" />
            </span>
            <span className="rounded-[2px] bg-[#2473c9] px-2 py-2 text-[10px] font-black text-white">AMEX</span>
            <span className="rounded-[2px] bg-white px-2 py-2 text-[11px] font-bold italic text-[#164b92]">PayPal</span>
            <span className="rounded-[2px] bg-[#f7f7f7] px-2 py-2 text-[11px] font-bold text-[#2382bb]">Diners</span>
            <span className="rounded-[2px] bg-white px-2 py-2 text-[10px] font-black italic text-[#282828]">DISCOVER</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
