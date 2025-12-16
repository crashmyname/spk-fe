import type { UserApiResponse, payloadUser, User } from "$lib/types/user"

const BASE_URL = 'http://localhost:8080/api'

export async function getUsers(): Promise<User[]>{
    const res = await fetch(`${BASE_URL}/users`)
    if (!res.ok){
        throw new Error("Failed to fetch users")
    }
    const json: UserApiResponse = await res.json()

    return json.data
}

export async function createUser(data : payloadUser): Promise<User>{
    const res = await fetch(`${BASE_URL}/users`,{
        method: 'POST',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(data)
    })

    if(!res.ok){
        const err = await res.json()
        throw new Error("failed create user "+ "("+err?.error+")")
    }

    return await res.json()
}

export async function getUserById(id: string){
    const res = await fetch(`${BASE_URL}/user/${id}`)

    if(!res.ok){
        throw new Error("Failed get user")
    }

    const json = await res.json()

    return json.data
}