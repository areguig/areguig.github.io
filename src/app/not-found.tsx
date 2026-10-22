import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="shell flex min-h-[80vh] flex-col items-center justify-center text-center">
      <p className="mb-6 font-mono text-sm text-bone-mute">
        <span className="text-ember">error</span>: no such route
      </p>
      <h1 className="text-[clamp(5rem,18vw,12rem)] font-semibold leading-none tracking-[-0.05em]">
        4<span className="font-serif font-normal italic text-volt">0</span>4
      </h1>
      <p className="mt-6 max-w-md text-bone-dim">The pebbles stop here. Even petit-poucet can&apos;t find this page.</p>
      <Link href="/" className="mt-10 rounded-full bg-volt px-6 py-3 text-sm font-semibold text-ink-950">
        Back home
      </Link>
    </div>
  )
}
