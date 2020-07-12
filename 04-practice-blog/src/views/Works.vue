<template>
  <div class="works">
    <div class="works-box">
      <works-exh></works-exh>
    </div>
  </div>
</template>

<script>
  import WorksExh from "components/content/WorksExh";
  export default {
    name: "Works",
    data(){
      return {
        WorksExh
      }
    },
    components:{
      WorksExh
    }
  }
</script>

<style scoped>
  .works{

  }

  .works-box{
    display: flex;
    width: calc(100% - 1 * 340px);
    padding: 0 40px 0 40px;
    float: left;
  }
</style>