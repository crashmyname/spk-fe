import { writable } from 'svelte/store';

export interface User {
	id: number;
	username: string;
	name?: string;
	role?: string;
}

export interface AuthState {
	isLoggedIn: boolean;
	token: string | null;
	user: User | null;
}

const initialState: AuthState = {
	isLoggedIn: false,
	token: null,
	user: null
};

export const auth = writable<AuthState>(initialState);

export function setAuth(data: { token: string; user: User }) {
	auth.set({
		isLoggedIn: true,
		token: data.token,
		user: data.user
	});

	localStorage.setItem('auth', JSON.stringify(data));
}

export function loadAuth() {
	const data = localStorage.getItem('auth');
	if (!data) return;

	const parsed = JSON.parse(data);
	auth.set({
		isLoggedIn: true,
		token: parsed.token,
		user: parsed.user
	});
}

export function logout() {
	auth.set(initialState);
	localStorage.removeItem('auth');
}
