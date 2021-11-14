<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light p-0 mb-3">
        <div class="container-fluid">
            <a class="navbar-brand p-3 mx-5" href="#">
                <img src="@/assets/images/logo.png" width="130px" alt="logo">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item dropdown ps-5 pe-4 ms-4">
                        <a class="nav-link active no-bg" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Tentang Kami <i class="arrow down"></i>
                        </a>
                        <ul class="dropdown-menu mx-4 py-3 px-3 border border-light" aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="dropdown-item py-3" href="#">Profil Koperasi</a></li>
                            <li><a class="dropdown-item py-3" href="#">Galeri</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Berita</a>
                    </li>
                    <li class="nav-item ps-4">
                        <a class="nav-link active" href="#">Keanggotaan</a>
                    </li>
                    <li class="nav-item dropdown ps-4 pe-5 me-3">
                        <a class="nav-link active" href="#" id="navbarDropdownMenuLink" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Layanan <i class="arrow down"></i>
                        </a>
                        <ul class="dropdown-menu me-5 py-3 px-3 border border-light" aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="dropdown-item py-3" href="#">Simpanan</a></li>
                            <li><a class="dropdown-item py-3" href="#">Pinjaman</a></li>
                        </ul>
                    </li>
                    <li class="nav-item ps-5 pe-3 ms-5">
                        <a class="nav-link active nav-color" href="login.html">Login</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active nav-color" href="daftar.html">Daftar</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

</template>

<script>
// import logo from '@/assets/images/logo.png'
export default {

}
</script>

<style>

</style>