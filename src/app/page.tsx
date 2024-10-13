"use client"
import react, { useEffect } from "react"
import Link from "next/link";
import Image from 'next/image';
import AOS from "aos";
import "aos/dist/aos.css"


export default function Home() {

    useEffect(() => {
        AOS.init({
            easing: "ease-out-back",
            duration: 1200,
            delay: 100,
            anchorPlacement: "bottom-bottom",
            offset: 160,

        })
        AOS.refresh()
    },
    [])


    return (

        <div>
            <ul className=" bg-yellow-300-500 hover:bg-blue-400 rounded p-2 gap-20 font-bold text-wrap flex flex-row space-x-4  pt-16 bg-gradient-to-b from-cyan-100 to-purple-300 min-h-screen "  > {/* Fixed class name */}
                <li   data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" ><Link href="/about">About</Link></li>

                <li  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"  ><Link href="/contact">Contact</Link></li>
               
  <li  data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500"><Link href="/Skills">Skills</Link></li>
                <li data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500"><Link href="/projects">Projects</Link></li>

<div className="flex justify-end pr-16 pt-10"> {/* `justify-end` to move image towards right, `pr-16` adds some padding */}
      
        </div>
            </ul>

        </div>

    )
}









































































