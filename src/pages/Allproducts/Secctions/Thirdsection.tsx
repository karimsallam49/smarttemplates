import { useEffect } from "react"
import getSingleproduct from "../../../Store/Act/actGetsingleproduct"
import { useAppDispatch } from "../../../Store/hooks"
import { Container,Row,Col} from "react-bootstrap"
import {  useAppSelector } from "../../../Store/hooks"
import Carditems from "./Carditems"
import style from "./sectionstyle.module.css"
import Loadingpage from "../../LoadingPage/Loadingpage"
import { allproductcleanup } from "../../../Store/Singleproduct/Singleproductslice"
import Loattehandler from "../../../lottie/Lottiehandler"

const {sectionscontainer}=style

const Thirdsection = () => {
  const dispatch=useAppDispatch()
  useEffect(()=>{
    const promise= dispatch(getSingleproduct("tahnea"))

     return ()=>{
       dispatch (allproductcleanup())
       promise.abort()
     }
 },[dispatch])

    const {recordsectionthree,loading,error}=useAppSelector(state=>state.Singleproductslice)
 

    const renderproducts= 
    recordsectionthree.length > 0 ? (recordsectionthree.map((el)=>(
        <Col xs={6} md={3}
        key={el.id}
        className="d-flex justfiy-content-center- mb-5 mt-2"
        >
        <Carditems {...el}/>
        </Col>
    ))):<Loattehandler types="error"/>
  return (
    <Loadingpage status={loading} error={error} type="ProductSkeleton"> 
    
    <div className={sectionscontainer} style={{marginTop:"4rem"}}>
        <Container style={{marginTop:"3rem"}}>

<Row><div style={{display:"flex",justifyContent:"flex-end"}}>

  <h1>التهنئه</h1>
</div>

  </Row>
<Row>
    {renderproducts}

</Row>
</Container>
    </div>
    </Loadingpage>

  )
}

export default Thirdsection
