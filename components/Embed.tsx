import type { CSSProperties } from 'react'

type Props = { url: string; title?: string }

function toYouTubeEmbed(u: string) {
  const id =
    u.match(/v=([^&]+)/)?.[1] ||
    u.match(/youtu\.be\/([^?]+)/)?.[1] ||
    ''
  return id ? `https://www.youtube.com/embed/${id}` : u
}

export default function Embed({ url, title = 'Embedded player' }: Props) {
  const isYT = /youtube\.com|youtu\.be/.test(url)
  const isSC = /soundcloud\.com/.test(url)

  let src = url
  if (isYT) src = toYouTubeEmbed(url)
  if (isSC) src = `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&color=%23ff0055`

  // Use typed aspect-ratio (string values must include spaces around the slash)
  const aspect: CSSProperties['aspectRatio'] = isSC ? '16 / 10' : '16 / 9'

  return (
    <div className="relative w-full" style={{ aspectRatio: aspect }}>
      <iframe
        className="absolute inset-0 h-full w-full rounded-xl border border-white/15"
        src={src}
        title={title}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  )
}
