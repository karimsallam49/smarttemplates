import { Container,Row,Col, Button} from "react-bootstrap"
import { useAppSelector,useAppDispatch } from "../../Store/hooks"
import Carditems from "../Allproducts/Secctions/Carditems"
import { useEffect } from "react"
import getproduct from "../../Store/Act/actGetProduct"
import { useParams } from "react-router-dom"
import {  dicreaselimit, incraeselimit, productleanup } from "../../Store/Product/ProductSlice"
import Loadingpage from "../LoadingPage/Loadingpage"
import style from "./productstyle.module.css"
const{limitehandler}=style



const Product = () => {
  const {record,loading,error,limiterender}=useAppSelector(state=>state.ProductSlice)
  const cartitems=useAppSelector(state=>state.cartslices.item)
  const productfullinfo=record.map((ele)=>(
    {...ele,quantity:cartitems[ele.id] ||0
      

    }))
    
  const dispatch=useAppDispatch()
  
  const params=useParams()
  useEffect(()=>{

    const promise=dispatch(getproduct(params.prefix as string))

    return()=>{
      dispatch(productleanup())
      promise.abort()
    }
  },[dispatch,params])
  
  const renderproducts= productfullinfo.length > 0 ? (record.map((el)=>(
    <Col xs={6} md={3}
    key={el.id}
    className="d-flex justfiy-content-center- mb-5 mt-2"
    >
    <Carditems {...el}/>
    </Col>
))):"There is no product"



const reachlimit= productfullinfo.length <10? true:false
const prevhandler=limiterender===1 ? true:false



  return (
  <Loadingpage status={loading} error={error} type="ProductSkeleton">


    <div>
      <Container style={{marginTop:"3rem"}}>

        <Row><div style={{display:"flex",justifyContent:"flex-end"}}>

        </div>

          </Row>
        <Row>
        
            {renderproducts}


        <div className="buttoms d-flex align-itmes-center justify-content-center p-1">

          <div className="firstbuttom" style={{marginRight:"10px"}}>

            <Button onClick={()=>{
              dispatch(incraeselimit())
            dispatch(getproduct(params.prefix as string))
            }}

            disabled ={reachlimit}
            variant="warning"


            
            
            ><span style={{color:"white"}}>next</span></Button>
          </div>

          <div className={limitehandler}
           
           >
          <p
          >{limiterender}</p>

          </div>
<div className="seconbottom">

            <Button onClick={()=>{
              dispatch(dicreaselimit())
            dispatch(getproduct(params.prefix as string))
            }}
            

            disabled ={prevhandler}
            variant="warning"
          
            
            
            ><span style={{color:"white"}}>prev</span></Button>
        </div>
</div>


        </Row>


      </Container>
    </div>
  </Loadingpage>


  



  )
}

export default Product
