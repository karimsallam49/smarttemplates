import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "..";

const actaddtocart:any=createAsyncThunk("act/addtocart", async (id:number,thunkApi)=>{

    const {rejectWithValue,getState}=thunkApi
    const {authslice}=getState() as RootState
    const userid=authslice.users?.id
    try {
        if(!userid){

            alert("you have to login first")
        }else{

            
        const response= await axios.post("https://smart-api-six.vercel.app/cart/",{userid:userid,productid:id})
        return response.data
        }
    } catch (error) {
        if(axios.isAxiosError(error)){
            return rejectWithValue(error.response?.data.message||error.message)

        }else{

            return rejectWithValue("unexpected error")
        }
        
    }
})

export default actaddtocart