<template>
  <div class="tab-bar">
    <div class="search" v-show="inputSearch">
      <form action="#" method="get" class="search-all">
        <input type="text">
      </form>
      <a href="#"></a>
    </div>
    <div class="menu">
      <el-menu class="menu" mode="horizontal">
        <el-menu-item v-for="(item,index) in menuItems" @click="to(item.url)">{{item.title}}</el-menu-item>
        <el-menu-item class="el-icon-search" @click="showInput"></el-menu-item>
        <el-menu-item class="el-icon-plus" v-show="tabmore" @click="changeTabMore"></el-menu-item>
        <el-menu-item class="el-icon-minus" v-show="!tabmore" @click="changeTabMore"></el-menu-item>
      </el-menu>
    </div>

  </div>
</template>


<script>
  export default {
    data() {
      return {
        inputSearch: false,
        tabmore: true,
        activeIndex: '1',
        menuItems: [{title:"博客",url:"/blog"},{title:"视频",url:"/video"}, {title:"音乐",url:"/music"}, {title:"作品展示",url:"/works"}, {title:"关于我",url:"/about"}]
      };
    },

    methods: {
      to(url){
        console.log(url)
        if(this.$route.path!=url)
          this.$router.push(url)
      },
      showInput() {
        if(this.tabmore==true)
          this.tabmore=!this.tabmore
        this.inputSearch = !this.inputSearch
      },
      changeTabMore() {
        if (this.inputSearch == true)
          this.inputSearch = !this.inputSearch
        this.tabmore = !this.tabmore
      },
      active(index) {
        this.activeIndex = index + ''
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }

  }
</script>

<style scoped>
  .tab-bar {
    border-radius: 30px;
    border-color: #a1c1e7;
  }

  .menu{
    color: #a1c1e7;
    display: inline-block;
  }

  .el-menu-item {
    background-color: #527482;
    text-color: #ffffff;
  }

  .el-menu-item.is-active {
    active-text-color: #ffd04b;
  }

  .search {
    display: flex;
    position: absolute;
    align-items: center;
    /*可能会有点击穿透*/
    z-index: 1;
  }

  .search form input {
    padding: 0px;
    font-size: 30px;
    width: 429px;
    height: 55px;
  }

</style>