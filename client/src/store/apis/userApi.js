import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const userApi=createApi({
    reducerPath:"user",
    baseQuery:fetchBaseQuery({
        baseUrl:'https://localhost:4000'
    }),
    endpoints(builder){
        return{
            registerUser:builder.mutation({
                query:(FormData)=>{
                    return{
                        url:'/userRegister',
                        body:FormData,
                        method:'POST',
                    }
                }
            }),

        }
    }
}) 

export const{useloginUserQuery,useregisterUserMutation}= userApi
export {userApi}