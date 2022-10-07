import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

//Repositories
import * as authRepository from "../repository/authRepository"
import * as adminService from "../services/adminService"

//Types
import * as userTypes from "../types/userTypes"

export async function signup(user:userTypes.IUserCreate){

    const userExist = await authRepository.findUserByEmail(user.email)
    if(userExist){
        throw {type:"conflit" , message:"Usuário já tem cadastro"}
    }

    if(user.password!=user.confirmPassword){
        throw {type:"bad_request", message:"senhas não dão matche"}
    }

    const passwordEncrip = bcrypt.hashSync(user.password,10)
    user.password = passwordEncrip
    delete user.confirmPassword
    const result = await authRepository.createUser(user)

    return result
}

export async function signin(user:userTypes.IUserLogin){

    const userExist = await authRepository.findUserByEmail(user.email)
    if(!userExist){
        throw {type:"not_found" , message:"Usuário ainda não está cadastrado"}
    }
    const passwordValid = bcrypt.compareSync(user.password,userExist.password)
    if(!passwordValid){
        throw {type:"unauthorized" , message:"Credenciais inválidas"}
    } 
    
    const id = (userExist.id.toString())
    const secretJWT = process.env.JWT_SECRET
    const token = jwt.sign(id,secretJWT)

    const userPermissions = await adminService.userPermissions(Number(id))

    const returnUser = {
        userExist,
        userPermissions,
        token
    };
    
    
    return returnUser
}