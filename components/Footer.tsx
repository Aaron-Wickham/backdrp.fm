const YEAR = new Date().toISOString().slice(0, 4)

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-5xl px-4 py-10 text-sm text-white/50">
        © {YEAR} BACKDRP.FM — all sets by their respective artists.
      </div>
    </footer>
  )
}
