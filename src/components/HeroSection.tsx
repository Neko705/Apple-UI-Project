import Link from "next/link";
import React from "react";
import { AuroraBackground } from "./UI/Aurora-background";

function HeroSection(){
    return(
    <AuroraBackground>
    <div
    className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"
    >
        
    <div className="p-4 relative z-10 w-full text-center" >
            <h1
            className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
            >Crafted for Brilliance</h1>
            <p
            className="mt-4 font-normal text-base md:text-xl text-neutral-300 max-w-lg mx-auto top-6"
            >Apple products aren't just devices; 
             they're a seamless blend of innovation and design, 
             turning the everyday into something extraordinary. 
             Whether it's the intuitive interface, the sleek aesthetics, or the way it just works, 
             Apple redefines how we connect, create, and experience the world around us.</p>
            <div className="mt-4">

            {/* <button
            className="relative inline-flex items-center gap-2 px-6 py-3 
            font-semibold text-blue-50 bg-gradient-to-tr from-blue-900/30 
            via-blue-900/70 to-blue-900/30 ring-4 ring-blue-900/20 rounded-full 
            overflow-hidden hover:opacity-90 transition-opacity before:absolute 
            before:top-4 before:left-1/2 before:-translate-x-1/2 before:w-[100px] 
            before:h-[100px] before:rounded-full before:bg-gradient-to-b 
            before:from-blue-50/10 before:blur-xl">
            <Link href={""}>
                    Explore
                </Link> 
            </button> */}
            <button className="px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
            <Link href={""}>
                    Explore
                </Link>
            </button>
            </div>
        </div>
    </div>
    </AuroraBackground>
    
  )
}
    
export default HeroSection;