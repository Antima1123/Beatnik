import { Button } from "@/components/ui/button"

const AwardVideo = () => {
  return (
    <div className="w-full h-full gap-8 py-20 bg-[#f3f1e9] flex items-center lg:px-15 md:px-12 px-5 ">
        {/* video  */}
        <div className="w-1/2">
            <video className="h-full w-full" autoPlay muted loop preload="none">
                <source
                    src="https://cdn.shopify.com/videos/c/vp/cefa51206da34eab8a9fdb248b940b3d/cefa51206da34eab8a9fdb248b940b3d.HD-720p-1.6Mbps.mp4"
                    type="video/mp4"
                />
            </video>
        </div>
        {/* des  */}
        <div className="w-1/2 justify-center flex flex-col gap-8 px-28">
            <p className=" text-gray-500 text-xs">FOR A BETTER WORLD</p>
            <p className="text-3xl font-[700] text-blue-800">AWARD-WINNING EYEWEAR</p>
            <p className="text-gray-500 text-sm tracking-wide">Reframe your world with eco-friendly eyewear.
                Made of the finest biodegradable materials. 
                Designed for people & planet, helping you 
                focus on what matters most to you. Sustainable 
                sunglasses that give back to families in need.</p>
            <Button className="w-40 rounded-none bg-blue-800 text-white">Learn More</Button>
        </div>
    </div>
  )
}

export default AwardVideo