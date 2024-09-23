import { Col,Row } from "react-bootstrap"
import { Tproducts } from "../../shared/Tproducts"
import removeicone from "../../assets/Icones/deleticone.png"
import { useAppDispatch } from "../../Store/hooks"
import actdeletdomcart from "../../Store/Act/actdeletefromcart"
import { removeitemfromcart } from "../../Store/cart/cartSlice"

type renderprops=Tproducts
const Rendercart = ({img,price,title,id}:renderprops) => {
    const dispatch=useAppDispatch()
  return (
    <div>
    
<Row>

<Col xs={15} className="d-flex align-items-center justify-content-around p-1">
<div><img style={{width:"100px"}} src={img} alt="" /></div>
<div style={{color:"gray"}}>{title}</div>
<div>{price} ر.س</div>
<div><img style={{width:"20px",cursor:"pointer"}} onClick={()=>{
  dispatch(actdeletdomcart(id))
  dispatch(removeitemfromcart(id))

}} src={removeicone} alt="" /></div>
</Col>

</Row>


    </div>
  )
}

export default Rendercart
