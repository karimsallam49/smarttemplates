import { Outlet } from "react-router-dom"
import Navebare from "../layout/header/Navebare"
import Footer from "../layout/footer/Footer"
import style from"./mainlayoutstyle.module.css"
const{wrapper,container}=style
const Mainlayout = () => {
  return (
    <div >
      <div className={container}>

        <Navebare/>

        <div className={wrapper}>

        <Outlet/>

        </div>
        <Footer/>
      </div>





      
    </div>
  )
}

export default Mainlayout
