
import Firstsection from "./Secctions/Firstsection"
import Secondsection from "./Secctions/Secondsection"
import Thirdsection from "./Secctions/Thirdsection"
import { Container,Row } from "react-bootstrap"
const AllProducts = () => {

  
 

  return (
   <Container>

    <Row>
      <Firstsection/>
    </Row>
    <Row>
      <Secondsection/>
    </Row>
    <Row>
      <Thirdsection/>
    </Row>
   </Container>
  )
}

export default AllProducts
