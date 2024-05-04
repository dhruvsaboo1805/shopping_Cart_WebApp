import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, settotalAmount] = useState(0);

  useEffect(() => {
    settotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  return (
    <div className='flex justify-center items-center w-full'>
      {
        cart.length > 0 ?
          (<div className='flex justfiy-center flex-col md:flex-row gap-x-[90px] w-11/12 max-w-[900px] mr-28'>
            <div className='w-full'>
              {
                cart.map((item, index) => {
                  return <CartItem item={item} key={item.id} itemIndex={index}></CartItem>
                })
              }
            </div>

            <div className='flex flex-col justify-center items-center md:justify-between'>
              <div className='mt-20'>
                <div className='text-green-500 font-semibold text-lg'>Your Cart</div>
                <div className='text-green-500 font-extrabold uppercase text-4xl leading-3 mt-2'>Summary</div>
                <p className='mt-6'>
                  <span className='font-black'>Total Items : {cart.length}</span>
                </p>
              </div>

              <div className='mb-20'>
                <p className='font-semibold'>Total Amount : <span className='font-extrabold'>${totalAmount}</span></p>
                <button className='bg-green-500 w-64 h-30 rounded-md p-1 mt-3 text-white font-bold '>Checkout Now</button>
              </div>
            </div>
          </div>)
          :
          (<div className='flex flex-col justify-center items-center h-[450px]'>
            <h1 className='text-3xl'>Cart is empty </h1>
            <Link className="mt-4 bg-green-500 rounded-md p-2 w-[180px] text-center text-white font-semibold hover:scale-110 hover:transition duration-300 ease-in" to={"/"}>Shop Now</Link>
          </div>)
      }
    </div>
  )
}

export default Cart
