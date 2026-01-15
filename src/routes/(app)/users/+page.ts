// src/routes/(app)/users/+page.ts
import type { PageLoad } from './$types';
import { getUsers } from '$lib/services/userService';
import { browser } from '$app/environment';

export const load: PageLoad = async ({ url }) => {
    const page = Number(url.searchParams.get('page') ?? 1);
    const limit = 10;
	const search = url.searchParams.get('search') ?? '';

    try {
        const res = await getUsers(page, limit, search);

        return {
            users: Array.isArray(res.data) ? res.data : [res.data],
            meta: res.meta,
			filters: {
				search
			},
        };
    } catch (error) {
        return {
            users: [],
            meta: {
                page,
                limit,
                total: 0,
                total_page: 1
            },
			filters: {
				search
			}
        };
    }
};