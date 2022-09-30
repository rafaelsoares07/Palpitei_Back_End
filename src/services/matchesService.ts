import * as matchesRepository from "../repository/matchesRepository"

export async function getMatchesByRound(){

    const result = await matchesRepository.getAll()
    
    return result
}