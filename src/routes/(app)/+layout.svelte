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
    import { setAuth } from '$lib/stores/auth';
    import { onMount } from 'svelte';
    let ready = false;

    onMount(async() => {
        try {
          const res = await fetch(
            `${import.meta.env.VITE_API_URL}/api/me`,
            {
              credentials: 'include'
            }
          )

          if(!res.ok){
            goto('/login')
            return
          }

          const user = await res.json()
          setAuth(user)
          ready = true
          setTimeout(() => {
            if ((window as any).Tabler) {
              (window as any).Tabler.init();
            }
          }, 0);
        } catch(err){
          goto('/login')
        }
    });

    function logout() {
        fetch(`${import.meta.env.VITE_API_URL}/api/auth/logout`, {
          method: 'POST',
          credentials: 'include'
        });

        goto('/login');
    }
</script>
{#if ready}
<div class="page">
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
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" on:click|preventDefault>
                            <span class="nav-link-icon"><i class="ti ti-database"></i></span>
                            <span class="nav-link-title">Master Data</span>
                        </a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="/users">Users</a>
                            <a class="dropdown-item" href="/materials">Materials</a>
                        </div>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="/ticket">
                            <span class="nav-link-icon"><i class="ti ti-adjustments-cog"></i></span>
                            <span class="nav-link-title">SPK</span>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="/ticket">
                            <span class="nav-link-icon"><i class="ti ti-arrow-guide"></i></span>
                            <span class="nav-link-title">Flow Process SPK</span>
                        </a>
                    </li>

                </ul>
            </div>
        </div>
    </aside>
    <div class="page-wrapper">
        <div class="page-header d-print-none">
          <div class="container-xl">
            <div class="row g-2 align-items-center">
              <div class="col">
                <div class="page-pretitle">
                  Dashbord
                </div>
                <h2 class="page-title">
                  <span class="navbar-brand-text">SPK MDF</span>
                </h2>
              </div>
              <div class="col-auto ms-auto d-print-none d-none d-lg-flex">
                <div class="d-none d-md-flex">
                  <a href="?theme=dark" class="nav-link px-0 hide-theme-dark me-2" data-bs-toggle="tooltip" data-bs-placement="bottom" aria-label="Enable dark mode" data-bs-original-title="Enable dark mode">
                    <!-- Download SVG icon from http://tabler-icons.io/i/moon -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path></svg>
                  </a>
                  <a href="?theme=light" class="nav-link px-0 hide-theme-light me-2" data-bs-toggle="tooltip" data-bs-placement="bottom" aria-label="Enable light mode" data-bs-original-title="Enable light mode">
                    <!-- Download SVG icon from http://tabler-icons.io/i/sun -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path></svg>
                  </a>
                  <div class="nav-item dropdown d-none d-md-flex me-4">
                    <a href="#" class="nav-link px-0" data-bs-toggle="dropdown" tabindex="-1" aria-label="Show notifications" id="showNotif">
                      <!-- Download SVG icon from http://tabler-icons.io/i/bell -->
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"></path><path d="M9 17v1a3 3 0 0 0 6 0v-1"></path></svg>
                      <span class="badge bg-red" style="display:none" id="alertnotif"></span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-end dropdown-menu-card">
                      <div class="card">
                        <div class="card-header">
                          <h3 class="card-title">Last updates</h3>
                        </div>
                        <div class="list-group list-group-flush list-group-hoverable">
                          <div id="notif"></div>
                          <div class="list">
                            <div class="row align-items-center">
                              <div class="col text-truncate mb-2">
                                <a href="<?= url('admin/notification')?>" class="text-body text-center mt-2 d-block">View More Approval</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="navbar-nav ms-auto"> 
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link d-flex lh-1 text-reset p-0" data-bs-toggle="dropdown" aria-label="Open user menu">
                            <span class="avatar avatar-sm" style="background-image: url()"></span>
                            <div class="d-none d-xl-block ps-2">
                                <div></div>
                                <div class="mt-1 small text-secondary">

                                </div>
                            </div>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                            <a href="" class="dropdown-item">Profile</a>
                            <button class="dropdown-item" on:click={logout}>Logout</button>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="page-body">
            <div class="container-xl">
                <slot />
            </div>
        </div>
    </div>
</div>
{/if}