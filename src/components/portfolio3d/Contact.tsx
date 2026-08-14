import * as React from "react"
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowUpRight } from "lucide-react"
import { portfolioData } from "../../data/portfolioData"
import { FadeUp } from "../creator/FadeUp"

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

export function Contact() {
  const [formData, setFormData] = React.useState({ name: "", email: "", subject: "", message: "" })
  const [submitted, setSubmitted] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setFormData({ name: "", email: "", subject: "", message: "" })
      }, 4000)
    }
  }

  const contactCards = [
    {
      icon: Mail,
      label: "Email",
      value: portfolioData.personalInfo.email,
      href: `mailto:${portfolioData.personalInfo.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: portfolioData.personalInfo.phone,
      href: `tel:${portfolioData.personalInfo.phone.replace(/\s+/g, "")}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Palasa, Srikakulam, AP, India",
      href: undefined,
    },
  ]

  return (
    <section id="contact" className="section-ivory">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Heading */}
        <FadeUp delay={0}>
          <div className="mb-14 text-center space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest font-semibold" style={{ color: "#C9A84C" }}>
              // Direct Communication
            </span>
            <h2
              className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold"
              style={{ color: "#1a1a1a" }}
            >
              Let's{" "}
              <em style={{ color: "#C9A84C" }}>Connect</em>
            </h2>

            {/* Italic serif quote */}
            <p
              className="font-serif italic text-lg sm:text-xl mx-auto max-w-xl"
              style={{ color: "#888" }}
            >
              "I am interested in opportunities involving data analysis, SQL development, AI evaluation, benchmark development, and data-driven software systems."
            </p>

            {/* Availability badge */}
            <div className="flex items-center justify-center gap-2 mt-2">
              <div className="avail-dot" />
              <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "#555" }}>
                Currently Available for Freelance & Full-Time Opportunities
              </span>
            </div>
          </div>
        </FadeUp>

        {/* Contact info cards */}
        <FadeUp delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {contactCards.map(card => (
              <div
                key={card.label}
                className={`contact-card${card.href ? " cursor-pointer" : ""}`}
                onClick={() => card.href && window.open(card.href)}
              >
                <div
                  className="mx-auto mb-3 w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(201,168,76,0.10)", border: "1px solid rgba(201,168,76,0.25)" }}
                >
                  <card.icon className="h-5 w-5" style={{ color: "#C9A84C" }} />
                </div>
                <p className="font-mono text-xs uppercase tracking-widest mb-1" style={{ color: "#888" }}>
                  {card.label}
                </p>
                <p className="text-sm font-semibold" style={{ color: "#1a1a1a", wordBreak: "break-all" }}>
                  {card.value}
                </p>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* Social links row */}
        <FadeUp delay={0.15}>
          <div className="flex items-center justify-center gap-4 mb-12">
            <a
              href={portfolioData.personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-gold-outline text-xs"
            >
              <GithubIcon />
              GitHub
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <a
              href={portfolioData.personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-gold-outline text-xs"
            >
              <LinkedinIcon />
              LinkedIn
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </FadeUp>

        {/* Contact form */}
        <FadeUp delay={0.2}>
          <div
            className="mx-auto max-w-2xl rounded-2xl p-8"
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(201,168,76,0.25)",
              borderTop: "3px solid #C9A84C"
            }}
          >
            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <CheckCircle2 className="h-10 w-10 mx-auto" style={{ color: "#C9A84C" }} />
                <h3 className="font-serif text-xl font-semibold" style={{ color: "#1a1a1a" }}>
                  Message Received!
                </h3>
                <p className="text-sm" style={{ color: "#888" }}>
                  Thank you for reaching out. I'll respond as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-serif text-2xl font-semibold mb-5" style={{ color: "#1a1a1a" }}>
                  Send a <em style={{ color: "#C9A84C" }}>Message</em>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-mono text-xs uppercase tracking-widest font-semibold" style={{ color: "#888" }}>
                      Your Name
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full h-10 px-3 text-sm rounded-lg outline-none transition-all"
                      style={{
                        background: "#FAF9F6",
                        border: "1px solid rgba(201,168,76,0.30)",
                        color: "#1a1a1a",
                        fontFamily: "'DM Sans', sans-serif"
                      }}
                      placeholder="Ronanki Tagore"
                      onFocus={e => { e.target.style.borderColor = "#C9A84C"; e.target.style.boxShadow = "0 0 0 3px rgba(201,168,76,0.10)"; }}
                      onBlur={e => { e.target.style.borderColor = "rgba(201,168,76,0.30)"; e.target.style.boxShadow = "none"; }}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-mono text-xs uppercase tracking-widest font-semibold" style={{ color: "#888" }}>
                      Your Email
                    </label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full h-10 px-3 text-sm rounded-lg outline-none transition-all"
                      style={{
                        background: "#FAF9F6",
                        border: "1px solid rgba(201,168,76,0.30)",
                        color: "#1a1a1a",
                        fontFamily: "'DM Sans', sans-serif"
                      }}
                      placeholder="you@company.com"
                      onFocus={e => { e.target.style.borderColor = "#C9A84C"; e.target.style.boxShadow = "0 0 0 3px rgba(201,168,76,0.10)"; }}
                      onBlur={e => { e.target.style.borderColor = "rgba(201,168,76,0.30)"; e.target.style.boxShadow = "none"; }}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-xs uppercase tracking-widest font-semibold" style={{ color: "#888" }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={e => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                    className="w-full h-10 px-3 text-sm rounded-lg outline-none transition-all"
                    style={{
                      background: "#FAF9F6",
                      border: "1px solid rgba(201,168,76,0.30)",
                      color: "#1a1a1a",
                      fontFamily: "'DM Sans', sans-serif"
                    }}
                    placeholder="Opportunity Inquiry"
                    onFocus={e => { e.target.style.borderColor = "#C9A84C"; e.target.style.boxShadow = "0 0 0 3px rgba(201,168,76,0.10)"; }}
                    onBlur={e => { e.target.style.borderColor = "rgba(201,168,76,0.30)"; e.target.style.boxShadow = "none"; }}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-xs uppercase tracking-widest font-semibold" style={{ color: "#888" }}>
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full p-3 text-sm rounded-lg outline-none transition-all resize-none"
                    style={{
                      background: "#FAF9F6",
                      border: "1px solid rgba(201,168,76,0.30)",
                      color: "#1a1a1a",
                      fontFamily: "'DM Sans', sans-serif"
                    }}
                    placeholder="Write your message here..."
                    onFocus={e => { e.target.style.borderColor = "#C9A84C"; e.target.style.boxShadow = "0 0 0 3px rgba(201,168,76,0.10)"; }}
                    onBlur={e => { e.target.style.borderColor = "rgba(201,168,76,0.30)"; e.target.style.boxShadow = "none"; }}
                  />
                </div>

                <button type="submit" className="btn-gold w-full justify-center">
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </FadeUp>

      </div>
    </section>
  )
}
