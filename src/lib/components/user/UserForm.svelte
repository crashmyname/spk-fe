<script lang="ts">
  import { enhance } from "$app/forms";
  import { goto } from "$app/navigation";
  import Swal from "sweetalert2";


</script>

<form method="post" use:enhance={() => {
    return async ({result}) => {
        if (result.type === 'success'){
            Swal.fire({
                title: 'success',
                icon: 'success',
                text: 'success created user'
            }).then(()=> goto('/users'))
        }

        if (result.type === 'failure'){
            Swal.fire({
                title: 'failure',
                icon: 'error',
                text: result.data.error
            })
        }
    }
}} class="card col-md-6">
    <div class="card-header">
        <h4 class="card-title">Form elements</h4>
    </div>
    <div class="card-body">
        <div class="row g-5">
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-12 col-lg-12">
                        <div class="mb-3">
                            <label class="form-label">Username</label>
                            <input type="text" class="form-control" name="username"
                                placeholder="Input placeholder" required>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Password</label>
                            <input type="password" class="form-control" name="password"
                                placeholder="Input placeholder" required>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Name</label>
                            <input type="text" class="form-control" name="name"
                                placeholder="Input placeholder" required>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Email</label>
                            <input type="text" class="form-control" name="email"
                                placeholder="Input placeholder" required>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Section</label>
                            <input type="text" class="form-control" name="section"
                                placeholder="Input placeholder" required>
                        </div>
                        <div class="mb-3">
                            <div class="form-label">Select</div>
                            <select class="form-select" name="role">
                                <option value="Administrator">Administrator</option>
                                <option value="User">User</option>
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
            <button type="submit" class="btn btn-primary ms-auto">Submit</button>
        </div>
    </div>
</form>