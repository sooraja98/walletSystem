import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
const userApi=createApi({
    reducerPath:"user",
    baseQuery:fetchBaseQuery({
        baseUrl:'http://localhost:4000'
    }),
    endpoints(builder){
        return{
            RegisterUser:builder.mutation({
                query:(formData)=>{
                    return{
                        url:'/auth/userRegister',
                        body:formData,
                        method:'POST',
                    }
                }
            }),
                UserLogin:builder.mutation({
                    query:(data)=>{
                        return{
                            url:'/auth/UserLogin',
                            body:data,
                            method:'POST'
                        }
                    }
                }), 
                UserDetailsFetch:builder.query({
                    query:({token})=>{
                        return{
                            url: `/UserDetails`,
                          headers:{
                            Authorization: `Bearer ${token}` // Add "Bearer" prefix
                          },
                          method:'GET'
                        }
                    }
                }),
                UserSendingCoinByEmail:builder.mutation({
                        query:({emailformData,token})=>{
                            console.log(emailformData)
                            return{
                                url:`/UserSendingCoinByEmail`,
                                body:emailformData,
                                headers:{
                                    Authorization: `Bearer ${token}` // Add "Bearer" prefix
                                  },
                                method:'POST'
                            }
                        }
                }),   
                 UserSendingCoinById:builder.mutation({
                    query:({idformData,token})=>{
                        console.log(idformData)
                        return{
                            url:`/UserSendingCoinById`,
                            body:idformData,
                            headers:{
                                Authorization: `Bearer ${token}` // Add "Bearer" prefix
                              },
                            method:'POST'
                        }
                    }
            }),
            UserBuyCoins:builder.mutation({
                query:({amount,coin,token})=>{
                    return{
                        url:'/UserBuyCoins',
                        body: {
                            amount: amount,
                            coin: coin
                          },
                        headers:{
                            Authorization: `Bearer ${token}` // Add "Bearer" prefix
                        },
                        method:'POST'
                    }
                }
            })
        }
    }
}) 

export const{useRegisterUserMutation,useUserLoginMutation,useUserDetailsFetchQuery,useUserSendingCoinByEmailMutation,useUserSendingCoinByIdMutation,useUserBuyCoinsMutation}= userApi
export {userApi}