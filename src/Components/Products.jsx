import axios from "axios";
import { useState } from "react"

import { useEffect } from "react";

export const Products=()=>{
    let [data,setData]=useState([]);

    async function fetchData(){
        let {data}=await axios.get('https://fakestoreapi.com/products');
        setData(data);
        
    }
   useEffect(()=>{
       fetchData();
   },[])
    return(
        <>
          <div style={{display:'flex',flexWrap:'wrap',gap:'20px',justifyContent:'center',marginTop:'20px'}}>
            {data.map((item,Index)=>(
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
                    <button style={{marginLeft:'10px'}}>Detsils</button>
                </div>
            ))}
          </div>
        </>
    )
}