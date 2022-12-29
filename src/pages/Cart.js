import { useSelector,useDispatch } from "react-redux";
import {remove} from '../store/cartSlice'
function Cart() {
  const dispatch=useDispatch()
  const cartitem=useSelector((state)=>state.cart);
  const handleRemove =(cartitemId)=>{
    dispatch(remove(cartitemId))
  }
  return (
    <>
    <div>Cart</div>
    <div >
      <div className="bg-gray-100 grid grid-cols-1">
      {
        cartitem.map(cartitem=>(
          <div className="bg-white mx-12 my-4 flex justify-around p-4">
            <div><img className="h-12" src={cartitem.image} alt='' /></div>
            <div>{cartitem.title}</div>
            <div>{cartitem.price}</div>
            <div><button onClick={()=>handleRemove(cartitem.id)} className="bg-purple-600 px-2 py-2 text-white">Remove</button></div>
          </div>
        ))
      }
    </div>
    </div>
    </>
  )
}

export default Cart