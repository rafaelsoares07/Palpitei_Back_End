import  Router  from "express";
const router = Router()

//Controllers
import * as matchesController from "../controllers/matchesController"

//Middlewares
import tokenValidation from "../middlewares/validateToken";

router.get(
    "/matches/groupBy=groups",
    tokenValidation,
    matchesController.getMatchesByRound
)



export default router