<template>
  <el-menu default-active="1" id="menu" :collapse="collapse">
    <el-menu-item index="1">
      <i class="el-icon-reading" />
      <span>Books</span>
    </el-menu-item>
    <el-menu-item index="2">
      <i class="el-icon-shopping-cart-2" />
      <span>My Cart</span>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-s-order" />
      <span>My Orders</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-user" />
      <span>My Profile</span>
    </el-menu-item>
    <li style="flex: 1"></li>
    <li class="el-menu-item collapse" @click="switchCollapse">
      <i v-if="!collapse" class="el-icon-arrow-left"></i>
      <i v-else class="el-icon-arrow-right"></i>
      </li>
  </el-menu>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const collapse = ref(false);
    const switchCollapse = () => {
      collapse.value = !collapse.value;
    };
    return {
      collapse,
      switchCollapse,
    };
  },
});
</script>

<style scoped>
#menu {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.collapse {
  text-align: center;
}
</style>