import {Request, Response} from "express"

import * as betsService from "../services/betsService"

export async function createBet(req:Request, res:Response) {
    
    const id = res.locals.token
    const dataBet = req.body
    dataBet.userId=Number(id)
    
    const result = await betsService.createBet(dataBet)

    res.status(201).send(result)
}