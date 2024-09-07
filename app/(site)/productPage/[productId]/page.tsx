"use client"
import { Button } from "@/components/ui/button"
import { Box, CircleCheck, Clock, Eye, EyeIcon, Ghost, Heart, Plus, Ruler } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import {motion} from "framer-motion"
import { useParams, useRouter } from "next/navigation"
import axios from "axios"
import CartHover from "../components/CartHover"

interface productProps{
  title: string,
  new_price: number,
  old_price: number,
  img_url: string,
  sub_img: string[],
  stock: number
} 

const Productpage = () => {

  const horizontal={
    opened: {
      rotate: 360
    },
    closed:{
      rotate: 0
    }
  }

  const vertical={
    opened: {
      rotate: 360
    },
    closed:{
      rotate: 90
    }

  }

    const id = useParams() 

    const [product,setProduct] = useState<productProps>()

    const reqdata = async() =>{
      try {
        const res = await axios.post('/api/getproductById', id)//id v nahi bheja aur tumko id se find karna hai 
        setProduct(res.data.data)
      } catch (error) {
        console.log("error in single page rendering",error)
      }
    }

    useEffect(()=>{
      reqdata()
    },[])
    
    const [des,setDes] = useState(false)
    const [fit,setFit] = useState(false)
    const [tech,setTech] = useState(false)
    const [shipping,setShipping] = useState(false)
    return (
      <div className="flex w-full h-full relative flex-col">
      <div className="flex mt-12 gap-10 w-full h-full lg:px-36 md:px-24 flex-col md:flex-row ">
          
            <div className="md:w-1/2 h-1/2 md:h-full justify-center flex flex-col gap-8">
                <Image
                  src={product?.img_url!}
                  alt=""
                  height={1000}
                  width={1000}
                  className=" object-cover h-100% w-100%"
                />
                
                <div className="flex gap-4">
                  {product?.sub_img.map((item,index)=>(
                    <Image
                      src={item}
                      alt=""
                      height={80}
                      width={80}
                      className=" object-contain"
                      key={index}
                    />
                  ))}
                </div>
            </div>
            {/* subimg  */}
            <div>
                
                 
              
            </div>
        
    

          <div className="md:w-1/2 h-1/2 md:h-full w-full gap-4 flex flex-col">
              {/* first */}
            
                  <div className="flex flex-col gap-6">
                  <p className=" font-[600] text-3xl">{product?.title}</p>
                  <div className="flex gap-2 text-2xl">
                    <p className="text-red-600">${product?.new_price}</p>
                    <p className="text-gray-400 line-through">${product?.old_price}</p>
                  </div>
                  <div className="flex gap-2 items-center">
                      <p className="font-[600]">By</p>
                      <Link href="#" className="underline text-sm">Bird sunglasses</Link>
                  </div>
                  <div className="flex gap-2 items-center text-sm text-[#887322] p-3 bg-[#fdeecf] w-[70%]  ">
                      <Heart size={18}/>
                      <p>Combatting poverty and climate change.</p>
                      <Link href="#" className=" cursor-pointer underline">Read More</Link>
                  </div>
                  <div className="flex items-center text-sm gap-2 text-[#ddbe43]">
                      <Clock size={18}/>
                      <p>{product?.stock}</p>
                      <p>Stock</p>
                  </div>
               </div>


            {/* Second */}

            <div className="flex flex-col gap-4 w-[80%]">

                <Button 
                  variant="outline" 
                  className="border border-black hover:bg-black hover:text-white rounded-none tracking-wide text-md"
                >ADD TO CART</Button>

                <Button className="flex gap-2 rounded-none">
                  <p>Buy with </p>
                  <Image
                    src="/svg/gpaysvg.svg"
                    alt=""
                    width={50}
                    height={50}
                  />
                </Button>

                <div className="flex justify-center text-gray-600">
                  <Link href="" className="underline text-sm">More payment options</Link>
                </div>

            </div>

            {/* Third  */}
            <div className="flex flex-col gap-4 w-[80%]">

                <div className="h-[1px] bg-gray-300"></div>

                {/* 1  */}

                <div className=" gap-6">
                <button className="flex bg-white gap-4 items-center w-full" onClick={()=>setDes(!des)}>
                        <div className="w-1/2 flex gap-2">
                          <EyeIcon size={18} />
                          <p className="text-gray-400 font-[600]">The Clarity Range</p>
                        </div>
                        <div className="w-1/2 justify-end flex">
                          <motion.div variants={horizontal} animate={des? "opened": "closed"} className=" h-[1px] w-[14px] bg-gray-600"/>
                          <motion.div variants={vertical} animate={des? "opened": "closed"} className=" h-[1px] w-[14px] bg-gray-600  -ml-[14px]"/>
                        </div> 
                </button>
                {des && 
                  <div className=" text-md text-gray-500">
                      A sustainable bio-acetate frame, carefully 
                      finished with sprung hinges and adjustable 
                      temple ends to ensure the best fit. This
                      frame is made with Mazzucchelli cellulose acetate,
                      a naturally derived material made from wood pulp. 
                  </div>
                }
                </div>

                {/* 2  */}

                <div className="h-[1px] bg-gray-300"></div>
                <div className="gap-6">
                <button className="flex bg-white gap-4 items-center w-full" onClick={()=>setFit(!fit)}>
                        <div className="w-1/2 flex gap-2">
                          <Ruler size={18}/>
                          <p className="text-gray-400 font-[600]">Sizing & Fit</p>
                        </div>
                        <div className="w-1/2 justify-end flex">
                          <motion.div variants={horizontal} animate={fit? "opened": "closed"} className=" h-[1px] w-[14px] bg-gray-600"/>
                          <motion.div variants={vertical} animate={fit? "opened": "closed"} className=" h-[1px] w-[14px] bg-gray-600  -ml-[14px]"/>
                        </div> 
                </button>
                {fit && 
                  <div className=" text-md text-gray-500">
                     Frame size: Medium
                      48mm-22mm-140mm (lens, nose, temples)

                      This frame is best suited for regular heads (55-57cm). Ideal for many face shapes and nose heights.
                  </div>
                }
                </div>

                {/* 3  */}
                <div className="h-[1px] bg-gray-300"></div>
                <div className="gap-6">
                <button className="flex bg-white gap-4 items-center w-full" onClick={()=>setTech(!tech)}>
                        <div className="w-1/2 flex gap-2">
                          <CircleCheck size={18}/>
                          <p className="text-gray-400 font-[600]">Sizing & Fit</p>
                        </div>
                        <div className="w-1/2 justify-end flex">
                          <motion.div variants={horizontal} animate={tech? "opened": "closed"} className=" h-[1px] w-[14px] bg-gray-600"/>
                          <motion.div variants={vertical} animate={tech? "opened": "closed"} className=" h-[1px] w-[14px] bg-gray-600  -ml-[14px]"/>
                        </div> 
                </button>
                {tech && 
                  <div className=" text-md text-gray-500">
                     Frame size: Medium
                      48mm-22mm-140mm (lens, nose, temples)

                      This frame is best suited for regular heads (55-57cm). Ideal for many face shapes and nose heights.
                  </div>
                }
                </div>

                {/* 4 */}
                <div className="h-[1px] bg-gray-300"></div>
                <div className="gap-6">
                <button className="flex bg-white gap-4 items-center w-full" onClick={()=>setShipping(!shipping)}>
                        <div className="w-1/2 flex gap-2">
                          <Box size={18}/>
                          <p className="text-gray-400 font-[600]">Sizing & Fit</p>
                        </div>
                        <div className="w-1/2 justify-end flex">
                          <motion.div variants={horizontal} animate={shipping? "opened": "closed"} className=" h-[1px] w-[14px] bg-gray-600"/>
                          <motion.div variants={vertical} animate={shipping? "opened": "closed"} className=" h-[1px] w-[14px] bg-gray-600  -ml-[14px]"/>
                        </div> 
                </button>
                {shipping && 
                  <div className=" text-md text-gray-500">
                     Frame size: Medium
                      48mm-22mm-140mm (lens, nose, temples)

                      This frame is best suited for regular heads (55-57cm). Ideal for many face shapes and nose heights.
                  </div>
                }
                </div>
                <div className="h-[1px] bg-gray-300"></div>
            </div>
        </div> 
      </div>

    {/* --------------------------------------------------------------------------------------------------------------------- */}
      
      <div className=" py-20 relative ">
            <Image
              src="/singlepage.webp"
              alt=""
              height={1000}
              width={2000}
              className=" object-contain"
            />
          <div className="flex flex-col gap-8 absolute z-2 top-48 left-20 text-white">
                <p className="text-md">JOIN THE FLOCK</p>
                <p className="text-5xl font-[700]">SUSTAINABLE FRAMES THAT <br/>TICK ALL THE BOXES</p>
                <p>Sustainable award-winning sunglasses and ethical eyewear</p>
          </div>
        </div>
        <CartHover
          title={product?.title!}
          img_url={product?.img_url!}
        />
      </div>
    )
  }
  
  export default Productpage