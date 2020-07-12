<template>
  <div class="blog">
    <div class="list">
      <articles></articles>
    </div>
  </div>
</template>

<script>
  import Articles from "components/content/Articles";

  export default {
    name: "Blog",
    data(){
      return {

      }
    },
    components:{
      Articles
    }

  }
</script>

<style scoped>
  .blog{
    /*margin-top: 20px;*/
    block-size: 100%;
  }
  .list{
    display: flex;
    width: calc(100% - 1 * 340px);
    padding: 0 40px 0 40px;
    margin-top: 40px;
    float: left;
  }
</style>