<template>
    <div>
        <Header></Header>
        <div class="container">
            <div class="row my-5 d-flex align-items-center">
                <div class="col-6">
                    <h1 class="pb-5 mb-1">Daftar dan Dapatkan Manfaat Anggota</h1>
                    <img src="@/assets/images/daftar_image.jpg" width="517" alt="daftarimage">
                </div>
                <div class="col-6 d-flex justify-content-center">
                    <div class="box">
                        <div class="boxContent d-grid p-5">
                            <form action="daftar2.html" method="post">
                                <label for="nama" class="mb-2 ms-2">Nama Lengkap</label>
                                <input type="text" name="nama" id="nama" placeholder="Nama lengkap seperti di KTP"
                                    class="border border-light p-2">
                                <div class="row my-3">
                                    <div class="col">
                                        <label for="gender" class="ms-2">Jenis Kelamin</label>
                                    </div>
                                    <div class="col-3">
                                        <div class="form">
                                            <input type="radio" name="gender" id="gender1">
                                            <label for="gender1">Laki-laki</label>
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="form">
                                            <input type="radio" name="gender" id="gender2">
                                            <label for="gender2">Perempuan</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="row gx-2 mb-2 ms-1">
                                    <div class="col-5">
                                        <label for="tempat">Tempat</label>
                                    </div>
                                    <div class="col-7">
                                        <label for="Tanggal">Tanggal Lahir</label>
                                    </div>
                                </div>
                                <div class="row gx-2 mb-3">
                                    <div class="col-5">
                                        <input type="text" name="tempat" id="tempat" class="border border-light form-control p-2">
                                    </div>
                                    <div class="col-7">
                                        <input type="text" name="tanggal" id="tanggal" placeholder="mm/dd/yyyy" onfocus="(this.type='date')" onblur="(this.type='text')"
                                            class="border border-light form-control p-2">
                                    </div>
                                </div>
                                <label for="alamat" class="mb-2 ms-2">Alamat Lengkap</label>
                                <input type="text" name="alamat" id="alamat" placeholder="Alamat lengkap seperti di KTP"
                                    class="border border-light p-2 mb-3">
                                <label for="pekerjaan" class="mb-2 ms-2">Pekerjaan</label>
                                <div class="input-group">
                                    <select class="form-select">
                                        <option value="" disabled selected>---- pilih ----</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <label for="ktp" class="mt-3 mb-2 ms-2">Nomor KTP</label>
                                <input type="text" name="ktp" id="ktp" placeholder="19 digit nomor KTP"
                                    class="border border-light p-2">
                                <a href=""><button type="submit" class="mt-5 mb-4">Selanjutnya</button></a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'RegisterPage',
  components: {
    Header
  }
}
</script>

<style>

</style>