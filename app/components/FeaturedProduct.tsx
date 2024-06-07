"use client"
import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'
import { useRouter } from 'next/navigation'

interface productprops{
    _id: string,
    title: string,
    img_url: string,
    sub_img: string[] ,
    new_price: number,
    old_price: number,
    stock: number
}
function FeaturedProduct() {
    const [product,setProduct] = useState<productprops[]>([])

    const router = useRouter()

    const reqdata = async() =>{
        try {

            const res = await axios.post('/api/getProduct')
             setProduct(res.data.data)

        } catch (error) {
            console.log("error while adding product")
        }
    }

    useEffect(()=>{
        reqdata()
    },[])

    const handleRedirect=(id: string)=>{
        router.push(`/productPage/${id}`);
    }

    
   
  return (
    <div className='flex lg:px-15 md:px-12 px-5 h-full'>
        <div className='flex lg:gap-8 gap-4 overflow-x-scroll overflow-y-hidden scrollbar-hide'>
            {product.map((card=>(
            <button onClick={()=>handleRedirect(card._id)} key={card.title} className='shring 0'>
                <Card
                        id={card._id}
                        title={card.title}
                        img_url={card.img_url}
                        sub_img={card.sub_img}
                        curr_price={card.new_price}
                        pre_price={card.old_price} 
                        stock={card.stock}
                    />
            </button>
            )))}
        </div>
    </div>
  )
}

export default FeaturedProduct

// const cards = [
//     { 
//         id: "1",
//         img_url: "https://beatnik-5.myshopify.com/cdn/shop/products/bird-prod5.jpg?v=1594124557&width=925",
//         img_uri: "https://beatnik-5.myshopify.com/cdn/shop/products/bird-prod14.jpg?v=1594124557&width=925",
//         title: "kaka",
//         curr_price: 12.50,
//         pre_price: 65.50,
//         stock: true
//     },
//     { 
//         id: "1",
//         img_url: "https://beatnik-5.myshopify.com/cdn/shop/products/bird-prod5.jpg?v=1594124557&width=925",
//         img_uri: "https://beatnik-5.myshopify.com/cdn/shop/products/bird-prod14.jpg?v=1594124557&width=925",
//         title: "kaka",
//         curr_price: 12.50,
//         pre_price: 65.50,
//         stock: true
//     },
//     { 
//         id: "1",
//         img_url: "https://beatnik-5.myshopify.com/cdn/shop/products/bird-prod5.jpg?v=1594124557&width=925",
//         img_uri: "https://beatnik-5.myshopify.com/cdn/shop/products/bird-prod14.jpg?v=1594124557&width=925",
//         title: "kaka",
//         curr_price: 12.50,
//         pre_price: 65.50,
//         stock: true
//     },
//     { 
//         id: "1",
//         img_url: "https://beatnik-5.myshopify.com/cdn/shop/products/bird-prod5.jpg?v=1594124557&width=925",
//         img_uri: "https://beatnik-5.myshopify.com/cdn/shop/products/bird-prod14.jpg?v=1594124557&width=925",
//         title: "kaka",
//         curr_price: 12.50,
//         pre_price: 65.50,
//         stock: true
//     },
//     { 
//         id: "1",
//         img_url: "https://beatnik-5.myshopify.com/cdn/shop/products/bird-prod5.jpg?v=1594124557&width=925",
//         img_uri: "https://beatnik-5.myshopify.com/cdn/shop/products/bird-prod14.jpg?v=1594124557&width=925",
//         title: "kaka",
//         curr_price: 12.50,
//         pre_price: 65.50,
//         stock: true
//     },
//     { 
//         id: "6",
//         img_url: "https://beatnik-5.myshopify.com/cdn/shop/products/bird-prod5.jpg?v=1594124557&width=925",
//         img_uri: "https://beatnik-5.myshopify.com/cdn/shop/products/bird-prod14.jpg?v=1594124557&width=925",
//         title: "kaka",
//         curr_price: 12.50,
//         pre_price: 65.50,
//         stock: true
//     },
    
// ]