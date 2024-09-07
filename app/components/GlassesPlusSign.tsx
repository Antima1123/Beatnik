"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react"

const GlassesPlusSign = () => {

    const [handle,setHandle] = useState(false)
    const [second,setSecond] = useState(false)
    const [third,setThird] = useState(false)

    const horizontal={
        opened: {
            rotate: -45
        },
        closed: {
            rotate: 0
        }
    },
    vertical={
        opened:{
            rotate: 45

        },
        closed:{
            rotate: 90
        }
    }

    const first=()=>{
        setHandle(!handle)
        setSecond(false)
        setThird(false)
    }
    const sec=()=>{
        setSecond(!second)
        setHandle(false)
        setThird(false)
    }
    const thir=()=>{
        setThird(!third)
        setSecond(false)
        setHandle(false)
    }
  return (
    <div className="flex w-full h-full lg:px-15 md:px-12 px-5 relative">
    
            <Image
                src="https://beatnik-5.myshopify.com/cdn/shop/files/three-glasses.jpg?v=1614288720&width=2000"
                alt=""
                height={900}
                width={900}
                className="w-full h-full"
            />
            {/* First  */}
            <button onClick={first} className={handle? "absolute bottom-[9rem] left-[22rem] rounded-full w-10 h-10 flex items-center justify-center bg-white":"absolute bottom-[9rem] left-[22rem] rounded-full w-10 h-10 flex items-center justify-center bg-blue-800" }>
                <div className={handle?"": " ring-[1rem] ring-opacity-60 animate-pulse ring-blue-800  rounded-full h-10 w-10 absolute"}/>
                <motion.div variants={horizontal} animate={handle ? "opened" : "closed"} className={handle? "w-4 h-[1px] bg-blue-800":"w-4 h-[1px] bg-white"}  ></motion.div>
                <motion.div variants={vertical} animate={handle ? "opened" : "closed"} className={handle? "w-4 h-[1px] bg-blue-800  -ml-4":"w-4 h-[1px] bg-white -ml-4"}></motion.div>
            </button>
            {handle && 
                <div className="absolute bottom-[6rem] left-[25rem] bg-white w-[26rem] p-6 bg-opacity-90">
                    <div className="flex flex-col gap-2 text-gray-600 w-26">
                        <p 
                            className="font-[700]">
                            Kaka | Snowy
                        </p>
                        <p className="text-sm">
                        The Kaka snowy is both interesting and beautiful, a trusted cat-eye sunglasses shape that works well with most face shapes. 
                        </p>
                    </div>
                </div>
            }

            {/* Second  */}
            <button onClick={sec} className={second? "absolute top-[9rem] right-[23rem] rounded-full w-10 h-10 flex items-center justify-center bg-white":"absolute top-[9rem] right-[23rem] rounded-full w-10 h-10 flex items-center justify-center bg-blue-800" }>
                <div className={second?"": " ring-[1rem] ring-opacity-60 animate-pulse ring-blue-800  rounded-full h-10 w-10 absolute"}/>
                <motion.div variants={horizontal} animate={second ? "opened" : "closed"} className={second? "w-4 h-[1px] bg-blue-800":"w-4 h-[1px] bg-white"}  ></motion.div>
                <motion.div variants={vertical} animate={second ? "opened" : "closed"} className={second? "w-4 h-[1px] bg-blue-800  -ml-4":"w-4 h-[1px] bg-white -ml-4"}></motion.div>
            </button>
            {second && 
                <div className="absolute top-[6rem] right-[26rem] bg-white w-[26rem] p-6 bg-opacity-90">
                    <div className="flex flex-col gap-2 text-gray-600 w-26">
                        <p 
                            className="font-[700]">
                           Suma - Fire Corel
                        </p>
                        <p className="text-sm">
                        If you share our love of adventure, the fire corel is for you. A beautifully designed eco-conscious sunglasses frame inspired by our ocean adventures.
                        </p>
                    </div>
                </div>
            }

            {/* Third  */}
            <button onClick={thir} className={third? "absolute bottom-[8rem] right-[14rem] rounded-full w-10 h-10 flex items-center justify-center bg-white":"absolute bottom-[8rem] right-[14rem] rounded-full w-10 h-10 flex items-center justify-center bg-blue-800" }>
                <div className={third?"": " ring-[1rem] ring-opacity-60 animate-pulse ring-blue-800  rounded-full h-10 w-10 absolute"}/>
                <motion.div variants={horizontal} animate={third ? "opened" : "closed"} className={third? "w-4 h-[1px] bg-blue-800":"w-4 h-[1px] bg-white"}  ></motion.div>
                <motion.div variants={vertical} animate={third ? "opened" : "closed"} className={third? "w-4 h-[1px] bg-blue-800  -ml-4":"w-4 h-[1px] bg-white -ml-4"}></motion.div>
            </button>
            {third && 
                <div className="absolute bottom-[5rem] right-[17rem] bg-white w-[26rem] p-6 bg-opacity-90">
                    <div className="flex flex-col gap-2 text-gray-600 w-26">
                        <p 
                            className="font-[700]">
                            Tawny | Honey
                        </p>
                        <p className="text-sm">
                        Take the sunshine wherever you go with the Tawny Honey, the perfect petite frame for smaller heads. 
                        </p>
                    </div>
                </div>
            }
    </div>
  )
}

export default GlassesPlusSign