import { useEffect,useState } from "react";
import axios from "axios";
import { backend_url } from "../config";
// hooks/index.ts
 export interface Blog {
  id: string;
  title: string;
  content: string;
  author: {
    name: string | null;
  };
}
 export interface Blogid {
  id: string;
  title: string;
  content: string;
  author: {
    name: string | null;
  };
}

export function useidblog({id}:{id:string}){
    const [loading,setLoading]=useState(true);
    const [blog, setBlog] = useState<Blogid>({
    id: "",
    title: "",
    content: "",
    author: { name: "" },}
);
    useEffect(()=>{
        
        axios.get(`${backend_url}/api/v1/blog/${id}`,{
            headers:{
            Authorization:localStorage.getItem("token")}}).then(function (res){
           setBlog(res.data.blog);
            setLoading(false)   
        })

        },[id])
        return {
            loading,
            blog
        }
    

}

export function  useBlog(){
    const [loading,setLoading]=useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);
    useEffect(()=>{
        
        axios.get(`${backend_url}/api/v1/blog/bulk`,{
            headers:{
            Authorization:localStorage.getItem("token")}}).then(function (res){
          setBlogs(res.data.blogs || []);
           console.log("blogs response:", res.data);
            setLoading(false)   
        })

        },[])
        return {
            loading,
            blogs
        }
    
    }


