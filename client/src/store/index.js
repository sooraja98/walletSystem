import { configureStore} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { userApi } from "./apis/userApi";
const store=configureStore({
    reducer:{
         [userApi.reducerPath]:userApi.reducer   
    },
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware()
        .concat(userApi.middleware)
    }
})

setupListeners(store.dispatch)

export {useloginUserQuery,useregisterUserMutation} from './apis/userApi'
export default store
