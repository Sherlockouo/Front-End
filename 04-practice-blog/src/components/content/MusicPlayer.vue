<template>
  <div class="music-player">
    <div class="music-box">
      <div class="music-btns">
        <music-header></music-header>
      </div>
      <div class="play-list">
        <div class="list-item">
          <span class="item-name">歌曲</span>
          <span class="item-artist">歌手</span>
          <span class="item-time">时长</span>
        </div>
        <div class="list-content">
          <div v-for="(item,index) in musicList" class="list-item">
            <span class="list-num">{{index+1}}</span>
            <div class="list-name">
              <span>{{item.name}}</span>
            </div>
            <span  class="list-time">
            {{ (item.song.duration/1000) | format }}
              </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {format} from "../../utils/util";
  import MusicHeader from "../music/MusicHeader";
  export default {
    name: "MusicPlayer",
    props: {
      musicList: {
        type:Array,
        default(){
          []
        }
      }
    },
    components:{
      MusicHeader
    },
    filters:{
      format
    },
    data() {
      return {

      }
    }
  }
</script>

<style scoped>
  .music-player {
    width: 100%;
    display: flex;
    justify-content: center;
    background: transparent;
  }

  .play-list{
    width: 100%;
  }
  .music-box{
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .music-btns {
    width: 100%;
    display: flex;
    border: 1px solid #ffd04b;
    border-radius: 10px;
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

  .list-content{
    width: 100%;
    justify-content: center;
  }

  .list-name {
    position: relative;
    flex: 1;
    box-sizing: border-box;
  }

  .list-name span{
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  .list-item{
    justify-content: center;
    display: flex;
    flex-direction: row;
    height: 50px;
    border-bottom: 1px solid;
    line-height: 50px;
    overflow: hidden;
  }
</style>