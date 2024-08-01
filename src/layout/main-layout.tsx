import { Outlet } from "react-router-dom"

import { Sidebar } from "@/components/sidebar/sidebar"

export const MainLayout = () => {
    return (
        <div className="flex items-start h-screen overflow-hidden">
            <Sidebar />
            
            <div className="flex-1 overflow-y-auto h-screen">
                <Outlet />
            </div>
        </div>
    )
}
