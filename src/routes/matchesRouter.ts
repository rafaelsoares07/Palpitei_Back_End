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

router.get(
    "/matches/groupBy=groups/:id",
    tokenValidation,
    matchesController.getMatchesByGroupId
)

router.get(
    "/matches/currentDay/:day",
    tokenValidation,
    matchesController.getMatchesByDay
)


export default router