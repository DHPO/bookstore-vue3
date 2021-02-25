<template>
  <div v-if="loaded">
    <el-row>
      <el-col :span="10">
        <img :src="book.image" />
      </el-col>
      <el-col :span="14">
        <h2>{{book.name}}</h2>
        <el-form :model="book" size="mini" label-width="auto">
          <el-form-item label="作者">{{book.author}}</el-form-item>
          <el-form-item label="分类">{{book.type}}</el-form-item>
          <el-form-item label="定价">
            <span class="price">¥{{book.price}}</span>
          </el-form-item>
          <el-form-item label="状态">
            <span>{{state}}</span>
            <span class="inventory-desc">库存{{book.inventory}}件</span>
          </el-form-item>
          <el-form-item label="作品简介">{{book.description}}</el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-row class="btn-group">
      <el-col :span="12">
        <el-button type="danger" icon="el-icon-shopping-cart-2">加入购物车</el-button>
      </el-col>
      <el-col :span="12">
        <el-button type="danger" plain icon="el-icon-box">立即购买</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { ElMessage } from "element-plus";
import { computed, defineComponent, reactive, ref } from "vue";
import { useRoute } from "vue-router"
import * as service from "../service/book"
import { IBook } from "../typings/book";

export default defineComponent({
  setup() {
    const route = useRoute()
    const bookId = parseInt(<string>route.params.id)
    const book = reactive(<IBook>{})
    const loaded = ref(false)
    const state = computed(() => {
      if (book.inventory > 0) {
        return "有货"
      } else {
        return "无货"
      }
    })

    service.loadOneBook(bookId)
      .then((result) => {
        if(!result) {
          ElMessage.error("该图书不存在")
        } else {
          Object.assign(book, result)
          loaded.value = true
        }
      })
    
    return {
      loaded,
      book,
      state
    }
  }
})
</script>

<style scoped>
img {
  width: 100%;
}
.price{
  color: red;
  font-size: 16px;
}
.inventory-desc {
  font-size: 10px;
  margin-left: 10px;
  color: gray;
}
.btn-group>div {
  display:flex;
  justify-content:center;
}
.btn-group {
  width: 60%;
  margin: auto;
  margin-top: 50px;
}
</style>