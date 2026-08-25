import type { Blog } from "../hooks"
import { Appbar } from "./Appbar"
//because it is objrct 
export function Fullblog({blog}:{blog:Blog}){
    return <div>
        <Appbar></Appbar>
        

        <div className="grid grid-cols-12 px-10 flex justify-center  ">
        <div className="col-span-8 h-screen pt-13  ">
            <div className="font-bold text-4xl">
                {blog.title}

            </div>
            <div className="font-light text-md text-slate-600 ">
                posted on 2nd december 2026
            </div>
            <div className="font-normal text-xl text-gray-600 pt-4 ">
                {blog.content}
            </div>

            

        </div>
        <div className="col-span-4   h-screen pt-30">
            <div className="font-normal text-md px-2">
                Author 
            </div>
            <div className="grid grid-cols-5">
                <div className="cols-span-1 flex items-center px-2 "> 
                     <div className=" p-5 relative inline-flex items-center justify-center w-4 h-4 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <span className=" tex-sm font-medium text-gray-600 dark:text-gray-300">A</span>
</div>
                    
                </div>
                <div className="col-span-4"> 
                    <div className="font-semibold text-xl">
                        {"Anonymous"}

                    </div>
                    <div className="font-medium text-md text-gray-700 pt-3">
                this is random shit of the user details  please just 
                ignore it and read the blog
            </div>
                
            </div>
            

            </div>
            
            
            

        </div>

    </div>
    </div>
}