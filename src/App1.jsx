import { Route, Routes } from "react-router-dom"
import { Header } from "./Components/Header"
import { Home } from "./Components/Home"
import { Products } from "./Components/Products"
import { About } from "./Components/About"
import { Cart } from "./Components/Cart"

export const App1=()=>{
    return(
        <>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='/Products' element={<Products/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path="/Cart" element={<Cart/>}/>
        </Routes>
        </>
    )
}