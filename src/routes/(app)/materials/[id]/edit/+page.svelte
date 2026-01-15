<script lang="ts">
    import {
        createUser,
        updateUser
    } from "$lib/services/userService";
    import Swal from "sweetalert2";
    import type {
        PageData
    } from "./$types";
    import {
        goto
    } from "$app/navigation";
    export let data: PageData;

    let name = data.user.name
    let id = data.user.user_id
    let username = data.user.username
    let email = data.user.email
    let section = data.user.section
    let role = data.user.role

    let loading = false;

    async function handleSubmit(e: Event) {
        e.preventDefault();
        loading = true;

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        const payload = {
            name: formData.get('name') as string,
            username: formData.get('username') as string,
            password: formData.get('password') as string,
            email: formData.get('email') as string,
            section: formData.get('section') as string,
            role: formData.get('role') as string
        };

        try {
            const result = await updateUser(id, payload);

            await Swal.fire({
                title: 'Success!',
                icon: 'success',
                text: result.message || 'User update successfully'
            });

            goto('/users');
        } catch (err) {

            const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';

            await Swal.fire({
                title: 'Error!',
                icon: 'error',
                text: errorMessage
            });
        } finally {
            loading = false;
        }
    }
</script>

<h1>Edit User</h1>

<!-- <input bind:value={name} /> -->

<form on:submit={handleSubmit} class="card col-md-12">
    <div class="card-header">
        <h4 class="card-title">Update User</h4>
    </div>
    <div class="card-body">
        <div class="row g-5">
            <div class="col-md-6">
                <div class="row">
                    <div class="col-md-12 col-lg-12">
                        <div class="mb-3">
                            <label class="form-label required">Username</label>
                            <input type="text" class="form-control" name="username" placeholder="Enter username"
                                required disabled={loading} bind:value={username}>
                        </div>
                        <div class="mb-3">
                            <label class="form-label required">Password</label>
                            <input type="password" class="form-control" name="password" placeholder="Enter password"
                                minlength="6" disabled={loading}>
                        </div>
                        <div class="mb-3">
                            <label class="form-label required">Name</label>
                            <input type="text" class="form-control" name="name" placeholder="Enter full name"
                                required disabled={loading} bind:value={name}>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="row">
                    <div class="col-md-12 col-lg-12">
                        <div class="mb-3">
                            <label class="form-label required">Email</label>
                            <input type="email" class="form-control" name="email" placeholder="Enter email" required
                                disabled={loading} bind:value={email}>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Section</label>
                            <input type="text" class="form-control" name="section" placeholder="Enter section"
                                disabled={loading} bind:value={section}>
                        </div>
                        <div class="mb-3">
                            <div class="form-label required">Role</div>
                            <select class="form-select" name="role" required disabled={loading} bind:value={role}>
                                <option value="">Select Role</option>
                                <option value="admin">Admin</option>
                                <option value="user">User</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="card-footer text-end">
        <div class="d-flex">
            <a href="/users" class="btn btn-link">Cancel</a>
            <button type="submit" class="btn btn-orange ms-auto" disabled={loading}>
                {#if loading}
                    <span class="spinner-border spinner-border-sm me-2"></span>
                    Submitting...
                {:else}
                    Submit
                {/if}
            </button>
        </div>
    </div>
</form>
