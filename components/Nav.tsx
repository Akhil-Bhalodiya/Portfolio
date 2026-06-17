"use client";
import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { label: "about",      href: "#about" },
    { label: "what i do",  href: "#whatido" },
    { label: "skills",     href: "#skills" },
    { label: "experience", href: "#experience" },
    { label: "contact",    href: "#contact" },
  ];

  return (
    <nav className={`nav-wrap${scrolled ? " scrolled" : ""}`}>
      <div className="nav-inner">
        {/* Logo */}
        <a href="#hero" className="nav-logo">
          &gt; AKHIL_BHALODIYA
        </a>

        {/* Desktop */}
        <div className="nav-links" style={{ display: "flex" }} id="nav-desktop">
          {links.map(l => (
            <a key={l.label} href={l.href} className="nav-link">{l.label}</a>
          ))}
          <a href="mailto:iamakhil1611@gmail.com" className="nav-cta">[ CONTACT ]</a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", display: "none", fontFamily: "inherit", fontSize: "0.72rem", letterSpacing: "0.12em" }}
          id="nav-burger"
        >
          {open ? "[ CLOSE ]" : "[ MENU ]"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: "#000", borderTop: "1px solid #111", padding: "24px 40px", display: "flex", flexDirection: "column", gap: 20 }}>
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              style={{ fontSize: "0.78rem", letterSpacing: "0.12em", color: "#888" }}>
              {l.label}
            </a>
          ))}
          <a href="mailto:iamakhil1611@gmail.com" className="nav-cta" style={{ alignSelf: "flex-start" }}>[ CONTACT ]</a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          #nav-desktop { display: none !important; }
          #nav-burger   { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
