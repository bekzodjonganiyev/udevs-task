import { Outlet } from "react-router-dom"

import { Sidebar } from "@/components/sidebar/sidebar"

export const MainLayout = () => {
    return (
        <div className="flex items-start">
            <Sidebar />
            
            <div>
                <Outlet />
            </div>
        </div>
    )
}
