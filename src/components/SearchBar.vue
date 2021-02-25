<template>
  <el-input placeholder="Input Here" class="search-bar" v-model="inputData">
    <template #append>
      <el-button icon="el-icon-search"></el-button>
    </template>
  </el-input>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    return {
      inputData: ref("")
    }
  }
}
</script>

<style scoped>
.search-bar {
  width: 750px;
}
</style>