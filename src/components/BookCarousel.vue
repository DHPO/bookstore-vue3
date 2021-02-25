<template>
  <el-carousel width="800" id="carousel">
      <el-carousel-item v-for="item in books" :key="item">
        <img :src="item"/>
      </el-carousel-item>
    </el-carousel>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import book1 from "../assets/carousel/book1.jpg"
import book2 from "../assets/carousel/book2.jpg"
import book3 from "../assets/carousel/book3.jpg"
import book4 from "../assets/carousel/book4.jpg"

export default defineComponent({
  setup() {
    const books = [book1, book2, book3, book4]

    return {
      books
    }
  }
})
</script>

<style scoped>
#carousel {
  width: 750px;
}
</style>