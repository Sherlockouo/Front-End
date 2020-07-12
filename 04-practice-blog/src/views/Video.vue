<template>
  <div class="video">
    <div class="video-player">
      <video-player></video-player>
    </div>
  </div>
</template>

<script>
import FootBar from "components/footbar/FootBar";
import VideoPlayer from "components/content/VideoPlayer";
  export default {
    name: "Video",
    data(){
      return {

      }
    },
    components:{
      VideoPlayer,FootBar
    }
  }
</script>

<style scoped>
  .video{
    width: calc(100% - 1 * 340px);
    block-size: 100%;
  }
  .video-player{
    width: 100%;
    display: flex;
    padding: 0 40px 0 40px;
    margin-top: 20px;
    float: left;
  }

</style>