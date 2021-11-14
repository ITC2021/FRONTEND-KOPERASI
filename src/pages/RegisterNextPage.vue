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
                        <form action="" method="post">
                            <label for="nomor" class="mb-2 ms-2">Nomor Handphone</label>
                            <input type="text" name="nomor" id="nomor" placeholder="08" class="border border-light p-2">
                            <label for="email" class="mt-3 mb-2 ms-2">Email</label>
                            <input type="email" name="email" id="email" placeholder="example@domain.com"
                                class="border border-light p-2">
                            <label for="password" class="mt-3 mb-2 ms-2">Kata Sandi</label>
                            <input type="password" name="password" id="pass" placeholder="*********"
                                class="border border-light p-2">
                            <label for="re-pass" class="mt-3 mb-2 ms-2">Ulangi Kata Sandi</label>
                            <input type="password" name="re-pass" id="re-pass" placeholder="*********"
                                class="border border-light p-2">
                            <label for="syarat" class="mt-3 mb-1 ms-2">*Syarat Persetujuan</label>
                            <div class="form-check ms-3">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Bersedia membayar simpanan pokok sebesar Rp100.000
                                </label>
                            </div>
                            <div class="form-check ms-3">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                                <label class="form-check-label" for="flexCheckChecked">
                                    Bersedia membayar simpanan wajib sebesar Rp25.000 setiap bulannya
                                </label>
                            </div>
                            <div class="gx-2 d-flex flex-row align-items-center">
                                <div class="col-5">
                                    <a href="daftar.html">
                                        <button type="button" class="bttn bttn-back">Kembali</button>
                                    </a>
                                </div>
                                <div class="col-7">
                                    <button type="submit" class="bttn bttn-next">Daftar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
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