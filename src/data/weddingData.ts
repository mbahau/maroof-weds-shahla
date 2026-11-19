/**
 * Single source of truth for the invitation.
 * Null means the information has not been provided and must not be invented.
 */
export const weddingData = {
  couple: {
    groom: 'Ahsaan',
    bride: 'Nargis',
    display: 'Ahsaan Alam weds Nargis Naaz',
  },
  invitation: {
    displayDate: '19 December 2026',
    weekday: 'Saturday',
    day: '19',
    monthYear: 'December · 2026',
    familyNames: 'Mrs and Mr Md Iliyas Alam',
  },
  countdown: {
    target: '2026-12-19T16:00:00+05:30',
    event: 'Departure of Barat',
  },
  events: [
    { name: 'Rasme Haldi', note: null, date: 'Friday, 18 December 2026', time: '04:00 PM onwards', dateTime: '2026-12-18T16:00:00+05:30', icon: 'sun' },
    { name: 'Milad un Nabi', note: null, date: 'Friday, 18 December 2026', time: '08:00 PM onwards', dateTime: '2026-12-18T20:00:00+05:30', icon: 'sparkles' },
    { name: 'Departure of Barat', note: null, date: 'Saturday, 19 December 2026', time: '04:00 PM onwards', dateTime: '2026-12-19T16:00:00+05:30', icon: 'moon' },
    { name: 'Nikah', note: 'Venue: Hotel Kajaria, Balumath, Jharkhand', date: 'Saturday, 19 December 2026', time: '11:00 PM onwards', dateTime: '2026-12-19T23:00:00+05:30', icon: 'heart' },
    { name: 'Walima / Reception', note: 'Venue: Alam Residence, Duliyakaram Tisri, Giridih', date: 'Monday, 21 December 2026', time: '08:00 PM onwards', dateTime: '2026-12-21T20:00:00+05:30', icon: 'star' },
  ],
  coupleStory: {
    eyebrow: 'Groom & Bride',
    title: 'Two Families, One Celebration',
    body: 'Ahsaan Alam, son of Mr. Md Iliyas Alam, Duliyakaram Tisri, Giridih, Jharkhand, weds Nargis Naaz, daughter of Mr. Md Mehtab Alam, Balumath, Latehar, Hazaribagh, Jharkhand.',
  } as null | { eyebrow: string; title: string; body: string },
  gallery: [] as readonly { src: string; alt: string }[],
  social: { instagramHashtag: null as string | null },
  media: { youtubeVideoId: null as string | null, musicUrl: null as string | null },
  guestInformation: {
    venue: {
      name: 'Nikah: Hotel Kajaria',
      address: 'Balumath, Jharkhand. Walima / Reception: Alam Residence, Duliyakaram Tisri, Giridih.',
    } as null | { name: string; address: string; mapUrl?: string },
    contact: 'Md Iliyas Alam · 8292128586' as null | string,
    reminder: 'RSVP: Gulam Rasool, Md Nayeem, Md Taiyab, Md Akhter, Md Yusuf, Inamul Haque, Md Rizwan, Md Abbas, Md Alam, and all relatives and friends.' as null | string,
  },
  rsvp: {
    endpoint: null,
    storageKey: 'ahsaan-nargis-rsvp',
  },
  wishes: { storageKey: 'ahsaan-nargis-wishes' },
} as const

export type WeddingEvent = (typeof weddingData.events)[number]
