<template>
  <div class="blog">
    <div class="list">
      <articles></articles>
    </div>
    <div class="foot">
      <foot-bar></foot-bar>
    </div>
  </div>
</template>

<script>
  import Articles from "components/content/Articles";
  import FootBar from "components/footbar/FootBar";
  export default {
    name: "Blog",
    data(){
      return {

      }
    },
    components:{
      Articles,FootBar
    }

  }
</script>

<style scoped>
  .blog{
    margin-top: 20px;
    block-size: 100%;
  }
  .list{
    display: flex;
    width: calc(100% - 1 * 300px);
    padding: 0 20px 0 20px;
    margin-top: 20px;
    float: left;
  }
  .foot{
    display: flex;
    justify-content: center;
    width: 100%;
  }
</style>