export default function SiteNav() {
  return (
    <nav className="nav shell" aria-label="Main navigation">
      <a className="wordmark" href="/">JULIAN<br />CHAOUL</a>
      <div className="nav-links">
        <a href="/about">ABOUT</a>
        <a href="https://medium.com/@jujichaoul16" target="_blank" rel="noreferrer">ARTICLES</a>
        <a href="https://www.youtube.com/@project_julian" target="_blank" rel="noreferrer">CONTENT</a>
        <a href="https://github.com/JulianChaoul16" target="_blank" rel="noreferrer">BUILDS</a>
        <a href="/resume">RESUME</a>
      </div>
      <span className="status"><i />AVAILABLE FOR GOOD QUESTIONS</span>
    </nav>
  );
}
