"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Menu, X } from "lucide-react";
import eventsData from "../../public/content/events.json";
import site from "../../public/content/site.json";

const socials = [
  ["Instagram", "https://www.instagram.com/gutechsoc/"],
  ["Discord", site.joinUrl],
  ["LinkedIn", "https://www.linkedin.com/company/glasgow-university-tech-society/"],
];

function Brand({ light = false }: { light?: boolean }) {
  return <Link href="/" className={`brand ${light ? "brand-light" : ""}`} aria-label="Glasgow University Tech Society home">
    <Image src="/assets/logo.svg" width={40} height={45} alt="" priority />
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
          <p className="hero-overline"><span className="live-dot"/> Glasgow University Tech Society</p>
          <h1 id="hero-title">GOOD IDEAS<br/>START <span>TOGETHER.</span></h1>
          <p className="hero-description">Hackathons, workshops, socials and a place to find your people in tech. Everyone curious is welcome.</p>
          <div className="hero-actions"><a className="button button-white" href={site.joinUrl} target="_blank" rel="noreferrer">Join our Discord <ArrowUpRight size={19}/></a><a className="text-link light-link" href="#events">See what we do <ArrowDownRight size={19}/></a></div>
        </div>
        <div className="hero-art" aria-label="A collage of GUTS event posters">
          <div className="hero-art-back" aria-hidden="true">GUTS<br/>GUTS<br/>GUTS</div>
          <div className="poster poster-back"><Image src="/assets/events/quiz.webp" fill alt="GUTS pub quiz poster" sizes="(max-width: 700px) 32vw, 230px" /></div>
          <div className="poster poster-middle"><Image src="/assets/events/dyhtg.webp" fill alt="Do You Have the GUTS? hackathon poster" sizes="(max-width: 700px) 42vw, 270px" /></div>
          <div className="poster poster-front"><Image src="/assets/events/code-olympics.webp" fill alt="Code Olympics event poster" sizes="(max-width: 700px) 50vw, 320px" priority /></div>
          <span className="hero-sticker"><DuckMark/> STUDENT<br/>POWERED</span>
        </div>
      </div>
      <div className="hero-bottom wrap"><span>MADE IN GLASGOW, FOR THE CURIOUS.</span><a href="#about" aria-label="Scroll to learn about GUTS"><ArrowDownRight size={24}/></a></div>
    </section>

    <div className="ticker" aria-label="What GUTS does"><div>BUILD SOMETHING <span>✳</span> MEET YOUR PEOPLE <span>✳</span> TRY SOMETHING NEW <span>✳</span> BUILD SOMETHING <span>✳</span> MEET YOUR PEOPLE <span>✳</span></div></div>

    <section className="intro section-pad" id="about">
      <div className="wrap intro-layout">
        <div className="intro-title"><span className="section-label">Hello, we&apos;re GUTS</span><h2>A TECH SOCIETY<br/>WITH ROOM FOR <em>YOU.</em></h2></div>
        <div className="intro-copy"><p>We&apos;re a student-run community at the University of Glasgow. We make space to experiment, learn from each other and have a good time doing it.</p><p>You don&apos;t need a polished portfolio or a perfect plan. Just turn up curious.</p><a className="text-link" href={site.joinUrl} target="_blank" rel="noreferrer">Join our Discord <ArrowUpRight size={19}/></a></div>
      </div>
      <div className="wrap intro-rail"><div><b>Make</b><span>Build things with people who get excited about the same weird ideas.</span></div><div><b>Learn</b><span>Ask questions, pick up a new skill, and share what you know.</span></div><div><b>Belong</b><span>Find friends well beyond your course or comfort zone.</span></div></div>
    </section>

    <section className="events-section section-pad" id="events"><div className="wrap">
      <SectionHeading kicker="Things we've made happen" title="THE GOOD STUFF." note="A look through the GUTS event archive. Different formats, same good company."/>
      <div className="events-layout">{eventsData.events.map((event, index) => <article className={`event event-${index+1}`} key={event.slug}>
        <div className="event-image"><Image src={event.image} fill alt={`${event.title} poster`} sizes="(max-width: 650px) 100vw, (max-width: 950px) 50vw, 33vw" /></div>
        <div className="event-info"><span>{event.type} · {event.date}</span><h3>{event.title}</h3><p>{event.description}</p></div>
      </article>)}</div>
    </div></section>

    <section className="people-section section-pad" id="people"><div className="wrap"><SectionHeading kicker="Behind the scenes" title="MEET THE PEOPLE." note="The committee making the space, planning the events and keeping the ducks in order."/><div className="people-grid">{site.team.map((person, index) => <article className="person" key={person.name}><div className="person-photo"><Image src={person.image} fill alt={person.name} sizes="(max-width: 650px) 50vw, (max-width: 950px) 33vw, 18vw"/></div><div className="person-info"><span>{person.role}</span><h3>{person.name}</h3></div><span className="person-corner" aria-hidden="true">0{index+1}</span></article>)}</div></div></section>

    <section className="partner-strip"><div className="wrap partner-strip-inner"><div><span className="section-label">For organisations</span><h2>GOOD PEOPLE.<br/>BIGGER POSSIBILITIES.</h2><p>Want to make something meaningful with Glasgow&apos;s student tech community?</p></div><Link className="button button-outline" href="/partners">Partner with GUTS <ArrowUpRight size={20}/></Link></div></section>

    <section className="closing"><div className="wrap closing-inner"><DuckMark className="closing-duck"/><h2>THERE&apos;S A PLACE<br/>FOR YOU HERE.</h2><p>Find the next event, ask a question, or just introduce yourself.</p><a className="button button-white" href={site.joinUrl} target="_blank" rel="noreferrer">Join our Discord <ArrowUpRight size={19}/></a></div></section>
    <footer className="footer"><div className="wrap footer-main"><div><Brand light/><p>A student society at the University of Glasgow.<br/>Built by curious people, for curious people.</p></div><div className="footer-nav"><div><span>Explore</span><a href="#about">About</a><a href="#events">Our events</a><a href="#people">The people</a><Link href="/partners">Partners</Link></div><div><span>Elsewhere</span>{socials.map(([name, url]) => <a href={url} target="_blank" rel="noreferrer" key={name}>{name} <ArrowUpRight size={14}/></a>)}<a href={`mailto:${site.email}`}>Email us <ArrowUpRight size={14}/></a></div></div></div><div className="wrap footer-bottom"><span>© {new Date().getFullYear()} Glasgow University Tech Society</span><span>Made with care, and probably too much tea.</span></div></footer>
    <DuckSurprise />
  </main>;
}
