import { getUserById } from "$lib/services/userService";
import type { PageServerLoad } from "../$types";


export const load: PageServerLoad = async ({params}) => {
    const id = params.id

    const user = await getUserById(id)
    return {
        user
    }
}