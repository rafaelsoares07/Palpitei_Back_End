import { Request, Response } from "express";

import * as matchesService from "../services/matchesService"


export async function getMatchesByRound(req:Request, res:Response) {
    
    const result = await matchesService.getMatchesByRound()

    res.status(200).send(result)
}

export async function getMatchesByGroupId(req:Request, res:Response) {

    const groupId = req.params.id
    const result = await matchesService.getMatchesByGroupId(Number(groupId))

    res.status(200).send(result)
}

export async function getMatchesByDay(req:Request, res:Response) {

    const {day} = req.params
    const dayFormat:string = (day.split("-").join("/"))

    const result = await matchesService.getMatchesByDay(dayFormat)

    res.status(200).send(result)
}