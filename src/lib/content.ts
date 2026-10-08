import rawEvents from "../../public/content/events.json";
import rawSite from "../../public/content/site.json";
import rawSponsors from "../../public/content/sponsors.json";
import rawStickers from "../../public/content/stickers.json";

export type Event = {
  slug: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: string;
  image: string;
  description: string;
  featuredOnHero?: boolean;
  url?: string;
};

export type Sticker = {
  title: string;
  year: string;
  image: string;
  featured?: boolean;
};

export type Sponsor = {
  name: string;
  logo: string;
  url: string;
  shape: "wide" | "square";
};

type SiteContent = {
  description: string;
  joinUrl: string;
  email: string;
  brandLogo: string;
  footerDescription: string;
  footerTagline: string;
  socials: { name: string; url: string }[];
  home: {
    heroEyebrow: string; heroLineOne: string; heroLineTwo: string; heroAccent: string; heroDescription: string;
    tickerPhrases: string[];
    aboutEyebrow: string; aboutLineOne: string; aboutLineTwo: string; aboutAccent: string; aboutParagraphs: string[];
    qualities: { title: string; description: string }[];
    eventsEyebrow: string; eventsTitle: string; eventsDescription: string;
    stickersEyebrow: string; stickersTitle: string; stickersDescription: string;
    peopleEyebrow: string; peopleTitle: string; peopleDescription: string;
    partnerEyebrow: string; partnerTitle: string; partnerDescription: string;
    closingTitle: string; closingDescription: string;
  };
  partners: {
    heroEyebrow: string; heroTitle: string; heroDescription: string;
    sponsorsEyebrow: string; sponsorsTitle: string; sponsorsDescription: string;
    waysEyebrow: string; waysTitle: string; ways: { title: string; description: string }[];
    contactEyebrow: string; contactTitle: string; contactDescription: string;
  };
  team: { name: string; role: string; image: string }[];
};

export const site = rawSite as SiteContent;
export const events: Event[] = rawEvents.events;
export const stickers: Sticker[] = rawStickers.stickers;
export const sponsors: Sponsor[] = rawSponsors.sponsors as Sponsor[];
