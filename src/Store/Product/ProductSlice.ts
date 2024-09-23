import { createSlice } from "@reduxjs/toolkit";
import { Tloading } from "../../shared/Tloading";
import { Tproducts } from "../../shared/Tproducts";
import getproduct from "../Act/actGetProduct";
type TinitialState={

    loading:Tloading,
    record:Tproducts[]
    limiterender:number
    error:null|string
}

const initialState :TinitialState={
    loading:"idle",
    record:[],
    limiterender:1,
    error:null
}
const Productslice= createSlice({

    name:"Productslice",
    initialState,
    reducers:{

        productleanup :(state)=>{
            state.record=[]
            state.limiterender=1
        },

        incraeselimit:(state)=>{
            state.limiterender=state.limiterender + 1

        },
        dicreaselimit:(state)=>{
            state.limiterender=state.limiterender - 1

        }
    },
    extraReducers:(builder)=>{

        builder.addCase(getproduct.pending,(state)=>{
            state.loading="pending",
            state.error=null
        })

        builder.addCase(getproduct.fulfilled,(state,action)=>{
            state.loading="successd",
            state.record=action.payload
            state.error=null
        })

        builder.addCase(getproduct.rejected,(state,action)=>{
            state.loading="failed",
            state.error=action.payload as string
        })

       

        
    }

})

export const {productleanup,incraeselimit,dicreaselimit} =Productslice.actions 
export default Productslice.reducer