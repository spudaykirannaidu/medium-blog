import { Hono } from "hono";
import { createPrismaInstance } from "../../lib/prisma";
import {sign,verify} from "hono/jwt"
import {signupinput} from "../../../common/src/index";
import {signininput} from "../../../common/src/index";

type CloudflareEnv = {
  Bindings: {
    DATABASE_URL: string;
    jwt_hide:string
  };
};
export const userRouter=new Hono<CloudflareEnv>();

userRouter.post('/signup', async (c) => {

   
   const { prisma, pool } = await createPrismaInstance(c.env.DATABASE_URL);
   const body= await c.req.json();
   const response=signupinput.safeParse(body)
   if(!response.success){
    return c.json({mss:"invalid input"},411)
   }
   try{
     const res=await prisma.user.create({
    data:{
      email:body.email,
      password:body.password,
      name: body.name
    }
   })
   const token= await sign({id:res.id},c.env.jwt_hide)
   return c.json({
    jwt:token
   })

   }
   catch(e){
    return c.json({
      mss:"invalid"
    },411)
   }
  





})
userRouter.post('/signin', async (c) => {
 const { prisma, pool } = await createPrismaInstance(c.env.DATABASE_URL);
   const body= await c.req.json();
   const response=signininput.safeParse(body)
   if(!response.success){
    return c.json({mss:"invalid input"},411)
   }
   try {
    
   const userdata=await prisma.user.findUnique({
    where:{
      email:body.email,
      password:body.password
      
    }
   })
   if(!userdata){
    return c.json({
      error:"usernot found"
    },403)
   }

    
    const token= await sign({id:userdata.id},c.env.jwt_hide)
   return c.json({
    jwt:token
   })

   }
   catch(e){
    console.log(e)
    c.status(411)

   return  c.text("invalid")
   }



})