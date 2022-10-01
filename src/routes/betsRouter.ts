import  Router  from "express";
const router = Router()

import tokenValidation from "../middlewares/validateToken";

import * as betsController from "../controllers/betsController"

router.post(
"/bets",
tokenValidation,
betsController.createBet
)


export default router