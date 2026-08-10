import { ArrowUpRight, Lock } from "lucide-react"

export function LiveProjectButton({
  href,
  label = "View Repository",
  isPrivate = false
}: {
  href?: string
  label?: string
  isPrivate?: boolean
}) {
  if (isPrivate || !href) {
    return (
      <span
        aria-disabled="true"
        className="inline-flex items-center gap-1.5 rounded-full border border-[#22C55E]/30 bg-[#071009] px-6 py-2.5 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#86EFAC]/70 cursor-default select-none"
      >
        <Lock className="h-3.5 w-3.5 text-[#22C55E]" />
        <span>Private Project</span>
      </span>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 rounded-full border border-[#22C55E]/40 bg-[#071009] px-6 py-2.5 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#39FF88] hover:bg-[#22C55E] hover:text-[#021006] hover:border-[#39FF88] transition-all duration-200 cursor-pointer shadow-sm"
    >
      <span>{label}</span>
      <ArrowUpRight className="h-4 w-4" />
    </a>
  )
}
