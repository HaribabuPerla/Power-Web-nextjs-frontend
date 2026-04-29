"use client";


type InputFieldProps = {
    label?:string,
    type?:string,
    placeholder?:string,
    value:string | number,
    onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void
    required?:boolean
    

}
