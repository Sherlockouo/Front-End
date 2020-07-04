<template>

  <div class="music-player">
    <music ref="music" :music-url="musicUrl" :music-pic="musicPic" :hot-comments="hotComments" :music-list="musicList"></music>
  </div>
</template>

<script>
  import Music from "../components/Music.vue";
  import {getMusicComments, getMusicCover, getMusicUrl, searchMusic} from "../network/music";

  export default {
    name: "MusicPlayer",
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
      Music
    },
    methods:{

      searchMusic(keywords){

        keywords = this.$refs.music.query

        searchMusic(keywords).then(res=>{
          // console.log(res.result.songs)
          this.musicList = res.result.songs
        })
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
      this.playMusic(1336558007)
    }
  }
</script>

<style scoped>

</style>