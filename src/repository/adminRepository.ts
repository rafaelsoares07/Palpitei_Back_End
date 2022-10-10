import prisma from "../database/database";

import * as permissionTypes from "../types/permissionTypes"
import * as rolesTypes from "../types/rolesTypes"

//CRIAÇÃO DE PERMISSÕES
export async function userPermissions(userId:number) {
    
    const result = await prisma.users_permissions1.findMany({where:{userId:userId}})
    
    return result
}
export async function getPermissionsByIds(array_Ids:number[]) {
    
    const result = await prisma.permissions.findMany({where:{id:{in:array_Ids}}})
    
    return result
}



export async function updateResultMatche(dataResult:any, matcheId:number) {
    
    const result = await prisma.matches.update({
        where:{
            id:matcheId
        },
        data:{
            gameScoreTimeOne:dataResult.gameScoreTimeOne,
            gameScoreTimeTwo:dataResult.gameScoreTimeTwo,
            winningTime:dataResult.winningTime
        }
    })
    
    return result
}
export async function getMatcheById(matcheId:number) {
    const result = await prisma.matches.findFirst({where:{id:matcheId}})

    return result
}
export async function updateBetsCorrect(winningTime:number, matcheId:number,scoreOne:number, scoreTwo:number) {
    
    const result = await prisma.bets.updateMany({
        where:{
            matcheId:matcheId,
            winningTime:winningTime,
            gameScoreTimeOne:scoreOne,
            gameScoreTimeTwo:scoreTwo
        },
        data:{
            correct:true
        }

    })
    
    return result
}
export async function updateBetsIncorrect(matcheId:number,winner:number, scoreOne:number, scoreTwo:number) {
    
    const result = await prisma.bets.updateMany({
        where:{
            matcheId:matcheId,
            OR:[{gameScoreTimeOne:{not:scoreOne}},
                {gameScoreTimeTwo:{not:scoreTwo}},
                {winningTime:{not:winner}}
            ]
           
        },
        data:{
            correct:false
        }

    })
    
    return result
}


//CRIAÇÃO DE NOVAS PERMISSIONS
export async function createPermission(permission:permissionTypes.IPermissionCreate) {
    
    try{
        const result = await prisma.permissions.create({data:permission})
   
        return result    
    }
    catch(err){
        console.log(err)
    }
}
export async function findPermissionByName(permissionName:string) {

    const result = await prisma.permissions.findFirst({where:{name:permissionName}})
    
    return result
}
export async function findPermissionByDescription(permissionDescription:string) {

    const result = await prisma.permissions.findFirst({where:{description:permissionDescription}})
    
    return result
}

//CRIAÇÃO DE NOVAS ROLES
export async function createRoles(role:rolesTypes.IRoleCreate) {
    
    try{
        const result = await prisma.roles.create({data:role})
        return result
    }
    catch(err){
        console.log(err)
    }
    
}
export async function findRoleByName(roleName:string) {
    
    const result = await prisma.roles.findFirst({where:{name:roleName}})
    
    return result
}
export async function findRoleByDescription(roleDescription:string) {
    
    const result = await prisma.roles.findFirst({where:{description:roleDescription}})
    
    return result
}



