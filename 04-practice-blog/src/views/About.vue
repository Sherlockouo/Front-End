<template>
  <div class="about">
    <div class="self-intro"></div>
    <div class="foot">
      <foot-bar></foot-bar>
    </div>
  </div>
</template>

<script>
  import FootBar from "components/footbar/FootBar";
  export default {
    name:'About',
    data(){
      return {

      }
    },
    components:{
      FootBar
    }
  }
</script>

<style scoped>
  .foot{
    display: flex;
    justify-content: center;
    width: 100%;
  }
</style>
