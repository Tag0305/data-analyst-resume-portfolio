import * as React from "react"
import { ChevronDown } from "lucide-react"

export interface AccordionProps {
  children: React.ReactNode
  className?: string
}

export function Accordion({ children, className = "" }: AccordionProps) {
  return <div className={`space-y-1 ${className}`}>{children}</div>
}

export interface AccordionItemProps {
  value: string
  trigger: React.ReactNode
  children: React.ReactNode
  className?: string
}

export function AccordionItem({ trigger, children, className = "" }: AccordionItemProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className={`border-b border-border ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left cursor-pointer text-foreground"
      >
        <span>{trigger}</span>
        <ChevronDown className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <div
        className={`overflow-hidden text-sm transition-all duration-200 ${
          isOpen ? "max-h-[500px] opacity-100 pb-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="text-muted-foreground pt-1">
          {children}
        </div>
      </div>
    </div>
  )
}
