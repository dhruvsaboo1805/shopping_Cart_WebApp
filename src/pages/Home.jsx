import React, { useState } from 'react'
import { useEffect } from 'react';
import Product from '../components/Product';
import Spinner from '../components/Spinner';

const Home = () => {

    const API_URL = "https://fakestoreapi.com/products";
    const [loading , setLoading] = useState(false);
    const [posts , setposts] = useState([]);

    async function fetchProductsData(){
        setLoading(true);
        try{
            const result = await fetch(API_URL);
            const data = await result.json();
            console.log(data);
            setposts(data);

        }
        catch(error){
            console.log("error");
            setposts([]);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchProductsData();
    } , []);
  return (
    <div>
        {
            loading ? (<Spinner></Spinner>) : 
            (
                posts.length > 0 ? (<div  className='grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]'> 
                  {
                     posts.map( (post) => (
                        <Product key = {post.id} post = {post}></Product>
                       ))
                  }
                </div>) : 
                (<div className='flex justify-center items-center'>No Data Found </div>)
            )
        }
    </div>
  )
}

export default Home
