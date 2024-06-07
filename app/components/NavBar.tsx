import { Search, ShoppingCart } from "lucide-react"
import Image from "next/image"

function NavBar() {
  return (
    <div className="flex flex-col w-full">
        {/* Header */}
        <div className="flex justify-between gap-4 lg:px-15 md:px-12 px-5 h-16  items-center text-[10px]">
            {/* first */}
            <div className="flex gap-2">
                <Search/>
                <input placeholder="Search" type="search" className="outline-none placeholder-gray-700"/>
            </div>
            {/* Second */}
           <Image src="/logo.png" alt="logo" height={200} width={200} className="w-28"/>
            {/* Third */}
           <div className="flex gap-4 items-center">
            <button>Account</button>
            <button className="flex gap-2 items-center">
                <p>Cart</p>
                <ShoppingCart height={20}/>
            </button>
           </div>
        </div>

        <div className="h-[1px] bg-gray-200"></div>

        {/* NavBar */}
        <div className="md:flex hidden justify-center gap-10 text-gray-500 h-12 ">
            <button className="hover:">Home</button>
            <button>Shop</button>
            <button>Collection</button>
            <button>Our Stories</button>
            <button>Demos</button>
            <button>Blog</button>
            {/* yaha pe array nahi bana pai? */}
        </div>
        <div className="h-[1px] bg-gray-200"></div>
    </div>
  )

}

export default NavBar