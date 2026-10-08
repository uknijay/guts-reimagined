import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import site from "../../../public/content/site.json";

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
    <section className="partner-hero" id="partner-main"><div className="wrap">
      <div><span className="section-label">Partner with GUTS</span><h1>LET&apos;S MAKE<br/>SOMETHING<br/>MATTER.</h1></div>
      <div><p>GUTS brings students together to build, learn and connect. If your organisation wants to support that, we&apos;d love to talk.</p><a className="button button-white" href={`mailto:${site.email}?subject=Partnering%20with%20GUTS`}>Start a conversation <ArrowUpRight size={19}/></a></div>
    </div></section>
    <section className="partner-ways"><div className="wrap"><span className="section-label">How we can work together</span><h2>THERE&apos;S MORE THAN<br/>ONE WAY TO HELP.</h2><div className="partner-ways-list">{ways.map(([title, description], index) => <div className="partner-way" key={title}><span>0{index+1}</span><h3>{title}</h3><p>{description}</p></div>)}</div></div></section>
    <section className="partner-contact"><div className="wrap"><div><span className="section-label">Get in touch</span><h2>GOT AN IDEA?<br/>WE&apos;RE LISTENING.</h2></div><div><p>Tell us a little about what you have in mind and we can find a way to make it useful for students.</p><a className="button button-outline" href={`mailto:${site.email}?subject=Partnering%20with%20GUTS`}>Email GUTS <ArrowUpRight size={19}/></a></div></div></section>
  </main>;
}
