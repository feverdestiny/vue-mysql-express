<template>
<div class="middle-box text-center loginscreen  animated fadeInDown">
        <div>
            <div>

                <h1 class="logo-name">H+</h1>

            </div>
            <h3>欢迎使用隧道管理系统</h3>

            <form class="m-t" role="form" id="loginInfo">
                <div class="form-group">
                    <input type="email" v-model="userName" class="form-control" placeholder="用户名" required="">
                </div>
                <div class="form-group">
                    <input type="password" v-model="userPassword" class="form-control" placeholder="密码" required="">
                </div>
                <button type="submit" @click='Login' class="btn btn-primary block full-width m-b">登 录</button>


                <p class="text-muted text-center"> <a href="login.html#"><small>忘记密码了？</small></a> | <a href="register.html">注册一个新账号</a>
                </p>

            </form>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'loginInfo',
        data() {
            return {
                userName: '',
                userPassword: ''
            }
        },
        methods: {
            Login() {
                var userName = this.userName;
                var userPassword = this.userPassword;
                axios.post('/api/user/selectUser', {
                        username: userName,
                        userPassword: userPassword
                    })
                    .then(function(response) {
                        console.log(response);
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            }
        }
    }
</script>

<style scoped>

</style>