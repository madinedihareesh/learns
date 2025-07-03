import { Route, Routes } from "react-router-dom"
import { Header } from "./Components/Header"
import { Home } from "./Components/Home"
import { Products } from "./Components/Products"
import { About } from "./Components/About"
import { Cart } from "./Components/Cart"
import { Footer } from "./Components/Footer"
import { ProductDetails } from "./Components/ProductDetails"
import { Login } from "./Components/Login"
import { Signup } from "./Components/Singup"


export const App1=()=>{
    return(
        <>
       <Header/>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path='/Products' element={<Products/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path="/Cart" element={<Cart/>}/>
            <Route path="/productDetails/:id" element={<ProductDetails/>}/>
            <Route path='/signup' element={<Signup/>}/>
        </Routes>
        <Footer/>
        
        </>
    )
}