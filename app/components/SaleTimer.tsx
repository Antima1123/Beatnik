import { Button } from "@/components/ui/button"
import CountDownDigital from "./CountDownDigital"

const SaleTimer = () => {
  return (
    <div className="overflow-hidden  items-center flex  h-[600px] w-full relative">
        <video className="w-full" autoPlay muted loop preload="none" >
            <source
                src="https://cdn.shopify.com/videos/c/vp/ec73aea7b3014d73b253076776cc2ca2/ec73aea7b3014d73b253076776cc2ca2.HD-720p-1.6Mbps-11988600.mp4"
                type="video/mp4"
            />
        </video>
        <div className="flex flex-col gap-10 absolute z-10 w-full items-center justify-center text-white">
            <p className="text-7xl font-[900]">SALE AWAY!</p>
            <p className="text-xl">Save up to 20% across the range, for a limited time only</p>
            <CountDownDigital/>
            <Button variant="ghost" className="bg-white text-black hover:bg-black hover:text-white rounded-none"><p className="text-xs tracking-wide">SHOP THE SALE</p></Button>
        </div>
    </div>
  )
}

export default SaleTimer