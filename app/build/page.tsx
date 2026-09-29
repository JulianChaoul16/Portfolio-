import SiteNav from "../../components/SiteNav";
import SiteFooter from "../../components/SiteFooter";

const projects = [
  { number: "01", name: "Byzantine Distributed Swarm Voting", tags: "DISTRIBUTED SYSTEMS / ROBOTICS", status: "ACTIVE", description: "Exploring consensus, Byzantine failures, and autonomous agents working together." },
  { number: "02", name: "SparsEDA / Stress Monitoring", tags: "SIGNAL PROCESSING / MOBILE", status: "EXPLORING", description: "A project combining physiological data, algorithms, and mobile development." },
  { number: "03", name: "Swarm Search & Rescue", tags: "MULTI-AGENT SYSTEMS / SIMULATION", status: "PROTOTYPE", description: "Simulating multi-agent search strategies for uncertain environments." },
  { number: "04", name: "Robotics Projects", tags: "ROS / LIDAR / NAVIGATION", status: "EXPLORING", description: "Working with sensors, costmaps, and the practical edges of autonomous navigation." },
];

export default function BuildPage() {
  return <><SiteNav /><main className="inner-page shell"><p className="eyebrow">04 / BUILD</p><h1>Building<br /><em>things.</em></h1><p className="large-copy page-lead">Real projects. Real commits. Real progress.</p><section className="page-section"><p className="section-marker">PROJECTS</p><div className="project-list">{projects.map((project) => <article className="project project-detail" key={project.name}><span className="project-number">{project.number}</span><div><h3>{project.name}</h3><span className="mono">{project.tags}</span><p>{project.description}</p></div><span className="project-status">{project.status}</span><span className="arrow">↗</span></article>)}</div></section></main><SiteFooter /></>;
}