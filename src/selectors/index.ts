import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../Store";
const cartquantityselctor=createSelector((state:RootState)=>state.cartslices.item,(items)=>{

  

    const totalquatity=Object.values(items).length -1
    
      
      return totalquatity
})

export default cartquantityselctor