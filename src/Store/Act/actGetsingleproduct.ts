import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Tproducts } from "../../shared/Tproducts";

type Tdatatype="shehadat"|"tahnea"|"monasbat"


const getSingleproduct:any=createAsyncThunk("getproduct/act",async(datatype:Tdatatype,tunkAPI)=>{

    const {rejectWithValue}=tunkAPI


    try {

        if(datatype==="shehadat"){

            const response= await axios.get<Tproducts>(`http://localhost:3000/products?cat_prefix=shehadat`,{params:{
                _page: 1,
                _limit: 6
            }})
            return {data:response.data, datatype:"shehadat"}
        }
        if(datatype==="monasbat"){

            const response= await axios.get<Tproducts>(`http://localhost:3000/products?cat_prefix=monasbat`,{params:{
                _page: 1,
                _limit: 6
            }})
            return {data:response.data, datatype:"monasbat"}
        }
        if(datatype==="tahnea"){

            const response= await axios.get<Tproducts>(`http://localhost:3000/products?cat_prefix=tahnea`,{params:{
                _page: 1,
                _limit: 6
            }})
            return {data:response.data, datatype:"tahnea"}
        }
      
    } catch (error) {
        if(axios.isAxiosError(error)){

            rejectWithValue(error.response?.data.message||error.message)

        }else{
            return rejectWithValue("An un expected error")
        }
    }

})

export default getSingleproduct