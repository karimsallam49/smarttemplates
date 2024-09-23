import { Col, Container, Row } from "react-bootstrap"
import homepagephoto from "../../../../src/assets/home photo.png"
import style from "./homesectionstyle.module.css"
const {firstsectontext,firstsection,firstsectonimg,}=style;
const Firstsection = () => {
  return (
    <div className={firstsection}>

    <Container>

        <Row>
            <Col md={{span:5, offset:1}}>
            <div className={firstsectontext}>
                <h1 className="header">
                قالبك المميز بين يديك

                </h1>
              <p>

                <span className="second">
                احصل على افضل النماذج بأسرع وقت وأقل تكلفة مع متجر القوالب الذكية

                </span>
                اضغط على القسم المناسب لطلبك من قائمة الأقسام واختر النموذج المطلوب، وقم بإضافته لسلة المنتجات، سيصل إليك نموذج أو قالب يلبي احتياجاتك


              </p>
    
            </div>
            </Col>
            <Col md={{span:4,offset:1}}>
            <div className={firstsectonimg}>
            <img  src={homepagephoto}></img>

            </div>
            </Col>
        </Row>
    </Container>

 

    </div>
  )
}

export default Firstsection
