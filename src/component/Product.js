import {useEffect } from "react";
import {add} from '../store/cartSlice';
import {useDispatch,useSelector} from 'react-redux'
import { STATUSES } from "../store/productSlice";
import { fetchProducts } from "../store/productSlice";

function Product() {
  const dispatch =useDispatch()
  const { data: products, status } = useSelector((state) => state.product);
    // const [product,setProduct] =useState([]);

    useEffect(()=>{
      dispatch(fetchProducts());
        // const fetchProduct = async ()=>{
        //     const res =await fetch('https://fakestoreapi.com/products');
        //     const data = await res.json();
        //     console.log(data);
        //     setProduct(data);
        // };
        // fetchProduct();
    },[]);
    const handleAdd =(product)=>{
      dispatch(add(product))
    }
    if (status === STATUSES.LOADING) {
      return <h2>Loading....</h2>;
  }

  if (status === STATUSES.ERROR) {
      return <h2>Something went wrong!</h2>;
  }
  return (
    <>
       <div className="">
        <div className="bg-gray-100 z-20 grid md:grid-cols-4  md:gap-4 grid-cols-1">
        {
          products.map(product=>(
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