import { useAppSelector } from "../../Store/hooks"
import React from "react"
import { Navigate } from "react-router-dom"

const Protectedrouters = ({children}:{children:React.ReactNode}) => {

    const{accsessToken}=useAppSelector((state)=>state.authslice)

    if(accsessToken){


        return (
          <div>
            {children}
          </div>
        )
    }else{

        return <Navigate to="/"/>
    }


}

export default Protectedrouters
