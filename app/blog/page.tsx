import SiteNav from "../../components/SiteNav";
import SiteFooter from "../../components/SiteFooter";

const notes = [
  { date: "SEP 23, 2026", title: "What Byzantine Generals Taught Me About Autonomous Robots", type: "BUILD" },
  { date: "SEP 18, 2026", title: "Understanding Completion in Real Analysis", type: "LEARN" },
  { date: "SEP 12, 2026", title: "Thoughts on Building in Public", type: "REFLECT" },
];

export default function BlogPage() {
  return <><SiteNav /><main className="inner-page shell"><p className="eyebrow">02 / NOTES</p><h1>Learning in<br /><em>public.</em></h1><p className="large-copy page-lead">Notes on learning, building, and life. Small records of what I&apos;m trying to understand.</p><section className="page-section"><p className="section-marker">ALL NOTES</p><div className="note-list">{notes.map((note) => <article className="note" key={note.title}><span className="mono">{note.date}</span><h3>{note.title} <span>↗</span></h3><span className="tag">{note.type}</span></article>)}</div></section></main><SiteFooter /></>;
}