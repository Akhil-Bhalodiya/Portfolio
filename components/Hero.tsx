"use client";
import { useEffect, useState, useRef } from "react";

const ROLES = [
  "Frontend Engineer.",
  "React Developer.",
  "Next.js Developer.",
  "UI/UX Designer.",
  "Responsive Design Expert.",
];
export default function Hero() {
  const [text, setText] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  /* typewriter */
  useEffect(() => {
    const target = ROLES[roleIdx];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && text.length < target.length) {
      t = setTimeout(() => setText(target.slice(0, text.length + 1)), 70);
    } else if (!deleting && text.length === target.length) {
      t = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && text.length > 0) {
      t = setTimeout(() => setText(text.slice(0, -1)), 35);
    } else {
      setDeleting(false);
      setRoleIdx(i => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(t);
  }, [text, deleting, roleIdx]);

  /* subtle dot grid */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let W = canvas.width = window.innerWidth;
    let H = canvas.height = window.innerHeight;
    let raf: number;

    const resize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; };
    window.addEventListener("resize", resize);

    const cols = Math.floor(W / 48);
    const rows = Math.floor(H / 48);
    type D = { x: number; y: number; phase: number };
    const dots: D[] = [];
    for (let c = 0; c < cols; c++)
      for (let r = 0; r < rows; r++)
        dots.push({ x: c * 48 + 24, y: r * 48 + 24, phase: Math.random() * Math.PI * 2 });

    const draw = (t: number) => {
      ctx.clearRect(0, 0, W, H);
      dots.forEach(d => {
        const a = 0.03 + 0.04 * Math.sin(t * 0.0006 + d.phase);
        ctx.beginPath();
        ctx.arc(d.x, d.y, 0.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${a})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <section id="hero" style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />

      <div className="hero-section">
        <span className="hero-tag text-white">//SECTION_01</span>

        <h1 className="hero-title">
          HI ALL,<br />
          I&apos;M <em>AKHIL</em>
        </h1>

        <p className="hero-desc">
          I turn complex UI challenges into clean, dependable frontend systems that scale from first release to high-volume production. React, Next.js, and an obsession with the user experience.
        </p>

        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <a href="/resume.pdf" download="Akhil_Bhalodiya_Resume.pdf" className="btn-primary">
            [ SEE MY RESUME ]
          </a>
          <a href="#contact" className="btn-primary">[ CONTACT ME ]</a>
        </div>

        {/* Typewriter */}
        <div style={{ marginTop: 40, fontFamily: "inherit", fontSize: "1.2rem", color: "#ffffff", letterSpacing: "0.06em" }}>
          &gt; {text}<span className="blink" />
        </div>

        {/* Socials */}
        <div className="hero-socials">
          {[
            { label: "GitHub",   href: "https://github.com/akhil-bhalodiya" },
            { label: "LinkedIn", href: "https://linkedin.com/in/akhil-bhalodiya" },
            { label: "Email",    href: "mailto:iamakhil1611@gmail.com" },
          ].map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="social-link">
              {s.label}
            </a>
          ))}
        </div>

        {/* Stats */}
        <div className="stats-row">
          {[
            { num: 3,  suffix: "+", label: "Years Experience" },
            { num: 5,  suffix: "+", label: "Products Shipped" },
            { num: 30, suffix: "%", label: "Engagement Lift"  },
            { num: 40, suffix: "%", label: "Bug Reduction"    },
          ].map(s => (
            <div key={s.label} className="stat-item">
              <div className="stat-num">{s.num}{s.suffix}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
