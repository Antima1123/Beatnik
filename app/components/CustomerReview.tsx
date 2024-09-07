"use client"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const CustomerReview = () => {

  const [active,setActive] = useState(false)
  const handleclick=()=>{
    setActive(!active)
  }
  return (
    <div className="w-full h-[34rem] flex bg-[#f3f1e9] lg:px-15 md:px-12 px-5 ">
          <div className="w-1/2 flex flex-col justify-center gap-2">
                <Image
                  src=
                  {active
                     ? "https://beatnik-5.myshopify.com/cdn/shop/files/collage8_1250px.jpg?crop=region&crop_height=800&crop_left=0&crop_top=225&crop_width=1000&v=1614290169&width=925"
                    : "https://beatnik-5.myshopify.com/cdn/shop/files/collage7_1250px.jpg?crop=region&crop_height=800&crop_left=0&crop_top=225&crop_width=1000&v=1614290167&width=925"}
                  alt=""
                  height={500}
                  width={500}
                  className=""
                />
              <Link href="#" className="underline text-sm">{active ? "Shop the Wren" : "Shop Men's Glasses"}</Link>
          </div>

          <div className="w-1/2 flex flex-col justify-center gap-10">
              <p className="text-xs">CUSTOMER REVIEWS</p>
              <div className="flex">
                <Star size={18} fill="#013299" color="#013299"/>
                <Star size={18} fill="#013299" color="#013299"/>
                <Star size={18} fill="#013299" color="#013299"/>
                <Star size={18} fill="#013299" color="#013299"/>
                <Star size={18} fill="#013299" color="#013299"/>
              </div>
              <p className="text-2xl text-[#013299] w-[71%] bg-red-200 font-[700]">{active ? "THESE GLASSES ARE FABULOUS. THEY LOOK GREAT, FIT WELL AND COME IN AN AMAZING CASE AND PACKAGING" : "FIRST TIME BUYING SUNGLASSES ONLINE. GREAT QUALITY, ARRIVED QUICKLY.LOVED THE PACKAGING TOO!"}</p>
              <p className="">{active ? "— Adam K, London" : "— David H, Toronto"}</p>
              
              <div className="flex text-gray-500 font-thin">
                  <button onClick={handleclick} className="bg-gray-200"><ChevronLeft size={40}/></button>
                  <button onClick={handleclick}><ChevronRight size={40}/></button>
              </div>
           </div>
       </div>
       
  )
}

export default CustomerReview