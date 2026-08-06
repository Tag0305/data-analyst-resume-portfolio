export function LiveProjectButton({ href, label = "Live Project" }: { href?: string; label?: string }) {
  return (
    <a
      href={href || "https://tagore-ronanki.netlify.app"}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA] px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base font-medium uppercase tracking-widest text-[#D7E2EA] hover:bg-[#D7E2EA]/10 transition-colors duration-200 cursor-pointer"
    >
      {label}
    </a>
  )
}
