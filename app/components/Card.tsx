"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import {motion} from "framer-motion"

const Card = (
    {   
        id,
        img_url,
        sub_img,
        title,
        pre_price,
        curr_price,
        stock
    }:
    {   
        id : string,
        img_url : string,
        sub_img : string[],
        title : string,
        pre_price: number,
        curr_price: number,
        stock: number

    },
   
) => {

    const [subImages,setSubImages] = useState<string[]>([]);

    const [showBuy,setShowBuy] = useState(false)

    useEffect(()=>{
        setSubImages(sub_img);
    })

    
  return (
    <div className=" flex flex-col h-full gap-4 relative">
        {/* Image  */}
        <motion.div className="relative h-full cursor-pointer flex lg:w-[450px] md:w-[30. 0px] w-[210px]"  onHoverStart={()=>{setShowBuy(true)}} onHoverEnd={()=> {setShowBuy(false)}}>
           {showBuy? 
            <Image
                src={img_url}
                alt=""
                height={400}
                width={450}
                className=" object-cover "
            />
           :
             <>
                {subImages.map((items=>(//ye samjh araha ? ki array araha tumhare pas and ek hi bar render ho raha
                    <Image
                        src={items}
                        alt=""
                        height={400}
                        width={450}
                        className=" object-cover "
                    />
                )))}
             </>
           }
            <div className="absolute mt-2 left-2 flex flex-col gap-2 font-sans text-sm font-semibold">
                <p className="py-1 px-2 bg-blue-700 text-white">New arrival</p>
                <p className="py-1 w-12 flex justify-center bg-white text-red-600">9% off</p>
            </div>
 
            {showBuy && 
                <div className=" absolute w-full bottom-8 h-12 px-2">
                    <button className="w-full h-full bg-white  ">
                        Buy now
                    </button>
                </div>
            }
        </motion.div>
        {/* Description aaise karke sare projects chhor dogi okay kr lenge pr jo 30% hogya usko krte haina?? */}
        <div className="flex w-full flex-col gap-1">
            <p className=" text-gray-500">{title}</p>
            <div className="flex gap-2">
                <p className="text-gray-500">{curr_price}</p>
                <p className="line-through text-gray-300">{pre_price}</p>
                <p className="text-gray-500">{stock}</p>
            </div>

        </div>
    </div>
  )
}

export default Card