import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Sparkles } from "lucide-react";
import site from "../../../public/content/site.json";

// Featured organisations and logos from the GUTS sponsor wall:
// https://gutechsoc.com/js/sponsorsSection.js and /sponsors/sponsors.json
const sponsors = [
  { name: "School of Computing Science", logo: "uofg_white.webp", url: "https://www.gla.ac.uk/schools/computing/", shape: "wide" },
  { name: "JP Morgan", logo: "jpm_white.webp", url: "https://www.jpmorganchase.com/", shape: "wide" },
  { name: "Morgan Stanley", logo: "morganstanley_white.webp", url: "https://www.morganstanley.com/", shape: "wide" },
  { name: "SAS", logo: "sas_white.webp", url: "https://www.sas.com/", shape: "square" },
  { name: "Verint", logo: "verint_white.webp", url: "https://www.verint.com/", shape: "wide" },
  { name: "Marshall Wace", logo: "marshallwace.webp", url: "https://www.mwam.com/", shape: "wide" },
  { name: "Guitar Guitar", logo: "gg_white.webp", url: "https://www.guitarguitar.co.uk/", shape: "wide" },
  { name: "Aladdin by BlackRock", logo: "blackrock.webp", url: "https://www.blackrock.com/aladdin", shape: "wide" },
  { name: "Amazon", logo: "amazon_white.webp", url: "https://amazon.co.uk", shape: "wide" },
  { name: "GitHub", logo: "github_white.webp", url: "https://github.com/", shape: "square" },
];

const ways = [
  ["Show up", "Share what you know through a talk, workshop or a conversation with students."],
  ["Make an event bigger", "Support the experiences, challenges and prizes that bring people together."],
  ["Meet future talent", "Get to know curious students through genuine participation in the community."],
];

export default function PartnersPage() {
  return <main className="partners-page">
    <a className="skip-link" href="#partner-main">Skip to main content</a>
    <header className="site-header"><div className="header-inner wrap">
      <Link href="/" className="brand brand-light" aria-label="Glasgow University Tech Society home"><Image src="/assets/logo.svg" width={40} height={45} alt=""/><span><small>GLASGOW UNIVERSITY</small>TECH SOCIETY</span></Link>
      <Link className="partner-back" href="/"><ArrowLeft size={18}/> Back to the site</Link>
    </div></header>
    <section className="partner-hero" id="partner-main"><div className="wrap partner-hero-inner">
      <div className="partner-hero-copy"><span className="section-label">The people behind the possibilities</span><h1>GOOD THINGS<br/>HAPPEN <em>TOGETHER.</em></h1><p>More than a logo on a poster. The best partnerships make room for students to try things, meet people and find their place in tech.</p><a className="button button-white" href={`mailto:${site.email}?subject=Partnering%20with%20GUTS`}>Let&apos;s talk <ArrowUpRight size={19}/></a></div>
      <div className="partner-hero-art" aria-hidden="true"><span className="partner-art-orbit partner-art-orbit-one"/><span className="partner-art-orbit partner-art-orbit-two"/><span className="partner-art-asterisk">✳</span><div className="partner-art-note"><span>GUTS / GLASGOW</span><strong>BETTER<br/>TOGETHER</strong><span>IDEAS · PEOPLE · POSSIBILITIES</span></div><div className="partner-art-sticker"><Sparkles size={22}/> GOOD COMPANY</div></div>
    </div><div className="wrap partner-hero-foot"><span>GLASGOW UNIVERSITY TECH SOCIETY</span><span>SCROLL TO MEET THE CREW ↓</span></div></section>
    <section className="sponsor-section" aria-labelledby="sponsor-title"><div className="wrap">
      <div className="sponsor-heading"><div><span className="section-label">The GUTS sponsor wall</span><h2 id="sponsor-title">A BOARD FULL<br/>OF <em>GOOD COMPANY.</em></h2></div><p>Organisations featured on the GUTS sponsor wall. Every one has helped bring a little more possibility to the community.</p></div>
      <div className="sponsor-board"><div className="sponsor-board-top"><span>GUTS / PARTNERS & SUPPORTERS</span><span>001 — 010</span></div><div className="sponsor-grid">{sponsors.map((sponsor, index) => <a className={`sponsor-tile sponsor-tile-${sponsor.shape}`} key={sponsor.name} href={sponsor.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${sponsor.name} (opens in a new tab)`}><span className="sponsor-number">{String(index + 1).padStart(2, "0")}</span><span className="sponsor-logo"><Image src={`/assets/sponsors/${sponsor.logo}`} alt="" fill sizes="(max-width: 650px) 42vw, (max-width: 1000px) 27vw, 20vw"/></span><span className="sponsor-name">{sponsor.name}</span><ArrowUpRight className="sponsor-arrow" size={19} aria-hidden="true"/></a>)}</div><div className="sponsor-board-bottom"><span>CURIOUS WHAT WE COULD MAKE TOGETHER?</span><a href={`mailto:${site.email}?subject=Partnering%20with%20GUTS`}>BECOME A PARTNER <ArrowUpRight size={17}/></a></div></div>
    </div></section>
    <section className="partner-ways"><div className="wrap"><span className="section-label">How we can work together</span><h2>THERE&apos;S MORE THAN<br/>ONE WAY TO HELP.</h2><div className="partner-ways-list">{ways.map(([title, description], index) => <div className="partner-way" key={title}><span>0{index+1}</span><h3>{title}</h3><p>{description}</p></div>)}</div></div></section>
    <section className="partner-contact"><div className="wrap"><div><span className="section-label">Get in touch</span><h2>GOT AN IDEA?<br/>WE&apos;RE LISTENING.</h2></div><div><p>Tell us a little about what you have in mind and we can find a way to make it useful for students.</p><a className="button button-outline" href={`mailto:${site.email}?subject=Partnering%20with%20GUTS`}>Email GUTS <ArrowUpRight size={19}/></a></div></div></section>
  </main>;
}
