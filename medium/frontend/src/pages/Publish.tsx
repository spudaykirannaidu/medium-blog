import { useState, } from "react"
import type { ChangeEvent } from "react";
import { Appbar } from "../components/Appbar"
import axios from "axios";
import { backend_url } from "../config";
import { useNavigate } from "react-router-dom";
export function Publish(){
    const [title,setTitle]=useState("");
    const [content,setContent]=useState("");
    const navigate=useNavigate()
    return <div>
        <Appbar></Appbar>
            <div className="flex  justify-center pt-4 ">
                <div className="flex flex-col max-w-screen-md w-full">
                <input onChange={function(e){
                    setTitle(e.target.value)
                }}type="text" placeholder="enter title" className="p-4  border border-slate-400 outline-none" />
            
            <div className="">
                <TextEditor onChange={function(e){
                    setContent(e.target.value)
                }} ></TextEditor>

            </div>
            <div className="flex items-center justify-center ">
                        <button onClick={async function(){
                            const res=await axios.post(`${backend_url}/api/v1/blog`,{
                                title:title,
                                content:content
                            },{headers:{
                                Authorization:localStorage.getItem("token")
                            }

                            })

                            navigate(`/blog/${res.data.id}`)
                        }} className="bg-gray-500 hover:bg-green-600 text-white font-medium py-2.5 px-5 rounded-lg transition-colors">
  click to publish
</button>
            </div>
            </div>
            
                </div>
                
    </div>
}

function TextEditor({ onChange }: {onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void}) {
    return <div className="mt-2">
        <div className="w-full mb-4 ">
            <div className="flex items-center justify-between border">
            <div className="my-2 bg-white rounded-b-lg w-full">
                <label className="sr-only">Publish post</label>
                <textarea onChange={onChange} id="editor" rows={8} className="focus:outline-none block w-full px-0 text-sm text-gray-800 bg-white border-0 pl-2" placeholder="Write an article..." required />
            </div>
        </div>
       </div>
    </div>
    
}