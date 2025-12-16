export interface payloadUser{
    name: string
    username: string
    password: string
    email: string
    section: string
    role: string
}

export interface User{
    name: string
    username: string
    password: string
    email: string
    section: string
    role: string
}

export interface UserApiResponse{
    data: User[]
}