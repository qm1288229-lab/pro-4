import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  return (
    <a
      href="#"
      aria-label="Back to top"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#d6d1cf] bg-white text-black shadow-sm transition hover:border-[#ad622b] hover:text-[#ad622b]"
    >
      <ArrowUp size={23} strokeWidth={1.8} />
    </a>
  )
}
