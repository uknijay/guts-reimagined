import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Sparkles } from "lucide-react";
import { site, sponsors } from "@/lib/content";

function accentedTitle(title: string) {
  const lastSpace = title.lastIndexOf(" ");
  return <>{title.slice(0, lastSpace)} <em>{title.slice(lastSpace + 1)}</em></>;
}

export default function PartnersPage() {
  return <main className="partners-page">
    <a className="skip-link" href="#partner-main">Skip to main content</a>
    <header className="site-header"><div className="header-inner wrap">
      <Link href="/" className="brand brand-light" aria-label="Glasgow University Tech Society home"><Image src={site.brandLogo} width={40} height={45} alt=""/><span><small>GLASGOW UNIVERSITY</small>TECH SOCIETY</span></Link>
      <Link className="partner-back" href="/"><ArrowLeft size={18}/> Back to the site</Link>
    </div></header>
    <section className="partner-hero" id="partner-main"><div className="wrap partner-hero-inner">
      <div className="partner-hero-copy"><span className="section-label">{site.partners.heroEyebrow}</span><h1>{accentedTitle(site.partners.heroTitle)}</h1><p>{site.partners.heroDescription}</p><a className="button button-white" href={`mailto:${site.email}?subject=Partnering%20with%20GUTS`}>Let&apos;s talk <ArrowUpRight size={19}/></a></div>
      <div className="partner-hero-art" aria-hidden="true"><span className="partner-art-orbit partner-art-orbit-one"/><span className="partner-art-orbit partner-art-orbit-two"/><span className="partner-art-asterisk">✳</span><div className="partner-art-note"><span>GUTS / GLASGOW</span><strong>BETTER<br/>TOGETHER</strong><span>IDEAS · PEOPLE · POSSIBILITIES</span></div><div className="partner-art-sticker"><Sparkles size={22}/> GOOD COMPANY</div></div>
    </div><div className="wrap partner-hero-foot"><span>GLASGOW UNIVERSITY TECH SOCIETY</span><span>SCROLL TO MEET THE CREW ↓</span></div></section>
    {sponsors.length > 0 && <section className="sponsor-section" aria-labelledby="sponsor-title"><div className="wrap">
      <div className="sponsor-heading"><div><span className="section-label">{site.partners.sponsorsEyebrow}</span><h2 id="sponsor-title">{accentedTitle(site.partners.sponsorsTitle)}</h2></div><p>{site.partners.sponsorsDescription}</p></div>
      <div className="sponsor-board"><div className="sponsor-board-top"><span>GUTS / PARTNERS & SUPPORTERS</span><span>001 — {String(sponsors.length).padStart(3, "0")}</span></div><div className="sponsor-grid">{sponsors.map((sponsor, index) => <a className={`sponsor-tile sponsor-tile-${sponsor.shape}`} key={`${sponsor.name}-${index}`} href={sponsor.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${sponsor.name} (opens in a new tab)`}><span className="sponsor-number">{String(index + 1).padStart(2, "0")}</span><span className="sponsor-logo"><Image src={sponsor.logo} alt="" fill sizes="(max-width: 650px) 42vw, (max-width: 1000px) 27vw, 20vw"/></span><span className="sponsor-name">{sponsor.name}</span><ArrowUpRight className="sponsor-arrow" size={19} aria-hidden="true"/></a>)}</div><div className="sponsor-board-bottom"><span>CURIOUS WHAT WE COULD MAKE TOGETHER?</span><a href={`mailto:${site.email}?subject=Partnering%20with%20GUTS`}>BECOME A PARTNER <ArrowUpRight size={17}/></a></div></div>
    </div></section>}
    <section className="partner-ways"><div className="wrap"><span className="section-label">{site.partners.waysEyebrow}</span><h2>{site.partners.waysTitle}</h2><div className="partner-ways-list">{site.partners.ways.map((way, index) => <div className="partner-way" key={`${way.title}-${index}`}><span>{String(index + 1).padStart(2, "0")}</span><h3>{way.title}</h3><p>{way.description}</p></div>)}</div></div></section>
    <section className="partner-contact"><div className="wrap"><div><span className="section-label">{site.partners.contactEyebrow}</span><h2>{site.partners.contactTitle}</h2></div><div><p>{site.partners.contactDescription}</p><a className="button button-outline" href={`mailto:${site.email}?subject=Partnering%20with%20GUTS`}>Email GUTS <ArrowUpRight size={19}/></a></div></div></section>
  </main>;
}
