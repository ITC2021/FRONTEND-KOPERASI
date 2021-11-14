<template>
    <div>
        <Header></Header>
        <div class="container py-5 ">
            <div class="row my-5 d-flex align-items-center">
                <div class="col-6 d-flex justify-content-center">
                    <img src="@/assets/images/login_image.jpg" width="600" alt="loginimage">
                </div>
                <div class="col-6 d-flex justify-content-center">
                    <div class="box">
                        <div class="boxContent d-grid p-5">
                            <h1 class="text-center">Login</h1>
                            <form action="" method="post">
                                <label for="email" class="mt-3 mb-3 ms-2">Email</label>
                                <input type="text" name="email" id="email" placeholder="example@domain.com" class="border border-light p-2">
                                <label for="pass" class="mt-4 mb-3 ms-2">Kata Sandi</label>
                                <input type="password" name="pass" id="pass" placeholder="********" class="border border-light p-2">
                                <button type="submit" class="mt-5 mb-4">Login</button>
                                <p class="pt-4 text-center">Belum punya akun? <a class="fw-bold text-decoration-none" href="daftar.html">Daftar</a></p>
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
  name: 'LoginPage',
  components: {
    Header
  }
}
</script>

<style scoped>
    .container-fluid {
    background: #E7ECED;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
    width: 1440px;
}

.collapse {
    font-family: Hind Siliguri;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 140%;
}

.collapse>.navbar-nav>.nav-item>.nav-link {
    color: rgba(120, 140, 150, 1);
}

.collapse>.navbar-nav>.nav-item>.nav-color {
    color: #35717A;
    font-weight: 500;
}

.collapse>.navbar-nav>.nav-item>.nav-link:hover{
    color: #35717A;
}

.dropdown-menu {
    background-color: #F4F7F8;
    font-family: Hind Siliguri;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 120%;
}

.arrow {
    border: solid;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
  }

.down {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    margin-bottom: 5px;
  }

.navbar-nav>.nav-item>ul>li>a{
    color: #788C96;
}

.navbar-nav>.nav-item>ul>li>a:hover{
    color: #35717A;
    background-color: #F4F7F8;
}

.box {
    height: 501px;
    width: 491px;
    left: 753px;
    top: 257px;
    border-radius: 30px;
    background: #E7ECED;
    box-shadow: 4px 4px 4px 0px #E5E5E5;
}

.boxContent {
    width: 80px;
    height: 45px;
    font-style: normal;
    font-family: Hind Siliguri;
    line-height: 140%;
    color: #35717A;
}

::placeholder {
    color: rgba(191, 199, 203, 1);
}

.boxContent>h1 {
    font-size: 32px;
    font-weight: bold;
}

.boxContent>form>label {
    font-weight: 600;
    font-size: 18px;
}

.boxContent>form>input {
    width: 398px;
    height: 48px;

    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
}

.boxContent>form>button {
    width: 398px;
    height: 48px;
    background: #FFFFFF;
    border: 1px solid #08839E;
    box-sizing: border-box;
    box-shadow: 0px 2px 8px #35717A;
    border-radius: 10px;
    font-weight: bold;
    font-size: 24px;
    color: #35717A;
}

.boxContent>form>p>a {
    color: #35717A;
}
</style>