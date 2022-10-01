import * as betsRepository from "../repository/betsRepository"

import * as betsTypes from "../types/betsTypes"

export async function createBet(dataBet:betsTypes.IBetCreate) {
    

    const {matcheId,winningTime} = dataBet

    const matcheExist = await betsRepository.findMatcheById(matcheId)
    if(!matcheExist){
        throw {type:"bad_request", message:"id da partida é inválido"}
    }

    const timeExist = await betsRepository.findCountryById(winningTime)
    if(!timeExist){
        throw {type:"bad_request", message:"id do time ganhador é inválido"}
    }

    if(matcheExist.timeOneId!=timeExist.id && matcheExist.timeTwoId!=timeExist.id){
        throw {type:"bad_request", message:"id do time ganhador não condiz com os times que disputaram a partida"}
    }
    console.log(matcheExist)
    console.log(timeExist)
    const result = await betsRepository.create(dataBet)

    return result 
}