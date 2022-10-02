import Router from "express"
const router = Router()

import tokenValidation from "../middlewares/validateToken"
import {havePermissionAcessMiddleware} from "../middlewares/havePermissionAcessMiddleware"

import * as adminController from "../controllers/adminController"



router.post(
"/permissions",
tokenValidation,
havePermissionAcessMiddleware(["create_new_permissions"]),
adminController.createPermission
)

router.post(
    "/roles",
    tokenValidation,
    havePermissionAcessMiddleware(["create_new_roles"]),
    adminController.createRoles
)

router.post(
    "/matche/result/:id",
    tokenValidation,
    havePermissionAcessMiddleware(["insert_results_matches"]),
    adminController.insertResultMatche
)



export default router