export default function Footer() {
  return (
    <footer>
      <div className="footer-wrap">
        <span className="footer-copy">
          &gt; AKHIL_BHALODIYA · RAJKOT, GUJARAT
        </span>
        <span className="footer-copy" style={{ color: "#222" }}>
          Built with Next.js · Deployed on Vercel
        </span>
        <div className="footer-links">
          {[
            { label: "GitHub",   href: "https://github.com/akhil-bhalodiya" },
            { label: "LinkedIn", href: "https://linkedin.com/in/akhil-bhalodiya" },
            { label: "Email",    href: "mailto:iamakhil1611@gmail.com" },
          ].map(l => (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="footer-link">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
