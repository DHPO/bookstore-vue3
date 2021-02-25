<template>
  <el-form :model="form" :rules="rules" class="login-form" :selfUpdate="true">
    <el-form-item prop="username"> 
      <el-input placeholder="Username" v-model="form.username" prefix-icon="el-icon-user">
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input class="login-form-input" type="password" placeholder="Password" v-model="form.password" prefix-icon="el-icon-lock" @keypress.enter="login">

      </el-input>
    </el-form-item>
    <el-form-item >
      <el-checkbox v-model="remember">Remember me</el-checkbox>
      <a href="#" class="login-form-forgot">Forgot password</a>
      <el-button type="primary" class="login-form-button" @click="login">Log in</el-button>
      Or <a href="#">register now!</a>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { useLogin } from "../service/login"

export default defineComponent({
  components: {

  },
  setup() {
    const form = reactive({
      username: "",
      password: ""
    })
    const remember = ref(true)
    const { login: loginService } = useLogin()
    const rules = {
      username: [{required: true, message: "Please input your username!", trigger: "change"}],
      password: [{required: true, message: "Please input your Password!", trigger: "change"}]
    }
    return {
      form,
      remember,
      rules,
      login: () => {loginService(form.username, form.password)}
    }
  },
});
</script>


<style>
.login-form-button, .login-form .ant-col {
  width: 100%;
}

</style>