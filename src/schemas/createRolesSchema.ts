import joi from "joi"

const createRolesSchema = joi.object({
    name:joi.string().required(),
    description:joi.string().required()
})

export default createRolesSchema


