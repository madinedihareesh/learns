import { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'
 
export const Login=()=>{
    const navigate=useNavigate();
    let sty={
        width:'300px',
        height:'300px',
        border:'2px solid gray',
        }
        const [user,setUser]=useState({
            username:'',
            password:''
        })

        const handelChanges=(event)=>{
            
            setUser({...user,[event.target.name]:event.target.value})
        }
        console.log(user);
        

        const validate=(e)=>{
            e.preventDefault();
            if(user.username=='admin' && user.password=='admin'){
                navigate('/Home')
               
                
                
            }else{
                alert('Invalid username or password')
                e.target.reset();
                setUser({username:'',password:''})
            }
        }
        
        
       
        
        
    return(
        <>
        <h1 className='text-center mt-5'>Sample Heading</h1>
        <div className="container d-flex justify-content-center  mt-5 ">
            <form onSubmit={validate} action="#"  className='text-center rounded'  id="login" style={sty}>
                <input className='mb-5 mt-5' type="text" placeholder="Enteruser" name="username" onChange={handelChanges}/><br/>
                <input className='mb-5' type="password" placeholder="Enter password" name='password'onChange={handelChanges}/><br/>
                <button  type='submit'>Sbmit</button><br/>
                <Link to='/signup'>Rigister User</Link>
            </form>
        </div>
        </>
    )
}