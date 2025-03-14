import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import { lazy, Suspense } from 'react'
import Loading from './components/Loading.jsx'
const Cart = lazy(() => import('./pages/Cart.jsx'));
const Products = lazy(() => import('./pages/Products.jsx'));
const Checkout = lazy(() => import('./pages/Checkout.jsx'));
const BestSellers = lazy(() => import('./pages/BestSellers.jsx'));
const ProductDetails = lazy(() => import('./pages/ProductDetails.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path:"/products",
        element:<Suspense fallback={<Loading/>}><Products/></Suspense>,
      },
      {
        path:"/products/:id",
        element:<Suspense fallback={<Loading/>}><ProductDetails/></Suspense>,
      },
      {
        path:"/checkout",
        element:<Suspense fallback={<Loading/>}><Checkout/></Suspense>
      },
      {
        path:"/bestsellers",
        element:<Suspense fallback={<Loading/>}><BestSellers/></Suspense>,
      },
      {
        path:"/cart",
        element:<Suspense fallback={<Loading/>}><Cart/></Suspense>,
      },
    ],
    errorElement: <Suspense fallback={<Loading/>}><NotFound/></Suspense>,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
