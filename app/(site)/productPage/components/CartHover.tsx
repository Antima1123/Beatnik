import Image from "next/image"
import Link from "next/link"

const CartHover=(
    {
        img_url,
        title,
    }:
    {
        img_url: string,
        title: string
    }
)=> {
  return (
    <div className="flex justify-center ">
        <div className=" fixed bottom-2 flex w-[450px] py-2 items-center justify-between bg-white p-4 shadow-lg">
       <div className="flex items-center gap-6">
            <Image
                src={img_url}
                alt=""
                height={40}
                width={40}
            />
            <div className="flex flex-col">
                <p className="text-md font-[700] text-gray-500">{title}</p>
                <div className="flex text-xs">
                    <p>Honey - </p>
                    <Link href="#" className="underline"> change</Link>
                </div>
             </div>
       </div>
        <div className="flex justify-end items-center">
            <button className="h-10 px-4 text-xs text-white bg-blue-900 ">ADD TO CART</button>
        </div>
    </div>
    </div>
  )
}

export default CartHover