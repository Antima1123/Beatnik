"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import {motion} from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRouter } from "next/navigation"

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

    const [subNum,setSubNum] = useState(0)

    const router = useRouter()

    useEffect(()=>{
        setSubImages(sub_img);
    })

    const handleRedirect=(id: string)=>{
        router.push(`/ProductPage/${id}`);
    }

    const ImageRight=()=> {
        if(subNum < subImages.length-1){
            setSubNum(subNum+1)
            }

    }

    const ImageLeft=()=>{
        if(subNum > 0){
            setSubNum(subNum - 1)
        }

    }


    
  return (
    <div className=" flex flex-col h-full gap-4 relative">
        {/* Image  */}
        <motion.div className="relative h-full cursor-pointer flex lg:w-[450px] md:w-[30. 0px] w-[210px]"  onHoverStart={()=>{setShowBuy(true)}} onHoverEnd={()=> {setShowBuy(false)}}>
           {showBuy? 
                    <div onClick={()=> handleRedirect(id)}>
                       
                        <Image
                        src={subImages[subNum]}//hme index 0 wala show karna hai on hover kyu ki multiple images hai
                        alt=""
                        height={400}
                        width={450}
                        className=" object-cover "
                        />
                      
                    </div>
                :
                    <div onClick={()=> handleRedirect(id)}>
                        <Image
                            src={img_url}
                            alt=""
                            height={400}
                            width={450}
                            className=" object-cover "
                        />
                    </div>
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
            {
                showBuy && 
                <div className="w-full justify-between flex absolute top-[16rem]">
                    <button className=" bg-white bg-opacity-70 p-1" onClick={ImageLeft}>
                        <ChevronLeft color="gray" fontFamily="saint"/>
                    </button>
                    <button className=" bg-white bg-opacity-70 p-1" onClick={ImageRight}>
                        <ChevronRight color="gray" fontFamily="saint"/>
                    </button>
                </div>
            }
        </motion.div>
        {/* Description aaise karke sare projects chhor dogi okay kr lenge pr jo 30% hogya usko krte haina?? */}
        <div className="flex w-full flex-col gap-2 items-start">
            <p className=" text-gray-500">{title}</p>
            <div className="flex gap-2">
                <p className="text-gray-500">${curr_price}</p>
                {
                    pre_price > curr_price &&
                    <p className="line-through text-gray-300">${pre_price}</p>
                }
                {
                    curr_price < pre_price && 
                    <p className=" text-red-600">Sale</p>
                }
                {/* <p className="text-gray-500">{stock}</p> */}
            </div>

        </div>
    </div>
  )
}

export default Card