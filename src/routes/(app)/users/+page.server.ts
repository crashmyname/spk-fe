import { getUsers } from "$lib/services/userService";
import type { PageServerLoad } from "./$types";


export const load: PageServerLoad = async () => {
    return {
        users: await getUsers()
    }
}