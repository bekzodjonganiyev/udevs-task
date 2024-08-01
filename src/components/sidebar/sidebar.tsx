import { NavLink } from "react-router-dom"

import SettingsSvg from "@/assets/icons/settings.svg?react"
import OrdersSvg from "@/assets/icons/orders.svg?react"

export const Sidebar = () => {
  return (
    <div className="flex flex-col items-center w-20 h-full border-r">
      {/* GO TO PROFILE */}
      <div className="w-full h-16 border-b flex items-center justify-center">

        {/* May be select */}
        <button className="bg-blue-500 w-10 h-10 rounded-full">
          <span className="flex items-center justify-center w-full h-full text-white font-medium text-2xl">D</span>
        </button>
      </div>

      {/* MAIN ITEMS */}
      <div className="flex-1 py-4">
        <NavLink to={"orders"} className="p-2 rounded-md bg-blue-500 block">
          <OrdersSvg viewBox="0 0 20 20" width={30} height={30} className="block"/>
        </NavLink>
      </div>

      {/* SETTINGS */}
      <div className="">
        <button className="">
          <SettingsSvg viewBox="0 0 20 20" width={40} height={40} />
        </button>
      </div>

      {/* GO TO PROFILE 2 */}
      <div className="w-full h-16 border-t flex items-center justify-center">

        {/* May be select */}
        <button className="bg-blue-500 w-10 h-10 rounded-full">
          <span className="flex items-center justify-center w-full h-full text-white font-medium text-2xl">D</span>
        </button>
      </div>
    </div>
  )
}
