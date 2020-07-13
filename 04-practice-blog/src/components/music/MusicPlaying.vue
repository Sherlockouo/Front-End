<template>
  <div class="music-playing">
    <div class="play-list">
      <div class="list-item">
        <span class="item-name">歌曲</span>
        <span class="item-artist">歌手</span>
        <span class="item-time">时长</span>
      </div>
      <div class="list-content">
        <div v-for="(item,index) in musicList" class="list-item" @click="play(item.id)" @keypress.space="">
          <span class="list-num">{{index+1}}</span>
          <div class="list-name">
            <span>{{item.name}}</span>
          </div>
          <div class="list-artist">
            <span>{{item.song.artists[0].name}}</span>
          </div>
          <span class="list-time">
            {{ (item.song.duration/1000) | format }}
              </span>
        </div>
      </div>
    </div>
    <div class="audio">
      <audio :src="curUrl"  autoplay="1">shit</audio>
    </div>
  </div>
</template>

<script>
  import {format} from "../../utils/util";

  export default {
    name: "MusicPlaying",
    filters: {
      format
    },
    // props: {
    //   musicList: {
    //     type: Array,
    //     default() {
    //       return []
    //     }
    //   }
    // },
    data() {
      return {
        curUrl: "",
        musicList: []
      }
    },
    methods: {
      play(id) {
        this.$parent.playMusic(id)
        this.curUrl = this.$parent.curUrl
        console.log('clicked!' + id + " " + this.curUrl);
      }
    },
    created() {
      this.musicList = this.$parent.musicList
      console.log(this.$parent.musicList)
    }
  }
</script>

<style scoped>
  .music-playing {
    padding-top: 5px;
    width: 100%;
  }

  .list-item {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 50px;
    border-top: 1px solid;
    border-bottom: 1px solid;
    line-height: 50px;
    overflow: hidden;
    text-align: left;
  }


  .item-name {
    width: 320px;

    padding-left: 40px;
    position: relative;
    flex: 1;
    box-sizing: border-box;
  }

  .item-artist {
    width: 200px;
  }

  .item-time {
    width: 60px;
  }

  .list-content {
    width: 100%;
    justify-content: center;
    text-align: left;
  }

  .list-num {
    padding-right: 25px;
    padding-left: 5px;
  }

  .list-name {
    position: relative;
    flex: 1;
    box-sizing: border-box;
  }

  .list-artist {
    flex: 1;
  }

  .list-name span {
    width: 280px;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }

  .list-item {
    justify-content: center;
    display: flex;
    flex-direction: row;
    height: 50px;
    border-bottom: 1px solid;
    line-height: 50px;
    overflow: hidden;
  }
  .audio{
    background-color: #db1818;
  }
</style>