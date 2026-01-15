<script lang="ts">
    import type {
        User
    } from "$lib/types/user";
    export let users: User[] = [];
    export let page: number = 1;
    export let limit: number = 10;
    export let onDelete: (user: User) => void;
</script>


<table class="table table-vcenter card-table">
    <thead>
        <tr>
            <th>No</th>
            <th>Username</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        {#each users as u, index}
        <tr>
            <td>{(page - 1) * limit + index + 1}</td>
            <td>{u.username}</td>
            <td class="text-secondary">{u.name}</td>
            <td class="text-secondary">{u.email}</td>
            <td>
                <a class="btn btn-warning" href={`/users/${u.username}/edit`}>Edit</a>
                <button class="btn btn-danger" on:click={() => onDelete(u)}>Delete</button>
            </td>
        </tr>
        {/each}
    </tbody>
    </table>
