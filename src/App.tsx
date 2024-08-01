import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import { MainLayout } from "@/layout/main-layout"
import { Orders } from "./modules/orders/orders"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/orders" replace/>} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
