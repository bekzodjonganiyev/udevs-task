import { Header } from "@/components/header/header"

import SearchSvg from "@/assets/icons/search.svg?react"
import ShoppingListSvg from "@/assets/icons/shopping-list.svg?react"
import TimeSvg from "@/assets/icons/time.svg?react"
import { List, ListHeader, ListBody } from "@/components/list/list"

export const Orders = () => {
  return (
    <div>
      <Header className="h-16 p-5">
        <p className="text-xl font-bold">Cегодняшние заказы</p>
      </Header>

      <div className="p-5">
        {/* Page header */}
        <div className="flex items-center justify-between mb-5">
          {/* Page header left */}
          <div className="relative">
            <SearchSvg className="absolute top-2 left-2" />
            <input type="text" placeholder="Поиск по ID" className="border rounded-md outline-none p-1 pl-10" />
          </div>

          {/* Page header right */}
          <div className="flex gap-5">
            <div className="flex items-center gap-1 border p-1 rounded-md">
              <ShoppingListSvg />
              <select name="" id="">
                <option value="">Всего: 115</option>
              </select>
            </div>

            <div className="flex items-center gap-1 border px-2 py-1 rounded-md">
              <TimeSvg />
              <p>45:08</p>
            </div>
          </div>
        </div>

        {/* Page content */}
        <div className="grid grid-cols-4 gap-5">
          <List className="flex flex-col">
            <ListHeader className="bg-blue-700 px-3 py-2 rounded-t-md font-semibold text-white">
              Новый (2)
            </ListHeader>
            <ListBody className="p-2 rounded-b-md">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos iure ipsum reprehenderit officiis odit qui molestiae, sint est blanditiis ipsa?
            </ListBody>
          </List>

          <List className="flex flex-col">
            <ListHeader className="bg-yellow-400 px-3 py-2 rounded-t-md font-semibold text-white">
              Заготовка (3)
            </ListHeader>
            <ListBody className="p-2 rounded-b-md">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos iure ipsum reprehenderit officiis odit qui molestiae, sint est blanditiis ipsa?
            </ListBody>
          </List>

          <List className="flex flex-col">
            <ListHeader className="bg-green-500 px-3 py-2 rounded-t-md font-semibold text-white">
              Готов (4)
            </ListHeader>
            <ListBody className="p-2 rounded-b-md">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos iure ipsum reprehenderit officiis odit qui molestiae, sint est blanditiis ipsa?
            </ListBody>
          </List>

          <List className="flex flex-col">
            <ListHeader className="bg-teal-400 px-3 py-2 rounded-t-md font-semibold text-white">
              Курьер в пути (1)
            </ListHeader>
            <ListBody className="p-2 rounded-b-md">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos iure ipsum reprehenderit officiis odit qui molestiae, sint est blanditiis ipsa?
            </ListBody>
          </List>
        </div>
      </div>
    </div>
  )
}
