import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.tsx'
import ShoppingCart from './pages/ShoppingCart.tsx'
import ReviewOrder from './pages/ReviewOrder.tsx'
import PlaceOrder from './pages/PlaceOrder.tsx'
import SuccessPayment from './pages/SuccessPayment.tsx'
import { CheckoutProvider } from './data/checkoutContext.tsx'
import Signup from './pages/Signup.tsx'
import Login from './pages/Login.tsx'
import Profile from './pages/Profile.tsx'
import ProductList from './pages/ProductsList.tsx'
import Wishlist from './pages/Wishlist.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import NotFound from './pages/NotFound.tsx'
import Products from './pages/Products.tsx'
import ProductPage from './components/ItemPage/Product.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {index: true, element: <Home />},
      {path: "cart", element: <ShoppingCart />},
      {path: "reviewOrder", element: <ReviewOrder />},
      {path: "placeOrder", element: <PlaceOrder />},
      {path: "successPayment", element: <SuccessPayment />},
      {path: "signup", element: <Signup />},
      {path: "login", element: <Login />},
      {path: "profile", element: <Profile />},
      {path: "products", element: <ProductList />},
      {path: "wishlist", element: <Wishlist />},
      {path: "wishlist", element: <Wishlist />},
      {path: "products", element: <Products />},
      {path: "products/:slug", element: <Products />},
      { path: '*', element: <NotFound /> }
    ],   
  },
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}> 
      <CheckoutProvider>
        <RouterProvider router={router} />
      </CheckoutProvider>
    </Provider>
  </StrictMode>,
)
