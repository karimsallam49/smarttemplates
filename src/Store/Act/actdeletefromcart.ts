import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "..";

const   actdeletdomcart:any=createAsyncThunk("act/deletefromcart", async (id:number,thunkApi)=>{

    const {rejectWithValue,getState}=thunkApi
    const {authslice}=getState() as RootState
    const userid=authslice.users?.id
    try {
        

            
        const response= await axios.delete(`http://localhost:3000/cart?userid=${userid}&productid=${id}`)
        return response.data
        
    } catch (error) {
        if(axios.isAxiosError(error)){
            return rejectWithValue(error.response?.data.message||error.message)

        }else{

            return rejectWithValue("unexpected error")
        }
        
    }
})

export default actdeletdomcart