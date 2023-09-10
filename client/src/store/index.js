import { configureStore} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { userApi, useRegisterUserMutation,useUserLoginMutation,useUserDetailsFetchQuery,useUserSendingCoinByEmailMutation,useUserSendingCoinByIdMutation,useUserBuyCoinsMutation} from "./apis/userApi.js";
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

export {useRegisterUserMutation,useUserLoginMutation,useUserDetailsFetchQuery,useUserSendingCoinByEmailMutation,useUserSendingCoinByIdMutation,useUserBuyCoinsMutation}
export default store
