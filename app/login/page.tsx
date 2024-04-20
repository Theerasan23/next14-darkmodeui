"use client"
import { FcGoogle } from "react-icons/fc";
import { AiFillUnlock } from "react-icons/ai";
import Link from "next/link";
import { useEffect } from 'react';
import { useFormState } from "react-dom";
import { login } from "../(action)/system";

export default function Login(){

    useEffect(() => {
        document.body.classList.add('bg-login');
        document.body.classList.add('bg-fixed');
        document.body.classList.add('bg-cover');
        // Clean up function if needed
        return () => {
          document.body.classList.remove('bg-login');
        };
      }, []);



    let return_text : string = "";
    const [state , formAction] = useFormState(login,null);
    const message =  JSON.parse( JSON.stringify(state) )
     
    console.log(message)

    if(message === "ok"){
        return_text = "success";
    }else{
        console.log("error")
        return_text = "error";
    }
    // return_text = "";
    console.log(return_text);

    return (
        <div className="card md:flex md:justify-center items-center z-0 p-4 py-[100px]">
            
        <div className="card-body md:rounded-md rounded-md bg-white/20 shadow-lg border-none dark:bg-[#121212]/20  md:w-[30%] justify-center md:items-center dark:border-[#232323] dark:shadow-2xl backdrop-blur-md">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4 p-4 md:w-full md:px-full">
                <form action={formAction}>

                        
                        <div className="title_login  rounded-md p-3 font-bold text-teal-950 dark:text-white">
                            <h3 className="text-[20px] flex justify-center font-bold uppercase">Login Here</h3>
                        </div>

                        <div className="Email py-2">
                            <label className="block mb-2 font-medium text-teal-950 dark:text-blue-400"> Email</label>
                            <input type="email" id="email" name="email" className="bg-white dark:bg-[#121212] dark:text-white  p-2.5 rounded-lg border-[1px] text-teal-950 w-full" placeholder="user@email.com" required />
                        </div>
                        <div className="password">
                            <label className="block mb-2 font-medium text-teal-950 dark:text-blue-400">password</label>
                            <input type="password" id="password" name="password" className="bg-white  text-teal-950 dark:bg-[#121212] dark:text-white p-2.5 border-[1px] rounded-lg w-full" placeholder="password" required />
                        </div>
                        <div className="btn_submit  py-3 mt-3">
                            <button className="btn p-3 rounded-md text-white bg-blue-500 border-2 w-full flex justify-center items-center  dark:border-none "> 
                            <AiFillUnlock size={20} /> Login</button>
                        </div>
                        {
                            
                        return_text === "error" ? <div className="bg-red-500 p-3 rounded-md text-white"> <p> Username or password is incorrect </p> </div> :
                        return_text === "success" ? <div className="bg-green-500 p-3 rounded-md text-white"> <p> Login success </p> </div> : ""
                
                        }

                </form>
            </div>

           

            <div>
                <div className="flex justify-center items-center pt-4">
                    <p> or login with </p>
                </div>
            </div>

            {/* social Login */}
            <div className="grid grid-cols-1 md:grid-cols-1 gap-1 p-2 w-full">
                <div className="google py-2">
                    <button className="flex justify-center items-center p-2 rounded-md border-[1px] w-full bg-white dark:bg-black/30">  <FcGoogle size={25} /> Login with Google </button>
                </div>
            </div>

            <div className="flex justify-center items-center pb-5">
                <b> Don't have an account ? <Link href="/register" className=" text-blue-500 "> register now </Link> </b>
            </div>
        </div>
    </div>
    );
}