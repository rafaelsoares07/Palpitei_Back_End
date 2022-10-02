import Router from "express"
const router = Router()

import tokenValidation from "../middlewares/validateToken"
import {havePermissionAcessMiddleware} from "../middlewares/havePermissionAcessMiddleware"

import * as adminController from "../controllers/adminController"
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware"

import createRolesSchema from "../schemas/createRolesSchema"
import createPermissionSchema from "../schemas/createPermissionSchema"
import insertResultsSchema from "../schemas/insertBetsResults"

router.post(
"/permissions",
validateSchemaMiddleware(createPermissionSchema),
tokenValidation,
havePermissionAcessMiddleware(["create_new_permissions"]),
adminController.createPermission
)

router.post(
    "/roles",
    validateSchemaMiddleware(createRolesSchema),
    tokenValidation,
    havePermissionAcessMiddleware(["create_new_roles"]),
    adminController.createRoles
)

router.post(
    "/matche/result/:id",
    validateSchemaMiddleware(insertResultsSchema),
    tokenValidation,
    havePermissionAcessMiddleware(["insert_results_matches"]),
    adminController.insertResultMatche
)



export default router