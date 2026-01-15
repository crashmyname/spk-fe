export interface User{
    user_id: string
    name: string
    username: string
    password: string
    email: string
    section: string
    role: string
}

export interface UserApiResponse {
    data: User | User[];
    meta?: {
        page: number;
        limit: number;
        total: number;
        total_page: number;
    };
    message?: string;
}

export interface payloadUser {
    name: string;
    username: string;
    password: string;
    email: string;
    section?: string;
    role: string;
}

export interface ErrorResponse {
    error: string;
}