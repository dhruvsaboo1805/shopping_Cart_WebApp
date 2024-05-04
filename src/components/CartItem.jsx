import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { remove } from '../redux/slice/CartSlice';

const CartItem = ({ item, itemIndex }) => {

  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  }
  return (
    <div>
      <div className = "flex justify-center items-center w-full gap-x-[40px] mt-7"> 
        <div>
          <img className = "mt-5 w-auto flex " src={item.image} alt="" />
        </div>

        <div>
          <h1 className='text-gray-700 font-semibold text-xl text-left '>{item.title}</h1>
          <p className=' text-gray-800 font-normal text-left mt-3'>{item.description.split(" ").slice(0,15).join(" ") + "..."}</p>

          <div className='flex justify-between mt-10'>
            <p className='text-green-600 font-semibold'>${item.price}</p>
            <div onClick={removeFromCart} className='w-30 h-30 bg-red-300 rounded-full p-1 cursor-pointer '>
              <MdDelete></MdDelete>
            </div>
          </div>
        </div>

      </div>
        <div className='w-full border-2 border-black mt-9 mb-5'></div>
    </div>
  )
}

export default CartItem
