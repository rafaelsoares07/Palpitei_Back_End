import joi from "joi"

const insertResultSchema = joi.object({
    gameScoreTimeOne:joi.number().required(),
    gameScoreTimeTwo:joi.number().required(),
    winningTime:joi.number()
})

export default insertResultSchema
