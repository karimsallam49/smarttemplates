// import { Col, Container, Row } from "react-bootstrap"
// import style from "./homesectionstyle.module.css"
// import cartphoto from "../../../assets/cardphoto.png"
import Firstsection from "./Firstsection"
import Secondsection from "./Secondsection"
import Thirdsection from "./Thirdsection"

const Homesecions = () => {
    return (
        // First secion
        
        <div className="homepagesection">


    <Firstsection/>

    {/* second secion */}

    <Secondsection/>
    
  {/* third section  */}

  <Thirdsection/>
    </div>


  )
}

export default Homesecions
