import { Route, Routes } from 'react-router-dom'
import AllProducts from './AllProducts'
import './App.css'
import CartPage from './CartPage'
import Layout from './Layout'



function App() {


  return (
   <>
   {/* <Navbar/> */}
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AllProducts />} />
          <Route path="cart" element={<CartPage />} />

          {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>
      </Routes>
    </div>
   </>
  )
}

export default App
