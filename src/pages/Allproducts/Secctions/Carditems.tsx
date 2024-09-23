import { useAppDispatch } from "../../../Store/hooks";
import { useEffect,useState } from "react";
import {Button,Spinner} from "react-bootstrap"
import { Tproducts } from "../../../shared/Tproducts"
import styles from './sectionstyle.module.css';
import actaddtocart from "../../../Store/Act/actAddtocart";
const {productscontainer,productsimg,pricearea,buttomstyle,titlearea}=styles;

type Tcard=Tproducts

const Carditems = ({title,price,img,id,cat_prefix}:Tcard) => {
  const [isbtnclicked,setisbtnclicked]=useState(0)
  const [isbtndeasible,setisbtndeasible]=useState(false)
  const dispatch=useAppDispatch()
  useEffect(()=>{
    
    if(!isbtnclicked){
      return
    }
    setisbtndeasible(true)
    
    const deponce=setTimeout(() => {
      setisbtndeasible(false)
      
    }, 300);
    
    return ()=> clearTimeout(deponce)
    
  },[isbtnclicked])
  const handlecart=()=>{

    dispatch(actaddtocart(id))
    setisbtnclicked((prev)=>prev+1)
  }
  return (
    <div>
          
          <div className={productscontainer} key={id}>
        <div className={productsimg}>

            <img src={img} alt="" />
        </div>
        <div className={titlearea}>

      <h2 style={{color:"black"}}>{title}</h2>
        <h5 style={{color:"gray"}}>{cat_prefix}</h5>
        </div>
        <hr />
        <div className={pricearea}>
      <h3> ر.س{price} <del> ر.س 20</del></h3>

        </div>

      <Button variant="warning"  className={buttomstyle}
      onClick={handlecart}
      > 
      {isbtndeasible? <><Spinner animation="border" size="sm"/>loading.. </>:"اضف الى  السله"}
      
      </Button>
   
    </div>
           
    </div>
  )
}

export default Carditems
