"use client";

import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";


type InputFieldProps = {
    label?:string,
    type?:string,
    placeholder?:string,
    value:string | number,
    onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void
    required?:boolean
    showError?:boolean
    inputClassName?:Object,
    errorMsg?:string,
    isPasswordField?:boolean,
    maxLen?:number

}

const InputField=({
    label,
    type = "text",
    placeholder,
    value,
    onChange,
    required,
    showError,
    inputClassName,
    errorMsg,
    isPasswordField,
    maxLen

}:InputFieldProps)=>{
    const [showPassword,setShowPassword]=useState<boolean>(false)
  

   
    return(
        <div className="relative">
        {
            label && <h3 className="text-[#334155] text-[14px]">{label}</h3>
        }
       
       <div className="mb-4">
        <input
                type={isPasswordField ? showPassword? "text":type : type }
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                aria-invalid={showError}
                className={`border border-[#D1D5DB] hover:border-[#9CA3AF] outline-transparent focus:outline-[#9CA3AF] w-full p-1 text-[#334155]  text-[16px] rounded-sm  ${showError && "border-[red] hover:border-[red]"} ${inputClassName}`}
                maxLength={maxLen}
              />
              {
                type=="password" &&  isPasswordField ?
                  <button
                    type="button"
                    className="absolute -translate-y-1/2 right-2 top-5 cursor-pointer text-[#9CA3AF]"
                    onClick={()=>setShowPassword(!showPassword)}
                  >
                     <FontAwesomeIcon icon={showPassword? faEyeSlash:faEye}/>
                  </button>
                :
                <></>

              }
            {
                showError && <h4 className="text-[red] mt-0.5 text-[14px]">{errorMsg || "This field is required"}</h4>
            }
            </div>

        </div>
    )

}
export default InputField;
