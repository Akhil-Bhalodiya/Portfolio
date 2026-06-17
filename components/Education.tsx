"use client";
import { useEffect, useRef } from "react";

export default function Education() {
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
    <section id="education" ref={ref}>
      <div className="section-wrap">
        <div className="section-header">
          <span className="section-number">//SECTION_06</span>
          <h2 className="section-title reveal">EDUCATION.</h2>
        </div>

        <div className="edu-card reveal reveal-d1">
          <div>
            <div className="edu-school">Acharya Institute of Technology</div>
            <div className="edu-degree">Bachelor of Science in Mechanical Engineering</div>
            <div style={{ fontSize: "0.72rem", color: "#333", marginTop: 12, fontWeight: 300, maxWidth: 480, lineHeight: 1.8 }}>
              Bengaluru, Karnataka — Systematic engineering thinking applied to frontend architecture, component design, and performance optimisation.
            </div>
          </div>
          <div className="edu-year">
            <div style={{ fontSize: "0.65rem", letterSpacing: "0.15em", color: "#333" }}>BENGALURU, KA</div>
            <div style={{ fontSize: "0.65rem", letterSpacing: "0.1em", color: "#222", marginTop: 6 }}>B.TECH · MECH. ENG.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
