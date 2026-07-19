import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check, Mail } from "lucide-react";
import site from "../../../public/content/site.json";

const options = [
  ["Show up", "Meet the people behind the projects through talks, workshops or office hours."],
  ["Make it bigger", "Help us put on better events, fund prizes and give students a real brief to solve."],
  ["Build a pipeline", "Create a thoughtful route from curious student to future teammate."],
];

export default function PartnersPage() {
  return <main className="partners-page"><header className="nav shell"><Link className="brand" href="/" aria-label="GUTS home"><span className="brand-mark">G</span><span>GU Tech<br />Society</span></Link><Link className="back-link" href="/"><ArrowLeft size={15} /> Back to GUTS</Link></header><section className="partner-hero shell"><p className="eyebrow">04 · Partner access</p><h1>Bring a good brief.<br /><em>We&apos;ll bring the people.</em></h1><p className="partner-lede">GUTS gives ambitious students a place to learn in public, build useful things and meet the teams shaping what comes next.</p><a className="button button-electric" href={`mailto:${site.email}`}>Start a conversation <Mail size={17} /></a></section><section className="partner-options shell"><p className="section-kicker"><span>What partnership can look like</span></p><div className="partner-option-grid">{options.map(([title, body], index) => <article key={title}><span className="option-number">0{index + 1}</span><h2>{title}</h2><p>{body}</p><Check size={18} /></article>)}</div></section><section className="partner-contact"><div className="shell partner-contact-inner"><div><p className="eyebrow">Open channel</p><h2>Let&apos;s make it<br /><em>useful.</em></h2></div><div><p>Tell us what you&apos;re trying to do, what you can bring to students and what a good outcome looks like. We&apos;ll reply with a few ideas.</p><a className="button button-cream" href={`mailto:${site.email}`}>Email GUTS <ArrowUpRight size={17} /></a></div></div></section></main>;
}
