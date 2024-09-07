import { Button } from "@/components/ui/button"
import Image from "next/image"

const Achievements = () => {
  return (
   <div className="flex flex-col lg:px-15 md:px-12 px-5 h-full py-20 gap-20">
        <div className="flex items-center justify-center gap-16 opacity-70">
            <Image
                src="/brand1.svg"
                alt=""
                height={180}
                width={180}
            />
            <Image
                src="/brand2.svg"
                alt=""
                height={180}
                width={180}
            />
            <Image
                src="/brand3.svg"
                alt=""
                height={180}
                width={180}
            />
            <Image
                src="/brand4.svg"
                alt=""
                height={180}
                width={180}
            />
        </div>
        <div className="flex flex-col justify-center items-center">
            <div className=" flex flex-col items-center justify-center gap-8 ">
                <p className="text-xs text-gray-600">AWARD-WINNING EYEWEAR</p>
                <p className="text-2xl font-[700] tracking-wide">BEAUTIFUL, DESIGN-LED EYEWEAR USING HIGH<br/> QUALITY AND SUSTAINABLE MATERIALS.</p>
                <Button variant="ghost" className="rounded-none bg-blue-900 text-white hover:bg-black 8 hover:text-white px-8 h-12 "><p className="text-xs">OUR STORY</p></Button>
            </div>
        </div>
   </div>
  )
}

export default Achievements