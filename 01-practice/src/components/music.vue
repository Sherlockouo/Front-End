<template>
  <div class="music">

    <div class="layui-form-item">
      <div class="layui-input-inline">
        <input v-model="query" v-on:keyup.enter="searchMusic" placeholder="请输入音乐名" autocomplete="off"
               class="layui-input">
      </div>
      <div class="layui-input-inline">
        <button type="button" class="layui-btn" v-on:click="searchMusic">搜索</button>
      </div>
    </div>

    <div class="layui-col-xs4 layui-col-sm4 layui-col-md3 musicListBox">
      <ul>
        <li v-for="item in musicList">
          <i class="layui-icon layui-icon-play" @click="playMusic(item.id)"></i>
          {{ item.name }}
          <i class="layui-icon layui-icon-add-1" @click="addPlayList(item)"></i>
          <!--          <button class="addplaylist" @click="addPlayList(item)">+</button>-->
          <hr>
        </li>
      </ul>
    </div>
    <div class="layui-col-xs4 layui-col-sm4 layui-col-md4 layui-col-md-offset1">
      <img :src="musicPic" class="musicPic"/>
    </div>


    <div class="layui-col-xs4 layui-col-sm4 layui-col-md3 layui-col-md-offset1 commentBox">
      <div>
        <fieldset class="layui-elem-field layui-field-title">
          <legend>热门评论</legend>
          <div class="layui-field-box">
            <dl v-for="item in hotComments">
              <dt><img :src="item.user.avatarUrl" class="layui-nav-img user-img"/></dt>
              <dd>{{item.user.nickname}}</dd>
              <dd>{{item.content}}</dd>
              <hr>
            </dl>
          </div>
        </fieldset>
      </div>
    </div>

    <div class="layui-row">
      <div class="layui-col-xs12 layui-col-sm12 layui-col-md12 layui-col-bg12">
        <i class="layui-icon layui-icon-left"  @click="last"></i>
        <i class="layui-icon layui-icon-right" @click="next"></i>
        <audio class="audio" songId="idx" style="width: 100%;" ref="audio" :src="musicUrl" controls autoplay loop>
        </audio>

        <ul class="playlist">
          <li v-for="(item,index) in playList " @click="playMusicList(item.id,index)">{{index}} {{item.name}}</li>
        </ul>
      </div>
    </div>


  </div>

</template>

<script>
  import BScroll from 'better-scroll'
  import axios from 'axios'

  export default {
    name: "music",
    data() {
      return {
        query: '',
        playList: [],
        index: 0
      }
    },
    props: {
      // lyric: {},
      // music: '',
      // query:{
      //   type:String,
      //   default(){
      //     return ''
      //   }
      // },
      musicList: {
        type: Array,
        default() {
          return []
        }
      },
      musicUrl: {
        type: String,
        default() {
          return '';
        }
      },
      musicPic: {
        type: String,
        default() {
          return '';
        }
      },
      hotComments: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      last() {
        console.log('clicked last')
      },
      next() {
        console.log('clicked next')
      },
      playMusicList(songId) {
        this.playMusic(songId)
      },
      addPlayList(item) {

        if (this.playList.indexOf(item) == -1)
          this.playList.push(item)
        console.log('歌曲已添加！')
      },
      searchMusic() {
        this.$parent.searchMusic(this.query)
      },
      playMusic(songId) {
        this.$parent.playMusic(songId)
      }
    },
    created() {
      this.playMusic(1336558007)
    }
  }
</script>

<style scoped>
  body {
    width: auto;
  }

  .layui-icon layui-icon-left {
    display: block;
    float: left;
  }

  .audio{
    display: flex;
    width: 50%;
  }

  .musicPic {
    width: 100%;
    border-radius: 50%;
    -webkit-transform: rotate(360deg);
    animation: rotation 15s linear infinite;
    -moz-animation: rotation 15s linear infinite;
    -webkit-animation: rotation 15s linear infinite;
    -o-animation: rotation 15s linear infinite;
  }

  @-webkit-keyframes rotation {
    from {
      -webkit-transform: rotate(0deg);
    }

    to {
      -webkit-transform: rotate(360deg);
    }
  }

  .commentBox {
    height: 500px;
    overflow: auto;
  }

  .musicListBox {
    height: 500px;
    overflow: auto;
  }

  .user-img {
    float: left;
  }
</style>