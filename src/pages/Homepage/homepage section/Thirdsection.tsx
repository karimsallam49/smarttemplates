import Carousel from 'react-bootstrap/Carousel';
import fphotot from"../../../assets/corasolimg1.png"
import sphotot from"../../../assets/corasolimg2.png"
import tphotot from"../../../assets/corasolimg3.png"

import styles from"./homesectionstyle.module.css"
 const{thirdsectioncontainer}=styles
const Thirdsection = () => {
  return (
    <div className={thirdsectioncontainer}>

<Carousel style={{width:"80%"}}>
      <Carousel.Item>
        <img width={"100%"} height={"500px"} src={fphotot}></img>
       
      </Carousel.Item>
      <Carousel.Item>
      <img width={"100%"} height={"500px"} src={sphotot}></img>  
      </Carousel.Item>
      <Carousel.Item>
      <img width={"100%"} height={"500px"} src={tphotot}></img>
             
      </Carousel.Item>
    </Carousel>
  
    </div>
  )
}

export default Thirdsection
