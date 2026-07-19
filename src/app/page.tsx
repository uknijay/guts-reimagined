"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  CircleDot,
  Command,
  Sparkles,
} from "lucide-react";
import eventData from "../../public/content/events.json";
import site from "../../public/content/site.json";

const social = [
  ["Instagram", "https://www.instagram.com/gutechsoc/"],
  ["Discord", "https://discord.gg/FfrfkFv"],
  ["LinkedIn", "https://www.linkedin.com/company/glasgow-university-tech-society/"],
];

function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link href="#top" className={`brand ${inverted ? "brand-inverted" : ""}`} aria-label="GUTS home">
      <span className="brand-mark"><Image src="/assets/logo.svg" width={24} height={28} alt="" /></span>
      <span>GU Tech<br />Society</span>
    </Link>
  );
}

function DuckSwitch() {
  const [ducks, setDucks] = useState(false);
  return (
    <>
      <button className="duck-switch" type="button" onClick={() => setDucks((open) => !open)} aria-label="Toggle the secret duck mode" aria-pressed={ducks}>
        <span aria-hidden="true">🦆</span><b>{ducks ? "DUCKS ON" : "SECRET"}</b>
      </button>
      {ducks && <div className="duck-rain" aria-live="polite">{Array.from({ length: 12 }, (_, index) => <span key={index} style={{ "--i": index } as React.CSSProperties}>🦆</span>)}</div>}
    </>
  );
}

