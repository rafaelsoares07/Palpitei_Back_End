import  Router  from "express";
const router = Router()

import authRouter from "./authRouter"
import matchesRouter from "./matchesRouter"
import betsRouter from "./betsRouter"
import adminRouter from "./adminRouter"

router.use(authRouter)
router.use(matchesRouter)
router.use(betsRouter)
router.use(adminRouter)

export default router