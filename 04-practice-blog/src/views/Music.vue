<template>
  <div class="music">
    <div class="music-player">
      <music-player :musicList="musicList">
        <div name="music-header">
          <music-header></music-header>
        </div>
      </music-player>
    </div>
    <div class="foot">
      <foot-bar></foot-bar>
    </div>
  </div>
</template>

<script>
  import MusicPlayer from "components/content/MusicPlayer";
  import FootBar from "components/footbar/FootBar";
  import {recommendMusic} from "../network/data";
  import MusicHeader from "components/music/MusicHeader";

  export default {
    name: "Music",
    data() {
      return {
        musicList: []
      }
    },
    methods: {
      getRecommendMusic() {
        recommendMusic().then(res => {
          this.musicList = res.result
        })
      }
    },
    created() {
      this.getRecommendMusic()
      console.log(this.musicList)
    },
    components: {
      MusicPlayer, FootBar, MusicHeader
    }
  }
</script>

<style scoped>
  .music {
    width: calc(100% - 1 * 300px);
    margin-top: 20px;
    block-size: 100%;
  }

  .music-player {
    width: 100%;
    display: flex;
    padding: 0 20px 0 20px;
    margin-top: 20px;
    float: left;
  }

  .foot {
    display: flex;
    justify-content: center;
    width: 100%;
  }
</style>