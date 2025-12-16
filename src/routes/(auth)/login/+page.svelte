<svelte:head>
	<link href="https://cdn.jsdelivr.net/npm/@tabler/core@1.0.0-beta20/dist/css/tabler.min.css" rel="stylesheet" />
	<link href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css" rel="stylesheet" />
</svelte:head>
<script lang="ts">
	import { goto } from '$app/navigation';
	import { setAuth } from '$lib/stores/auth';
	import logo from '$lib/assets/logo spk mdf.png';

	let username = '';
	let password = '';
	let error = '';
	let loading = false;

	async function login() {
		error = '';
		loading = true;

		const res = await fetch('http://localhost:8080/api/auth/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username, password })
		});

		const data = await res.json();

		if (!res.ok) {
			error = data.error;
			loading = false;
			return;
		}

		setAuth(data);
		await goto('/users');
		loading = false;
	}
</script>

<div class="page page-center">
	<div class="container-tight py-4">
		<div class="text-center mb-3">
			<img
				src={logo}
				alt="Logo SPK MDF"
				class="img-fluid rounded"
				style="max-width: 440px;"
			/>
		</div>
		<form class="card card-md" on:submit|preventDefault={login}>
			<div class="card-body">
				<h2 class="card-title text-center mb-4">Login ke SPK MDF</h2>

				<div class="mb-3">
					<label class="form-label">Username</label>
					<input
						type="text"
						class="form-control"
						placeholder="Masukkan username"
						bind:value={username}
						required
					/>
				</div>

				<div class="mb-2">
					<label class="form-label">
						Password
					</label>

					<div class="input-group input-group-flat">
						<input
							type="password"
							class="form-control"
							placeholder="Masukkan password"
							bind:value={password}
							required
						/>
						<span class="input-group-text">
							<i class="ti ti-lock"></i>
						</span>
					</div>
				</div>

				{#if error}
					<div class="alert alert-danger mt-3">
						<i class="ti ti-alert-circle"></i>
						{error}
					</div>
				{/if}

				<div class="form-footer mt-4">
					<button
						type="submit"
						class="btn btn-primary w-100"
						disabled={loading}
					>
						{#if loading}
							<span class="spinner-border spinner-border-sm me-2"></span>
							Memproses...
						{:else}
							Login
						{/if}
					</button>
				</div>
			</div>
		</form>

		<div class="text-center text-secondary mt-3">
			&copy; {new Date().getFullYear()} SPK MDF
		</div>
	</div>
</div>