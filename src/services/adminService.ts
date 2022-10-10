
import * as permissionTypes from "../types/permissionTypes"
import * as rolesTypes from "../types/rolesTypes"

import * as adminRepository from "../repository/adminRepository"

export async function createPermission(permission: permissionTypes.IPermissionCreate) {
    
    const permissionNameExists = await adminRepository.findPermissionByName(permission.name)
    if (permissionNameExists) {
        throw { type: "bad_request", message: "Já existe uma permissão desse tipo" }
    }
    const permissionDescriptionExists = await adminRepository.findPermissionByDescription(permission.description)
    if (permissionDescriptionExists) {
        throw { type: "bad_request", message: "Já existe uma permissão com essa descrição" }
    }

    const result = await adminRepository.createPermission(permission)

    return result
}

export async function createRoles(role: rolesTypes.IRoleCreate) {


    const roleNameExists = await adminRepository.findRoleByName(role.name)
    if (roleNameExists) {

        throw { type: "bad_request", message: "Já existe uma role desse tipo" }
    }
    const roleDescriptionExists = await adminRepository.findRoleByDescription(role.description)
    if (roleDescriptionExists) {
        throw { type: "bad_request", message: "Já existe uma role com essa descrição" }
    }

    const result = await adminRepository.createRoles(role)

    return result
}

export async function userPermissions(userId: number) {

    const userHavePermissions = await adminRepository.userPermissions(userId)
    if (!userHavePermissions) {
        throw { type: "bad_request", message: "Você não tem nenhuma permissão especial" }
    }
    const idsPermissions = userHavePermissions.map(el => el.permissionsId)

    const allPermissions = await adminRepository.getPermissionsByIds(idsPermissions)

    const namesPermissions = allPermissions.map(el => el.name)


    return namesPermissions
}

export async function insertResultMatche(dataResult: any, matcheId: number) {

    const matcheExists = await adminRepository.getMatcheById(matcheId)
    if (!matcheExists) {
        throw { type: "bad_request", message: "Não existe paritda com esse id" }
    }
    if (dataResult.winningTime!=undefined && dataResult.winningTime != matcheExists.timeOneId && dataResult.winningTime != matcheExists.timeTwoId) {
        throw { type: "bad_request", message: "Id do time ganhador não corresponde as times que jogaram" }
    }

    if(dataResult.winningTime==undefined){
        dataResult.winningTime = null
    }
    const result = await adminRepository.updateResultMatche(dataResult, matcheId)
    await adminRepository.updateBetsCorrect(dataResult.winningTime, matcheExists.id,dataResult.gameScoreTimeOne,dataResult.gameScoreTimeTwo)

   await adminRepository.updateBetsIncorrect(matcheExists.id,dataResult.winningTime,dataResult.gameScoreTimeOne, dataResult.gameScoreTimeTwo)
    

    return result

}

