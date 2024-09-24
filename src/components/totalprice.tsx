import {  useAppSelector } from "../Store/hooks"

const totalprice = () => {
  const {productinfo}=useAppSelector(state=>state.cartslices)





  const subtotal=productinfo.reduce((accumulator,el)=>{
  
      const price=el.price;
  
  
        return accumulator + (price*1) 
      
      
  
    },0)






  return (
    <div>
    {subtotal}     
    </div>
  )
}

export default totalprice
