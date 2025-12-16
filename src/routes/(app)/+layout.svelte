<svelte:head>
    <title>Dashboard SPK</title>

    <!-- Tabler CSS -->
    <link href="https://cdn.jsdelivr.net/npm/@tabler/core@1.0.0-beta20/dist/css/tabler.min.css" rel="stylesheet" />
    <link href="https://cdn.jsdelivr.net/npm/@tabler/core@1.0.0-beta20/dist/css/tabler-vendors.min.css" rel="stylesheet" />
    <link href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css" rel="stylesheet" />

    <!-- Tabler JS -->
    <script src="https://cdn.jsdelivr.net/npm/@tabler/core@1.0.0-beta20/dist/js/tabler.min.js"></script>
</svelte:head>

<script lang="ts">
  import { goto } from '$app/navigation';
    import logo from '$lib/assets/System (1).png'
    import { auth, loadAuth } from '$lib/stores/auth';
    import { onMount } from 'svelte';
    onMount(() => {
		loadAuth();
        const handler = () => {
			const data = localStorage.getItem('auth');

			if (!data) {
				auth.set({
					isLoggedIn: false,
					token: null,
					user: null
				});
				goto('/login');
			}
		};

		window.addEventListener('storage', handler);
		return () => window.removeEventListener('storage', handler);
	});
</script>

<div class="page">

    <!-- ====== SIDEBAR ====== -->
    <aside class="navbar navbar-vertical navbar-expand-lg" data-bs-theme="dark">
        <div class="container-fluid">

            <h1 class="navbar-brand navbar-brand-autodark">
                <a href="/">
                    SPK MOLD
                </a>
            </h1>

            <div class="collapse navbar-collapse" id="sidebar-menu">
                <ul class="navbar-nav pt-lg-3">

                    <li class="nav-item">
                        <a class="nav-link" href="/">
                            <span class="nav-link-icon"><i class="ti ti-layout-dashboard"></i></span>
                            <span class="nav-link-title">Dashboard</span>
                        </a>
                    </li>

                    <li class="nav-item dropdown">
                        <a href="" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <span class="nav-link-icon"><i class="ti ti-database"></i></span>
                            <span class="nav-link-title">Master Data</span>
                        </a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="/users">Users</a>
                            <a class="dropdown-item" href="/materials">Materials</a>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    </aside>

    <!-- ====== MAIN CONTENT ====== -->
    <div class="page-wrapper">

        <!-- HEADER -->
        <header class="navbar navbar-expand-md d-print-none">
            <div class="container-fluid">
                <h2 class="navbar-brand">
                    <span class="navbar-brand-text">SPK MDF</span>
                </h2>
            </div>
        </header>

        <!-- PAGE BODY -->
        <div class="page-body">
            <div class="container-xl">
                <slot /> <!-- HALAMAN MASUK DI SINI -->
            </div>
        </div>

    </div>
</div>
