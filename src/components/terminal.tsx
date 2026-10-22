'use client'

import { useEffect, useState } from 'react'
import { RotateCcw } from 'lucide-react'

type Line = { kind: 'cmd' | 'prompt' | 'tool' | 'info' | 'done'; text: string }

const script: Line[] = [
  { kind: 'cmd', text: 'claude' },
  { kind: 'info', text: '🪨 petit-poucet · 31 notes loaded (preferences + areguig.github.io)' },
  { kind: 'prompt', text: 'my homepage is outdated and not very sexy. fix it.' },
  { kind: 'tool', text: 'memory_search("what does Akli build")' },
  { kind: 'tool', text: 'Bash  gh repo list areguig --limit 100' },
  { kind: 'tool', text: 'Write src/app/page.tsx' },
  { kind: 'tool', text: 'Bash  npm run build' },
  { kind: 'done', text: 'Done. You are looking at it.' },
]

const typed = (l: Line) => l.kind === 'cmd' || l.kind === 'prompt'

function render(line: Line, text: string) {
  switch (line.kind) {
    case 'cmd':
      return (
        <>
          <span className="text-volt">~/areguig.github.io</span> <span className="text-bone-mute">❯</span> {text}
        </>
      )
    case 'prompt':
      return (
        <>
          <span className="text-ember">&gt;</span> <span className="text-bone">{text}</span>
        </>
      )
    case 'tool':
      return (
        <>
          <span className="text-volt-dim">●</span> <span className="text-bone-dim">{text}</span>
        </>
      )
    case 'info':
      return <span className="text-bone-mute">{text}</span>
    case 'done':
      return (
        <>
          <span className="text-volt">✓</span> <span className="text-bone">{text}</span>
        </>
      )
  }
}

export function Terminal() {
  // Start fully rendered so no-JS and reduced-motion visitors see the whole session
  const [shown, setShown] = useState(script.length)
  const [chars, setChars] = useState(Infinity)
  const [run, setRun] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let cancelled = false
    const timers: ReturnType<typeof setTimeout>[] = []
    const wait = (ms: number) => new Promise<void>((r) => timers.push(setTimeout(r, ms)))

    ;(async () => {
      setShown(0)
      await wait(500)
      for (let i = 0; i < script.length && !cancelled; i++) {
        const line = script[i]
        setShown(i + 1)
        if (typed(line)) {
          for (let c = 0; c <= line.text.length && !cancelled; c++) {
            setChars(c)
            await wait(28 + Math.random() * 40)
          }
          await wait(350)
        } else {
          setChars(Infinity)
          await wait(line.kind === 'tool' ? 520 : 400)
        }
      }
      setChars(Infinity)
    })()

    return () => {
      cancelled = true
      timers.forEach(clearTimeout)
    }
  }, [run])

  const finished = shown === script.length && chars === Infinity

  return (
    <div className="relative overflow-hidden rounded-2xl border border-ink-700 bg-ink-900/80 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] backdrop-blur">
      <div className="flex items-center gap-2 border-b border-ink-700/70 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-ink-600" />
        <span className="h-3 w-3 rounded-full bg-ink-600" />
        <span className="h-3 w-3 rounded-full bg-ink-600" />
        <span className="ml-3 font-mono text-[11px] text-bone-mute">zsh · claude code</span>
        <button
          onClick={() => setRun((r) => r + 1)}
          disabled={!finished}
          aria-label="Replay"
          className="ml-auto text-bone-mute transition hover:text-volt disabled:opacity-0"
        >
          <RotateCcw className="h-3.5 w-3.5" />
        </button>
      </div>
      <div className="min-h-[300px] space-y-2 p-5 font-mono text-[12.5px] leading-relaxed sm:text-[13px]" aria-label="A Claude Code session rebuilding this website">
        {script.slice(0, shown).map((line, i) => {
          const current = i === shown - 1
          const text = current && typed(line) ? line.text.slice(0, chars) : line.text
          return (
            <div key={i} className="break-words">
              {render(line, text)}
              {current && !finished && typed(line) && <span className="ml-0.5 inline-block h-[1.05em] w-[0.55em] translate-y-[2px] bg-bone animate-blink" />}
            </div>
          )
        })}
        {finished && (
          <div>
            <span className="text-volt">~/areguig.github.io</span> <span className="text-bone-mute">❯</span>{' '}
            <span className="inline-block h-[1.05em] w-[0.55em] translate-y-[2px] bg-bone animate-blink" />
          </div>
        )}
      </div>
    </div>
  )
}
