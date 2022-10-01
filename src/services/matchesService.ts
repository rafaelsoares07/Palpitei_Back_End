import * as matchesRepository from "../repository/matchesRepository"

export async function getMatchesByRound(){

    const result = await matchesRepository.getAll()

    const objReturn = result.map((el)=>{
        const aux = {
            groupName:el.name,
            roundOne:[
                el.matches[0],
                el.matches[1]
            ],
            roundTwo:[
                el.matches[2],
                el.matches[3]
            ],
            roundTree:[
                el.matches[4],
                el.matches[5]
            ]
        }
        return aux
    })
    
    return objReturn
}

export async function getMatchesByGroupId(groupId:number){

    const result = await matchesRepository.getMatchesByGroupId(groupId)

    const objReturn = {
        groupName:result[0].name,
        roundOne:[
            result[0].matches[0],
            result[0].matches[1]
        ],
        roundTwo:[
            result[0].matches[2],
            result[0].matches[3]
        ],
        roundTree:[
            result[0].matches[4],
            result[0].matches[5]
        ]
    }
    return objReturn
}