const links = [
  { label: "About me", href: "/about", icon: "about" },
  { label: "Builds", href: "https://github.com/JulianChaoul16", icon: "build", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/julian-chaoul-976001270", icon: "linkedin", external: true },
  { label: "Resume", href: "/resume", icon: "resume" },
  { label: "Articles", href: "https://medium.com/@jujichaoul16", icon: "blog", external: true },
  { label: "YouTube", href: "https://www.youtube.com/@project_julian", icon: "youtube", external: true },
];

type IconName = (typeof links)[number]["icon"];

function HubIcon({ name }: { name: IconName }) {
  if (name === "linkedin") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 8.5v10M5 5.5v.1M9.5 18.5v-6a3 3 0 0 1 6 0v6m0-5.5a3 3 0 0 1 6 0v5.5" /><circle cx="5" cy="5.5" r="1" /></svg>;
  }

  if (name === "youtube") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m10 9 5 3-5 3z" /></svg>;
  }

  if (name === "about") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3.5" /><path d="M5 20a7 7 0 0 1 14 0" /></svg>;
  }

  if (name === "build") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5M3 16l9 5 9-5M12 13v4" /></svg>;
  }

  if (name === "resume") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h8l4 4v14H6zM14 3v5h5M9 12h6M9 16h6" /></svg>;
  }

  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h14v16H5zM8 8h8M8 12h8M8 16h5" /></svg>;
}

export default function Home() {
  return (
    <main className="home-hub">
      <section className="hub-intro" aria-label="Introduction">
        <h1>Julian <em>Chaoul</em></h1>

        <nav className="hub-links" aria-label="Explore Julian's website">
          {links.map(({ label, href, icon, external }, index) => (
            <a className="hub-link" style={{ animationDelay: `${350 + index * 110}ms` }} href={href} key={label} aria-label={label} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
              <span className="hub-icon"><HubIcon name={icon} /></span>
              <span className="hub-label">{label}</span>
            </a>
          ))}
        </nav>
      </section>
    </main>
  );
}


