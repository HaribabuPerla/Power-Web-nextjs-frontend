"use client"
import Image from "next/image";
import InputField from "../components/InputField";
import { useState } from "react";


export default function Home() {
  const [loginCred,setLoginCred]=useState<{userName:string,password:string}>({userName:"",password:""})
  return (
    <div className="bg-[url('/images/bg-image-one.jpg')] bg-cover bg-center h-screen">
      <div className="bg-yellow-500/40 h-full w-full flex items-center justify-center">
           <div className="bg-white rounded-lg shadow-lg  w-full max-w-135 ">
            <h1 className="text-2xl font-bold text-gray-800
             mb-4 bg-yellow-500 p-4 rounded-t-lg text-center">
              POWER PROJECT
            </h1>
            <h3 className="text-lg font-semibold text-gray-800 underline mb-6 text-center">
              Login
            </h3>
             <div className="px-10 py-2">
              <InputField
                 placeholder="Enter User Name"
                 onChange={(e)=>{
                   setLoginCred(
                    (prev)=>({
                       ...prev,
                       userName:e.target.value
                    })
                   )
                 }}
                 value={loginCred?.userName}
              />
               <InputField
                 placeholder="Enter Password"
                 type="password"
                 onChange={(e)=>{
                   setLoginCred(
                    (prev)=>({
                       ...prev,
                       password:e.target.value
                    })
                   )
                 }}
                 value={loginCred?.password}
                 isPasswordField={true}
               />

              
              
             </div>
           </div>
      </div>
  
      

    </div>
    
  );
}
