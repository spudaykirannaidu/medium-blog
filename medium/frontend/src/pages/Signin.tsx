import { Quote } from "../components/Quote"
import { Toaster } from 'react-hot-toast';

export function Signin(){
    return  <div> <Toaster position="top-center" />
        <div className="grid grid-cols-1 lg:grid-cols-2">
     <div className="col-span-1"><Auth ></Auth></div>
     <div className="col-span-1  hidden lg:block">
        <Quote/>
     </div>
    </div>
    </div>
}
import { Link, useNavigate } from "react-router-dom"
import type { ChangeEvent } from "react";
import { useState } from "react";
import type {signupInput} from "../../../common/src/index";
import axios from "axios";
import { backend_url } from "../config";
import { toast } from "react-hot-toast";



export function Auth(){
    const [post,setPost]=useState<signupInput>(
       { email:"",
        password:""
        
       })
       const navigate=useNavigate()

       async function sendrequest(){
        try{
            const response=await axios.post(`${backend_url}/api/v1/user/signin`,post)
            const jwt=response.data;
            console.log(jwt)
                localStorage.setItem("token",jwt.jwt);
                 toast.success("login successfull")
                navigate("/blogs")
        }
        catch(e){
             toast.error("user is not exist")
            console.log(e)
        }
       }
    return <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center font-bold text-4xl">
            Create an account   
        </div>
        <div className="flex justify-center text-sm text-gray-500 mt-1">
            Don't have an account?
            <Link className="cursor-pointer underline pl-2"to="/signup">signup</Link>
            
        </div>
        
        
        <div className="flex flex justify-center mt-4 ">
            <Labelbox label="Email" placeholder="mail@gmail.com" onChange={function(e){
                setPost({
                    ...post,
                    email:e.target.value
                })
            }}></Labelbox>
        </div>
        <div className="flex flex justify-center mt-4 ">
            <Labelbox label="password" type={"password"} placeholder="Enter your password" onChange={function(e){
                setPost({
                    ...post,
                    password:e.target.value
                })
            }}></Labelbox>
        </div>
                <button  onClick={sendrequest } className="rounded-full mt-3 border border-bg-slate-500 w-fit  self-center  text-white bg-black  hover:bg-gray-800 transition-colors font-medium 
                rounded-lg text-sm px-8 py-2.5 focus:outline-none"
>
                   signin
                </button>
    </div>
}  

interface labeltype{
    label:string;
    placeholder:string;
    onChange:(e:  ChangeEvent<HTMLInputElement>)=>void
    type?:string

}


function Labelbox({label,placeholder,onChange,type}:labeltype){
    return  <div className="text-xl font-semibold flex  flex-col justify-center">
            
                {label}
            
            <div className="mt-1"   >

            
            <input type={type || "text"} placeholder={placeholder} className="border border-gray-500 rounded-lg p-1 hover:border-gray-300 focus:outline-none  " onChange={onChange} />
            </div>
        </div>
    
}