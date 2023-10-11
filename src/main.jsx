import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ProductsProvider } from './context/ProductsContext.jsx'
import { CartProvider } from './context/CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ProductsProvider>
      <CartProvider><App /></CartProvider>
    
    </ProductsProvider>
    
    </BrowserRouter> 
  </React.StrictMode>,
)
