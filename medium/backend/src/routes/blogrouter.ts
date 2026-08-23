import { Hono } from "hono";
import { createPrismaInstance } from "../../lib/prisma";
import {sign,verify} from "hono/jwt"

export const blogRouter= new Hono<{
    Bindings:{
        DATABASE_URL:string

    }
    Variables:{
        userId:string
    }
}>();
import { middleware } from "../middle";
blogRouter.use('/*',middleware)


blogRouter.post('/',async  (c) => {
    const {prisma,pool}=await createPrismaInstance(c.env.DATABASE_URL)
    const body= await c.req.json();
    const userId=c.get("userId")
    const blog=await prisma.post.create({
        data:{
            title:body.title,
            content:body.content,
            
            authorId:userId
            


        }

    })
    return c.json({
        id:blog.id
    })




})
blogRouter.put('/', async (c) => {
   try {const {prisma,pool}=await createPrismaInstance(c.env.DATABASE_URL)
    const body= await c.req.json();
    
    const blog=await prisma.post.update({
        where:{
            id:body.id
        },
        data:{

            title:body.title,
            content:body.content,
            published: body.published
            
            


        }

    })
    return c.json({
        id:blog.id
    })}
    catch(e){
        console.log(e)
    }
})
blogRouter.get('/id', async (c) => {
   const {prisma,pool}=await createPrismaInstance(c.env.DATABASE_URL)
    const body= await c.req.param("id ");
    const userId=c.get("userId")
    const blog=await prisma.post.findFirst({
        where:{
            id:body
        }
        
    })
    return c.json({
        blog
    })
})
blogRouter.get('/bulk', async (c) => {
    const {prisma,pool}=await createPrismaInstance(c.env.DATABASE_URL);
    const blogs=await prisma.post.findMany()
  return c.json({
     blogs
  })
})