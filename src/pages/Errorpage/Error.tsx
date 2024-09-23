import Loattehandler from "../../lottie/Lottiehandler"
import { Link } from "react-router-dom"
import { Container } from "react-bootstrap"
const Error = () => {

  return (
    <Container>
        <div className="d-flex flex-column align-items-center " style={{marginTop:"15%"}}>
            <Loattehandler types="notfound"/>
            <Link to="/" replace={true}> How to go back to home ?</Link>

        </div>
    </Container>
  )
}

export default Error
