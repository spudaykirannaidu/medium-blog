import { Hono } from 'hono'
import { userRouter } from './routes/userRouter';
import { blogRouter } from './routes/blogrouter';
import {createPrismaInstance} from "../lib/prisma"
import {sign,verify} from "hono/jwt"


const app = new Hono();
app.route("/api/v1/user",userRouter)
app.route("/api/v1/blog",blogRouter)







export default app
