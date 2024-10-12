import { createSlice } from "@reduxjs/toolkit";
import { Tloading } from "../../shared/Tloading";
import { Tproducts } from "../../shared/Tproducts";
import getSingleproduct from "../Act/actGetsingleproduct";
type TinitialState={

    loading:Tloading,
    recordsectionone:Tproducts[]
    recordsectiontwo:Tproducts[]
    recordsectionthree:Tproducts[]
    error:null|string
}

const initialState :TinitialState={
    loading:"idle",
    recordsectionone:[],
    recordsectiontwo:[],
    recordsectionthree:[],
    error:null
}
const Singleproduct= createSlice({

    name:"Singleproduct",
    initialState,
    reducers:{

        allproductcleanup:(state)=>{
            state.recordsectionone=[]
            state.recordsectiontwo=[]
            state.recordsectionthree=[]
        }
    },
    extraReducers:(builder)=>{

        builder.addCase(getSingleproduct.pending,(state)=>{
            state.loading="pending",
            state.error=null
        })

       
        builder.addCase(getSingleproduct.fulfilled,(state,action)=>{

            if (action.payload.datatype==="shehadat"){
                
                state.loading="successd",
                state.recordsectionone=action.payload.data
            }
            if (action.payload.datatype==="monasbat"){
                
                state.loading="successd",
                state.recordsectiontwo=action.payload.data
            }
            if (action.payload.datatype==="tahnea"){
                
                state.loading="successd",
                state.recordsectionthree=action.payload.data
            }
            console.log(action.payload)
            state.error=null
        })

        builder.addCase(getSingleproduct.rejected,(state,action)=>{
            state.loading="failed",
            state.error=action.payload as string
        })
    }

})


export default Singleproduct.reducer
export const{allproductcleanup}=Singleproduct.actions