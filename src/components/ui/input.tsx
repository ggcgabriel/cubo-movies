import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

function Input({ className, type, label, ...props }: InputProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="text-sm font-medium text-white">
          {label}
        </label>
      )}
      <input
        type={type}
        data-slot="input"
        className={cn(
          "flex h-9 w-full rounded-md border border-input-border bg-input-bg px-3 py-1 text-sm text-input-text shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-input-placeholder focus-visible:outline-none focus-visible:border-input-borderFocus focus-visible:ring-1 focus-visible:ring-input-borderFocus disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
    </div>
  )
}

export { Input }
