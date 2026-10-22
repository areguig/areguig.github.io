'use client'

import { useRef } from 'react'
import { cn } from '@/lib/utils'

export function Spotlight({ className, children }: { className?: string; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--x', `${e.clientX - r.left}px`)
    el.style.setProperty('--y', `${e.clientY - r.top}px`)
  }

  return (
    <div ref={ref} onMouseMove={onMove} className={cn('spotlight', className)}>
      {children}
    </div>
  )
}
