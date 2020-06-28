<template>
  <div class="music">
    <div class="musicBox">
      <div class="musicBtns" v-loading="loading">
        <i class="el-icon-caret-left"></i>
        <i class="el-icon-video-pause" v-show="$store.state.isPlaying" @click="pause"></i>
        <i class="el-icon-video-play" v-show="!$store.state.isPlaying" @click="play"></i>
        <i class="el-icon-caret-right"></i>
      </div>
      <el-progress class="progress" :percentage="percentage" :color="customColors"></el-progress>
    </div>
  </div>
</template>

<script>
  export default {

    name: 'music',
    props: {
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
    data() {
      return {
        percentage: 0,
        customColors: [
          {color: '#f56c6c', percentage: 20},
          {color: '#e6a23c', percentage: 40},
          {color: '#5cb87a', percentage: 60},
          {color: '#1989fa', percentage: 80},
          {color: '#6f7ad3', percentage: 100}
        ],
        audio: {},
        duration: 0,
        loading: true
      }
    },
    methods: {
      init() {
        console.log('music url' + this.musicUrl)
        this.audio = new Audio(this.musicUrl)

        // console.log(this.duration)
        this.loading = !this.loading
      },
      play() {
        if (!this.$store.state.isPlaying) {
          this.audio.play()
          this.duration = this.audio.duration
          // console.log(this.audio.duration);
          console.log(this.duration)
          this.$store.commit('changeState')
          this.move()
        }
      },
      pause() {
        if (this.$store.state.isPlaying) {
          this.audio.pause()
          console.log(this.audio.currentTime);
          this.$store.commit('changeState')
        }
      },
      move() {
        let intv = parseInt(this.duration / 100);

        var ok = document.getElementsByClassName("modal-content")[0].getElementsByClassName("modal-footer ui-draggable-handle")[0].getElementsByClassName("btn btn-sm btn-default")[0]
        if(ok==true)
          ok.click()
      }
    },
  created()
  {
    setTimeout(() => {
      console.log('music loading...')
      this.init()
    }, 2000)
    console.log(this.audio.duration)
    // this.duration = this.audio.duration
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .progress{
    width: 100%;
  }

  .musicBtns {
    display: flex;
    position: relative;
    left: 50%;
    right: 50%;
    width: 25px;
    height: 25px;
  }
</style>
