import React from 'react'
import { FaCartPlus } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    const { cart } = useSelector((state) => state);
    return (
        <div className=''>
            <nav className='flex justify-between items-center h-20 max-w-6xl mx-auto'>
                <NavLink to="/">
                    <div className='ml-5'>
                        <img src="../logo.png" alt="" width={150} />
                    </div>
                </NavLink>
                <div className='flex items-center font-medium text-slate-100 mr-5 space-x-6'>
                    <NavLink to="/">
                        <p className='text-lg'>Home</p>
                    </NavLink>
                    <NavLink to="/cart">

                        <div>
                            <FaCartPlus className='text-2xl' />
                            {
                                cart.length > 0 &&
                                <span
                                    className="absolute top-4 right-0 sm:top-[1rem] sm:right-[1rem] md:top-[1rem] md:right-[1rem] lg:top-[1rem] lg:right-[1rem] xl:top-[1rem] xl:right-[3.5rem] bg-green-600 text-xs w-5 h-5 flex 
                                    justify-center items-center animate-bounce rounded-full text-white"
                                    // Adjust position as needed
                                >{cart.length}</span>
                            }
                        </div>
                    </NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
