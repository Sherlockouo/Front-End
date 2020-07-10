<template v-slot:MusicHeader>
  <div class="music-header">
    <div class="music-btns">
      <button v-for="item in btns">{{item.status}}</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MusicHeader",
    data() {
      return {
        btns: [
          {
            status: "正在播放",
            url: "#"
          },
          {
            status: "推荐",
            url: "#"
          },
          {
            status: "搜索",
            url: "#"
          },
          {
            status: "我的歌单",
            url: "#"
          },
          {
            status: "我听过的",
            url: "#"
          }
        ]
      }

    }
  }
</script>

<style scoped>
  .music-header {
    display: flex;
    border: 1px solid #ffd04b;
    border-radius: 10px;
  }
  .music-btns button {
    padding: 0 10px;
    margin: 0 15px 0 0;
  }

  .music-btns button:last-child {
    margin: 0;
  }
</style>