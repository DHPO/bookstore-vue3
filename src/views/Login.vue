<template>
  <div class="login-page">
    <div class="login-container">
      <div class="login-box">
        <h1 class="page-title">Login</h1>
        <div class="login-content">
          <login-form />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LoginForm from "../components/LoginForm.vue"

export default defineComponent({
  components:{
    LoginForm
  },
  setup() {
    
  },
});
</script>

<style>
.login-box {
  text-align: left;
}
.login-box {
    max-width: 300px;
}
.login-form-forgot {
    float: right;
}
.login-form-button {
    width: 100%;
}

.login-page {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("../assets/timg.jpg");
    background-repeat:no-repeat;
    background-size:100% 100%;
    z-index: 99;
}


.login-container {
    position:relative;
    max-width: 420px;
    margin: 40px auto 0;
}

.login-page .login-container .login-box {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 40px 40px 15px 40px;
    backface-visibility: hidden;
    background: linear-gradient(30deg, rgba(53, 57, 74, 0) 0%, rgb(255, 255, 255) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='rgba(53, 57, 74, 0)', endColorstr='rgb(0, 0, 0)',GradientType=1 );
    box-shadow: -15px 15px 15px rgba(0,0,0,.4);
}

.el-button--primary,.el-button--primary:focus{
    background-color:#363636;
    border-color:#363636;
}

.el-button--primary:hover {
    background-color:#828282;
    border-color:#828282;
}

a {
    color:#363636;
    text-decoration: none;
}
a:hover {
    color:#828282;
}

.el-checkbox:hover .el-checkbox__inner,
.el-checkbox:hover .el-checkbox__inner,
.el-checkbox__input:focus, .el-checkbox__input:focus + .el-checkbox__inner,
.el-checkbox.is-checked::after,
.login-form .el-input__inner:focus{
    border: 1px solid #363636;
}


.el-checkbox.is-checked .el-checkbox__inner,
.el-checkbox.is-checked .el-checkbox__original{
    background-color: #363636;
    border: 1px solid #363636;
    
}

.el-checkbox__input.is-checked+.el-checkbox__label {
  color: #363636 !important;
}

</style>