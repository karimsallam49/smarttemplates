import Lottie from "lottie-react"
import notfound from"../assets/Lottiefile/page not found.json"
import loading from "../assets/Lottiefile/loading.json"
import cartempty from "../assets/Lottiefile/carterror.json"
import error from "../assets/Lottiefile/error (2).json"
const lottiesmap={

    notfound,
   loading,
    cartempty,
    error
}

type lottieprops={

    types: keyof typeof lottiesmap,
    message?:"string"
}
const Loattehandler = ({types,message}:lottieprops) => {
    const lottie=lottiesmap[types]


  return (
    <div className="d-flex flex-column align-items-center" style={{marginTop:"2%"}}>
      <Lottie animationData={lottie} style={{width:"400px"}}></Lottie>
      {message && <h3 style={{fontSize:"19px"}}>message</h3>}
    </div>
  )
}

export default Loattehandler