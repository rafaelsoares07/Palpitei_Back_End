import { truncate } from "fs";
import prisma from "../database/database";

export async function getAll() {

    const result = await prisma.groups.findMany({
        select:{
            name:true,
            matches:{
                select:{
                    id:true,
                    rounds:{
                        select:{
                            name:true
                        }
                    },
                    day:true,
                    Time1:true,
                    gameScoreTimeOne:true,
                    Time2:true,
                    gameScoreTimeTwo:true
                }
            }
        }
    })

    return result
}

