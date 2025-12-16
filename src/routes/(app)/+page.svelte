<script>
    let user = 120;
    let pinjaman = 45;
    let transaksi = 87;
    let totalDana = 55000000;
</script>

<div class="row row-deck row-cards">

    <!-- CARD USER -->
    <div class="col-sm-6 col-lg-3">
        <div class="card">
            <div class="card-body">
                <div class="subheader">User Terdaftar</div>
                <div class="h1 mb-3">{user}</div>
                <i class="ti ti-users text-blue icon-lg"></i>
            </div>
        </div>
    </div>

    <!-- CARD PINJAMAN -->
    <div class="col-sm-6 col-lg-3">
        <div class="card">
            <div class="card-body">
                <div class="subheader">Pinjaman Aktif</div>
                <div class="h1 mb-3">{pinjaman}</div>
                <i class="ti ti-cash text-green icon-lg"></i>
            </div>
        </div>
    </div>

    <!-- CARD TRANSAKSI -->
    <div class="col-sm-6 col-lg-3">
        <div class="card">
            <div class="card-body">
                <div class="subheader">Transaksi Bulan Ini</div>
                <div class="h1 mb-3">{transaksi}</div>
                <i class="ti ti-report-money text-orange icon-lg"></i>
            </div>
        </div>
    </div>

    <!-- CARD TOTAL DANA -->
    <div class="col-sm-6 col-lg-3">
        <div class="card">
            <div class="card-body">
                <div class="subheader">Total Dana</div>
                <div class="h1 mb-3">Rp {totalDana.toLocaleString()}</div>
                <i class="ti ti-wallet text-purple icon-lg"></i>
            </div>
        </div>
    </div>

</div>
