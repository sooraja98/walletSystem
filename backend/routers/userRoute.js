import express from 'express'
import { UserSendingCoinByEmail, UserSendingCoinById, userFetchDetails } from '../controllers/userController.js'
import UserauthenticateToken from '../utilFiles/jwtTokenCheck.js'

const router=express.Router()

router.get('/UserDetails',UserauthenticateToken,userFetchDetails)
router.post('/UserSendingCoinByEmail',UserauthenticateToken,UserSendingCoinByEmail)
router.post('/UserSendingCoinById',UserauthenticateToken,UserSendingCoinById)

export default router

