<template>
  <div class="about">
    <div class="self">
      <self-intro></self-intro>
    </div>
  </div>
</template>

<script>
  import SelfIntro from "components/content/SelfIntro";
  export default {
    name:'About',
    props:{

    },
    data(){
      return {

      }
    },
    components:{
     SelfIntro
    }
  }
</script>

<style scoped>

  html,body{
    display: block;
    width: 100%;
    height: 100%;
  }

  .about{
    width: calc(100% - 1 * 340px);
    height: 100%;
    block-size: 100%;
  }

  .self{
    width: 100%;
    height: 100%;
    padding: 0 20px 0 20px;
    margin-top: 20px;
    float: left;
  }

</style>
