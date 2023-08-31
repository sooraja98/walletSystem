import express from 'express'
import { UserLogin, userRegister } from '../controllers/authController.js'

const router=express.Router()

router.post('/userRegister',userRegister)
router.post('/UserLogin',UserLogin)


export default router
