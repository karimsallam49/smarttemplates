import {z} from "zod"

const loginvalidation=z.object({
    email:z.string().min(1,{message:"email adderss is required"}).email(),
    password:z.string().min(2,{message:"password must be at least 8 characters"})
    
    
    
})


type Tlogin=z.infer<typeof loginvalidation>

export {loginvalidation,type Tlogin}