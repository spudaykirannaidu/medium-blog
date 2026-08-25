import { Blogcard } from "../components/Blogcard"
import {Appbar} from "../components/Appbar"
import { useBlog } from "../hooks"
import { Blogskel } from "../components/Blogskel"
//i addd the ts for useBlog 

export function Blogs(){
    const {loading,blogs}=useBlog()
    if(loading){
        return <div className="flex  flex-col justify-center items-center ">
            <div className="pb-2">
                <Blogskel></Blogskel> 
            </div>
            <div className="pb-2">
                <Blogskel></Blogskel> 
            </div>
            <div className="pb-2">
                <Blogskel></Blogskel> 
            </div>
            <div className="pb-2">
                <Blogskel></Blogskel> 
            </div>
            
           
        </div>
    }

    return <div>
        <div>
            <Appbar></Appbar>
        </div>
        
        <div className=" flex justify-center mt-1  ">
        <div className=" max-w-md cursor-point ">
              {blogs.map(blog => (
  <Blogcard
    key={blog.id} // Added required React list tracking parameter
    id={blog.id}
    authorname={  "Anonymous"} // Safe operator prevents crashes
    title={blog.title}
    content={blog.content}
    date={"2nd Feb 2024"}
  />
))}

        </div>
       
    </div>
    </div>
    
}