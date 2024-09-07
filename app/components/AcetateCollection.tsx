import { Button } from "@/components/ui/button"
import Image from "next/image"

const AcetateCollection = () => {
  return (
    <div className="flex w-full lg:px-15 md:px-12 px-5 py-20">
        {/* des  */}
        <div className="w-1/2 flex flex-col items-center justify-center gap-6 ">
                <div className="text-xs text-gray-600">BIRD X MAZZUCCHELL</div>
                <div className="text-3xl font-[700] tracking-wide">ACETATE COLLECTION</div>
                <div className="w-[65%] text-center text-sm text-gray-600 ">The right pair of sunnies are the 
                    cherry on top of any outfit and these 
                    natural and renewable styles will give
                    you best-look-of-your-life vibes, all day, every day.</div>
                <Button variant="outline" className="rounded-none px-8 h-12 border border-black"><p className="text-xs font-normal tracking-wide">SHOP NOW</p></Button>
        </div>
        {/* images */}
        <div className="w-1/2 flex relative justify-end">
           <div className="absolute right-80 ">
            <Image
                    src="https://beatnik-5.myshopify.com/cdn/shop/files/bird-lifestyle1.jpg?v=1614289366&width=925"
                    alt=""
                    height={380}
                    width={380}
                    
                />
           </div>
            <div className="flex -mt-14">
                <Image
                    src="https://beatnik-5.myshopify.com/cdn/shop/files/bird-lifestyle2.jpg?v=1614289366&width=925"
                    alt=""
                    height={380}
                    width={380}
                    
                />
            </div>
        </div>
    </div>
  )
}

export default AcetateCollection