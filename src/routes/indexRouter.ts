import  Router  from "express";
const router = Router()

import authRouter from "./authRouter"
import matchesRouter from "./matchesRouter"
router.use(authRouter)
router.use(matchesRouter)

export default router