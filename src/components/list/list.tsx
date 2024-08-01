import { ReactNode } from 'react'

const List = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            {children}
        </div>
    )
}

const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            {children}
        </div>
    )
}

const ListBody = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            {children}
        </div>
    )
}

export { List, ListBody, ListHeader }