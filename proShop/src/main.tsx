import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.tsx'
import ShoppingCart from './pages/ShoppingCart.tsx'
import ReviewOrder from './pages/ReviewOrder.tsx'
import PlaceOrder from './pages/PlaceOrder.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {index: true, element: <Home />},
      {path: "cart", element: <ShoppingCart />},
      {path: "reviewOrder", element: <ReviewOrder />},
      {path: "placeOrder", element: <PlaceOrder />},
    ],   
  },
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
