import { useEffect } from "react"
import actgetproductbyid from "../../Store/Act/aCtgeproductbyid"
import { useAppSelector,useAppDispatch } from "../../Store/hooks" 
import cartquantityselctor from "../../selectors"
import { Container,Row,Col, Button } from "react-bootstrap"
import Loadingpage from "../LoadingPage/Loadingpage"
import style from "./cartpagetyle.module.css"
import Rendercart from "./Rendercart"
import Totalprice from "../../components/totalprice"
import Loattehandler from "../../lottie/Lottiehandler"
const{ container,cartdetails,itemplace,inputstyle,sale,details,btn}=style

const Cartpage = () => {

    const {productinfo,loading,error}=useAppSelector(state=>state.cartslices)
    const cartitems=useAppSelector(cartquantityselctor)

    const dispatch=useAppDispatch()
    useEffect(()=>{
        dispatch(actgetproductbyid("productfullinfo"))
    },[dispatch])

    const Renderitems=productinfo.length > 0 ?productinfo.map((record)=>(
        

            <Rendercart {...record}/>
      
    )):<Loattehandler types="cartempty"/>
  return (
    <Loadingpage error={error} type="CartSkeleton" status={loading}>

    <div className={container}>

        
        <h3 style={{alignSelf:"end", marginBottom:"4rem"}}>سله المنتجات</h3>
            <Container>

        <Row>
        <Col sm={8} className="p-0">
        <div className={itemplace}>

                <Container>
            
               {Renderitems}
             
                </Container>
        </div>
        </Col>
        <Col sm={4} className="p-0">
        
            <div className={cartdetails}>
                <h4 style={{color:"white",marginBottom:"20px"}}>ملخص الطلب</h4>

                <div className={details}>
                    <p> السعر
                    <Totalprice/>
                    </p>
                    <p> {cartitems}</p>
                </div>
                <div className={sale}>
                    <p>لديك كود خصم ؟</p>
                    <input type="text"placeholder="ادخل الكود"  className={inputstyle}/>
                    <Button className={btn}> تفعيل </Button>
                </div>

                <div className={details}>
                    <p><Totalprice/></p>
                    <p>الاجمالى</p>
                </div>
                
                <Button className={btn}> دفع </Button>



            </div>
        </Col>
      </Row>
           
            </Container>
        </div>

        
      
    
    </Loadingpage>
  )
}

export default Cartpage
