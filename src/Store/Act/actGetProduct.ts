import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Tproducts } from "../../shared/Tproducts";
import { RootState } from "..";

const getproduct:any=createAsyncThunk("getproduct/act",async(prefix,tunkAPI)=>{

    const {rejectWithValue,getState}=tunkAPI

    const{ProductSlice}=getState() as RootState

    const limitedrender=ProductSlice.limiterender
    console.log(limitedrender)

    try {
        const response= await axios.get<Tproducts>(`http://localhost:3000/products?cat_prefix=${prefix}`,{params:{
            _page: limitedrender,
            _limit: 10
        }})
        console.log(( response.data))
        return response.data
    } catch (error) {
        if(axios.isAxiosError(error)){

            rejectWithValue(error.response?.data.message||error.message)

        }else{
            return rejectWithValue("An un expected error")
        }
    }

})

export default getproduct