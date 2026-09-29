import SiteNav from "../../components/SiteNav";
import SiteFooter from "../../components/SiteFooter";

export default function ContentPage() {
  return <><SiteNav /><main className="inner-page shell"><p className="eyebrow">03 / PROJECT_JULIAN</p><h1>Making the<br /><em>process</em> visible.</h1><p className="large-copy page-lead">Videos about computer science, mathematics, building, learning, and the process in between.</p><section className="page-section"><p className="section-marker">FEATURED</p><div className="video-frame featured-video"><div className="play">▶</div><span>FEATURED / 08:42</span><strong>Building a Swarm<br />of Robots From Scratch</strong></div><div className="content-categories"><span>BUILD</span><span>LEARN</span><span>LIFE</span></div></section></main><SiteFooter /></>;
}