import { useState } from "react";
import axios from "axios";


const usecheckedavabilityemail=()=>{
    
    type Tstatues="idle"|"checking"|"available"|"notavailable"|"failed"
    
    const[EmailCheckAvability,setEmailCheckAvability]=useState<Tstatues>("idle")
    const [EnterEmail,setenteremail]=useState<null|string>(null)

    const checkingemail= async(email:string)=>{

        setenteremail(email)
        setEmailCheckAvability("checking")

        try {
            const response= await axios.get(`http://localhost:3000/users?email=${email}`)
            console.log(response.data +"hee")
            console.log(email)
            if(!response.data.length){
                setEmailCheckAvability("available")

            }else{
                setEmailCheckAvability("notavailable")

            }
        } catch (error) {
            setEmailCheckAvability("failed")

        }
    }

    const resetemailcheck=()=>{

        setEmailCheckAvability("idle");
        setenteremail(null)

    }

return{
    checkingemail,
    EnterEmail,
    EmailCheckAvability,
    resetemailcheck

}
}

export default usecheckedavabilityemail