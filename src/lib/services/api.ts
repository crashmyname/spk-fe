import { get } from 'svelte/store';
import { auth } from '$lib/stores/auth';

const BASE_URL = `${import.meta.env.VITE_API_URL}`;

export async function apiFetch<T>(
	url: string,
	options: RequestInit = {}
): Promise<T> {
	const token = get(auth).token;

	const headers: HeadersInit = {
		'Content-Type': 'application/json',
		...(token ? { Authorization: `Bearer ${token}` } : {}),
		...options.headers 
	};

	const res = await fetch(BASE_URL + url, {
		...options,
		headers,
		credentials: 'include'
	});

	if (res.status === 401) {
		window.location.href = '/login';
		throw new Error('Unauthorized');
	}

	const contentType = res.headers.get('content-type');
	if (!contentType || !contentType.includes('application/json')) {
		const text = await res.text();
		throw new Error(`Server returned ${contentType || 'unknown type'} instead of JSON. URL: ${BASE_URL + url}`);
	}

	if (!res.ok) {
		const errorText = await res.text();
		throw new Error(`HTTP ${res.status}: ${errorText}`);
	}

	return res.json() as Promise<T>;
}