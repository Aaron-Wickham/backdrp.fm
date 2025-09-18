export default function SubscribePage() {
  const action = process.env.NEXT_PUBLIC_SUBSCRIBE_ACTION || '#'
  return (
    <section className="py-16">
      <h1 className="text-3xl font-mono">Subscribe</h1>
      <p className="mt-2 text-white/70 max-w-lg">
        Get new BACKDRP.FM sets as soon as they drop. No spam.
      </p>
      <form action={action} method="post" className="mt-6 flex gap-3">
        <input
          type="email"
          name="email"
          required
          placeholder="you@example.com"
          className="min-w-[260px] rounded-xl bg-black/30 border border-white/20 px-4 py-2 outline-none focus:border-white/40"
        />
        <button
          type="submit"
          className="px-5 py-2.5 rounded-xl bg-[var(--accent)] text-black font-medium"
        >
          Subscribe
        </button>
      </form>
      <p className="mt-3 text-xs text-white/50">
        Set <code>NEXT_PUBLIC_SUBSCRIBE_ACTION</code> in Vercel to your email provider’s embed URL.
      </p>
    </section>
  )
}
