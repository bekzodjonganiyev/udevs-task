import { Header } from "@/components/header/header"

import { List, ListHeader, ListBody } from "@/components/list/list"
import { Card, CardBody, CardFooter, CardHeader } from "@/components/card/card"
import SearchSvg from "@/assets/icons/search.svg?react"
import ShoppingListSvg from "@/assets/icons/shopping-list.svg?react"
import TimeSvg from "@/assets/icons/time.svg?react"
import CloseSvg from "@/assets/icons/close.svg?react"
import DoneSvg from "@/assets/icons/done.svg?react"
import InfoSvg from "@/assets/icons/info.svg?react"
import PaymePng from "@/assets/images/payme.png"
import StoreSvg from "@/assets/icons/store.svg?react"
import TimeFilledSvg from "@/assets/icons/time-filled.svg?react"
import ChevronDownSvg from "@/assets/icons/chevron-down.svg?react"

import { news, making, ready, courierOnRoad } from "@/utils/mock-data"
import { priceFormatter } from "@/utils/price-formatter"

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
          {/* Новый  */}
          <List className="flex flex-col">
            <ListHeader className="bg-blue-700 px-3 py-2 rounded-t-md font-semibold text-white">
              Новый ({news.length})
            </ListHeader>
            <ListBody className="p-2 rounded-b-md space-y-3">
              {
                news.map(item => (
                  <Card key={item.id}>
                    <CardHeader className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <p className="text-xl font-bold">ID: {item.id}</p>
                        <InfoSvg className="cursor-pointer" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">{priceFormatter(item.price as number, true)} сум</span>
                        <img src={PaymePng} alt="Payme logo" width={15} height={15} />
                        <StoreSvg />
                      </div>
                    </CardHeader>
                    <CardBody className="py-2">
                      {
                        item.items.map(subItem => (
                          <div key={subItem.id} className="mb-2 last:mb-0">
                            <div className="flex font-bold">{subItem.qty} x {subItem.name}</div>
                            {
                              subItem.description
                                ? <p className="ml-8 leading-none">{subItem.description}</p>
                                : null
                            }
                          </div>
                        ))
                      }

                      <div className="flex items-center justify-end gap-2"><TimeFilledSvg />{item.time}</div>
                    </CardBody>
                    <CardFooter className="flex gap-4">
                      <button className="w-1/2 px-3 py-1 rounded-md border">
                        <span className="flex items-center justify-center gap-2 text-red-400"><CloseSvg /> Отменить</span>
                      </button>
                      <button className="w-1/2 px-3 py-1 rounded-md bg-blue-600">
                        <span className="flex items-center justify-center gap-2 text-white"><DoneSvg /> Принять</span>
                      </button>
                    </CardFooter>
                  </Card>
                ))
              }
            </ListBody>
          </List>

          {/* Заготовка */}
          <List className="flex flex-col">
            <ListHeader className="bg-yellow-400 px-3 py-2 rounded-t-md font-semibold text-white">
              Заготовка ({making.length})
            </ListHeader>
            <ListBody className="p-2 rounded-b-md">
              {
                making.map(item => (
                  <Card key={item.id}>
                    <CardHeader className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <p className="text-xl font-bold">ID: {item.id}</p>
                        <InfoSvg className="cursor-pointer" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">{priceFormatter(item.price as number, true)} сум</span>
                        <img src={PaymePng} alt="Payme logo" width={15} height={15} />
                        <StoreSvg />
                      </div>
                    </CardHeader>
                    <CardBody className="py-2">
                      {
                        item.items.map(subItem => (
                          <div key={subItem.id} className="mb-2 last:mb-0">
                            <div className="flex font-bold">{subItem.qty} x {subItem.name}</div>
                            {
                              subItem.description
                                ? <p className="ml-8 leading-none">{subItem.description}</p>
                                : null
                            }
                          </div>
                        ))
                      }

                      <div className="flex items-center justify-end gap-2"><TimeFilledSvg />{item.time}</div>
                    </CardBody>
                    {
                      item.comment.length > 0
                        ? <CardFooter className="flex gap-4">
                          <div className="w-full">
                            <div className="flex items-center justify-between mb-2">
                              <p>Коментарии({item.comment.length})</p>
                              <button><ChevronDownSvg /></button>
                            </div>

                            <button className="w-full rounded-md block py-1 border border-blue-600 text-blue-600">
                              <span className="flex items-center justify-center gap-2"><DoneSvg stroke="blue" />Готово</span>
                            </button>
                          </div>
                        </CardFooter>
                        : null
                    }

                  </Card>
                ))
              }
            </ListBody>
          </List>

          {/* Готов  */}
          <List className="flex flex-col">
            <ListHeader className="bg-green-500 px-3 py-2 rounded-t-md font-semibold text-white">
              Готов ({ready.length})
            </ListHeader>
            <ListBody className="p-2 rounded-b-md">
              {
                ready.map(item => (
                  <Card key={item.id}>
                    <CardHeader className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <p className="text-xl font-bold">ID: {item.id}</p>
                        <InfoSvg className="cursor-pointer" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">{priceFormatter(item.price as number, true)} сум</span>
                        <img src={PaymePng} alt="Payme logo" width={15} height={15} />
                        <StoreSvg />
                      </div>
                    </CardHeader>
                    <CardBody className="py-2">
                      {
                        item.items.map(subItem => (
                          <div key={subItem.id} className="mb-2 last:mb-0">
                            <div className="flex font-bold">{subItem.qty} x {subItem.name}</div>
                            {
                              subItem.description
                                ? <p className="ml-8 leading-none">{subItem.description}</p>
                                : null
                            }
                          </div>
                        ))
                      }

                      <div className="flex items-center justify-end gap-2"><TimeFilledSvg />{item.time}</div>
                    </CardBody>
                  </Card>
                ))
              }
            </ListBody>
          </List>

          {/* Курьер в пути */}
          <List className="flex flex-col">
            <ListHeader className="bg-teal-400 px-3 py-2 rounded-t-md font-semibold text-white">
              Курьер в пути ({courierOnRoad.length})
            </ListHeader>
            <ListBody className="p-2 rounded-b-md">
              {
                courierOnRoad.map(item => (
                  <Card key={item.id}>
                    <CardHeader className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <p className="text-xl font-bold">ID: {item.id}</p>
                        <InfoSvg className="cursor-pointer" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">{priceFormatter(item.price as number, true)} сум</span>
                        <img src={PaymePng} alt="Payme logo" width={15} height={15} />
                        <StoreSvg />
                      </div>
                    </CardHeader>
                    <CardBody className="py-2">
                      {
                        item.items.map(subItem => (
                          <div key={subItem.id} className="mb-2 last:mb-0">
                            <div className="flex font-bold">{subItem.qty} x {subItem.name}</div>
                            {
                              subItem.description
                                ? <p className="ml-8 leading-none">{subItem.description}</p>
                                : null
                            }
                          </div>
                        ))
                      }

                      <div className="flex items-center justify-end gap-2"><TimeFilledSvg />{item.time}</div>
                    </CardBody>
                  </Card>
                ))
              }
            </ListBody>
          </List>
        </div>
      </div>
    </div>
  )
}
