import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './Pages/home'
import Navbar from './Components/Navbar'
import ProductDetails from './Pages/ProductDetails'
import CartPage from './Pages/cart'

function App() {
  const [count, setCount] = useState(0)
  const [searchQuery, setSearchQuery] = useState('');
  return (
      <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />

      </Routes>
      </>
      
    
  )
}

export default App
