export type DJSet = {
  title: string
  date: string  // ISO 8601
  platform: 'youtube' | 'soundcloud'
  url: string
}

export const sets: DJSet[] = [
  {
    title: 'BACKDRP.Sessions 001 — Live at Warehouse',
    date: '2025-09-10',
    platform: 'youtube',
    url: 'https://www.youtube.com/watch?v=XXXXXXXX'
  },
  {
    title: 'Afterhours Mix — August 2025',
    date: '2025-08-20',
    platform: 'soundcloud',
    url: 'https://soundcloud.com/your-account/afterhours-mix'
  }
]
