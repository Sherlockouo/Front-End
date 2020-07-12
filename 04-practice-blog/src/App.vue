<template>
  <div id="app">
    <div id="nav">
      <tab-bar></tab-bar>
    </div>
    <div id="side">
      <side-bar></side-bar>
    </div>
    <router-view/>
    <div id="foot">
      <foot-bar></foot-bar>
    </div>
  </div>
</template>

<script>
  import TabBar from "components/tabbar/TabBar";
  import SideBar from "components/sidebar/SideBar";
  import FootBar from "components/footbar/FootBar";

  export default {
    name: 'app',
    data() {
      return {}
    },
    components: {
      TabBar, SideBar, FootBar
    }
  }
</script>

<style>
  html, body {
    padding: 0;
    margin: 0;
    cursor: url("assets/cursor/normal.png"), default;
    background: #e9eef8;
  }

  link {
    cursor: url("assets/cursor/link.png"), auto;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    display: block;
    block-size: 100%;
  }

  #nav {
    display: flex;
    width: 100%;
    padding: 10px 20px;
    position: fixed;
    background-color: #e9eef8;
    z-index: 9999;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  #foot {
    display: flex;
    width: 100%;
    position: relative;
    bottom: 0;
  }

  #side{
    display: flex;
    float: right;
    height: 100%;
  }


</style>
