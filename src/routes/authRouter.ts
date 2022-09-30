import Router from "express";
const router = Router()

//Controllers
import * as authController from "../controllers/authController"
//Shemas
import {validateSchemaMiddleware}  from "../middlewares/validateSchemaMiddleware"
import signinSchema from "../schemas/signinSchema";
import signupSchema from "../schemas/signupSchema"

router.post(
"/signup",
validateSchemaMiddleware(signupSchema),
authController.signup
)

router.post(
    "/signin",
    validateSchemaMiddleware(signinSchema),
    authController.signin
)


export default router