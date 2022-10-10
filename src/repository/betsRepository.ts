
import prisma from "../database/database"


export async function create(dataBet:any, betId:number) {
    const result = await prisma.bets.create({data:dataBet})
    
    return result
}

export async function createOrUpdate(dataBet:any, betId:number) {

    try{
        const result = await prisma.bets.update({
            where:{
                id:betId
            },
            data:{
                gameScoreTimeOne:dataBet.gameScoreTimeOne,
                gameScoreTimeTwo:dataBet.gameScoreTimeTwo,
                winningTime:dataBet.winningTime
            }
        })
        
        return result
    }
    catch(err){
        console.log(err)
    }
    
}
export async function findMatcheById(matcheId:number) {
   
    const result = await prisma.matches.findUnique({where:{id:matcheId}})
    return result
}

export async function findCountryById(countryId:number) {
    console.log("chegei aqui ")
    const result = await prisma.countries.findUnique({where:{id:countryId}})
    return result
}

export async function findBetByUserIdAndMatcheId(matcheId:number,userId:number) {
    
    const result = await prisma.bets.findFirst({
        where:{
            userId:userId,
            matcheId:matcheId
        }
    })
    return result
}

