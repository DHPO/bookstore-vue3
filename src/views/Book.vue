<template>
  <div id="container">
    <div id="header" height="">
      <header-info id="header-inner"/>
    </div>
    <el-row id="container-inner">
        <el-col id="sidebar" width="">
          <side-bar />
        </el-col>
        <el-col id="main">
          <book-detail />
        </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useAuthRequire } from "../service/login";
import SideBar from "../components/SideBar.vue"
import HeaderInfo from "../components/HeaderInfo.vue"
import BookDetail from "../components/BookDetail.vue"


export default defineComponent({
  components:{
    SideBar,
    HeaderInfo,
    BookDetail
  },
  setup() {
    useAuthRequire(1);
    return { };
  },
});
</script>

<style scoped>
#header-inner, #container-inner {
  width: 1000px;
  margin: auto;
}
#container-inner {
  padding-top: 64px;
  height: 100vh;
}
#header-inner {
  vertical-align: middle;
}
#header{
  box-shadow: 0 2px 8px #f0f1f2;
  height: 64px !important;
  line-height: 64px;
  z-index: 1000;
  position: fixed;
  width: 100%;
  background: white;
}
#sidebar {
  height: 100%;
  max-width: 300px;
  float: right;
  position: fixed;
}
#main {
  padding-left: 50px;
  padding-top: 50px;
  min-height: 100%;
  max-width: 900px;
  margin-left: 150px;
}

</style>