<template>
  <div id="app"  >
    <!--<img src="./assets/logo.png">-->
    <router-view></router-view>
  </div>
</template>

<script>
    //公共样式
    import jq from './assets/js/jquery.min.js'
    import bootstrap from './assets/js/bootstrap.min.js'
    export default {
        name: 'app'
    }
</script>
<style scoped>
    @import './assets/css/bootstrap.min.css';
    @import './assets/css/font-awesome.css';
    @import './assets/css/animate.min.css';
    @import './assets/css/style.min.css';
</style>
<!--<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        /*margin-top: 60px;*/
    }
</style>-->