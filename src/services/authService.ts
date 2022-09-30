import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

//Repositories
import * as authRepository from "../repository/authRepository"

//Types
import * as userTypes from "../types/userTypes"

export async function signup(user:userTypes.IUserCreate){

    const userExist = await authRepository.findUserByEmail(user.email)
    if(userExist){
        throw {type:"bad_request" , message:"Usuario já tem cadastro"}
    }

    const passwordEncrip = bcrypt.hashSync(user.password,10)
    user.password = passwordEncrip
    const result = await authRepository.createUser(user)

    return result
}

export async function signin(user:userTypes.IUserLogin){

    const userExist = await authRepository.findUserByEmail(user.email)
    if(!userExist){
        throw {type:"bad_request" , message:"Usuario ainda não está cadastrado"}
    }
    const passwordValid = bcrypt.compareSync(user.password,userExist.password)
    if(!passwordValid){
        throw {type:"bad_request" , message:"Credenciais invalidas"}
    } 
    
    const id = (userExist.id.toString())
    const secretJWT = process.env.JWT_SECRET
    const token = jwt.sign(id,secretJWT)

    const returnUser = {
        userExist,
        token
    };
    
    
    return returnUser
}