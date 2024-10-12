import { useEffect } from "react"
import { useAppSelector,useAppDispatch } from "../../../Store/hooks"
import { Container,Row,Col, Button} from "react-bootstrap"
import Carditems from "./Carditems"
import style from "./sectionstyle.module.css"
import Loadingpage from "../../LoadingPage/Loadingpage"
import getSingleproduct from "../../../Store/Act/actGetsingleproduct"
import { allproductcleanup } from "../../../Store/Singleproduct/Singleproductslice"
import Loattehandler from "../../../lottie/Lottiehandler"
import { Link } from "react-router-dom"

const {sectionscontainer}=style

const Firstsection = () => {
  const dispatch=useAppDispatch()
  useEffect(()=>{
    const promise= dispatch(getSingleproduct("shehadat"))

     return ()=>{
       dispatch (allproductcleanup())
       promise.abort()
     }
 },[dispatch])
  
    const {recordsectionone,loading,error}=useAppSelector(state=>state.Singleproductslice)

   

  

    const renderproducts= 
    recordsectionone.length > 0 ? (recordsectionone.map((el)=>(
        <Col xs={8} md={3}
        key={el.id}
        className="d-flex justfiy-content-center- mb-5 mt-2"
        >
        <Carditems {...el}/>
        </Col>
    ))):<Loattehandler types="error"/>

  return (

      <Loadingpage status={loading} error={error} type="ProductSkeleton">
    <div className={sectionscontainer}  >

      <Container style={{marginTop:"3rem"}}>

        <Row><div style={{display:"flex",justifyContent:"flex-end"}}>

          <h1>الشهادات</h1>
        </div>

          </Row>
        <Row>
            {renderproducts}

            <Link to="product/shehadat"> <Button variant="warning"> المزيد</Button></Link>

        </Row>
      </Container>
    </div>
      </Loadingpage>
  )
}

export default Firstsection
