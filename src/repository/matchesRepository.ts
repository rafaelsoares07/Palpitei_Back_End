import { truncate } from "fs";
import prisma from "../database/database";

export async function getAll() {

    const result = await prisma.groups.findMany({
        select:{
            name:true,
            matches:{
                select:{
                    id:true,
                    roundId:true,
                    day:true,
                    Time1:true,
                    gameScoreTimeOne:true,
                    Time2:true,
                    gameScoreTimeTwo:true,
                    Stadium:true,
                    dateAndHora:true
                }
            }
        }
    })


    return result
}

export async function getMatchesByGroupId(groupId:number) {

    const result = await prisma.groups.findMany({
        where:{
            id:groupId
        },
        select:{
            name:true,
            matches:{
                select:{
                    id:true,
                    roundId:true,
                    day:true,
                    Time1:true,
                    gameScoreTimeOne:true,
                    Time2:true,
                    gameScoreTimeTwo:true,
                    Stadium:true,
                    dateAndHora:true
                }
            }
        }
    })

    console.log(result[0].matches[0])
    return result
}

export async function getMatchesByDay(day:string) {

    const result = await prisma.matches.findMany({
        where:{
            day:day
        },
        select:{
            id:true,
            roundId:true,
            day:true,
            Time1:true,
            gameScoreTimeOne:true,
            Time2:true,
            gameScoreTimeTwo:true,
            Stadium:true,
            dateAndHora:true
        }
    })

    return result
}
