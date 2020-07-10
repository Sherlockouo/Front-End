<template>
  <div id="app">
    <home/>
    <about/>
    <h4></h4>
    <music ref="music" :music-url="musicUrl" :music-pic="musicPic" :hot-comments="hotComments" :music-list="musicList"></music>
  </div>
</template>

<script>
  import Home from "./views/Home";
  import About from './views/About'
  import {getMusicUrl,getMusicCover,getMusicComments} from "./network/music";
  import {getLyric} from "./network/lyric";
  import {searchMusic} from "./network/data"
  import Music from 'components/music'

  export default {
    name: 'app',
    data(){
      return {
        // lyric:'',
        // music:''
        musicList: [],
        musicUrl: '',
        musicPic: '',
        hotComments: []
      }
    },
    components: {
      Home, About,Music
    },
    methods:{

      searchMusic(keywords){

        keywords = this.$refs.music.query

        searchMusic(keywords).then(res=>{
          // console.log(res.result.songs)
          console.log(res.result)
          this.musicList = res.result.songs
        })
        // console.log(this.musicList)
      },

      playMusic(songId){
        getMusicUrl(songId).then(res => {
          // console.log('created')
           console.log(res)
          this.musicUrl = res.data[0].url
        })

        getMusicCover(songId).then(res=>{
          // console.log(res.songs[0].al.picUrl)
          this.musicPic = res.songs[0].al.picUrl
        })

        getMusicComments(songId).then(res=>{
          // console.log(res)
          this.hotComments = res.hotComments
        })

      }

    },
    created() {
      // this.playMusic(1336558007)
    }
  }
</script>

<style>
    #app {
    background-color: #f0f8ff;
    opacity: 0.9;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
