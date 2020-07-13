<template v-slot:MusicHeader>
  <div class="music-header">
    <div class="music-btns">
      <router-link v-for="item in btns" :to="item.url" tag="span">{{item.status}}</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MusicHeader",
    props: {
      musicList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        btns: [
          {
            status: "正在播放",
            url: "/music/listening"
          },
          {
            status: "推荐",
            url: "/music/recommend"
          },
          {
            status: "搜索",
            url: "/music/search"
          },
          {
            status: "我的歌单",
            url: "/music/list"
          },
          {
            status: "我听过的",
            url: "/music/history"
          }
        ]
      }

    },
    methods:{
      select(url){
        if(this.$route!==url){
          this.$router.push(url)
        }
      }
    },
    created() {
      // console.log(this.musicList)
    }
  }
</script>

<style scoped>
  .music-header {
    display: flex;
    border-radius: 10px;
  }
  .music-btns span {
    border: 2px solid #ffd04b;
    align-items: center;
    display: inline-block;
    height: 100%;
    box-sizing: border-box;
    margin-right: 8px;
    padding: 8px 23px 0 23px;
    border-radius: 2px;
    font-size: 14px;
    line-height: 40px;
    overflow: hidden;
  }

</style>