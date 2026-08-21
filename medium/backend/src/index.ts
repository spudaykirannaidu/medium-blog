import { Hono } from 'hono'
import "dotenv/config";
import {createPrismaInstance} from "../lib/prisma"
import {sign,verify} from "hono/jwt"

type CloudflareEnv = {
  Bindings: {
    DATABASE_URL: string;
    jwt_hide:string
  };
};
const app = new Hono<CloudflareEnv>();

app.use('api/v1/blog/*',async (c,next)=>{
    const header=c.req.header("Authorization")||""
    //here empty string for our convincey
    const token=header.split(" ")[1]
    const res=await verify(token,c.env.jwt_hide,"HS256")
    if(res.id){
      next();
    }
    else{
      c.status(403)
      return c.json({
        error:"unauthorised"
      })

    }



 

})





app.post('/api/v1/signup', async (c) => {
   
   const { prisma, pool } = await createPrismaInstance(c.env.DATABASE_URL);
   const body= await c.req.json();
   
   const res=await prisma.user.create({
    data:{
      email:body.email,
      password:body.password
    }
   })
   const token= await sign({id:res.id},"hi")
   return c.json({
    jwt:token
   })





})
app.post('/api/v1/signin', async (c) => {
 const { prisma, pool } = await createPrismaInstance(c.env.DATABASE_URL);
   const body= await c.req.json();
   const userdata=await prisma.user.findUnique({
    where:{
      email:body.email
    }
   })
   if(userdata){
    return c.json({
      error:"usernot found"
    },404)
   }

    const res=await prisma.user.create({
      data:{
        email:body.email,
        password:body.password
      }
    })
    const token= await sign({id:res.id},c.env.jwt_hide)
   return c.json({
    jwt:token
   })



})
app.post('/api/v1/blog', (c) => {
  return c.text('Hello Hono!')
})
app.put('/api/v1/blog', (c) => {
  return c.text('Hello Hono!')
})
app.get('/api/v1/blog/:id', (c) => {
  return c.text('Hello Hono!')
})
app.get('/api/v1/blog/bulk', (c) => {
  return c.text('Hello Hono!')
})

export default app
