import { useState,useEffect } from "react";
import {add} from '../store/cartSlice';
import {useDispatch} from 'react-redux'

function Product() {
  const dispatch =useDispatch()
    const [product,setProduct] =useState([]);

    useEffect(()=>{
        const fetchProduct = async ()=>{
            const res =await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            console.log(data);
            setProduct(data);
        };
        fetchProduct();
    },[]);
    const handleAdd =(product)=>{
      dispatch(add(product))
    }
  return (
    <>
       <div className="">
        <div className="bg-gray-100 z-20 grid md:grid-cols-4  md:gap-4 grid-cols-1">
        {
          product.map(product=>(
            <div className="bg-white drop-shadow-2xl mx-4 my-2 p-4  rounded" key={product.id}>
               
               <div className="flex justify-center items-center my-2"><img className="h-24" src={product.image} alt='' /></div>
               <div className="text-gray-800 my-2 ">{product.title}</div>
               <div className="text-gray-800 my-2 ">Price:{product.price}</div>
               <div onClick={()=>handleAdd(product)} className="flex justify-center items-center"> <button className=' py-2 rounded hover:bg-purple-500 bg-purple-600 text-white cursor-pointer px-4'>Add to Cart</button></div>
           
            </div>
          ))  
        }
        </div>
       </div>

        </>
  )
}

export default Product