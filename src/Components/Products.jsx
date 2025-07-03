import axios from "axios";
import { useState } from "react"
import { useEffect } from "react";
import { Loading } from "./Loading";
import { Link } from "react-router-dom";





export const Products=()=>{
    let [data,setData]=useState([]);
    let [value,setValue]=useState(1)

    async function fetchData(){
        let {data}=await axios.get('https://fakestoreapi.com/products');
        setData(data);
        }
   useEffect(()=>{
       fetchData();
   },[])
   let totalProducts=10
   let output=data.slice((value-1)*totalProducts,value*totalProducts)
   console.log(output);
   
    return(
        <>
      
        <h1 style={{textAlign:'center'}}>TOP PRODUCTS</h1>
          <div style={{display:'flex',flexWrap:'wrap',gap:'20px',justifyContent:'center',marginTop:'20px'}}>
            {output.length==0?<Loading/>: output.map((item,Index)=>(
                <div key={Index} style={{
                    border:'2px solid black',
                    width:'300px',
                    height:'400px',
                    justifyItems:'center',
                    borderRadius:'5px'
                    }}>
                    <img src={item.image} alt={item.title} width={100} height={100} style={{marginTop:'20px'}}/>
                    <div style={{marginBottom:'10px'}}><span style={{fontWeight:'bold'}}>Title</span>:{item.title.length>30?item.title.slice(0,31)+'...':item.title}</div>
                    <p style={{marginBottom:'10px'}}><span style={{fontWeight:'bold'}}>Details</span>:{item.description.length>50?item.description.slice(0,51)+'...':item.description}</p>
                    <div style={{marginBottom:'10px'}}><span style={{fontWeight:'bold'}}>Price</span>:${item.price}</div>
                    <button>Add to Cart</button>
                    <Link to={`/productDetails/${item.id}`}>
                    <button style={{marginLeft:'10px'}}>Detsils</button>
                    </Link>
                </div>
            ))}
          </div>
          <div style={{display:'flex',justifyContent:'center',marginTop:'20px',gap:'15px'}}>
            <button onClick={()=>{setValue(1)}}>1</button>
            <button onClick={()=>{setValue(2)}}>2</button>
         </div>
       
        </>
    )
}