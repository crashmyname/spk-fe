<script lang="ts">
    import UserTable from "$lib/components/user/UserTable.svelte";
    import {
        goto
    } from '$app/navigation';
    import type { User } from "$lib/types/user";
  import Swal from "sweetalert2";
  import { deleteUser } from "$lib/services/userService";
    export let data: {
        users: any[];meta: {
            page: number;total_page: number;limit: number
        };filters: {
            search: string
        }
    };
    let users: User[] = data.users;
    let search = data.filters.search;

    function applyFilter() {
        const params = new URLSearchParams();
        params.set('page', '1');
        if (search) params.set('search', search);

        goto(`?${params.toString()}`);
    }

    async function handleDelete(user: User) {
        const result = await Swal.fire({
            title: 'Yakin hapus user?',
            text: `User "${user.username}" akan dihapus permanen`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Ya, hapus',
            cancelButtonText: 'Batal'
        })

        if(!result.isConfirmed) return

        try {
            await deleteUser(user.user_id)

            users = users.filter(u => u.user_id !== user.user_id)

            await Swal.fire({
                icon: 'success',
                title: 'Berhasil',
                text: 'User berhasil dihapus',
                timer: 1500,
                showConfirmButton: false
            });
        } catch (err : any){
            await Swal.fire({
                icon: 'error',
                title: 'Gagal',
                text: err.message || 'Gagal menghapus user'
            });
        }
    }
</script>


<h1 class="text-xl font-bold mb-4">Material Management</h1>
<a class="btn btn-primary mb-2" href="/users/create">+ Add Material</a>

<div class="mb-4" style="max-width: 400px;">
    <div class="input-group">
        <input
            type="text"
            class="form-control"
            placeholder="Search name / username..."
            bind:value={search}
            on:keydown={(e) => e.key === 'Enter' && applyFilter()}
        />
        <button class="btn btn-primary" on:click={applyFilter}>
            Search
        </button>
    </div>
</div>

<UserTable users={users} page={data.meta.page} limit={data.meta.limit} onDelete={handleDelete}/>
{#if data.meta}
    <div class="mt-4 flex gap-2">
    <a
        class="btn"
        href={`?page=${data.meta.page - 1}&search=${search}`}
        class:disabled={data.meta.page === 1}
    >
        Prev
    </a>

    {#each Array(data.meta.total_page) as _, i}
        <a
            class="btn"
            class:btn-primary={data.meta.page === i + 1}
            href={`?page=${i + 1}&search=${search}`}
        >
            {i + 1}
        </a>
    {/each}

    <a
        class="btn"
        href={`?page=${data.meta.page + 1}&search=${search}`}
        class:disabled={data.meta.page === data.meta.total_page}
    >
        Next
    </a>
</div>
{/if}
