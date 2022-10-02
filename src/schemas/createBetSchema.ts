import joi from "joi"

const createBetSchema = joi.object({
    matcheId:joi.number().required(),
    winningTime:joi.number().required(),
    gameScoreTimeOne:joi.number().required(),
    gameScoreTimeTwo:joi.number().required()
})

export default createBetSchema
