import { useEffect } from "react"
import { useAppSelector,useAppDispatch } from "../../../Store/hooks"
import getSingleproduct from "../../../Store/Act/actGetsingleproduct"
import { allproductcleanup } from "../../../Store/Singleproduct/Singleproductslice"

import { Container,Row,Col,Button} from "react-bootstrap"
import { Link } from "react-router-dom"
import Loadingpage from "../../LoadingPage/Loadingpage"
import Carditems from "./Carditems"
import style from "./sectionstyle.module.css"
import Loattehandler from "../../../lottie/Lottiehandler"

const {sectionscontainer}=style

const Secondsection = () => {
  const dispatch=useAppDispatch()
  useEffect(()=>{
    const promise= dispatch(getSingleproduct("monasbat"))

     return ()=>{
       dispatch (allproductcleanup())
       promise.abort()
     }
 },[dispatch])
 
    const {recordsectiontwo,loading,error}=useAppSelector(state=>state.Singleproductslice)
   

   

    const renderproducts= 
    recordsectiontwo.length > 0 ? (recordsectiontwo.map((el)=>(
        <Col xs={6} md={3}
        key={el.id}
        className="d-flex justfiy-content-center- mb-5 mt-2"
        >
        <Carditems {...el}/>
        </Col>
    ))):<Loattehandler types="error"/>

  return (
    <Loadingpage status={loading} error={error} type="ProductSkeleton" >


    <div  className={sectionscontainer} style={{marginTop:"4rem"}}>
    <Container style={{marginTop:"3rem"}}>

<Row><div style={{display:"flex",justifyContent:"flex-end"}}>

  <h1>المناسبات</h1>
</div>

  </Row>
<Row>
    {renderproducts}
    <Link to="product/monasbat"> <Button variant="warning"> المزيد</Button></Link>



</Row>
</Container>
    </div>
    </Loadingpage>

  )
}

export default Secondsection
