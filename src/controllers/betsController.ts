import {Request, Response} from "express"

import * as betsService from "../services/betsService"

export async function createBet(req:Request, res:Response) {
    
    const id = Number(res.locals.token)
    const dataBet = req.body
    dataBet.userId=Number(id)
    
    const result = await betsService.createBet(dataBet,id)

    res.status(201).send(result)
}

export async function getBetByUserIdAndMatcheId(req:Request, res:Response) {
    
    const userId = Number(res.locals.token)
    const matcheId = Number(req.params.matcheId)
    const result = await betsService.getBetsByUserIdAndMatcheId(userId, matcheId)

    res.status(201).send(result)
}

