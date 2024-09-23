import ProductSkeleton from "../../scelton/productscelton/Productscelton"
import CartSkeleton from "../../scelton/cartscelton/Cartscelton"
import { Tloading } from "../../shared/Tloading"
import Loattehandler from "../../lottie/Lottiehandler";

type loadindprops={
    status:Tloading;
    error:null|string,
    children?:React.ReactNode
    type :keyof typeof sceltontyps;
}

const sceltontyps={
    ProductSkeleton,
    CartSkeleton
}

const Loadingpage = ({status,children,type="CartSkeleton"}:loadindprops) => {
    const Component =sceltontyps[type]

    if(status==="pending"){
        return <Component/>}
        if(status=="failed"){
          return <Loattehandler types="error"/>
        }
  return (
    <div>
      {children}
    </div>
  )
}

export default Loadingpage
