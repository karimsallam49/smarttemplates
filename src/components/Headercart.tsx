import styles from'./Headercartstyle.module.css'
import { useAppSelector } from '../Store/hooks';
import cartquantityselctor from '../../src/selectors/index';
import { useState,useEffect } from 'react';
import cartitemicone from "../../src/assets/Icones/carticone.png"


const {headercartcontainer,headercartqantitiy,pumpcarticone}=styles;
const Headercart = () => {
  const cartitems=useAppSelector(cartquantityselctor)
  const [isanimate,setisanimate]=useState(false)
  const quatitystyle= `${cartitems>0?headercartqantitiy:""} ${isanimate ?pumpcarticone :""}`

  useEffect(()=>{

   setisanimate(true);


   const deponce= setTimeout(() => {
      setisanimate(false)
    },300);

    return ()=> clearTimeout(deponce);
  },[cartitems])


  return (
    <div>
        <div className={headercartcontainer}>
            <img src={cartitemicone} alt="" />
            <div className={quatitystyle}>
              {cartitems > 0?cartitems :""}
            </div>
            

        </div>
      
    </div>
  )

}
export default Headercart;
