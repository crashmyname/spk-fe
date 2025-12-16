import { createUser } from '$lib/services/userService';
import { error, fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
    default: async ({ request }) => {
        try {
            const form = await request.formData()
            const payload = {
                name: form.get('name') as string,
                username: form.get('username') as string,
                password: form.get('password') as string,
                email: form.get('email') as string,
                section: form.get('section') as string,
                role: form.get('role') as string
            }
            await createUser(payload)
            return {success:true}
        } catch(err) {
            return fail(400, {
                error: err instanceof Error ? err.message : 'Unknown error'
            })
        }
    }
}