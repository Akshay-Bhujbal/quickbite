import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import AdminLayout from './layouts/AdminLayout/AdminLayout'
import Dashboard from './pages/DashboardPage/Dashboard'
import FoodsPage from './pages/FoodsPage/FoodsPage'
import AddFoodPage from './pages/AddFoodPage/AddFoodPage'
import OrdersPage from './pages/OrdersPage/OrdersPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<AdminLayout />} >
          <Route path='/' element={<Dashboard />} />
          <Route path='/foods' element={<FoodsPage />} />
          <Route path='/add-food' element={<AddFoodPage />} />
          <Route path='/orders' element={<OrdersPage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App