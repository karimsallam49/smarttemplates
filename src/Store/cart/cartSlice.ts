import { createSlice } from "@reduxjs/toolkit";
import actgetproductbyid from "../Act/aCtgeproductbyid";
import actaddtocart from "../Act/actAddtocart";
import { Tloading } from "../../shared/Tloading";

export type Tcarts={

    item:{[key:number]:number};
    productinfo:{id:number; 
        title:string;
         img:string;
          cat_prefix:string;
          price:number
          ,quantitey:number
          ,max:number
        
        }[];
    loading:Tloading;
    error:string|null;
    
}

const initialState:Tcarts={

    item:{},
    productinfo:[],
    loading:"idle",
    error:null

}

const cartslices=createSlice({

    name:"cartslices",
    initialState,
    reducers:{
       

        

    
        removeitemfromcart:(state,action)=>{

                delete state.item[action.payload];
                state.productinfo=state.productinfo.filter((el)=>el.id!==action.payload)
                console.log(action.payload)

        
        },

        cleanproductinfo:(state)=>{

            state.productinfo=[];

        }
        ,clrearitems:(state)=>{

             state.item={0:0};

        }
    },
    extraReducers:(bulder)=>{
        bulder.addCase(actgetproductbyid.pending,(state)=>{

            state.loading ="pending";
            state.error=null;

        })
        bulder.addCase(actgetproductbyid.fulfilled,(state,action)=>{

            state.loading ="successd";

            if(action.payload.datatype==="productfullinfo"){
                state.productinfo=action.payload.data 
            }else if(action.payload.datatype==="productid"){

                const productid=action.payload.data as number[]

                productid.map((el)=>{


                    if(state.item[el]){
                        state.item[el]++ 

                    }else{
                        state.item[el]=1;
        
                    }
                })



            }
            

        })
        bulder.addCase(actgetproductbyid.rejected,(state,action)=>{

            state.loading ="failed";
            if(action.payload && typeof action.payload=="string"){

                state.error=action.payload;
            }

        })

        // add to cart
        bulder.addCase(actaddtocart.pending,(state)=>{

            state.loading ="pending";
            state.error=null;

        })
        bulder.addCase(actaddtocart.fulfilled,(state,action)=>{

            state.loading ="successd";
            console.log(action.payload.productid)
            const id=action.payload.productid
            if(state.item[id]){
            alert ("انت تملك هذا المنتج بالفعل")
            }else{
                state.item[id]=1;

            }
           

        })
        bulder.addCase(actaddtocart.rejected,(state,action)=>{

            state.loading ="failed";
            if(action.payload && typeof action.payload=="string"){

                state.error=action.payload;
            }

        })


    }
}
)

export default cartslices.reducer;
export const {removeitemfromcart,cleanproductinfo,clrearitems}=cartslices.actions