<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <music ref="music" :music-url="musicUrl" :music-pic="musicPic" :hot-comments="hotComments" :music-list="musicList"></music>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import {getMusicUrl,getMusicCover,getMusicComments,searchMusic} from "./network/music";
  import Music from 'components/music'

  export default {
    name: 'app',
    data() {
      return {
        musicList: [],
        musicUrl: '',
        musicPic: '',
        hotComments: []
      }
    },
    components: {
       Music
    },
    methods: {

      searchMusic(keywords) {

        keywords = this.$refs.music.query

        searchMusic(keywords).then(res => {
          // console.log(res.result.songs)
          this.musicList = res.result.songs
        })
      },

      playMusic(songId) {
        getMusicUrl(songId).then(res => {
          // console.log('created')
          console.log(res)
          this.musicUrl = res.data[0].url
        })

        getMusicCover(songId).then(res => {
          // console.log(res.songs[0].al.picUrl)
          this.musicPic = res.songs[0].al.picUrl
        })

        getMusicComments(songId).then(res => {
          // console.log(res)
          this.hotComments = res.hotComments
        })

      }
    },
    created() {
      console.log('created!')
      this.playMusic(1336558007)
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
