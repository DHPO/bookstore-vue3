<template>
  <el-row>
    <el-col :span="12">
      <a id="logo" href="/">
        <img alt="logo" class="logo" :src="logo" style="height: 45px" />
        <img
          alt="Book Store"
          class="logo-font"
          :src="logoFont"
          style="height: 40px"
        />
      </a>
    </el-col>
    <el-col :span="12">
      <user-avatar />
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UserAvatar from "./UserAvatar.vue";
import logo from "../assets/logo.svg";
import logoFont from "../assets/logo-name.svg";

export default defineComponent({
  components: {
    UserAvatar,
  },
  setup() {
    return {
      logo,
      logoFont,
    };
  },
});
</script>

<style scoped>
#logo {
  vertical-align: middle;
}
#logo>img{
  vertical-align: middle;
}
#logo{
  line-height: 100%;
}
</style>