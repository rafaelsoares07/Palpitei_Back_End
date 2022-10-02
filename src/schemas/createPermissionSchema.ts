import joi from "joi"

const createPermissionSchema = joi.object({
    name:joi.string().required(),
    description:joi.string().required()
})

export default createPermissionSchema