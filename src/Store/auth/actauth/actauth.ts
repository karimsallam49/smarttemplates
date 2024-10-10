import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type Tformdata={

    firstname:string
    lastname:string
    email:string
    password:string
    phonenumber:number;
}

const actauth:any= createAsyncThunk("act/ActAuth",async (formdata:Tformdata,thunkapi)=>{

    const {rejectWithValue}=thunkapi;

    try {
        const res= await axios.post("https://smart-api-six.vercel.app/register",formdata)
        return res.data
    } catch (error) {
        if(axios.isAxiosError(error)){
            return rejectWithValue(error.response?.data.message||error.message)

        }else{


            return rejectWithValue("unexpected error")
        }    }
})

export default actauth;