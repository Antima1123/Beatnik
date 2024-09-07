import Image from "next/image"

const Frames=()=> {
  return (
    <div className="flex w-full lg:px-15 md:px-12 px-5 h-full gap-8">
        <div className="w-1/2 justify-center flex flex-col gap-4">
            <Image
                src="https://beatnik-5.myshopify.com/cdn/shop/files/KAKA-Bird-Sunglasses-Caramel-2.jpg?v=1614288721&width=1225"
                alt=""
                height={800}
                width={800}
                className=" cursor-pointer"
            />
            <div className="flex flex-col text-gray-600">
                <p>All our frames are prescription ready eyewear</p>
                <p className="font-[700]">Shown on Kaka Caramel</p>
            </div>
        </div>
        <div className="w-1/2 justify-center flex flex-col gap-4">
            <Image
                src="https://beatnik-5.myshopify.com/cdn/shop/files/Otus-Caramel-hang-1-bird-sunglasses.jpg?v=1614289366&width=1125"
                alt=""
                height={800}
                width={800}
                className=" cursor-pointer"
            />
            <div className="flex flex-col text-gray-600">
                <p>Mazzucchelli bio based acetate and wood</p>
                <p className="font-[700]">Shown on the Otus, Clarity range</p>
            </div>
        </div>
    </div>
  )
}

export default Frames