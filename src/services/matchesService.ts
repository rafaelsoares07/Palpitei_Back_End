import * as matchesRepository from "../repository/matchesRepository"

export async function getMatchesByRound(){

    const result = await matchesRepository.getAll()
    
    return result
}

export async function getMatchesByGroupId(groupId:number){

    const result = await matchesRepository.getMatchesByGroupId(groupId)
    
    return result
}