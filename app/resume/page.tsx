import type { Metadata } from "next";
import SiteNav from "../../components/SiteNav";

export const metadata: Metadata = {
  title: "Resume coming soon | Julian Chaoul",
  robots: { index: false, follow: true },
};

const digits = [
  ["10001", "10001", "10001", "11111", "00001", "00001", "00001"],
  ["11111", "10001", "10001", "10001", "10001", "10001", "11111"],
  ["10001", "10001", "10001", "11111", "00001", "00001", "00001"],
];

export default function ResumePage() {
  return (
    <>
      <SiteNav />
      <main className="resume-placeholder shell">
        <p className="eyebrow">RESUME / COMING SOON</p>
        <h1 className="resume-error" aria-label="404">
          <svg viewBox="0 0 170 70" aria-hidden="true" focusable="false">
            {digits.flatMap((digit, index) => digit.flatMap((row, y) =>
              [...row].map((pixel, x) => pixel === "1" ? (
                <rect key={`${index}-${x}-${y}`} x={index * 60 + x * 10} y={y * 10} width="10" height="10" />
              ) : null)
            ))}
          </svg>
        </h1>
        <p className="resume-message">Still putting this one together.</p>
        <p className="resume-detail">My resume will be here soon.</p>
        <a className="text-link" href="/">BACK TO HOME <span aria-hidden="true">&rarr;</span></a>
      </main>
    </>
  );
}
