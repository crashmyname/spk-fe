<script lang="ts">
    import type {
        User
    } from "$lib/types/user";
    export let users: User[] = [];
</script>


<table class="table table-vcenter card-table">
    <thead>
        <tr>
            <th>Username</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        {#each users as u}
        <tr>
            <td>{u.username}</td>
            <td class="text-secondary">
            {u.name}
            </td>
            <td class="text-secondary"><a href="#" class="text-reset">{u.email}</a></td>
            <td>
            <a class="btn btn-warning" href="{`/users/${u.username}/edit`}">Edit</a>
            <a class="btn btn-danger" href="{`/users/${u.username}/delete`}">Delete</a>
            </td>
        </tr>
        {/each}
        </tbody>
    </table>
