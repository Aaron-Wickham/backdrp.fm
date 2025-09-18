import { sets, type Set as DJSet } from '@/content/sets'  // <-- alias the type

const dtf = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  timeZone: 'UTC',
})
function fmt(d: string) {
  return dtf.format(new Date(d))
}

export default function SetsPage() {
  return (
    <section className="py-8">
      <h1 className="text-3xl font-mono">Sets</h1>
      <ul className="mt-6 space-y-4">
        {sets.map((s: DJSet, i: number) => (
          <li key={i} className="rounded-xl border border-white/15 p-4 hover:border-white/30 transition">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-lg">{s.title}</div>
                <div className="text-sm text-white/60">{fmt(s.date)} · {s.platform}</div>
              </div>
              <a href={s.url} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg bg-white text-black text-sm">
                Open
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
