
import * as permissionTypes from "../types/permissionTypes"
import * as rolesTypes from "../types/rolesTypes"

import * as adminRepository from "../repository/adminRepository"

export async function createPermission(permission:permissionTypes.IPermissionCreate){

    const permissionExists = await adminRepository.findPermissionByName(permission.name)
    if(permissionExists){
        throw{type:"bad_request", message:"Já existe uma permissão desse tipo"}
    } 

    const result = await adminRepository.createPermission(permission)

    return result
}

export async function createRoles(role:rolesTypes.IRoleCreate){

    console.log("entrou no service")
    const roleExists = await adminRepository.findRoleByName(role.name)
    console.log(roleExists)
    if(roleExists){
        console.log("entrou no if")
        throw{type:"bad_request", message:"Já existe uma role desse tipo"}
    } 

    const result = await adminRepository.createRoles(role)
    console.log("voltou do repo")

    return result
}

export async function userPermissions(userId:number) {
    
    const userHavePermissions = await adminRepository.userPermissions(userId)
    if(!userHavePermissions){
        throw {type:"bad_request",message:"Você não tem nenhuma permissão especial"}
    }
    const idsPermissions = userHavePermissions.map(el=>el.permissionsId)
    
    const allPermissions = await adminRepository.getPermissionsByIds(idsPermissions)

    const namesPermissions = allPermissions.map(el=>el.name)

    console.log(namesPermissions)
    return namesPermissions
}


export async function insertResultMatche(dataResult:any, matcheId:number) {

    const matcheExists = await adminRepository.getMatcheById(matcheId)
    if(!matcheExists){
        throw {type:"bad_request", message:"Não existe paritda com esse id"}
    }
    if(dataResult.winningTime!=matcheExists.timeOneId && dataResult.winningTime!=matcheExists.timeTwoId){
        throw {type:"bad_request", message:"Id do time ganhador não corresponde as times que jogaram"}
    }
    const result = await adminRepository.updateResultMatche(dataResult,matcheId)

    await adminRepository.updateBetsCorrect(dataResult.winningTime,matcheExists.id)
    await adminRepository.updateBetsIncorrect(dataResult.winningTime,matcheExists.id)

    return result
    
}

