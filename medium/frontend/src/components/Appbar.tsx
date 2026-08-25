import { Link } from "react-router-dom"

export function Appbar(){
    return <div className="flex justify-between  px-8 py-3  items-center border border-b border-slate-200 ">    
       <Link to={"/blogs"}>
       <div  className="cursor-pointer">
            MEDIUM
        </div></Link> 
        <div className="flex justify-between">
            <div className="flex items-center pr-10">
                <Link to={"/publish"}>
                <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 px-5 rounded-lg transition-colors">
  publish
</button></Link>
                
            </div>
            
                 <div className=" p-4 relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <span className=" tex-sm font-medium text-gray-600 dark:text-gray-300">U</span>
</div>

            </div>
        
       

    </div>
}