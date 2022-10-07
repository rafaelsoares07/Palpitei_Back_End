import { Request,Response } from "express";

//Services
import * as adminService from "../services/adminService"

//Types
import * as userTypes from "../types/userTypes"
import * as permissionTypes from "../types/permissionTypes"
import * as rolesTypes from "../types/rolesTypes"



export async function createPermission(req:Request, res:Response) {
    
    const newPermission: permissionTypes.IPermissionCreate = req.body
    console.log("entrou no controller")

    const result = await adminService.createPermission(newPermission)

    

    res.status(201).send(result)
}

export async function createRoles(req:Request, res:Response) {
    
   
    const newRoles: rolesTypes.IRoleCreate = req.body

    const result = await adminService.createRoles(newRoles)

    res.status(201).send(result)
}

export async function insertResultMatche(req:Request, res:Response) {
    
    const matcheId = Number(req.params.id)
    const dataResult= req.body

    const result = await adminService.insertResultMatche(dataResult,matcheId)

    res.status(201).send(result)
}

