"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Menu, X } from "lucide-react";
import { events, site, stickers } from "@/lib/content";

const heroEvents = (events.some(event => event.featuredOnHero)
  ? events.filter(event => event.featuredOnHero)
  : events).slice(0, 3).reverse();
const heroPosterClasses = ["poster-back", "poster-middle", "poster-front"].slice(-heroEvents.length);
const heroSticker = stickers.find(sticker => sticker.featured);

function Brand({ light = false }: { light?: boolean }) {
  return <Link href="/" className={`brand ${light ? "brand-light" : ""}`} aria-label="Glasgow University Tech Society home">
    <Image src={site.brandLogo} width={40} height={45} alt="" priority />
    <span><small>GLASGOW UNIVERSITY</small>TECH SOCIETY</span>
  </Link>;
}

function DuckMark({ className = "" }: { className?: string }) {
  return <svg className={className} viewBox="0 0 72 64" fill="none" aria-hidden="true"><path d="M12 33c0-8 6-14 14-14 4 0 7 1 10 3-1-2-2-5-2-8 0-7 5-12 12-12s12 5 12 12c0 1 0 3-1 4l12 3-10 7c-2 17-12 29-29 29-13 0-23-8-26-19 3 1 6 1 8 0Z" fill="currentColor"/><circle cx="50" cy="13" r="2.5" fill="#153F9B"/><path d="M7 59c6-3 11-3 17 0m6 0c6-3 11-3 17 0m6 0c6-3 11-3 17 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></svg>;
}

function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="header-inner wrap">
    <Brand light />
    <nav className={`site-nav ${open ? "is-open" : ""}`} aria-label="Main navigation" id="site-navigation">
      <a href="#about" onClick={() => setOpen(false)}>About</a>
      <a href="#events" onClick={() => setOpen(false)}>Our events</a>
      {stickers.length > 0 && <a href="#stickers" onClick={() => setOpen(false)}>Stickers</a>}
      <a href="#people" onClick={() => setOpen(false)}>The people</a>
      <Link href="/partners" onClick={() => setOpen(false)}>Partners</Link>
      <a className="mobile-join" href={site.joinUrl} target="_blank" rel="noreferrer">Join our Discord <ArrowUpRight size={18}/></a>
    </nav>
    <a className="header-join" href={site.joinUrl} target="_blank" rel="noreferrer">Join our Discord <ArrowUpRight size={17}/></a>
    <button className="menu-button" type="button" aria-expanded={open} aria-controls="site-navigation" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>{open ? <X size={25} aria-hidden="true"/> : <Menu size={25} aria-hidden="true"/>}</button>
  </div></header>;
}

function DuckSurprise() {
  const [show, setShow] = useState(false);
  return <>
    <button className="duck-button" type="button" onClick={() => setShow(!show)} aria-pressed={show} aria-label="Show the GUTS ducks"><DuckMark /></button>
    {show && <div className="duck-parade" aria-live="polite"><span>you found the ducks!</span>{[0, 1, 2, 3, 4].map(n => <DuckMark key={n} className={`parade-duck duck-${n}`} />)}</div>}
  </>;
}

function SectionHeading({ kicker, title, note }: { kicker: string; title: string; note?: string }) {
  return <div className="section-heading"><div><span className="section-label">{kicker}</span><h2>{title}</h2></div>{note && <p>{note}</p>}</div>;
}

