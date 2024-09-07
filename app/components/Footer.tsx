import { Box, Gift, MapPin, Percent } from "lucide-react"

function Footer() {
  return (
    <div className="flex flex-col bg-[#f3f1e9] w-full mt-24">
        {/* first */}
        <div className="flex px-[14rem] h-[80px] justify-center items-center gap-10 " >

            <div className="flex w-1/4 flex-col items-center gap-2">
              <Box size={24} color="#322b76"/>
              <p className="text-lg text-[#322b76] font-[700]">FREE DELIVERY!</p>
            </div>

            <div className="flex w-1/4 flex-col items-center gap-2">
              <Percent size={24} color="#322b76"/>
              <p className="text-lg text-[#322b76] font-[700]">STUDENT DISCOUNT</p>
            </div>

            <div className="flex w-1/4 flex-col items-center gap-2">
              <MapPin size={24} color="#322b76"/>
              <p className="text-lg text-[#322b76] font-[700]">YOUR NEAREST STORE</p>
            </div>
            
            <div className="flex w-1/4 flex-col items-center gap-2">
              <Gift size={24} color="#322b76"/>
              <p className="text-lg text-[#322b76] font-[700] ">GIFT CARDS</p>
            </div>
 
        </div>
        {/* Second  */}
        <div>


        </div>

    </div>
  )
}

export default Footer