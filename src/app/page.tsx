export const dynamic = 'force-static'

import Link from 'next/link'

export default function HomePage() {
  return (
    <section className="py-20">
      <h1 className="text-4xl md:text-6xl font-mono leading-tight">BACKDRP.FM</h1>
      <p className="mt-4 max-w-xl text-white/70">
        A clean archive of DJ sets. Video + audio, all in one place.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/sets" className="px-5 py-2.5 rounded-xl bg-[var(--accent)] text-black font-medium">
          Browse Sets
        </Link>
        <a href="https://soundcloud.com/" target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-xl border border-white/20">SoundCloud</a>
        <a href="https://youtube.com/" target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-xl border border-white/20">YouTube</a>
      </div>
    </section>
  )
}
