import type { UserApiResponse, payloadUser, User, ErrorResponse } from "$lib/types/user"
import { apiFetch } from "./api"

export async function getUsers(page=1,limit=10, search = ''): Promise<UserApiResponse>{
    const params = new URLSearchParams({
        page: String(page),
        limit: String(limit)
    })
    if(search) params.append('search',search)
    return await apiFetch<UserApiResponse>(`/api/users?${params.toString()}`)
}

export async function createUser(data: payloadUser): Promise<{ user: User, message: string }>{
    try {
        const res = await apiFetch<UserApiResponse>('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(data)
        })
        return {
            user: res.data as User,
            message: res.message || 'User created successfully'
        }
    } catch (error) {
        throw error
    }
}

export async function getUserById(id: string): Promise<User>{
    try {
        const res = await apiFetch<UserApiResponse>(`/api/user/${id}`)
        return res.data as User
    } catch (error) {
        throw error
    }
}

export async function updateUser(id: string, data: payloadUser): Promise<{user: User, message: string}>{
    try {
        const res = await apiFetch<UserApiResponse>(`/api/user/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(data)
        })
        return {
            user: res.data as User,
            message: res.message || 'User updated successfully'
        }
    } catch (error) {
        throw error
    }
}

export async function deleteUser(id: string): Promise<{message: string}> {
    try {
        const result = await apiFetch<UserApiResponse>(`/api/user/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type' : "application/json"
            }
        })
        return {
            message: result.message || 'User Deleted'
        }
    } catch (error){
        throw(error)
    }
}