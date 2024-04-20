"use client";
import { LuMoonStar } from "react-icons/lu";
import { BsFillSunFill } from "react-icons/bs";
import { useState , useEffect } from "react";

export default function Darkmode() {

    const [darkmode, setdarkmode] = useState(true);

    useEffect(() => {
        const colormode = localStorage.getItem("colormode");
        if(colormode === "dark") {
            setdarkmode(true);
        } 
    
    },[]);

    useEffect(() => { 

        if(darkmode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("colormode","dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("colormode","light");
        }
     },[darkmode])
    return (
        
        <li onClick={()=>setdarkmode(!darkmode)} className="ml-5 uppercase hover:font-bold text-md flex items-center px-2 cursor-pointer">
            {darkmode ? <LuMoonStar  size={25} className=" text-orange-300 "/> : <BsFillSunFill  className=" text-teal-500 "  size={25} />}
        </li>
    );

}