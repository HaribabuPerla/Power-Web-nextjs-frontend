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
    error?:boolean
    inputClassName?:Object,
    errorMsg?:string,
    isPasswordField?:boolean
}

const InputField=({
    label,
    type = "text",
    placeholder,
    value,
    onChange,
    required,
    error,
    inputClassName,
    errorMsg,
    isPasswordField

}:InputFieldProps)=>{
    const [showPassword,setShowPassword]=useState<boolean>(false)
    return(
        <div className="relative">
        {
            label && <h3 className="text-[#334155] text-[14px]">{label}</h3>
        }

        <input
                type={isPasswordField ? showPassword? "text":type : type }
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                aria-invalid={error}
                className={`border border-[#D1D5DB] hover:border-[#9CA3AF] outline-transparent focus:outline-[#9CA3AF] w-full p-1 text-[#334155]  text-[16px] rounded-sm mb-4 ${error && "border-[red] hover:border-[red]"} ${inputClassName}`}
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
                error && <h4 className="text-[red] mt-0.5 text-[14px]">{errorMsg || "This field is Required"}</h4>
            }

        </div>
    )

}
export default InputField;
