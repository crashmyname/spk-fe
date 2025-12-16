<script lang="ts">
import UserTable from "$lib/components/user/UserTable.svelte";
  import { redirect } from "@sveltejs/kit";
export let data;

export function load(){
    const auth = JSON.parse(localStorage.getItem('auth') || 'null')
    if(!auth?.token){
        throw redirect(302, '/login')
    }
}
</script>


<h1 class="text-xl font-bold mb-4">User Management</h1>
<a class="btn btn-primary mb-2" href="/users/create">+ Add User</a>

<UserTable users={data.users} />