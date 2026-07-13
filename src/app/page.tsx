import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock3, MapPin, Sparkles } from "lucide-react";
import eventData from "../../public/content/events.json";
import site from "../../public/content/site.json";

const social = [
  ["Instagram", "https://www.instagram.com/gutechsoc/"],
  ["Discord", "https://discord.gg/FfrfkFv"],
  ["LinkedIn", "https://www.linkedin.com/company/glasgow-university-tech-society/"],
];

function Logo() {
  return <Link href="#top" className="brand" aria-label="GUTS home"><Image src="/assets/logo.svg" width={44} height={48} alt="" /><span>GU Tech<br/>Society</span></Link>;
}

export default function Home() {
  const events = eventData.events;
  return (
    <main id="top">
      <header className="nav shell">
        <Logo />
        <nav aria-label="Main navigation">
          <a href="#events">Events</a><a href="#about">About</a><a href="#team">Committee</a><a href="#partners">Partners</a>
        </nav>
        <a className="button button-small" href={site.joinUrl} target="_blank">Join GUTS <ArrowRight size={16}/></a>
      </header>

      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Glasgow&apos;s student tech community</p>
          <h1>Build things.<br/><em>Meet people.</em><br/>Go further.</h1>
          <p className="lede">{site.description}</p>
          <div className="hero-actions"><a className="button" href="#events">See what&apos;s on <ArrowRight size={18}/></a><a className="text-link" href="#about">Explore the society <span>↘</span></a></div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
          <div className="hero-hex"><Image src="/assets/logo.svg" fill alt="" priority /></div>
          <div className="signal signal-a">01<span>LEARN</span></div><div className="signal signal-b">02<span>BUILD</span></div><div className="signal signal-c">03<span>CONNECT</span></div>
        </div>
      </section>

      <section className="ticker"><div>HACKATHONS <i/> WORKSHOPS <i/> SOCIALS <i/> CAREERS <i/> TALKS <i/> HACKATHONS <i/> WORKSHOPS <i/> SOCIALS</div></section>

      <section id="events" className="section shell">
        <div className="section-head"><div><p className="kicker">What&apos;s happening</p><h2>Find your next<br/><em>good idea.</em></h2></div><p>From 24-hour hackathons to laid-back socials, there&apos;s always a reason to get involved.</p></div>
        <div className="events-grid">
          {events.slice(0, 4).map((event, i) => <article className={`event-card ${i===0 ? "featured" : ""}`} key={event.slug}>
            <div className="event-image"><Image src={event.image} fill alt="" sizes={i===0 ? "(max-width: 800px) 100vw, 55vw" : "(max-width: 800px) 100vw, 30vw"}/><span className={`tag ${event.type.toLowerCase()}`}>{event.type}</span></div>
            <div className="event-body"><p className="event-meta"><CalendarDays size={15}/>{event.date}<Clock3 size={15}/>{event.time}</p><h3>{event.title}</h3><p className="event-place"><MapPin size={16}/>{event.location}</p><p>{event.description}</p></div>
          </article>)}
        </div>
        <div className="archive-row"><span>{events.length}+ events in our archive</span><a className="text-link" href="#archive">Browse past events <ArrowRight size={17}/></a></div>
      </section>

      <section id="about" className="manifesto">
        <div className="shell manifesto-grid"><p className="vertical">EST. 2013 · UNIVERSITY OF GLASGOW</p><div><p className="kicker light">The short version</p><h2>Tech is better<br/>when it&apos;s <em>shared.</em></h2></div><div className="manifesto-copy"><p>We&apos;re the official society of the School of Computing Science—a place to sharpen your skills, meet your people and discover where technology can take you.</p><div className="stats"><div><strong>2</strong><span>flagship<br/>hackathons</span></div><div><strong>∞</strong><span>room for<br/>new ideas</span></div><div><strong>1</strong><span>brilliant<br/>community</span></div></div></div></div>
      </section>

      <section id="team" className="section shell">
        <div className="section-head compact"><div><p className="kicker">The people behind it</p><h2>Meet the<br/><em>committee.</em></h2></div><p>Students building the kind of tech community we wanted to find.</p></div>
        <div className="team-grid">{site.team.map(member => <article className="person" key={member.name}><div className="portrait"><Image src={member.image} fill alt={member.name}/></div><p>{member.role}</p><h3>{member.name}</h3></article>)}</div>
      </section>

      <section id="partners" className="partners shell"><div><p className="kicker">Industry partners</p><h2>Backing the next<br/>generation of <em>builders.</em></h2></div><p>Our partners make bigger events, better prizes and genuine career connections possible.</p><a className="button inverse" href={`mailto:${site.email}`}>Partner with us <ArrowRight size={18}/></a></section>

      <section className="join"><div className="join-glow"/><div className="shell join-inner"><Sparkles/><p className="kicker light">Your invitation</p><h2>Come make<br/><em>something happen.</em></h2><p>No experience required. Curiosity will do nicely.</p><a className="button bright" href={site.joinUrl}>Join the Discord <ArrowRight size={18}/></a></div></section>

      <footer className="shell"><Logo/><p>Glasgow University Tech Society<br/>School of Computing Science</p><div>{social.map(([label,url])=><a key={label} href={url}>{label} ↗</a>)}</div><p className="fine">© 2026 GUTS. Built by students, fuelled by questionable sleep schedules.</p></footer>
    </main>
  );
}
