import  Router  from "express";
const router = Router()

import authRouter from "./authRouter"
import matchesRouter from "./matchesRouter"
import betsRouter from "./betsRouter"
router.use(authRouter)
router.use(matchesRouter)
router.use(betsRouter)

export default router