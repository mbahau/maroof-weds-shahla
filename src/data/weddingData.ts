/**
 * Single source of truth for the invitation.
 * Null means the information has not been provided and must not be invented.
 */
export const weddingData = {
  couple: {
    groom: 'Maroof',
    bride: 'Shahla',
    display: 'Maroof weds Shahla',
  },
  invitation: {
    displayDate: '29 October 2026',
    weekday: 'Thursday',
    day: '29',
    monthYear: 'October · 2026',
    familyNames: null,
  },
  countdown: {
    target: '2026-10-29T14:30:00+05:30',
    event: 'Departure of Barat',
  },
  events: [
    { name: 'Rasm-e-Haldi', note: 'Lagan', date: 'Tuesday, 27 October 2026', time: '04:00 PM', dateTime: '2026-10-27T16:00:00+05:30', icon: 'sun' },
    { name: 'Rasm-e-Mehndi', note: null, date: 'Wednesday, 28 October 2026', time: '05:00 PM', dateTime: '2026-10-28T17:00:00+05:30', icon: 'sparkles' },
    { name: 'Departure of Barat', note: null, date: 'Thursday, 29 October 2026', time: '02:30 PM', dateTime: '2026-10-29T14:30:00+05:30', icon: 'moon' },
    { name: 'Nikkah', note: null, date: 'Friday, 30 October 2026', time: '12:00 AM', dateTime: '2026-10-30T00:00:00+05:30', icon: 'heart' },
    { name: 'Taam-e-Walima', note: null, date: 'Sunday, 1 November 2026', time: '07:00 PM', dateTime: '2026-11-01T19:00:00+05:30', icon: 'star' },
  ],
  coupleStory: null as null | { eyebrow: string; title: string; body: string },
  gallery: [] as readonly { src: string; alt: string }[],
  social: { instagramHashtag: null as string | null },
  media: { youtubeVideoId: null as string | null, musicUrl: null as string | null },
  guestInformation: {
    venue: null as null | { name: string; address: string; mapUrl?: string },
    contact: null as null | string,
    reminder: null as null | string,
  },
  rsvp: {
    endpoint: null,
    storageKey: 'maroof-shahla-rsvp',
  },
  wishes: { storageKey: 'maroof-shahla-wishes' },
} as const

export type WeddingEvent = (typeof weddingData.events)[number]
