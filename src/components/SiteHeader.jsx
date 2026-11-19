import { useState } from 'react'
import {
  ChevronDown,
  Heart,
  MapPin,
  Menu,
  Search,
  ShoppingBag,
  Truck,
  UserRound,
  X,
} from 'lucide-react'
import { navItems, shopMenuCollections, shopMenuGroups } from './storefrontData'

function Logo() {
  return (
    <a href="#" className="flex items-center gap-2" aria-label="Plank home">
      <span className="relative block h-9 w-9">
        <span className="absolute bottom-1 left-0 h-3 w-7 rounded-sm bg-[#54c8e8]" />
        <span className="absolute bottom-1 left-2 h-7 w-3 rounded-sm bg-[#ef7d32]" />
        <span className="absolute bottom-1 left-5 h-8 w-3 rounded-sm bg-[#914e24]" />
        <span className="absolute bottom-1 right-0 h-6 w-3 rounded-sm bg-[#dd9b54]" />
      </span>
      <span className="text-[34px] font-black leading-none tracking-tight text-[#24211f]">
        <span className="text-[#a94f21]">PLANK</span>
      </span>
    </a>
  )
}

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [shopMenuOpen, setShopMenuOpen] = useState(false)

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="h-[64px] bg-[#b86b2d] px-6 text-white">
        <div className="mx-auto flex h-full max-w-[1470px] items-center justify-between">
          <div className="flex items-center gap-14 text-[20px]">
            <a href="#store" className="flex items-center gap-3">
              <MapPin size={22} strokeWidth={1.8} />
              <span className="leading-[1.15]">Find a<br />Store</span>
            </a>
            <a href="#tracking" className="flex items-center gap-3">
              <Truck size={24} strokeWidth={1.8} />
              <span className="leading-[1.15]">Order<br />Tracking</span>
            </a>
          </div>

          <p className="hidden text-[20px] md:block">
            Use HTML to format your text so it can be easily read.
            <a href="#shop" className="ml-3 underline underline-offset-4">Shop Now</a>
          </p>

          <button className="flex items-center gap-2 text-[14px]">
            English
            <ChevronDown size={16} />
          </button>
        </div>
      </div>

      <div className="h-[124px] border-b border-[#ececec] bg-white px-6 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
        <div className="mx-auto flex h-full max-w-[1470px] items-center">
          <Logo />

          <nav className="ml-[58px] hidden items-center gap-[42px] lg:flex" aria-label="Main navigation">
            {navItems.map((item) => item === 'Shop' ? (
              <button
                key={item}
                type="button"
                aria-expanded={shopMenuOpen}
                aria-controls="shop-mega-menu"
                onClick={() => setShopMenuOpen((open) => !open)}
                className={`relative flex items-center gap-1 py-12 text-[15px] font-bold uppercase tracking-[0.09em] transition hover:text-[#b86b2d] ${shopMenuOpen ? 'text-[#b86b2d]' : 'text-[#24243f]'}`}
              >
                {item}
                <ChevronDown size={14} strokeWidth={2} className={`transition-transform ${shopMenuOpen ? 'rotate-180' : ''}`} />
              </button>
            ) : (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setShopMenuOpen(false)}
                className={`relative flex items-center gap-1 py-12 text-[15px] font-bold uppercase tracking-[0.09em] text-[#24243f] transition hover:text-[#b86b2d] ${item === 'Home' ? 'text-[#b86b2d]' : ''}`}
              >
                {item}
                {item !== 'Home' && <ChevronDown size={14} strokeWidth={2} />}
                {item === 'Home' && <span className="absolute bottom-7 left-0 h-[2px] w-full bg-[#b86b2d]" />}
              </a>
            ))}
            <a href="#buy" className="relative ml-2 text-[15px] font-bold uppercase tracking-[0.09em] text-[#24243f]">
              Buy now
              <span className="absolute -right-[20px] -top-[18px] rounded-full bg-[#55bf66] px-2 py-1 text-[10px] text-white">Sale</span>
            </a>
          </nav>

          <div className="ml-auto hidden items-center gap-6 text-[#31313f] lg:flex">
            <button aria-label="Search" className="hover:text-[#b86b2d]"><Search size={26} strokeWidth={1.5} /></button>
            <button aria-label="Account" className="hover:text-[#b86b2d]"><UserRound size={25} strokeWidth={1.5} /></button>
            <button aria-label="Wishlist" className="relative hover:text-[#b86b2d]">
              <Heart size={25} strokeWidth={1.5} />
              <span className="absolute -right-2 -top-2 flex h-[19px] w-[19px] items-center justify-center rounded-full bg-[#b86b2d] text-[11px] text-white">0</span>
            </button>
            <button aria-label="Cart" className="flex items-center gap-1 hover:text-[#b86b2d]">
              <ShoppingBag size={25} strokeWidth={1.5} />
              <span className="text-[16px]">(0)</span>
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="ml-auto rounded-md p-2 text-[#20294a] lg:hidden"
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="absolute left-0 right-0 top-full border-t bg-white px-6 py-5 shadow-lg lg:hidden">
            {navItems.map((item) => item === 'Shop' ? (
              <button
                key={item}
                type="button"
                onClick={() => {
                  setMenuOpen(false)
                  setShopMenuOpen(true)
                }}
                className="flex w-full items-center justify-between py-3 text-left text-base font-bold uppercase text-[#20294a]"
              >
                {item}
                <ChevronDown size={16} />
              </button>
            ) : (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-base font-bold uppercase text-[#20294a]"
              >
                {item}
              </a>
            ))}
          </nav>
        )}
      </div>

      {shopMenuOpen && (
        <>
          <button
            type="button"
            aria-label="Close shop menu"
            onClick={() => setShopMenuOpen(false)}
            className="fixed inset-x-0 bottom-0 top-[188px] z-40 cursor-default bg-black/10"
          />
          <div
            id="shop-mega-menu"
            className="shop-menu-enter absolute left-0 right-0 top-full z-50 max-h-[calc(100vh_-_188px)] overflow-y-auto border-t border-[#eee] bg-white px-6 py-8 shadow-xl md:px-10 md:py-10"
          >
            <div className="mx-auto grid max-w-[1640px] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-10">
              {shopMenuGroups.map((group) => (
                <div key={group.title}>
                  <h2 className="mb-5 text-[18px] font-bold uppercase tracking-[0.12em] text-[#383838]">
                    {group.title}
                  </h2>
                  <ul className="space-y-3">
                    {group.links.map((link) => (
                      <li key={link}>
                        <a
                          href="#shop"
                          onClick={() => setShopMenuOpen(false)}
                          className="text-[16px] text-[#777f87] transition hover:text-[#b86b2d]"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {shopMenuCollections.map((collection) => (
                <a
                  key={collection.name}
                  href="#collections"
                  onClick={() => setShopMenuOpen(false)}
                  className="group text-center"
                >
                  <div className="aspect-[0.9] overflow-hidden bg-[#fff7f2]">
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                  <h2 className="mx-auto mt-5 max-w-[230px] text-[24px] font-semibold leading-tight text-black">
                    {collection.name}
                  </h2>
                  <p className="mt-2 text-[17px] text-[#777]">{collection.count}</p>
                </a>
              ))}
            </div>
          </div>
        </>
      )}
    </header>
  )
}
