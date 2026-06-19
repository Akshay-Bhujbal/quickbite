import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainLayout from "./layouts/MainLayout/MainLayout"
import HomePage from "./pages/HomePage/HomePage"
import CartPage from "./pages/CartPage/CartPage"
import OrdersPage from "./pages/OrdersPage/OrdersPage"
import ProfilePage from "./pages/ProfilePage/ProfilePage"
import LoginPage from "./pages/LoginPage/LoginPage"
import SignupPage from "./pages/SignupPage/SignupPage"
import MenuPage from "./pages/MenuPage/MenuPage"

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route element={<MainLayout />}>

          <Route path="/" element={<HomePage />} />

          <Route path="/menu" element={<MenuPage />} />

          <Route path="/cart" element={<CartPage />} />

          <Route path="/orders" element={<OrdersPage />} />

          <Route path="/profile" element={<ProfilePage />} />
        
        </Route>

        <Route path="/login" element={<LoginPage />} />

        <Route path="/signup" element={<SignupPage />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App;