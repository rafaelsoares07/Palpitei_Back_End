import prisma from "../database/database"


import * as userTypes from "../types/userTypes"


export async function createUser(user:userTypes.IUserCreate){
    
    const result = await prisma.users.create({data:user})

    return result
}

export async function findUserByEmail(email:string){
    
    const result = await prisma.users.findUnique({where:{email:email}})

    return result
}