<template>
<a :href="href">
  <el-card class="bookcard" shadow="hover" :body-style="{ padding: '0px' }">
    <img :src="book.image" />
    <el-divider style="margin:2px"></el-divider>
    <div class="info">
      <div class="name">{{book.name}}</div>
      <span class="price">¥ {{book.price}}</span>
    </div>
  </el-card>
</a>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import {IBook} from "../typings/book"

export default defineComponent({
  props: {
    book: {
      required: true,
      type: Object
    }
  },
  setup(props) {
    const book = <IBook>props.book
    const href = computed(() => {
      return `/book/${book.bookId}`
    })
    return {
      book,
      href
    }
  }
})
</script>

<style scoped>
.price {
  color: red;
  font-size: 14px
}
img {
  width: 180px;
  height: 180px;
}
.bookcard {
  width: 180px;
  height: 250px;
  padding: 0px;
  margin-bottom: 20px;
}
.name {
   overflow: hidden; 
   white-space: nowrap; 
   text-overflow: ellipsis;
   font-size: 14px;
}
.info {
  padding: 15px;
}
</style>