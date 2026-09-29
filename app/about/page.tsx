import SiteNav from "../../components/SiteNav";
import SiteFooter from "../../components/SiteFooter";
import Image from "next/image";

const currentAffairs = [
  { label: "Main project", value: "Byzantine voting theory for swarms" },
  { label: "Classes", value: "Real Analysis, Quantum Computing, Operating Systems" },
  { label: "Working", value: "Software Engineer and Head of ISO Partnerships at UST" },
  { label: "Reading", value: "Psycho-Cybernetics; Distributed Systems (4th edition)" },
];

const outsideTheRoutine = [
  "Learning Portuguese",
  "Building a payment processing app with a goal of 1 billion in transactions a month",
  "Training for a HYROX",
  "Taking dance classes",
];

export default function AboutPage() {
  return (
    <>
      <SiteNav />
      <main className="inner-page shell about-page">
        <p className="eyebrow">01 / ABOUT</p>
        <div className="about-opening">
          <div>
            <h1>Hi, I&apos;m <em>Julian.</em></h1>
            <div className="about-intro">
              <p>I&apos;m a math and computer science student interested in robotics, prediction markets, and swarm intelligence.</p>
              <p>I aspire to found a startup that helps better the world.</p>
            </div>
          </div>
          <Image
            className="about-portrait"
            src="/images/julian.jpeg"
            alt="Julian seated by a sunlit window"
            width={4284}
            height={5712}
            sizes="(max-width: 700px) 320px, 300px"
            priority
          />
        </div>

        <section className="about-section" aria-labelledby="current-affairs">
          <h2 id="current-affairs">Current affairs</h2>
          <dl className="about-affairs">
            {currentAffairs.map(({ label, value }) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="about-section" aria-labelledby="other-interests">
          <h2 id="other-interests">Interesting things I&apos;m doing</h2>
          <ul className="about-activities">
            {outsideTheRoutine.map((activity) => <li key={activity}>{activity}</li>)}
          </ul>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
