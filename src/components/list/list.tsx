import { cn } from '@/utils/cn'
import { ReactNode } from 'react'

const List = ({ children, className }: { children: ReactNode, className?: string }) => {
    return (
        <div className={cn(className)}>
            {children}
        </div>
    )
}

const ListHeader = ({ children, className }: { children: ReactNode, className?: string }) => {
    return (
        <div className={cn(className)}>
            {children}
        </div>
    )
}

const ListBody = ({ children, className }: { children: ReactNode, className?: string }) => {
    return (
        <div className={cn("bg-[#EEF0F2]", className)}>
            {children}
        </div>
    )
}

export { List, ListBody, ListHeader }