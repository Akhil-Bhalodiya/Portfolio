"use client";
import { useState, useEffect, useRef } from "react";

// ─── SETUP (one-time) ───────────────────────────────────────────────────────
// 1. Go to https://www.emailjs.com and create a free account
// 2. Add an Email Service (Gmail, Outlook, etc.) → note the SERVICE_ID
// 3. Create an Email Template with these variables:
//      {{from_name}}, {{from_email}}, {{message}}
//    → note the TEMPLATE_ID
// 4. Copy your Public Key from Account → API Keys
// 5. Replace the three constants below:
// ────────────────────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID = "service_yv3b7f8"; // e.g. "service_abc123"
const EMAILJS_TEMPLATE_ID = "template_enovfww"; // e.g. "template_xyz789"
const EMAILJS_PUBLIC_KEY = "SQKYG5wWy-Ja0pqjk"; // e.g. "aBcDeFgHiJkLmNoP"

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const ref = useRef<HTMLDivElement>(null);

  // Load EmailJS SDK once
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    script.onload = () => (window as any).emailjs.init(EMAILJS_PUBLIC_KEY);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  // Intersection observer for reveal animations
  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal");
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in");
        }),
      { threshold: 0.08 },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const emailjs = (window as any).emailjs;
      if (!emailjs) throw new Error("EmailJS not loaded");

      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        name: form.name, // matches {{name}} in your template
        from_email: form.email, // matches {{from_email}}
        message: form.message, // matches {{message}}
        title: form.name, // matches {{title}} in subject line
        time: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }), // matches {{time}}
        reply_to: form.email,
      });

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000); // resets after 4 seconds

    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" ref={ref}>
      <div className="section-wrap">
        <div className="section-header">
          <span className="section-number">//SECTION_06</span>
          <h2 className="section-title reveal">REACH OUT TO ME!</h2>
          <p className="section-sub reveal reveal-d1">
            Discuss a project or just want to say hi? My inbox is open for all.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left — links */}
          <div className="reveal reveal-d1">
            <p className="contact-tagline">
              Open to full-time roles, freelance projects, and interesting
              collaborations. I usually reply within 24 hours.
            </p>

            <div className="contact-links">
              {[
                {
                  label: "Email",
                  val: "iamakhil1611@gmail.com",
                  href: "mailto:iamakhil1611@gmail.com",
                },
                {
                  label: "Phone",
                  val: "+91 73494 56481",
                  href: "tel:+917349456481",
                },
                {
                  label: "LinkedIn",
                  val: "linkedin.com/in/akhil-bhalodiya",
                  href: "https://linkedin.com/in/akhil-bhalodiya",
                },
                {
                  label: "Location",
                  val: "Rajkot, Gujarat, India",
                  href: null,
                },
              ].map((item) => (
                <div key={item.label} className="contact-link-item">
                  <span className="contact-link-label">{item.label}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel="noopener noreferrer"
                      className="contact-link-val"
                    >
                      &lt;{item.val}&gt;
                    </a>
                  ) : (
                    <span className="contact-link-val">&lt;{item.val}&gt;</span>
                  )}
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: 40,
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <a
                href="/resume.pdf"
                download="Akhil_Bhalodiya_Resume.pdf"
                className="btn-primary"
                style={{ fontSize: "0.7rem" }}
              >
                [ DOWNLOAD RESUME ]
              </a>
              <a
                href="https://linkedin.com/in/akhil-bhalodiya"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ fontSize: "0.7rem" }}
              >
                [ LINKEDIN ↗ ]
              </a>
            </div>
          </div>

          {/* Right — form */}
          <form onSubmit={submit} className="reveal reveal-d2">
            <div className="form-group">
              <label className="form-label">Your Name</label>
              <input
                type="text"
                required
                placeholder="John Smith"
                className="form-input"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                required
                placeholder="john@company.com"
                className="form-input"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="form-input"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>

            {/* Status messages */}
            {status === "sent" && (
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "#4ade80",
                  letterSpacing: "0.08em",
                  padding: "12px 0",
                  borderTop: "1px solid #111",
                }}
              >
                &gt; Message sent — I'll get back to you within 24 hours.
              </div>
            )}
            {status === "error" && (
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "#f87171",
                  letterSpacing: "0.08em",
                  padding: "12px 0",
                  borderTop: "1px solid #111",
                }}
              >
                &gt; Something went wrong. Try emailing me directly at
                iamakhil1611@gmail.com
              </div>
            )}
            {(status === "idle" ||
              status === "sending" ||
              status === "error") && (
              <button
                type="submit"
                className="btn-primary"
                style={{
                  fontSize: "0.72rem",
                  opacity: status === "sending" ? 0.6 : 1,
                }}
                disabled={status === "sending"}
              >
                {status === "sending" ? "[ SENDING... ]" : "[ SEND MESSAGE ]"}
              </button>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
