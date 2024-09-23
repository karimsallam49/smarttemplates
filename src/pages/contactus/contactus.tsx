import homepagephoto from "../../assets/home photo.png"
import { Col, Container, Row } from "react-bootstrap"
import Form from 'react-bootstrap/Form';
import style from "./contactus.module.css"
const {firstsectontext,firstsection,firstsectonimg,inbutstyle,messagestyle,columcontainer,contacttext}=style;

const Contactus = () => {
  return (
    
    <div className={firstsection}>

    <Container>

        <Row>
            <Col md={{span:4,offset:1}}>
            <div className={firstsectonimg}>
            <img  src={homepagephoto}></img>

            </div>
            </Col>
            <Col md={{span:5, offset:1}}> 

            <div className={columcontainer}>

            <div className={contacttext}>
              <h3>تواصل معنا</h3>
              <p>..يسعدنا تواصلك معنا
                </p>
                <p>  . سوف نقوم بالرد عليك في أقرب وقت إن طلبت ذلك
                </p>
        
            </div>
            <div className={firstsectontext}>
            <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control className={inbutstyle} type="text" placeholder="الاسم"  style={{textAlign:"end"}}/>
        <Form.Control className={inbutstyle} type="number" placeholder="الجوال"  style={{textAlign:"end",margin:"10px 0"}}/>
        <Form.Control className={inbutstyle} type="email" placeholder="البريد الالكترونى"style={{textAlign:"end"}}/>
      </Form.Group>
      <Form.Group className={inbutstyle} controlId="exampleForm.ControlTextarea1">
        <Form.Control className={messagestyle} placeholder="الرساله" as="textarea" rows={3} />
      </Form.Group>
    </Form>
    
            </div>
            </div>

            </Col>
        </Row>
    </Container>

 


    </div>
  )

}
export default Contactus
