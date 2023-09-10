import express from 'express'
import { UserBuyCoins, UserCoinByVerify, UserSendingCoinByEmail, UserSendingCoinById, userFetchDetails } from '../controllers/userController.js'
import UserauthenticateToken from '../utilFiles/jwtTokenCheck.js'

const router=express.Router()

router.get('/UserDetails',UserauthenticateToken,userFetchDetails)
router.post('/UserSendingCoinByEmail',UserauthenticateToken,UserSendingCoinByEmail)
router.post('/UserSendingCoinById',UserauthenticateToken,UserSendingCoinById)
router.post('/UserBuyCoins',UserauthenticateToken,UserBuyCoins)
router.post('/UserCoinByVerify',UserCoinByVerify)

export default router

