<template>
  <div class="header">
    <div class="logo">
      <a href="/">
        <img :src="logoUrl" alt="">
      </a>
    </div>
    <div class="tab">

      <el-menu class="tab-menu" mode="horizontal" @select="handleSelect">
        <el-menu-item v-for="item in tabitems" @click="to(item.url)">
          <i :class="item.icon"></i>
          <span>
          {{item.title}}
          <a :href="item.url"></a>
        </span>
        </el-menu-item>
        <form action="#" method="GET" class="search-all">
          <div class="search-input">

            <i class="el-icon-search"></i>
            <el-input placeholder="搜一搜"  v-model="keywords" clearable
                      @keyup.enter.native="submit">
            </el-input>
          </div>
        </form>
      </el-menu>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBar",
    data() {
      return {
        keywords: "",
        logoUrl: "https://cdn.jsdelivr.net/gh/TRHX/CDN-for-itrhx.com@3.1.0/images/trhx.png",
        tabitems: [
          {
            icon: "el-icon-house",
            title: "首页",
            url: "/home"
          },
          {
            icon: "el-icon-document",
            title: "博客",
            url: "/blog"
          },
          {
            icon: "el-icon-video-play",
            title: "视频",
            url: "/video"
          },
          {
            icon: "el-icon-headset",
            title: "音乐",
            url: "/music"
          },
          {
            icon: "el-icon-trophy",
            title: "作品展示",
            url: "/works"
          },
          {
            icon: "el-icon-magic-stick",
            title: "实验室",
            url: "/lab"
          },
          {
            icon: "el-icon-user",
            title: "关于我",
            url: "/about"
          }
        ]
      }

    },
    methods: {
      handleSelect(key, keyPath) {
        console.log("clicked:" + key + " " + keyPath)
      },
      to(url) {
        if (this.$route.path != url) {
          this.$router.push(url)
        }
      },
      submit() {
        console.log("clicked")
        console.log(this.keywords)
      }
    }
  }
</script>

<style scoped>

  .logo img {
    /*display: flex;*/
    float: left;
    position: relative;
    width: 40px;
    height: 60px;
    z-index: 5;
  }



  .search-all {
    display: flex;
    height: 60px;
    width: auto;
    /*position: relative;*/
    justify-content: center;
    /*border: 1px solid deepskyblue;*/
    bottom: 0;
  }

  .search-input{
    display: flex;
    align-items: center;
  }

  .search-input >>> input {
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 4px solid #a1c1e7;
    height: 60px;
    border-radius: 2px;
    font-size: 25px;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    padding: 0;
    margin: 0;
    bottom: 0;
  }

</style>