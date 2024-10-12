import { Col, Container, Row } from "react-bootstrap"
import cartphoto from "../../../assets/cardphoto.png"
import style from "./homesectionstyle.module.css"

const {
    cartimg,
    cart,
    secondsection,
    title,
    text,
    overlay }=style
const Secondsection = () => {
  return (
    <div className={secondsection}>

    <Container>

        <Row>
            <Col className="sm-6 mb-3" sm={6} mb={3}>
            <div className={cart}>
                <div className={overlay}></div>

                <div className={cartimg}>
                    
                    <img src={cartphoto} alt="" />
                     </div>

                <div className={title}>
                    <p>الشهادات</p>
                </div>
                <div className={text}>
                    <p>الشكر والتقدير-التفوق-النجاح-التخرج-الحضور -التهنئه-التطوع-البرامج التدريبيه-الشهادات التفاعليه بصيغ مفتوحه وغيرها</p>
                </div>

            </div>
            </Col>
            <Col className=" mb-3" sm={6} mb={3}>
            <div className={cart}>
                <div className={overlay}></div>

                <div className={cartimg}>
                    
                    <img src={cartphoto} alt="" />
                     </div>

                <div className={title}>
                    <p>الشهادات</p>
                </div>
                <div className={text}>
                    <p>الشكر والتقدير-التفوق-النجاح-التخرج-الحضور -التهنئه-التطوع-البرامج التدريبيه-الشهادات التفاعليه بصيغ مفتوحه وغيرها</p>
                </div>

            </div>
            </Col>
            <Col className=" mb-3" sm={6} mb={3}>
            <div className={cart}>
                <div className={overlay}></div>

                <div className={cartimg}>
                    
                    <img src={cartphoto} alt="" />
                     </div>

                <div className={title}>
                    <p>الشهادات</p>
                </div>
                <div className={text}>
                    <p>الشكر والتقدير-التفوق-النجاح-التخرج-الحضور -التهنئه-التطوع-البرامج التدريبيه-الشهادات التفاعليه بصيغ مفتوحه وغيرها</p>
                </div>

            </div>
            </Col>
            <Col className=" mb-3" sm={6} mb={3}>
            <div className={cart}>
                <div className={overlay}></div>

                <div className={cartimg}>
                    
                    <img src={cartphoto} alt="" />
                     </div>

                <div className={title}>
                    <p>الشهادات</p>
                </div>
                <div className={text}>
                    <p>الشكر والتقدير-التفوق-النجاح-التخرج-الحضور -التهنئه-التطوع-البرامج التدريبيه-الشهادات التفاعليه بصيغ مفتوحه وغيرها</p>
                </div>

            </div>
            </Col>
            
            </Row>
            {/* <Row>

            <Col className="gx-2 gy-2">
            <div className={cart}>
                <div className={overlay}></div>

                <div className={cartimg}>
                    
                    <img src={cartphoto} alt="" />
                     </div>

                <div className={title}>
                    <p>الشهادات</p>
                </div>
                <div className={text}>
                    <p>الشكر والتقدير-التفوق-النجاح-التخرج-الحضور -التهنئه-التطوع-البرامج التدريبيه-الشهادات التفاعليه بصيغ مفتوحه وغيرها</p>
                </div>

            </div>
            </Col>
            <Col className="gx-2 gy-2">
            <div className={cart}>
                <div className={overlay}></div>

                <div className={cartimg}>
                    
                    <img src={cartphoto} alt="" />
                     </div>

                <div className={title}>
                    <p>الشهادات</p>
                </div>
                <div className={text}>
                    <p>الشكر والتقدير-التفوق-النجاح-التخرج-الحضور -التهنئه-التطوع-البرامج التدريبيه-الشهادات التفاعليه بصيغ مفتوحه وغيرها</p>
                </div>

            </div>
            </Col>
            </Row> */}
    </Container>

       
    </div>
  )
}

export default Secondsection
