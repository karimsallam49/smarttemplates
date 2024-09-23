import { configureStore,combineReducers } from '@reduxjs/toolkit'
import ProductSlice from './Product/ProductSlice'
import authslice from './auth/authslice'
import { persistStore,persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
 } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import cartSlice from './cart/cartSlice'
import Singleproductslice from './Singleproduct/Singleproductslice'


const authconfigration={
  key:"authslice",
  storage,
  whitelist:["users","accsessToken"]

}
const cartconfigration={
  key:"cartslice",
  storage,
  whitelist:["item"]

}
const productconfigration={

  key:"Productslice",
  storage,
  whitelist:["limiterender"]
  
}


const rootpersistconfgritaion={

key:"root",
storage,
whitelist:["cart","Authslice","Productslice"]
}

const rootreducer= combineReducers({

  
  ProductSlice:persistReducer(productconfigration,ProductSlice),
  authslice:persistReducer(authconfigration,authslice),
  cartslices:persistReducer(cartconfigration,cartSlice),
  Singleproductslice,
  
})
const persistedreducer=persistReducer(rootpersistconfgritaion,rootreducer)
export const store = configureStore({
  reducer:  persistedreducer,
  middleware:(getDefalutmiddleware)=>getDefalutmiddleware({
    serializableCheck:{
      ignoredActions:[  FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER]
    },
  })
})



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
const persistor=persistStore(store)
export default persistor