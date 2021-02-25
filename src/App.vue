<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";
import { useRouter } from "vue-router";
import { checkAuth } from "./api/user";
import { useAuthStore } from "./store/authStore";
import { IUserAuth } from "./typings/user";

export default defineComponent({
  name: "App",
  setup() {
    const { state: auth, login, logout } = useAuthStore();
    const router = useRouter();

    checkAuth()
      .then((auth: IUserAuth) => login(auth))
      .catch(() => {
        logout();
        router.push("/login");
      });

    watch(auth, (from, to) => {
      if (to.userType == 100) {
        router.push("/login");
      }
    });

    return {}
  },
});
</script>

<style>


</style>