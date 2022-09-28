import Router from "express";
const router = Router()

import * as authController from "../controllers/authController"

router.get("/signup",authController.signup)

export default router