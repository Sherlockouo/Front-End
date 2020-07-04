<template>
  <div class="video-player">
    <video-x class="vpx"></video-x>
  </div>
</template>

<script>
  import VideoX from "components/Video";
  export default {
    name: "VideoPlayer",
    components:{
      VideoX
    }
  }
</script>

<style scoped>
  .video-player{
    display: grid;
    grid-template-rows: repeat(4,1fr);
    grid-template-columns: repeat(3,1fr);
    padding-top: 60px;
  }
  .vpx{
    align-items: center;
    justify-content: center;
    grid-row-start: auto;
    grid-column-start: 2;
    grid-row-end: auto;
    grid-column-end: 3;
  }
</style>