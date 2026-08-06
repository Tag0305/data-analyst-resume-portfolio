export function ContactButton({ label = "Contact Me", onClick }: { label?: string; onClick?: () => void }) {
  const scrollToContact = () => {
    if (onClick) {
      onClick()
    } else {
      const el = document.getElementById("contact")
      if (el) el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <button
      onClick={scrollToContact}
      className="contact-btn-gradient rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base font-medium uppercase tracking-widest text-white cursor-pointer hover:scale-105 transition-transform duration-200 active:scale-95"
    >
      {label}
    </button>
  )
}
