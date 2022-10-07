import  Router  from "express";
const router = Router()

import tokenValidation from "../middlewares/validateToken";

import * as betsController from "../controllers/betsController"
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";

import createBetSchema from "../schemas/createBetSchema"

router.post(
"/bets",
validateSchemaMiddleware(createBetSchema),
tokenValidation,
betsController.createBet
)

router.get(
"/bets/:matcheId",
tokenValidation,
betsController.getBetByUserIdAndMatcheId
)


export default router