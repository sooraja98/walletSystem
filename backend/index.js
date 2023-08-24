import express from 'express'
import  cookieParser from 'cookie-parser'
import dotenv from 'dotenv';
import databaseConnect  from './utilFiles/db.js'
import authRoute from'./routers/authRoute.js'
import userRoute from'./routers/userRoute.js'
import adminRoute from'./routers/adminRoute.js'



const  app=express()
dotenv.config();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.use('/',userRoute)
app.use('/auth',authRoute)
app.use('/admin',adminRoute)

app.use((err,req,res,next)=>{
    const errorStatus=err.status||500
    const errorMessage=err.message||"something went wrong"
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack
    })
})


app.listen(process.env.PORT,()=>{
    console.log('server is started',)
})