import z from "zod"

export const signupinput=z.object({
    email:z.email(),
    password:z.string(),
    name:z.string().optional()


})


export const signininput=z.object({
    email:z.email(),
    password:z.string(),
    


})
export const bloginput=z.object({
    title:z.string(),
    content:z.string()
})
export const blogupdate=z.object({
    title:z.string(),
    content:z.string(),
    id:z.string()
})
export type blogUpdate=z.infer<typeof blogupdate>
export type blogInput=z.infer<typeof bloginput>
export type signupInput=z.infer<typeof signupinput>
export type signinInput=z.infer<typeof signininput>

