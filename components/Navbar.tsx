import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="border-b border-white/10">
      <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-mono text-xl tracking-tight">BACKDRP.FM</Link>
        <nav className="flex gap-6 text-sm text-white/80">
          <Link href="/sets" className="hover:text-white">Sets</Link>
          <Link href="/subscribe" className="hover:text-white">Subscribe</Link>
          <a href="https://soundcloud.com/" target="_blank" rel="noreferrer" className="hover:text-white">SoundCloud</a>
          <a href="https://youtube.com/" target="_blank" rel="noreferrer" className="hover:text-white">YouTube</a>
          <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="hover:text-white">Instagram</a>
        </nav>
      </div>
    </header>
  )
}
