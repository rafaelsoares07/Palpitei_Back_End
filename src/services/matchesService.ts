import * as matchesRepository from "../repository/matchesRepository"

export async function getMatchesByRound(){

    const result = await matchesRepository.getAll()

    const objReturn = result.map((el)=>{

        const round1Filter1 = el.matches.filter((item)=>item.roundId===1)
        const round1Filter2 = el.matches.filter((item)=>item.roundId===2)
        const round1Filter3 = el.matches.filter((item)=>item.roundId===3)

        const aux = {
            groupName:el.name,
            roundOne:round1Filter1,
            roundTwo:round1Filter2,
            roundTree:round1Filter3
        }
        return aux
    })

    
    return objReturn
}

export async function getMatchesByGroupId(groupId:number){

    const result = await matchesRepository.getMatchesByGroupId(groupId)

    
    const round1Filter1 = result[0].matches.filter((item)=>item.roundId===1)
    const round1Filter2 = result[0].matches.filter((item)=>item.roundId===2)
    const round1Filter3 = result[0].matches.filter((item)=>item.roundId===3)
    

    const objReturn = {
        groupName:result[0].name,
        roundOne:round1Filter1,
        roundTwo:round1Filter2,
        roundTree:round1Filter3
    }
    return objReturn
}


export async function getMatchesByDay(day:string){

    const result = await matchesRepository.getMatchesByDay(day)

    return result
}