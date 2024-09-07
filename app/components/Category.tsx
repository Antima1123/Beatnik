import Image from "next/image"
import Link from "next/link"

const Category=()=> {
  return (
    <div className="flex flex-col lg:px-15 h-full items-center md:px-12 px-5  w-full">
        <div className="w-[38%] flex flex-col py-16 text-[18px] text-gray-400">
            <p>
                This is a demonstration of the Symmetry theme for Shopify.
            </p> 
            <div className="flex items-center gap-1">
                Sustainable eyewear with a social purpose by
                <p className=" underline leading-3">Bird Sunglasses</p>
           </div>
        </div>
        <div className="w-full flex gap-8">
            {/* Women  */}
            <div className="w-1/2 h-[500px]  flex justify-center relative">
               <Image
                    src="/women.webp"
                    alt=""
                    height={800}
                    width={800}
                    className="object-cover"
               />
               <div className="absolute bg-white flex flex-col gap-3  justify-center  z-10 bottom-0 left-0 w-[50%] h-[140px] px-6">
                    <Link href="#" className="text-xs">AWARD WINNING</Link>
                        <p className="cursor-pointer text-2xl font-[700]">WOMEN'S GLASSES</p>
                        <Link href="#" className="text-xs underline">SHOP NOW</Link>
               </div>
            </div>
            {/* men  */}
            <div className="w-1/2 h-[500px] flex justify-center relative">
            <Image
                    src="/mens.webp"
                    alt=""
                    height={800}
                    width={800}
                    className="object-cover "
               />
            <div className="absolute bg-white flex flex-col gap-3  justify-center  z-10 bottom-0 left-0 w-[50%] h-[140px] px-6">
                <Link href="#" className="text-xs">NEW LINES ADDED</Link>
                <p className="cursor-pointer text-2xl font-[700]">MEN'S SUNGLASSES</p>
                <Link href="#" className="text-xs underline">SHOP NOW</Link>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Category