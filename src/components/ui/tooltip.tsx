import * as React from "react"

export interface TooltipProps {
  content: React.ReactNode
  children: React.ReactElement
}

export function Tooltip({ content, children }: TooltipProps) {
  const [visible, setVisible] = React.useState(false)

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {React.cloneElement(children as React.ReactElement<any>, {
        "aria-haspopup": "true",
        "aria-expanded": visible
      })}
      {visible && (
        <div 
          role="tooltip" 
          className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1.5 text-xs font-medium text-primary-foreground bg-primary rounded shadow-md whitespace-nowrap pointer-events-none"
        >
          {content}
        </div>
      )}
    </div>
  )
}
