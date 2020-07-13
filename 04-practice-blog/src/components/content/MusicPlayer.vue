<template>
  <div class="music-player" @play="playMusic">
    <div class="music-box">
      <div class="music-btns">
        <music-header :musicList="musicList"></music-header>
      </div>
    <router-view></router-view>
    <div class="music-bar">
      <div class="music-bar-btns">
        <i class="el-icon-caret-left"></i>
        <div class="pause">
          <i class="el-icon-video-pause"></i>
        </div>
        <i class="el-icon-caret-right"></i>
      </div>
      <div class="music-bar-progress"></div>
      <div class="music-control"></div>
    </div>
    </div>
  </div>
</template>

<script>
  import {format} from "../../utils/util";
  import MusicHeader from "../music/MusicHeader";
  import {getMusicUrl,searchMusic} from "../../network/data";

  export default {
    name: "MusicPlayer",
    props: {
      musicList: {
        type: Array,
        default() {
          []
        },
        curUrl:{
          type: String,
          default() {
            return ''
          }
        }
      }
    },
    components: {
      MusicHeader
    },
    filters: {
      format
    },
    data() {
      return {
        searchList:[]
      }
    },
    methods:{
      playMusic(id) {
        getMusicUrl(id).then(res => {
              this.curUrl = res.data[0].url
            }
        )
      },
      searchMusic(keyWords){
        searchMusic(keyWords).then(res=>{
          this.searchList = res.result.songs
          console.log(res.result.songs)
        })
      }
    }
  }
</script>

<style scoped>
  .music-player {
    padding: 60px 0 0 40px;
    width: 100%;
    height: 100%;
    display: block;
    justify-content: center;
    background: transparent;
  }

  .music-box {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .music-btns {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    border-radius: 12px;
    /*background: #fcfcfc;*/
  }

  .music-btns button {
    padding: 0 10px;
    margin: 0 15px 0 0;
  }

  .music-btns button:last-child {
    margin: 0;
  }

  .music-btns span {
    display: inline-block;
    box-sizing: border-box;

    font-size: 14px;
    line-height: 40px;
  }

  .music-bar {
    display: flex;
    bottom: 0;
  }

  .music-bar-btns{
    padding-top: 20px;
    display: flex;
  }

</style>