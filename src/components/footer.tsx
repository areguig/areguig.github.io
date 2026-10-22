import { links } from '@/content/site'

export function Footer() {
  return (
    <footer className="border-t border-ink-800">
      <div className="shell flex flex-col gap-3 py-8 font-mono text-xs text-bone-mute sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Akli Reguig · Paris</p>
        <div className="flex gap-4">
          <a className="link-underline hover:text-bone" href={links.github}>github</a>
          <a className="link-underline hover:text-bone" href={links.linkedin}>linkedin</a>
        </div>
      </div>
    </footer>
  )
}
