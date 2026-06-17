"use client";
import { useEffect, useRef } from "react";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal");
    if (!els) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in"); });
    }, { threshold: 0.1 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" ref={ref}>
      <div className="section-wrap">
        <div className="section-header">
          <span className="section-number">//SECTION_02</span>
          <h2 className="section-title reveal">ABOUT ME.</h2>
          <p className="section-sub reveal reveal-d1">
            Frontend developer based in Rajkot, Gujarat — building interfaces people actually enjoy using.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}>
          {/* Left */}
          <div>
            <p className="reveal" style={{ fontSize: "0.95rem", color: "#999", lineHeight: 1.95, marginBottom: 20, fontWeight: 300 }}>
              I&apos;m a results-driven frontend developer with 3+ years of experience delivering dynamic, high-performance web applications. My work spans interactive game puzzles, quiz flows, task modules, and full-scale SPAs for global brands across tobacco, fintech, and consumer technology.
            </p>
            <p className="reveal reveal-d1" style={{ fontSize: "0.95rem", color: "#999", lineHeight: 1.95, marginBottom: 20, fontWeight: 300 }}>
              I studied Mechanical Engineering at Acharya Institute of Technology — which trained me to think in systems. I bring the same rigor to component architecture and state management that engineers bring to structural design.
            </p>
            <p className="reveal reveal-d2" style={{ fontSize: "0.95rem", color: "#999", lineHeight: 1.95, marginBottom: 32, fontWeight: 300 }}>
              I prioritize creating seamless and intuitive user experiences that enhance engagement and drive satisfaction. Every pixel has a purpose.
            </p>

            <div className="reveal reveal-d3" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="mailto:iamakhil1611@gmail.com" className="btn-primary" style={{ fontSize: "0.9rem" }}>
                [ EMAIL ME ]
              </a>
              <a href="https://linkedin.com/in/akhil-bhalodiya" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: "0.9rem" }}>
                [ LINKEDIN ↗ ]
              </a>
            </div>
          </div>

          {/* Right — info table */}
          <div className="reveal reveal-d1">
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <tbody>
                {[
                  { label: "Name",     val: "Akhil Bhalodiya" },
                  { label: "Role",     val: "Frontend Developer" },
                  { label: "Location", val: "Rajkot, Gujarat, IN" },
                  { label: "Email",    val: "iamakhil1611@gmail.com" },
                  { label: "Phone",    val: "+91 73494 56481" },
                  { label: "Stack",    val: "React · Next.js · TypeScript" },
                  { label: "Status",   val: "Open to opportunities" },
                ].map((row, i) => (
                  <tr key={row.label} style={{ borderBottom: "1px solid #0d0d0d" }}>
                    <td style={{ padding: "14px 0 14px 0", fontSize: "1.2rem", letterSpacing: "0.1em", color: "#999", textTransform: "uppercase", width: 110, verticalAlign: "top" }}>
                      {row.label}
                    </td>
                    <td style={{ padding: "14px 0 14px 16px", fontSize: "1.2rem", color: i === 6 ? "#999" : "#999", fontWeight: 300, verticalAlign: "top" }}>
                      {row.val}
                      {/* {i === 6 && <span style={{ display: "inline-block", width: 6, height: 6, background: "#999", borderRadius: "50%", marginLeft: 8, verticalAlign: "middle", boxShadow: "0 0 6px #fff" }} />} */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <style>{`@media(max-width:768px){#about .section-wrap > div:last-child{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
