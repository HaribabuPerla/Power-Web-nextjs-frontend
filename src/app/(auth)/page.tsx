"use client";
import Image from "next/image";
import InputField from "../components/InputField";
import { useState } from "react";
import Button from "../components/Button";

export default function Home() {
  const [loginCred, setLoginCred] = useState<{
    userName: string;
    password: string;
  }>({ userName: "", password: "" });
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [signupData,setSignupData]=useState<{userName:string,mobileNumber:string,password:string,confirmPassword:string}>({userName:"",mobileNumber:"",password:"",confirmPassword:""})
  const [showError,setShowError]=useState<{nameErr:boolean,passwordErr:boolean}>({nameErr:false,passwordErr:false})
  const handleLogin = () => {
     const userName=loginCred?.userName;
     const password = loginCred?.password;

     if(!userName && !password){
       return setShowError({nameErr:true,passwordErr:true})
     }else if(!userName){
       return setShowError({nameErr:true,passwordErr:false})
     }else if(!password){
      return setShowError({nameErr:false,passwordErr:true})
     }else{
        alert("Login Success")
     }
    console.log("logincred====>", loginCred);
  };

  const handleSignup=()=>{
     console.log("signup====>",signupData)
  }
  return (
    <div className="bg-[url('/images/bg-image-one.jpg')] bg-cover bg-center h-screen">
      <div className="bg-yellow-500/40 h-full w-full flex items-center justify-center px-5 md:px-0">
        <div className="bg-white rounded-lg shadow-lg  w-full max-w-135">
          <h1
            className="text-2xl font-bold text-gray-800
             mb-4 bg-yellow-500 p-4 rounded-t-lg text-center"
          >
            POWER PROJECT
          </h1>
          <h3 className="text-lg font-semibold text-gray-800 underline mb-6 text-center">
            {isLogin ? "Login" : "Signup"}
          </h3>
          {isLogin ? (
            <div className="px-10 py-2">
              <InputField
                placeholder="Enter User Name"
                onChange={(e) => {
                  setLoginCred((prev) => ({
                    ...prev,
                    userName: e.target.value,
                  }));
                }}
                value={loginCred?.userName}
                showError={showError?.nameErr}
              />
              <InputField
                placeholder="Enter Password"
                type="password"
                onChange={(e) => {
                  setLoginCred((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }));
                }}
                value={loginCred?.password}
                isPasswordField={true}
                showError={showError?.passwordErr}
              />

              <Button onClick={() => handleLogin()} fullWidth>
                Submit
              </Button>
              {/* <div className="text-center">
                <Button
                  variant="ghost"
                  onClick={()=>{}}
                  >
                  Forgot Password?
                  </Button>

                  </div> */}
              <div className="text-center">
                <h3 className="text-gray-800  text-[14px]">
                  Don't have Account?{" "}
                </h3>
                <Button
                  onClick={() => setIsLogin(false)}
                  variant="ghost"
                  className="text-blue-600 underline font-bold cursor-pointer"
                >
                  Signup
                </Button>
              </div>
            </div>
          ) : (
            <div className="px-10 py-2">
              <InputField
                placeholder="Enter Full Name"
                onChange={(e) => {
                  setSignupData((prev) => ({
                    ...prev,
                    userName: e.target.value,
                  }));
                }}
                value={signupData?.userName}
                maxLen={5}
              />

              <InputField
                placeholder="Enter Mobile Number"
                type="tel"
                onChange={(e) => {
                  setSignupData((prev) => ({
                    ...prev,
                    mobileNumber: e.target.value,
                  }));
                }}
                value={signupData?.mobileNumber}
                maxLen={10}
              />

              <InputField
                placeholder="Enter Password"
                type="password"
                onChange={(e) => {
                  setSignupData((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }));
                }}
                value={signupData?.password}
                isPasswordField={true}
              />

              <InputField
                placeholder="Confirm Password"
                type="password"
                onChange={(e) => {
                  setSignupData((prev) => ({
                    ...prev,
                      confirmPassword: e.target.value,
                  }));
                }}
                value={signupData?.confirmPassword}
                isPasswordField={true}
              />

              <Button onClick={() => handleSignup()} fullWidth>
                Signup
              </Button>

              <div className="text-center">
                <h3 className="text-gray-800  text-[14px]">Have Account? </h3>
                <Button
                  onClick={() => setIsLogin(true)}
                  variant="ghost"
                  className="text-blue-600 underline font-bold cursor-pointer"
                >
                  Login
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
