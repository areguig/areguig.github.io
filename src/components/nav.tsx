import Link from 'next/link'
import { links } from '@/content/site'

const items = [
  { label: 'work', href: '/#work' },
  { label: 'career', href: '/#day-job' },
  { label: 'lab', href: '/#lab' },
  { label: 'now', href: '/#now' },
]

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="mx-auto flex max-w-3xl items-center justify-between gap-2 rounded-full border border-ink-700/80 bg-ink-900/70 py-1.5 pl-4 pr-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.4)] backdrop-blur-xl">
        <Link href="/" className="flex items-center gap-2 font-mono text-sm text-bone">
          <span className="h-2 w-2 rounded-full bg-volt animate-pulse_dot" />
          areguig
        </Link>
        <div className="flex items-center gap-0.5 sm:gap-1">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hidden rounded-full px-3 py-1.5 font-mono text-xs text-bone-dim transition-colors hover:bg-ink-800 hover:text-bone sm:block"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={links.linkedin}
            className="rounded-full bg-bone px-4 py-1.5 font-mono text-xs font-medium text-ink-950 transition-colors hover:bg-volt"
          >
            say hi
          </a>
        </div>
      </nav>
    </header>
  )
}
