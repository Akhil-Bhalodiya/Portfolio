"use client";
import { useEffect, useRef, useState } from "react";

const SKILL_BARS = [
  { name: "React.js & Next.js",    pct: 95 },
  { name: "JavaScript / ES6+",     pct: 92 },
  { name: "TypeScript",            pct: 78 },
  { name: "CSS / Tailwind / UI",   pct: 90 },
  { name: "State Management",      pct: 85 },
  { name: "REST APIs & Axios",     pct: 90 },
  { name: "Git & Dev Tools",       pct: 88 },
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Reveal
    const reveals = el.querySelectorAll(".reveal");
    const revObs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in"); });
    }, { threshold: 0.08 });
    reveals.forEach(r => revObs.observe(r));

    // Bar animation
    const barObs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setAnimated(true); barObs.disconnect(); }
    }, { threshold: 0.3 });
    barObs.observe(el);

    return () => { revObs.disconnect(); barObs.disconnect(); };
  }, []);

  return (
    <section id="skills" ref={ref}>
      <div className="section-wrap">
        <div className="section-header">
          <span className="section-number">//SECTION_04</span>
          <h2 className="section-title reveal">PROFICIENCY.</h2>
          <p className="section-sub reveal reveal-d1">
            Balanced across product-facing interfaces, component architecture, and core JavaScript discipline.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>
          {/* Bars */}
          <div className="reveal reveal-d1">
            {SKILL_BARS.map((s, i) => (
              <div key={s.name} className="skill-row">
                <div className="skill-label-row">
                  <span className="skill-name">{s.name}</span>
                  <span className="skill-pct">{s.pct}%</span>
                </div>
                <div className="skill-track">
                  <div
                    className="skill-fill"
                    style={{
                      width: animated ? `${s.pct}%` : "0%",
                      transitionDelay: `${i * 0.1}s`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Tech list */}
          <div className="reveal reveal-d2">
            <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              {[
                { label: "// Core",    items: ["React.js", "Next.js", "TypeScript", "JavaScript ES6+", "HTML5", "CSS3"] },
                { label: "// State",   items: ["Redux", "RTK Query", "Zustand", "React Query", "Context API"] },
                { label: "// Styling", items: ["Tailwind CSS", "Material-UI", "Ant Design", "React-Bootstrap"] },
                { label: "// Forms",   items: ["React Hook Form", "Zod", "Yup"] },
                { label: "// Tooling", items: ["Git", "ESLint", "Chrome DevTools", "Axios", "REST APIs"] },
              ].map(group => (
                <div key={group.label}>
                  <div style={{ fontSize: "0.82rem", letterSpacing: "0.2em", color: "#ccc", marginBottom: 10 }}>
                    {group.label}
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {group.items.map(item => (
                      <span key={item} style={{
                        fontSize: "0.68rem", letterSpacing: "0.05em",
                        border: "1px solid #222", padding: "4px 12px", color: "#fff",
                        transition: "all 0.2s",
                      }}
                        // onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#fff"; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
                        // onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#fff"; (e.currentTarget as HTMLElement).style.color = "#555"; }}
                      >{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`@media(max-width:768px){#skills .section-wrap > div:last-child{grid-template-columns:1fr!important;gap:48px!important;}}`}</style>
    </section>
  );
}
