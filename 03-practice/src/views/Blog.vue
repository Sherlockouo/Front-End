<template>
  <div class="blog">
    <articles/>
<!--    <foot-bar class="foot-page"></foot-bar>-->
  </div>
</template>

<script>
  import Articles from "../components/forblog/Article";
  import FootBar from "../components/forblog/FootBar";
  import SideBar from "../components/forblog/SideBar";
  export default {
    name: "Blog",
    components:{
      Articles,FootBar
    }
  }
</script>

<style scoped>
  .blog{
    display: flex;
    width: 100%;
    height: 100%;
    padding-top: 60px;
  }
  .articles{
    justify-content: center;
  }
  /*.foot-page{*/
  /*  clear: both;*/
  /*  display: block;*/
  /*  text-align: center;*/
  /*  position: relative;*/
  /*  bottom: 0;*/

  /*  !*align-content: center;*!*/
  /*  vertical-align: bottom;*/
  /*}*/
  .right-box{
    position: relative;
    right: 0;
    top:50%;
    /*width: 424px;*/
    width: 80%;
    bottom: 50%;
    align-content: center;
  }
</style>