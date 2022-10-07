export interface IUserCreate {
    name:string
    email:string
    password:string
    confirmPassword:string
}

export interface IUserLogin {
    email:string
    password:string
}