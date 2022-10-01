import prisma from "../database/database"


export async function create(dataBet:any) {

    const result = await prisma.bets.create({data:dataBet})
    
    return result
}
export async function findMatcheById(matcheId:number) {
    const result = await prisma.matches.findUnique({where:{id:matcheId}})
    return result
}

