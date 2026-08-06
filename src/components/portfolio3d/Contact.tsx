import * as React from "react"
import { Card } from "../ui/card"
import { Button } from "../ui/button"
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowUpRight } from "lucide-react"
import { portfolioData } from "../../data/portfolioData"

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

  return (
    <section id="contact" className="py-16 px-6 sm:px-10 rounded-3xl bg-[#0D2416] text-[#FFFFFF] border border-[#16803A]/40 scroll-mt-20 my-12 shadow-2xl">
      <div className="space-y-8 max-w-5xl mx-auto">
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#2DBE64] font-bold block">
            // DIRECT COMMUNICATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight uppercase text-white">
            Let’s <span className="text-[#2DBE64]">Connect</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-6">
            <p className="text-sm sm:text-base text-[#DDF3E3]/90 leading-relaxed">
              I am interested in opportunities involving data analysis, SQL development, AI evaluation, benchmark development, quality engineering, and data-driven software systems.
            </p>

            <div className="space-y-4">
              <a href={`mailto:${portfolioData.personalInfo.email}`} className="flex items-center gap-3 p-3.5 rounded-xl border border-[#16803A]/50 bg-[#0B4F2A]/50 hover:border-[#2DBE64] transition-colors">
                <div className="w-9 h-9 rounded-lg bg-[#2DBE64]/20 text-[#2DBE64] flex items-center justify-center">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#DDF3E3]/70 block">Email</span>
                  <span className="text-xs font-bold text-white">{portfolioData.personalInfo.email}</span>
                </div>
              </a>

              <a href={`tel:${portfolioData.personalInfo.phone.replace(/\s+/g, "")}`} className="flex items-center gap-3 p-3.5 rounded-xl border border-[#16803A]/50 bg-[#0B4F2A]/50 hover:border-[#2DBE64] transition-colors">
                <div className="w-9 h-9 rounded-lg bg-[#2DBE64]/20 text-[#2DBE64] flex items-center justify-center">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#DDF3E3]/70 block">Phone</span>
                  <span className="text-xs font-bold text-white">{portfolioData.personalInfo.phone}</span>
                </div>
              </a>

              <div className="flex items-center gap-3 p-3.5 rounded-xl border border-[#16803A]/50 bg-[#0B4F2A]/50">
                <div className="w-9 h-9 rounded-lg bg-[#2DBE64]/20 text-[#2DBE64] flex items-center justify-center">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#DDF3E3]/70 block">Location</span>
                  <span className="text-xs font-bold text-white">Palasa, Srikakulam, Andhra Pradesh, India</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <a href={portfolioData.personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button variant="outline" className="w-full gap-2 text-xs font-bold uppercase border-[#16803A]/60 bg-[#0B4F2A]/40 text-white hover:bg-[#2DBE64] hover:text-black cursor-pointer">
                  <GithubIcon />
                  GitHub
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Button>
              </a>
              <a href={portfolioData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button variant="outline" className="w-full gap-2 text-xs font-bold uppercase border-[#16803A]/60 bg-[#0B4F2A]/40 text-white hover:bg-[#2DBE64] hover:text-black cursor-pointer">
                  <LinkedinIcon />
                  LinkedIn
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Button>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Card className="p-6 bg-[#0B4F2A]/60 border border-[#16803A]/60 text-white">
              {submitted ? (
                <div className="py-12 text-center space-y-3">
                  <CheckCircle2 className="h-10 w-10 text-[#2DBE64] mx-auto" />
                  <h3 className="text-lg font-bold text-white">Message Submitted!</h3>
                  <p className="text-xs text-[#DDF3E3]/80">Thank you for reaching out. I'll respond as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-bold uppercase text-[#DDF3E3]">Your Name</label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full h-10 px-3 text-xs bg-[#0D2416] border border-[#16803A]/60 rounded-md focus:outline-none focus:ring-1 focus:ring-[#2DBE64] text-white"
                        placeholder="Ronanki Tagore"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-bold uppercase text-[#DDF3E3]">Your Email</label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full h-10 px-3 text-xs bg-[#0D2416] border border-[#16803A]/60 rounded-md focus:outline-none focus:ring-1 focus:ring-[#2DBE64] text-white"
                        placeholder="tagoreronanki77@gmail.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold uppercase text-[#DDF3E3]">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                      className="w-full h-10 px-3 text-xs bg-[#0D2416] border border-[#16803A]/60 rounded-md focus:outline-none focus:ring-1 focus:ring-[#2DBE64] text-white"
                      placeholder="Opportunity Inquiry"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold uppercase text-[#DDF3E3]">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      className="w-full p-3 text-xs bg-[#0D2416] border border-[#16803A]/60 rounded-md focus:outline-none focus:ring-1 focus:ring-[#2DBE64] text-white"
                      placeholder="Write your message here..."
                    />
                  </div>

                  <Button type="submit" className="w-full gap-2 bg-[#16803A] hover:bg-[#2DBE64] text-white hover:text-black font-bold uppercase text-xs cursor-pointer shadow-lg">
                    <Send className="h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
