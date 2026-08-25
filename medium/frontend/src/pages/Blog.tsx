import { useidblog } from "../hooks"
import { useParams } from "react-router-dom"
import { Fullblog } from "../components/Fullblog";
import { Blogskel } from "../components/Blogskel";

export function Blog(){
    const {id}= useParams();
    const {loading,blog}=useidblog({
        id:id||""
    })
    if(loading){
        return <div className="flex  flex-col justify-center items-center ">
            <div className="pb-4">
                <Blogskel></Blogskel> 
            </div>
            <div className="pb-4">
                <Blogskel></Blogskel> 
            </div>
            <div className="pb-4">
                <Blogskel></Blogskel> 
            </div>
            <div className="pb-4">
                <Blogskel></Blogskel> 
            </div>
            
           
        </div>

    }
    return <div>
        <Fullblog blog={blog}></Fullblog> 
    </div>
}