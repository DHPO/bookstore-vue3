<template>
<div id="avatar">
  <span>Hi, {{auth.username}}</span>
  <el-dropdown>
    <el-avatar :src="thunderboy"> </el-avatar>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.alipay.com/"
          >
            Show Profile
          </a>
        </el-dropdown-item>
        <el-dropdown-item @click="logout">
          <a>Log Out</a>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</div>
</template>

<script>
import { defineComponent } from "vue";
import { useLogin } from "../service/login"
import thunderboy from "../assets/thunderboy.jpg"

export default defineComponent({
  setup() {
    const {auth, logout} = useLogin()

    return {
      auth,
      logout,
      thunderboy
    }
  }
})
</script>

<style scoped>
#avatar {
  float: right;
}
span {
  vertical-align: middle;
  margin-right: 10px;
  font-weight:bold;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
}
</style>