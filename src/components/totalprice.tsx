import {  useAppSelector } from "../Store/hooks"

const totalprice = () => {
  const {productinfo}=useAppSelector(state=>state.cartslices)





  const subtotal=productinfo.reduce((accumulator,el)=>{
  
      const price=el.price;
      const quantity=el.quantitey
  
  
        return accumulator + (price*1) 
      
      
  
    },0)






  return (
    <div>
    {subtotal}     
    </div>
  )
}

export default totalprice
