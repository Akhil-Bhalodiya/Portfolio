"use client";
import { useState, useEffect, useRef } from "react";

const JOBS = [
  {
    role: "Web Developer",
    company: "i-Genesys Technology",
    location: "Gujarat",
    date: "Feb 2026 - Present",
    badge: "CURRENT",
    desc: "> Built interactive front-end features for PMI Levi UK, Marlboro, ZYN, IQOS, and Coin — including game puzzles, task flows, and quiz modules.",
    clients: ["PMI Levi UK", "Marlboro", "ZYN High Strength", "IQOS", "Coin"],
    points: [
      "Develop and deliver interactive front-end features — game puzzles, task flows, and quiz modules — across multiple client projects.",
      "Build modular, reusable components integrated into diverse product experiences, ensuring consistent performance and user engagement.",
      "Responsible for end-to-end deployment of developed features to company server, coordinating releases to maintain build stability.",
      "Collaborate with cross-functional teams to understand project requirements and deliver high-quality outputs within timelines.",
    ],
  },
  {
    role: "Web Developer",
    company: "Aavishkruti Solutions",
    location: "Ahmedabad, Gujarat",
    date: "Jan 2025 - Feb 2026",
    badge: "1.1 YRS",
    desc: "> Designed and developed scalable front-end applications delivering responsive, user-friendly interfaces with consistent design.",
    clients: [],
    points: [
      "Designed and developed scalable front-end applications using React.js, Zustand, React Hook Form with Zod validation, and Tailwind CSS.",
      "Integrated RESTful APIs and collaborated in flow discussions to ensure seamless data handling and maintainable architecture.",
      "Advocated for clean, reusable, and scalable code practices, contributing to improved maintainability and reduced technical debt.",
      "Collaborated closely with cross-functional teams to align business requirements with technical solutions.",
    ],
  },
  {
    role: "Web Developer",
    company: "Logistic Infotech Pvt. Ltd.",
    location: "Rajkot, Gujarat",
    date: "Sep 2022 - Dec 2024",
    badge: "2.3 YRS",
    desc: "> Designed, developed, and maintained responsive web applications resulting in a 30% increase in user engagement across desktop and mobile.",
    clients: [],
    points: [
      "Designed, developed, and maintained responsive web applications using HTML5, CSS3, JavaScript (ES6+), React.js, and Next.js — 30% increase in user engagement.",
      "Facilitated efficient communication between development team and key stakeholders, improving project delivery timelines by 25%.",
      "Managed project deliverables with Agile methodologies, leading sprint planning resulting in 15% increase in team productivity.",
      "Performed comprehensive code reviews and debugging with ESLint, Chrome DevTools, and Git — reducing code issues by 40%.",
      "Integrated RESTful APIs and third-party libraries via Axios and React Query — 20% reduction in load times.",
    ],
  },
];

export default function Experience() {
  const [expanded, setExpanded] = useState<number | null>(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal");
    if (!els) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in"); });
    }, { threshold: 0.05 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="experience" ref={ref}>
      <div className="section-wrap">
        <div className="section-header">
          <span className="section-number">//SECTION_05</span>
          <h2 className="section-title reveal">EXPERIENCE.</h2>
        </div>

        <div className="reveal reveal-d1">
          {JOBS.map((job, i) => (
            <div key={i} className="exp-item">
              <div
                className="exp-header"
                onClick={() => setExpanded(expanded === i ? null : i)}
                style={{ cursor: "pointer" }}
              >
                <div className="exp-left">
                  <div className="exp-role">{job.role}</div>
                  <div className="exp-company">{job.company} · {job.location}</div>
                </div>
                <div className="exp-right">
                  <div className="exp-date">{job.date}</div>
                  <div style={{ display: "flex", gap: 8, justifyContent: "flex-end", alignItems: "center", marginTop: 6 }}>
                    <span className="exp-badge">{job.badge}</span>
                    <span style={{ fontSize: "0.65rem", color: "#fff", letterSpacing: "0.1em" }}>
                      {expanded === i ? "[ − ]" : "[ + ]"}
                    </span>
                  </div>
                </div>
              </div>

              {expanded === i && (
                <div className="exp-body">
                  <div className="exp-desc">{job.desc}</div>

                  {job.clients.length > 0 && (
                    <div style={{ marginBottom: 16 }}>
                      <div style={{ fontSize: "0.6rem", letterSpacing: "0.2em", color: "#fff", marginBottom: 10 }}>CLIENT BRANDS</div>
                      <div className="exp-clients">
                        {job.clients.map(c => <span key={c} className="exp-client-tag">{c}</span>)}
                      </div>
                    </div>
                  )}

                  <ul className="exp-points">
                    {job.points.map((p, j) => <li key={j}>{p}</li>)}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
