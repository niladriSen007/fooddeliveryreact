import express from 'express'
import { createUser } from '../controllers/userController'
const router = express.Router()

router.post("/login",createUser)
/* router.get("/",getUserDetails) */

export default router