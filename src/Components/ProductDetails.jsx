import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


export const ProductDetails=()=>{
    let {id}=useParams();
    let [data,setData]=useState({});
    const fetchData=async()=>{
        let {data}=await axios.get(`https://fakestoreapi.com/products/${id}`);
        setData(data);
        console.log(data);
        
    }
    useEffect(()=>{
        fetchData()
    },[id])
    return(
        <>
        
         <div>
            <div className="text-center fw-bold display-6">{data.title}</div>
            <div className="d-flex">
            <img src={data.image} alt={data.title}  className="w-25 ms-5"/>
            <div className="ms-5">
            <div className="lead fw-bolder mt-5 mb-5 w-50">Disc: {data.description}</div>
            <div className="fw-bold">Price:${data.price}</div>
            <div className="btn btn-primary mt-5">Add to Cart</div>
            </div>
            </div>
         </div>
 
        </>
    )
}