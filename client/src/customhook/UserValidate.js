import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
const UserTokenCheck=()=>{
    const navigate= useNavigate()
    const [userToken,setUserToken]=useState('');
  useEffect(()=>{
    const token=localStorage.getItem('token')
    if(!token){
        navigate('/')
    }
    else{
        setUserToken(token)
    }
  },[])
  return userToken
}

export default UserTokenCheck