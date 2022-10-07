import { Request, Response, NextFunction } from "express"

import * as adminService from "../services/adminService"

export function havePermissionAcessMiddleware(permissions:string[]){

    return async (req:Request, res:Response, next:NextFunction)=>{
        
        const userId = Number(res.locals.token)
    
        const namesPermissions =  await adminService.userPermissions(userId)
            
        const hability = namesPermissions.some((el)=>permissions.includes(el))
        

        if(!hability){
            return res.status(422).send("Você não tem permissão")
        }

        next()

    }
   
}