'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Nav() {
  const pathname = usePathname()
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let lastY = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setHidden(y > lastY && y > 80)
      lastY = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav${hidden ? ' nav--hidden' : ''}`}>
      <Link href="/" className="nav-logo">Agustin Santagada</Link>
      <ul className="nav-links">
        <li><Link href="/" className={pathname === '/' ? 'active' : ''}>Work</Link></li>
        <li><Link href="/about" className={pathname === '/about' ? 'active' : ''}>About</Link></li>
        <li><Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
      </ul>
    </nav>
  )
}
