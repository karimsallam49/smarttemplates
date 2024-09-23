import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type Tlogindata={

    email:string;
    password:string;
}
type Trespone={
    accsessToken:string;
    users:{

        id:number;
        firstname:string;
        lastname:string;
        email:string
    }
}

const actAuthLogin:any=createAsyncThunk("actAuthLogin/act",async(formdata:Tlogindata,thunkapi)=>{

    const {rejectWithValue}=thunkapi;

    try {
        const respone= await axios.post<Trespone>("http://localhost:3000/login",formdata)
        console.log(respone)
            return respone.data
        
    } catch (error) {
        if (axios.isAxiosError(error)){

            return rejectWithValue(error.response?.data ||error.response?.data.message||error.message)

        }else{

            return "un expected error"
        }
    }
})


export default actAuthLogin