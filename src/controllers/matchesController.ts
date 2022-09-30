import { Request, Response } from "express";

import * as matchesService from "../services/matchesService"


export async function getMatchesByRound(req:Request, res:Response) {
    
    const result = await matchesService.getMatchesByRound()

    res.status(200).send(result)
}