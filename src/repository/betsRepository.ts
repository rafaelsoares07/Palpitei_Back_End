import prisma from "../database/database"


export async function create(dataBet:any) {

    const result = await prisma.bets.create({data:dataBet})
    
    return result
}