export default function Home() {
  return <main id="top">
    <a className="skip-link" href="#about">Skip to main content</a>
    <SiteHeader />
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-hexes" aria-hidden="true"><i/><i/><i/><i/><i/></div>
      <div className="wrap hero-layout">
        <div className="hero-copy">
          <p className="hero-overline"><span className="live-dot"/> {site.home.heroEyebrow}</p>
          <h1 id="hero-title">{site.home.heroLineOne}<br/>{site.home.heroLineTwo} <span>{site.home.heroAccent}</span></h1>
          <p className="hero-description">{site.home.heroDescription}</p>
          <div className="hero-actions"><a className="button button-white" href={site.joinUrl} target="_blank" rel="noreferrer">Join our Discord <ArrowUpRight size={19}/></a><a className="text-link light-link" href="#events">See what we do <ArrowDownRight size={19}/></a></div>
        </div>
        <div className="hero-art" aria-label="A collage of GUTS event posters">
          <div className="hero-art-back" aria-hidden="true">GUTS<br/>GUTS<br/>GUTS</div>
          {heroEvents.map((event, index) => <div className={`poster ${heroPosterClasses[index]}`} key={event.slug}><Image src={event.image} fill alt={`${event.title} event poster`} sizes="(max-width: 700px) 50vw, 320px" priority={index === heroEvents.length - 1} /></div>)}
          {heroSticker && <div className="hero-archive-sticker" aria-hidden="true"><Image src={heroSticker.image} fill alt="" sizes="150px" /></div>}
          <span className="hero-sticker"><DuckMark/> STUDENT<br/>POWERED</span>
        </div>
      </div>
      <div className="hero-bottom wrap"><span>MADE IN GLASGOW, FOR THE CURIOUS.</span><a href="#about" aria-label="Scroll to learn about GUTS"><ArrowDownRight size={24}/></a></div>
    </section>

    <div className="ticker" aria-label="What GUTS does"><div>{[...site.home.tickerPhrases, ...site.home.tickerPhrases].map((phrase, index) => <span className="ticker-phrase" key={`${phrase}-${index}`}>{phrase} <i aria-hidden="true">✳</i></span>)}</div></div>

    <section className="intro section-pad" id="about">
      <div className="wrap intro-layout">
        <div className="intro-title"><span className="section-label">{site.home.aboutEyebrow}</span><h2>{site.home.aboutLineOne}<br/>{site.home.aboutLineTwo} <em>{site.home.aboutAccent}</em></h2></div>
        <div className="intro-copy">{site.home.aboutParagraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}<a className="text-link" href={site.joinUrl} target="_blank" rel="noreferrer">Join our Discord <ArrowUpRight size={19}/></a></div>
      </div>
      <div className="wrap intro-rail">{site.home.qualities.map(quality => <div key={quality.title}><b>{quality.title}</b><span>{quality.description}</span></div>)}</div>
    </section>

    <section className="events-section section-pad" id="events"><div className="wrap">
      <SectionHeading kicker={site.home.eventsEyebrow} title={site.home.eventsTitle} note={site.home.eventsDescription}/>
      <div className="events-layout">{events.map((event, index) => <article className={`event event-${index+1}`} key={event.slug}>
        <div className="event-image"><Image src={event.image} fill alt={`${event.title} poster`} sizes="(max-width: 650px) 100vw, (max-width: 950px) 50vw, 33vw" /></div>
        <div className="event-info"><span>{event.type} · {event.date}</span><h3>{event.title}</h3><p>{event.description}</p><div className="event-detail">{event.time} / {event.location}</div>{event.url && <a className="event-link" href={event.url} target="_blank" rel="noopener noreferrer">Event details <ArrowUpRight size={15}/></a>}</div>
      </article>)}</div>
    </div></section>

    {stickers.length > 0 && <section className="sticker-section section-pad" id="stickers"><div className="wrap"><SectionHeading kicker={site.home.stickersEyebrow} title={site.home.stickersTitle} note={site.home.stickersDescription}/><div className="sticker-grid">{stickers.map((sticker, index) => <figure className="sticker-item" key={`${sticker.title}-${index}`}><div className="sticker-art"><Image src={sticker.image} fill alt={`${sticker.title} sticker`} sizes="(max-width: 650px) 48vw, (max-width: 850px) 33vw, 24vw" /></div><figcaption><span>{String(index + 1).padStart(2, "0")} / {sticker.year}</span><strong>{sticker.title}</strong></figcaption></figure>)}</div></div></section>}

    <section className="people-section section-pad" id="people"><div className="wrap"><SectionHeading kicker={site.home.peopleEyebrow} title={site.home.peopleTitle} note={site.home.peopleDescription}/><div className="people-grid">{site.team.map((person, index) => <article className="person" key={person.name}><div className="person-photo"><Image src={person.image} fill alt={person.name} sizes="(max-width: 650px) 50vw, (max-width: 950px) 33vw, 18vw"/></div><div className="person-info"><span>{person.role}</span><h3>{person.name}</h3></div><span className="person-corner" aria-hidden="true">0{index+1}</span></article>)}</div></div></section>

    <section className="partner-strip"><div className="wrap partner-strip-inner"><div><span className="section-label">{site.home.partnerEyebrow}</span><h2>{site.home.partnerTitle}</h2><p>{site.home.partnerDescription}</p></div><Link className="button button-outline" href="/partners">Partner with GUTS <ArrowUpRight size={20}/></Link></div></section>

    <section className="closing"><div className="wrap closing-inner"><DuckMark className="closing-duck"/><h2>{site.home.closingTitle}</h2><p>{site.home.closingDescription}</p><a className="button button-white" href={site.joinUrl} target="_blank" rel="noreferrer">Join our Discord <ArrowUpRight size={19}/></a></div></section>
    <footer className="footer"><div className="wrap footer-main"><div><Brand light/><p>{site.footerDescription}</p></div><div className="footer-nav"><div><span>Explore</span><a href="#about">About</a><a href="#events">Our events</a>{stickers.length > 0 && <a href="#stickers">Stickers</a>}<a href="#people">The people</a><Link href="/partners">Partners</Link></div><div><span>Elsewhere</span>{site.socials.map(social => <a href={social.url} target="_blank" rel="noreferrer" key={social.name}>{social.name} <ArrowUpRight size={14}/></a>)}<a href={`mailto:${site.email}`}>Email us <ArrowUpRight size={14}/></a></div></div></div><div className="wrap footer-bottom"><span>© {new Date().getFullYear()} Glasgow University Tech Society</span><span>{site.footerTagline}</span></div></footer>
    <DuckSurprise />
  </main>;
}
