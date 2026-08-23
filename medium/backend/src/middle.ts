import { Context,Next } from "hono";
import {sign,verify} from"hono/jwt"


 export const middleware=async (c:Context,next:Next)=>{
   try{ const header=c.req.header("Authorization")||""
    //here empty string for our convincey
    const token=header.split(" ")[1]
    const res=await verify(token,c.env.jwt_hide,"HS256")
    if(res){
      c.set("userId",res.id)
      await next(); 
    }
    else{
      c.status(401)
      return c.json({
        error:"unauthorised"
      })

    }
}
catch(e){
  console.log(e)
  return c.json({

    mss:"expired"
  },403)
}


 

}
