import { Link } from 'react-router-dom'
import './Header.css'
export const Header=()=>{
    
    return(
        <>
        <header className='pt-2 pb-2 mt-1'>
            <h3>SampleHeading</h3>
            <ul>
               <Link to='/Home'><li >Home</li></Link>
               <Link to='/Products'><li>Products</li></Link>
               <Link to='/About'><li>About</li></Link>
               <Link to='/Cart'><li>Cart</li></Link>
            </ul>
        </header>
        </>
    )
}