<template>
  <el-space v-loading="!loaded" wrap id="book-list">
    <book v-for="book in currentBooks" :book="book" :key="book.bookId"></book>
  </el-space>
  <el-pagination
    id="paging"
    background
    :page-size="pageSize"
    v-model:current-page="currentPage"
    layout="prev, pager, next"
    :total="books.length">
  </el-pagination>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from "vue";
import * as service from "../service/book"
import { IBook } from "../typings/book";
import Book from "./Book.vue"

export default defineComponent({
  components: {
    Book
  },
  setup() {
    const loaded = ref(false)
    const currentPage = ref(1)
    const pageSize = ref(16);
    var books = ref(<Array<IBook>>[])
    const currentBooks = computed(() => {
      return books.value.slice((currentPage.value - 1) * pageSize.value, currentPage.value * pageSize.value)
    })

    service.loadAllBooks()
      .then(result => {
        books.value = result
        loaded.value = true
      })

    return {
      loaded,
      currentPage,
      pageSize,
      books,
      currentBooks
    }
  }
})
</script>

<style scoped>
#book-list {
  width: 800px;
}
#paging {
  float: right;
  margin-top: 20px;
}
</style>