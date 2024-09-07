"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const MaterialFrame = () => {

    const [active,setActive] = useState()
    const [activeSection,setActiveSection] = useState('section1') //by default section 1 wale image ka text dikhna chahiye

    useEffect(()=>{
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                setActiveSection(entry.target.id)
            })
        }, { threshold: 0.5 })

        const section = document.querySelectorAll('section');
        section.forEach(section => observer.observe(section));

        return () => observer.disconnect();
    }, [])

  return (
    <div className="flex lg:px-15 md:px-12 px-5 w-4/7 h-screen overflow-y-scroll gap-10 no-scrollbar relative ">
        <div className="w-full h-full flex flex-col gap-40 p-10 snap-mandatory overflow-x-hidden overflow-y-scroll top-0">
            {/* section 1  */}
            <section id="section1" className=" snap-center w-full h-full">
                <Image
                    src="https://beatnik-5.myshopify.com/cdn/shop/files/Bird-eyewear-eco-friendly-materials-forest_1296x_8a0e2e73-9445-4682-81f5-9107cffe7b4b.webp?v=1699876540&width=1225"
                    alt=""
                    height={600}
                    width={600}
                    className=""
                />
            </section>

            {/* section 2  */}
           <section id="section2" className=" snap-center w-full h-full" >
            <Image
                    src="https://beatnik-5.myshopify.com/cdn/shop/files/Bio-acetate-material_1296x_1bcc9d82-5649-407a-9260-f643ba98a627.webp?v=1699876579&width=1225"
                    alt=""
                    height={600}
                    width={600}
                    className="w-full h-full"
                />
           </section>

           {/* section 3  */}
            <section id="section3" className=" snap-center w-full h-full">
                <Image
                    src="https://beatnik-5.myshopify.com/cdn/shop/files/Certified-Wood-Materials_1296x_3fef4b3d-d3b2-4530-b22e-6ff913525596.jpg?v=1699973967&width=1225"
                    alt=""
                    height={600}
                    width={600}
                    className="w-full h-full"
                />
            </section>

            {/* section 4  */}
            <section id="section4" className=" snap-center w-full h-full">
                <Image
                    src="https://beatnik-5.myshopify.com/cdn/shop/files/Recycled-Aluminium-Material_1296x_11fad4e1-504d-42b8-b950-60971eda6c63.webp?v=1699886078&width=1225"
                    alt=""
                    height={600}
                    width={600}
                    className="w-full h-full"
                />
            </section>
        </div>

        <div className=" sticky top-[14rem] w-full flex ">
           {
            activeSection === 'section1' && 
            <div>
                hello section 1
            </div>
           }

            {
            activeSection === 'section2' &&
            <div>
                hello section 2
            </div>
           }
            {
            activeSection === 'section3' &&
            <div>
                hello section 3
            </div>
           }
            {
            activeSection === 'section1' &&
            <div>
                hello section 4
            </div>
           }
        </div>
    </div>
  )
}

export default MaterialFrame