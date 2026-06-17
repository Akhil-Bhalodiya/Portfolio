"use client";
import { useEffect, useRef } from "react";

const SERVICES = [
  {
    num: "01",
    title: "> Frontend Engineering",
    points: [
      "Building high-performance SPAs and dynamic UIs with React.js and Next.js",
      "Delivering game puzzles, quiz modules, and interactive task flows for global clients",
      "Creating pixel-perfect responsive layouts across all devices and viewports",
    ],
    tags: ["React.js", "Next.js", "JavaScript ES6+", "TypeScript", "HTML5", "CSS3"],
  },
  {
    num: "02",
    title: "> State & Data Management",
    points: [
      "Managing complex application state with Redux, RTK Query, and Zustand",
      "Integrating RESTful APIs using Axios and React Query for efficient data fetching",
      "Building form validation systems with React Hook Form and Zod schemas",
    ],
    tags: ["Redux", "RTK Query", "Zustand", "React Query", "Axios", "Zod"],
  },
  {
    num: "03",
    title: "> UI Systems & Styling",
    points: [
      "Crafting scalable design systems with Tailwind CSS and component libraries",
      "Implementing responsive interfaces using Material-UI, Ant Design, React-Bootstrap",
      "Building modular, reusable component libraries with consistent design language",
    ],
    tags: ["Tailwind CSS", "Material-UI", "Ant Design", "React-Bootstrap"],
  },
  {
    num: "04",
    title: "> Performance & Deployment",
    points: [
      "Optimising load times — achieved 20% reduction in load times across projects",
      "End-to-end deployment pipeline management and release coordination",
      "Code reviews with ESLint and Chrome DevTools — 40% reduction in code issues",
    ],
    tags: ["ESLint", "Chrome DevTools", "Git", "Agile/Scrum", "CI/CD"],
  },
];

export default function WhatIDo() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal");
    if (!els) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in"); });
    }, { threshold: 0.08 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="whatido" ref={ref}>
      <div className="section-wrap">
        <div className="section-header">
          <span className="section-number">//SECTION_03</span>
          <h2 className="section-title reveal">WHAT I DO.</h2>
          <p className="section-sub reveal reveal-d1">
            Frontend developer focused on React & Next.js who wants to ship fast, clean, and accessible product experiences.
          </p>
        </div>

        <div className="whatido-grid reveal reveal-d2">
          {SERVICES.map(s => (
            <div key={s.num} className="whatido-card">
              <div className="card-header">{s.num}</div>
              <div className="card-title">{s.title}</div>
              <ul className="card-points">
                {s.points.map((p, i) => <li key={i}>{p}</li>)}
              </ul>
              <div className="card-tags">
                {s.tags.map(t => <span key={t} className="card-tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
