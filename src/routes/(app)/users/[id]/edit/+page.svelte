<script lang="ts">
    import type { PageData } from "./$types";
    export let data: PageData;
    
    let name = data.user.name
</script>

<h1>Edit User</h1>

<input bind:value={name} />
