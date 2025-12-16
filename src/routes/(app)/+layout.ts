import { redirect } from '@sveltejs/kit';

export function load() {
	if (typeof window === 'undefined') return;

	const auth = localStorage.getItem('auth');

	if (!auth) {
		throw redirect(302, '/login');
	}
}
