<template>
  <div class="video-player">
    <div class="pic-show">
      <el-carousel :interval="4000" type="card" height="300px">
        <el-carousel-item v-for="item in items" :name="item.title">
          <a :href="item.toUrl"><img :src="item.url" width="100%" height="100%"/></a>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="video-list">
      <ul>
        <li>
          <iframe src="//player.bilibili.com/player.html?aid=968788511&bvid=BV1Hp4y1S7Bm&cid=210487106&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

  export default {
    name: "VideoPlayer",
    data(){
      return {
        items: [
          {
            title: "kurt 告白气球",
            url: "http://imgs.sherlockouo.com:80/images/2020/07/10/image44fd67a6827745c7.png",
            toUrl: "http://imgs.sherlockouo.com:80/"
          },
          {
            title: "kurt someone u loved",
            url: "http://imgs.sherlockouo.com:80/images/2020/07/10/imagee31329d147da4224.png",
            toUrl: "http://imgs.sherlockouo.com:80/"
          },
          {
            title: "kurt someone u loved",
            url: "http://imgs.sherlockouo.com:80/images/2020/07/10/imaged639fd8d2634ece2.png",
            toUrl: "http://imgs.sherlockouo.com:80/"
          },

          {
            title: "kurt someone u loved",
            url: "http://imgs.sherlockouo.com:80/images/2020/05/07/399654d0e65f45423089e11c484941f3a34a99c21ddfb3f3.jpg",
            toUrl: "http://imgs.sherlockouo.com:80/"
          }
        ]
      }
    },
    components:{

    }
  }
</script>

<style scoped>
  li {
    list-style-type: none;
  }
  .video-player{
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .video-list iframe{
    width: 100%;
    height: 560px;
  }

  .pic-show {
    width: 100%;
    object-fit: cover;
    align-items: center;
    justify-content: center;
  }
  .el-carousel__item img {
    object-fit: cover;
  }
</style>