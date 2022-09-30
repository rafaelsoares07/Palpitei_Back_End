import { Request,Response } from "express";

//Services
import * as authServices from "../services/authService"

//Types
import * as userTypes from "../types/userTypes"


export async function signup(req:Request, res:Response){

    const newUser:userTypes.IUserCreate = req.body

    const result = await authServices.signup(newUser)

    res.status(200).send(result)
}

export async function signin(req:Request, res:Response){

    const userLogin:userTypes.IUserLogin = req.body

    const result = await authServices.signin(userLogin)

    res.status(200).send(result)
}
