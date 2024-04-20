"use client"

import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/butterfly.png";
import { AiOutlineMenu ,AiOutlineClose , AiOutlineCaretDown , AiOutlineCaretUp } from "react-icons/ai";
import Darkmode from "./darkmode";
import { useState } from "react";

export  default function  Navbar() {


    const [menuopen, setOpen] = useState(false);
    const handleNav = () => {
        setOpen(!menuopen)
    }

    const [listopen , setlistopen] = useState(false);
  
    

    return (
        <nav className="flex w-full h-[70px] shadow-xl dark:text-white bg-white/80 backdrop-blur-md dark:bg-[#121212]/90 dark:backdrop-blur-md fixed z-50">
            <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
               
                <div>
                    <Link href={'/'}>
                        <Image
                        src={Logo}
                        alt="logo"
                        width={45}
                        height={25}
                        className="cursor-pointer"
                        priority
                        />
                    </Link>
                </div>

                <div className="hidden sm:flex">
                    <ul className="hidden sm:flex">
                        <Link href={'/products'}> <li onClick={()=> setOpen(false)} className="ml-10 uppercase hover:font-bold text-md">products</li> </Link>
                        <Link href={'/about'}> <li  onClick={()=> setOpen(false)} className="ml-10 uppercase hover:font-bold text-md">about</li> </Link>
                        <Link href={'/service'}> <li onClick={()=> setOpen(false)} className="ml-10 uppercase hover:font-bold text-md">service</li> </Link>

                        
                        <li onClick={()=> setlistopen((prev) => !prev)} className="ml-10 uppercase hover:font-bold text-md flex items-center px-4 cursor-pointer">
                            register/login 
                            {listopen ? <AiOutlineCaretUp size={14} className="items-right" /> : <AiOutlineCaretDown size={14} className="items-right" />}  
                        </li>
                        <div className={listopen ? "sm:flex" : "hidden"}>
                                <div className="absolute my-[50px] mx-[-160px] text-center
                                px-8 py-5 shadow-2xl bg-white text-black
                                dark:text-white dark:bg-[#121212]/20 dark:backdrop-blur-sm
                                rounded-lg  z-10
                                ">
                                    <Link href={'/register'}> <li onClick={()=> setOpen(false)} className=" uppercase text-md py-3">register</li> </Link>
                                    <Link href={'/login'}> <li onClick={()=> setOpen(false)} className=" uppercase text-md">login</li> </Link>
                                </div>
                                
                        </div> 

                        {/* color mode */}
                        <Darkmode />                      
                        {/* end of color mode */}

                    </ul>
                </div>

                <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
                    <AiOutlineMenu size={25} />
                </div>
            </div>

            <div className={
                menuopen ? "fixed left-0 top-0 w-[100%] sm:hidden h-screen bg-[#ecf0f3] z-50 p-10 ease-in duration-200  bg-white/90 dark:bg-[#121212]/95 text-gray-900 shadow-sm backdrop-blur-lg"
                : "fixed left-[-100%] w-[100%] h-screen top-0 p-10 ease-in duration-200"
            }>
                <div className="flex w-full items-center justify-end">
                    {/* color mode */}
                    <Darkmode />                      
                    {/* end of color mode */}
                    <div onClick={handleNav} className="cursor-pointer">
                        <AiOutlineClose size={25} className="dark:text-white" />
                    </div>
                </div>
                <div className="flex-col py-4">
                    <ul className="flex flex-col items-center justify-center h-full">
                        <Link href={'/products'}> <li onClick={()=> setOpen(false)} className="py-4 cursor-pointer uppercase dark:text-white">products</li> </Link>
                        <Link href={'/about'}> <li onClick={()=> setOpen(false)} className="py-4 cursor-pointer uppercase dark:text-white">about</li> </Link>
                        <Link href={'/service'}> <li onClick={()=> setOpen(false)} className="py-4 cursor-pointer uppercase dark:text-white">service</li> </Link>
                        <Link href={'/register'}> <li onClick={()=> setOpen(false)} className="py-4 cursor-pointer uppercase dark:text-white">register</li> </Link>
                        <Link href={'/login'}> <li onClick={()=> setOpen(false)} className="py-4 cursor-pointer uppercase dark:text-white">login</li> </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
}