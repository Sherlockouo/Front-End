<template>
  <div id="app">
    <div class="bg"></div>

    <div id="nav">
      <tab-bar></tab-bar>
    </div>
    <div class="side">
      <side-bar class="right-box"></side-bar>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import TabBar from "components/tabbar/TabBar";
  import {getMusicComments, getMusicCover, getMusicUrl, searchMusic} from "../../01-practice/src/network/music";
  import Music from "components/Music";

  export default {
    name: 'app',
    data() {
      return {}
    },
    components: {
      TabBar
    }
  }
</script>

<style>
  html, body, #app {
    height: 100%;
    margin: 0;
    padding: 0;
    background: #f1f2f8;

  }
  body,img{
    user-select: none;
    -webkit-user-select: none;
  }
  .bg {
    background: url("https://music.mtnhao.com/img/bg-2.a1183040.jpg") no-repeat;
    background-size: cover;
    filter: blur(2px);
  }

  #app {
    display: flex;
    position: relative;
    padding-top: 0px;
    /*background: url("assets/img/bgimg/spider.jpeg") 50% 50% no-repeat;*/
  }

  #nav {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    justify-content: center;
    padding-top: 0px;
  }

</style>
