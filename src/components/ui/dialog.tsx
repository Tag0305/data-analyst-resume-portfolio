import * as React from "react"
import { X } from "lucide-react"

export interface DialogProps {
  open: boolean
  onClose: () => void
  children: React.ReactNode
}

export function Dialog({ open, onClose, children }: DialogProps) {
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [open])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-150"
        onClick={onClose}
      />
      {/* Content */}
      <div className="relative w-full max-w-2xl border border-border bg-background p-6 rounded-lg shadow-lg z-10 flex flex-col max-h-[85vh] overflow-y-auto">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none cursor-pointer p-1 text-muted-foreground hover:text-foreground"
        >
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </button>
        <div className="flex-1 mt-2">
          {children}
        </div>
      </div>
    </div>
  )
}
