import { writable } from 'svelte/store';

export interface User {
	id: number;
	username: string;
	name?: string;
	role?: string;
}

export const auth = writable<{
	isLoggedIn: boolean;
	user: User | null;
}>({
	isLoggedIn: false,
	user: null
});

export function setAuth(user: User) {
	auth.set({
		isLoggedIn: true,
		user
	});
}

export function logout() {
	auth.set({ isLoggedIn: false, user: null });

	fetch('/api/auth/logout', {
		method: 'POST',
		credentials: 'include'
	});
}
