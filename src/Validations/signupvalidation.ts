import {z} from "zod"

const signupschema=z.object({

    firstname:z.string().min(1,{message:"first name is required"}),
    lastname:z.string().min(1,{message:"last name is required"}),
    email:z.string().min(1,{message:"email adderss is required"}).email(),
    password:z.string().min(8,{message:"password must be at least 8 characters"}),
    // phonenumber:z.number().min(10,{message:"phone number is invaild"}),
    confrimpassword:z.string().min(1,{message:"first name is required"})
  
  })
  .refine(input=>input.password ===input.confrimpassword,{
    message:"password and confirm password didn't match ",
    path:["confrimpassword"]
  })

  type  Tsignuptypes=z.infer<typeof signupschema>

  export {signupschema,type Tsignuptypes}