import { ReactNode } from "react"

import { cn } from "@/utils/cn"

export const Header = ({ className, children }: { className?: string, children: ReactNode }) => {
  return (
    <div className={cn("border-b", className)}>
      {children}
    </div>
  )
}
