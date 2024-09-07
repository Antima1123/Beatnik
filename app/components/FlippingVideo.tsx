import { Button } from "@/components/ui/button"

const FlippingVideo = () => {
  return (
    <div className="relative overflow-hidden  items-center flex flex-col h-[600px] w-full">
       <video className="  w-full " autoPlay muted loop preload="none">
            <source
                src="https://cdn.shopify.com/videos/c/vp/0214ff82d4374f7b9e1c00f90df34ef2/0214ff82d4374f7b9e1c00f90df34ef2.HD-1080p-7.2Mbps-20611982.mp4"
                type="video/mp4"
                className=" object-contain"
            />
       </video>
 
        <div className="absolute z-10 left-24 top-10 gap-10 flex flex-col">
           <div className="text-7xl text-white font-[700] gap-2 flex flex-col"><p>FLIPPING THE BIRD</p> <p>TO FAST FASHION</p></div>
           <div className="text-xl text-white">Eyewear for a new generation</div>
           <Button variant="ghost" className="bg-white rounded-none w-48 hover:bg-black hover:text-white"><p className="font-normal text-xs">SHOP ALL PRODUCTS</p></Button>
        </div>
    </div>
  )
}

export default FlippingVideo