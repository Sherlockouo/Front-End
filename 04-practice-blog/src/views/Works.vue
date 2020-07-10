<template>
  <div class="works">
    <div class="works-box">
      <works-exh></works-exh>
    </div>
    <div class="foot">
      <foot-bar></foot-bar>
    </div>
  </div>
</template>

<script>
  import WorksExh from "components/content/WorksExh";
  import FootBar from "components/footbar/FootBar";
  export default {
    name: "Works",
    data(){
      return {
        WorksExh
      }
    },
    components:{
      WorksExh,FootBar
    }
  }
</script>

<style scoped>
  .works{
    margin-top: 20px;
  }
  .foot{
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .works-box{
    display: flex;
    width: calc(100% - 1 * 300px);
    padding: 0 20px 0 20px;
    margin-top: 20px;
    float: left;
  }
</style>