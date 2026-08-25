 interface card{
    authorname:string,
    date:string,
    title:string,
    content:string,
    id:string
 }
 import { Link } from "react-router-dom"

export function Blogcard({id,authorname,date,title,content}:card){
    return <Link to={`/blog/${id}`}>
    <div className="border-b border-slate-300 ">
        <div  className="flex items-center w-screen   ">
             <div className=" p-4 relative inline-flex items-center justify-center w-4 h-4 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <span className=" tex-sm font-medium text-gray-600 dark:text-gray-300">{authorname[0]}</span>
</div>
            
            <div className="p-2 font-thin text-xl flex items-center   ">
                {authorname?.[0] || "A"}
            </div>
            <div className="w-1 h-1 rounded-full bg-slate-700 items-center mt-1 ">

            </div>
            <div className=" font-normal  text-base text-slate-600 pl-2">
                {date}
            </div>
            
            </div>
            <div className="text-2xl font-semibold">
                {title}
            </div>
            <div className="text-xl font-light text-slate-800">
                {content.slice(0,100)+"..."}
            </div>
            <div className="font-normal  text-xs text-slate-600 pt-3">
                {`${Math.ceil(content.length /100)} minutes`}
            </div>
          






        

    </div>
    </Link> 
}
  
