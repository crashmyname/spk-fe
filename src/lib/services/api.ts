import { get } from 'svelte/store';
import { auth } from '$lib/stores/auth';

const BASE_URL = 'http://localhost:8080';

export async function apiFetch<T>(
	url: string,
	options: RequestInit = {}
): Promise<T> {
	const token = get(auth).token;

	const headers: HeadersInit = {
		'Content-Type': 'application/json',
		...(token ? { Authorization: `Bearer ${token}` } : {})
	};

	const res = await fetch(BASE_URL + url, {
		...options,
		headers
	});

	if (res.status === 401) {
		window.location.href = '/login';
		throw new Error('Unauthorized');
	}

	return res.json() as Promise<T>;
}
