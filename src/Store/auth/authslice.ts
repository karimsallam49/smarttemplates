import { createSlice } from "@reduxjs/toolkit";
import actauth from "./actauth/actauth";
import actAuthLogin from "./actauth/actauthlogin";


type Tauthstate={

    accsessToken:string|null;
    users:{

        id:number;
        firstname:string;
        lastname:string;
        email:string
    }|null
    loading:"idle"|"pending"|"succeeded"|"failed";
    error:string|null;
}

const initialState:Tauthstate={
  accsessToken:null,
  users:null,
  loading:"idle",
  error:null
}
const Authslice=createSlice({

    name:"authslice",
    initialState,
    reducers:{

        resete:(state)=>{

            state.error=null;
            state.loading="idle";


        },
        logout:(state)=>{

            state.accsessToken=null;
            state.users=null;
            
        }
    },
    extraReducers:(builder)=>{

        builder.addCase(actauth.pending,(state)=>{

            state.loading="pending";
            state.error=null
         })
        builder.addCase(actauth.fulfilled,(state)=>{

            state.loading="succeeded"
        })
        builder.addCase(actauth.rejected,(state,action)=>{
            if(action.payload && typeof action.payload=="string"){

                state.error=action.payload;
            }
        })

        // login
        builder.addCase(actAuthLogin.pending,(state)=>{

            state.loading="pending";
            state.error=null
         })
        builder.addCase(actAuthLogin.fulfilled,(state,action)=>{

            state.loading="succeeded"
            state.accsessToken=action.payload.accessToken
            state.users=action.payload.user
        })
        builder.addCase(actAuthLogin.rejected,(state,action)=>{
            if(action.payload && typeof action.payload=="string"){

                state.error=action.payload;
                state.loading="failed"
            }
        })
    }
})

export default Authslice.reducer
export const{resete,logout}=Authslice.actions
export {actauth}