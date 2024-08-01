import { cn } from "@/utils/cn"
import { ReactNode } from "react"

const Card = ({ children, className }: { children: ReactNode, className?: string }) => {
  return (
    <div className={cn("bg-white rounded-md", className)}>
      {children}
    </div>
  )
}

const CardHeader = ({ children, className }: { children: ReactNode, className?: string }) => {
  return (
    <div className={cn("border-b p-2", className)}>
      {children}
    </div>
  )
}

const CardBody = ({ children, className }: { children: ReactNode, className?: string }) => {
  return (
    <div className={cn("p-2 border-b", className)}>
      {children}
    </div>
  )
}

const CardFooter = ({ children, className }: { children: ReactNode, className?: string }) => {
  return (
    <div className={cn("p-2", className)}>
      {children}
    </div>
  )
}

export { Card, CardHeader, CardBody, CardFooter }
