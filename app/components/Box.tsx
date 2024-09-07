import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const Box = () => {
  return (
    <div className="w-full flex lg:px-15 md:px-12 px-5 ">
        <div className="w-1/2 flex flex-col justify-center items-center">
            <div className="flex flex-col gap-8 justify-center items-center">
                <p className="text-xs text-gray-600">FULLY RECYCLED AND FULL OF JOY!</p>
                <p className="text-3xl font-[700]">GOOD THINGS BOXED</p>
                <p className="text-sm text-gray-600">Enjoy free shipping and returns in these now.</p>
            </div>
            <Link href="#" className="underline text-sm font-[500]">#birdsunglasses</Link>
            <Button variant="ghost" className="rounded-none bg-blue-900 text-white hover:bg-black 8 mt-8 hover:text-white px-8 h-12 "><p className="text-sm">Learn More</p></Button>

        </div>
        {/* Image  */}
        <div className="w-1/2 flex justify-center items-center ">
            <Image
                src="https://beatnik-5.myshopify.com/cdn/shop/files/sunglasses-packaging.jpg?v=1614289926&width=1225"
                alt=""
                height={600}
                width={650}
            />
        </div>
    </div>
  )
}

export default Box