export default function Home() {
  const events = eventData.events;


  return (
    <main id="top">
      <DuckSwitch />
      <header className="nav shell">
        <Logo />
        <nav aria-label="Main navigation">
          <a href="#events">Programme</a>
          <a href="#about">Our signal</a>
          <a href="#team">Committee</a>
          <a href="#partners">Partners</a>
        </nav>
        <a className="nav-cta" href={site.joinUrl} target="_blank" rel="noreferrer">Join the network <ArrowUpRight size={15} /></a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow" aria-hidden="true" />
        <div className="shell hero-shell">
          <div className="hero-intro">
            <p className="eyebrow"><CircleDot size={12} /> University of Glasgow · Est. 2013</p>
            <h1 id="hero-title">A better<br /><span>signal</span> for<br />future tech.</h1>
            <p className="lede">{site.description}</p>
            <div className="hero-actions">
              <a className="button button-electric" href="#events">Explore the programme <ArrowDownRight size={18} /></a>
              <a className="inline-link" href="#about">Why GUTS <span>↘</span></a>
            </div>
          </div>

          <div className="signal-console" aria-label="GUTS activity preview">
            <div className="console-top"><span>LIVE / GUTS NETWORK</span><span>GLA · 55.872°N</span></div>
            <div className="console-stage">
              <div className="radar-ring ring-one" /><div className="radar-ring ring-two" /><div className="radar-ring ring-three" />
              <div className="radar-sweep" />
              <div className="core-mark"><Image src="/assets/logo.svg" width={68} height={76} alt="" priority /></div>
              <span className="node node-a" /><span className="node node-b" /><span className="node node-c" />
              <p className="console-label label-a">BUILD / 01</p><p className="console-label label-b">MEET / 02</p><p className="console-label label-c">GO / 03</p>
            </div>
            <div className="console-bottom"><span><i /> SYSTEMS NOMINAL</span><span>SCROLL TO ENTER</span></div>
          </div>
        </div>
        <div className="hero-index shell" aria-hidden="true"><span>01—06</span><span>SCROLL FOR THE GOOD STUFF</span><span>↓</span></div>
      </section>

      <section className="marquee" aria-label="GUTS activities"><div>HACKATHONS <i /> WORKSHOPS <i /> SOCIALS <i /> CAREERS <i /> TALKS <i /> HACKATHONS <i /> WORKSHOPS <i /> SOCIALS <i /></div></section>

      <section id="events" className="programme shell">
        <div className="section-kicker"><span>01</span><p>On the signal</p><span className="rule" /></div>
        <div className="programme-head"><h2>The good stuff<br />is <em>already live.</em></h2><p>Workshops that unlock something new. Events that put you in a room with your people. A calendar designed to make your degree bigger than a timetable.</p></div>
        <div className="event-grid">
          {events.slice(0, 4).map((event, index) => <article className="event-card" key={event.slug}>
            <a className="event-card-image" href={site.joinUrl} target="_blank" rel="noreferrer" aria-label={`Find out about ${event.title}`}>
              <Image src={event.image} fill alt={`${event.title} event artwork`} sizes="(max-width: 700px) 100vw, 50vw" priority={index === 0} />
              <span className="event-type">0{index + 1} / {event.type}</span><span className="event-card-arrow"><ArrowUpRight size={20} /></span>
            </a>
            <div className="event-card-copy"><p>{event.date} · {event.location}</p><h3>{event.title}</h3><span>{event.description}</span></div>
          </article>)}
        </div>
        <a className="archive-link event-archive" href="#archive">Browse the archive <ArrowDownRight size={18} /></a>
      </section>

      <section id="about" className="manifesto">
        <div className="signal-noise" aria-hidden="true" />
        <div className="shell manifesto-shell">
          <div className="section-kicker inverse"><span>02</span><p>Our signal</p><span className="rule" /></div>
          <div className="manifesto-grid"><div><p className="mono-note">NO GATEKEEPING.<br />NO PERFECT PORTFOLIO REQUIRED.</p><h2>Find your<br /><em>frequency.</em></h2></div><div className="manifesto-copy"><p>GUTS is the layer beneath the lecture slides: the projects that get you obsessed, the people who answer the weird question, and the first spark of a career that fits.</p><a className="button button-cream" href={site.joinUrl} target="_blank" rel="noreferrer">Plug into GUTS <ArrowUpRight size={18} /></a></div></div>
          <div className="principles"><div><span>01</span><h3>Learn out loud.</h3><p>Try the thing, ask the question, share the work-in-progress.</p></div><div><span>02</span><h3>Make it real.</h3><p>Ideas become projects when the right people are in the room.</p></div><div><span>03</span><h3>Pass it on.</h3><p>The best communities leave the door wider than they found it.</p></div></div>
        </div>
      </section>

      <section id="team" className="team shell">
        <div className="section-kicker"><span>03</span><p>People with the passcodes</p><span className="rule" /></div>
        <div className="team-head"><h2>Meet the<br /><em>operators.</em></h2><p>The committee keeping the signal sharp, welcoming and a little bit chaotic.</p></div>
        <div className="team-grid">{site.team.map((member, index) => <article className="person" key={member.name}><div className="portrait"><Image src={member.image} fill alt={member.name} sizes="(max-width: 700px) 50vw, 25vw" /><span>0{index + 1}</span></div><p>{member.role}</p><h3>{member.name}</h3></article>)}</div>
      </section>

      <section id="partners" className="partners">
        <div className="shell partners-shell"><div className="partners-copy"><div className="section-kicker"><span>04</span><p>Bring your best brief</p><span className="rule" /></div><h2>Back the people<br />who&apos;ll build <em>what&apos;s next.</em></h2></div><div className="partner-terminal"><div className="terminal-head"><span><Command size={15} /> PARTNER ACCESS</span><span>●</span></div><div className="terminal-body"><p><span>›</span> Looking for curious, capable people?</p><p><span>›</span> Want to make an event bigger?</p><p><span>›</span> Ready to show up for students?</p><a href={`mailto:${site.email}`}>Open a channel <ArrowUpRight size={18} /></a></div></div></div>
      </section>

      <section className="join">
        <div className="join-grid" aria-hidden="true" />
        <div className="shell join-shell"><Sparkles size={24} /><p className="eyebrow">The network is open</p><h2>Make your next<br />move <em>louder.</em></h2><p>Curiosity is the only prerequisite. We&apos;ll handle the rest.</p><a className="button button-electric" href={site.joinUrl} target="_blank" rel="noreferrer">Join the Discord <ArrowUpRight size={18} /></a></div>
      </section>

      <footer>
        <div className="shell footer-grid">
          <div className="footer-intro"><Logo inverted /><p>Glasgow&apos;s student-built technology community. Made for the curious, the ambitious and everyone in between.</p></div>
          <div className="footer-links"><p>Explore</p><a href="#events">Programme <ArrowUpRight size={13} /></a><a href="#about">Our signal <ArrowUpRight size={13} /></a><a href="#team">The crew <ArrowUpRight size={13} /></a><a href="#partners">Partner with us <ArrowUpRight size={13} /></a></div>
          <div className="footer-links"><p>Stay on the signal</p>{social.map(([label, url]) => <a key={label} href={url} target="_blank" rel="noreferrer">{label} <ArrowUpRight size={13} /></a>)}<a href={`mailto:${site.email}`}>Email GUTS <ArrowUpRight size={13} /></a></div>
          <div className="footer-cta"><p>OPEN CHANNEL</p><a href={site.joinUrl} target="_blank" rel="noreferrer">Join the network <ArrowUpRight size={18} /></a></div>
        </div>
        <div className="shell footer-bottom"><p>© 2026 GUTS · Made by students with excellent taste in bad sleep schedules.</p><p>GUTS / GLA / EST. 2013</p></div>
      </footer>
    </main>
  );
}
