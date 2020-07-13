<template>
  <div class="music-search">
    <div class="input-key">
      <el-input v-model="keywords" @keyup.enter.native="search({$event})"></el-input>
    </div>
    <div v-show="showlist" class="no-res">
        <p>啥也没有</p>
    </div>
    <div class="li" v-show="!showlist">
      <music-list :music-list="this.$parent.searchList"></music-list>
    </div>
  </div>
</template>

<script>
  import MusicList from "./MusicList";

  export default {
    name: "MusicSearch",
    data(){
      return {
        keywords:'',
        curUrl:'',
        musicList:[],
        showlist:true
      }
    },
    methods:{
      search(e){
        this.showlist=!this.showlist
        console.log(this.$parent)
        this.$parent.searchMusic(this.keywords)
      },
      playMusic(id){
        this.$parent.playMusic(id)
        this.curUrl = this.$parent.curUrl
      }
    },
    components:{
      MusicList
    }
  }
</script>

<style scoped>
  .music-search{
    width: 100%;
    height: 100%;
  }
  .no-res{
    height: 100%;
    width: 100%;
  }
</style>