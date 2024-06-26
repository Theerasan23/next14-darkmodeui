"use server"

// import { revalidatePath } from "next/cache";
import { SignJWT , jwtVerify } from 'jose';
import { NextResponse , NextRequest } from 'next/server';
import { cookies } from 'next/headers'; 

import { redirect } from 'next/navigation'


const secretkey : string  = "theerasan"
const key = new TextEncoder().encode(secretkey)

const expires = new Date( Date.now() + 10 * 1000)

export async function encrypt(payload : any){

    return await new SignJWT(payload)
    .setProtectedHeader({alg: 'HS256'})
    .setIssuedAt()
    .setExpirationTime('10 sec from now')
    .sign(key)

}

export async function decrypt(input : string): Promise<any>{
    const {payload} = await jwtVerify(input , key , {  algorithms:['H256'] })
    return payload
}

export async function login(state : any, formData: FormData) {

    const email = formData.get("email");
    const password = formData.get("password");

    const data_body = { "username" : email , "password": password }

    return "ok";

    const response = await fetch('http://localhost:4000/api/login');


    const data = JSON.stringify( await response.json() );
    const [user] = JSON.parse(data);

    const session = await encrypt({user,expires})
    console.log(session)

    if(user.name === email){
        redirect("/");
    }else{
        
        return "error";
    }

    
}