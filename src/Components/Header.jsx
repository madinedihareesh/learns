import { Link } from 'react-router-dom'
import './Header.css'
export const Header=()=>{
    
    return(
        <>
        <header>
            <h3>SampleHeading</h3>
            <ul>
               <Link to='/'><li >Home</li></Link>
               <Link to='/Products'><li>Products</li></Link>
               <Link to='/About'><li>About</li></Link>
               <Link to='/Cart'><li>Cart</li></Link>
            </ul>
        </header>
        </>
    )
}