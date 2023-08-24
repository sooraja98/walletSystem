import express from 'express'
import { regiser } from '../controllers/authController.js'

const router=express.Router()

router.post('/register',regiser)


export default router
