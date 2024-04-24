<template>
    <div id="page-login">
        <div class="container">
            <div class="card card-container">
                <img id="profile-img" alt="" class="profile-img-card" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png" />
                <p id="profile-name" class="profile-name-card"></p>

                <form id="form-signin" class="form-signin" @submit.prevent="handleLogin">
                    
                    <div class="form-group">
                        <!-- <label>Email</label> -->
                        <input 
                            v-model="email"
                            type="text" class="form-control" placeholder="Địa chỉ email" />
                    </div>
                    <div class="form-group">
                        <!-- <label>Mật khẩu</label> -->
                        <input 
                            v-model="password"
                            type="password" class="form-control" placeholder="Mật khẩu" />
                    </div>
                    <button class="btn btn-lg btn-primary btn-block btn-signin" type="submit">
                        Đăng nhập</button>
                </form>

                <div><router-link to="/register" class="register">Đăng ký một tài khoản</router-link></div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        ...mapActions([
            'login'
        ]),
        handleLogin() {
            const { email, password } = this;
            this.login({ email, password }).then(res => {
                if (res.ok) {
                    // login success
                    this.$router.push('/');
                } else {
                    alert(res.error);
                }
            })
        }
    }
}
</script>

<style>
    .register, .register:hover, .register:focus {
        color: #337ab7;
    }
</style>