<template>
  <div class="works">
    <div class="display">
      <el-carousel :interval="30000" type="card" height="400px">
        <el-carousel-item v-for="(item,index) in items" :key="index">
          <a :href="item.toUrl"><img :src="item.url" width="100%" height="100%"/></a>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Works",
    data() {
      return {
        items: [
          {
            title: "kurt 告白气球",
            url: "http://imgs.sherlockouo.com:80/images/2020/05/07/399654d0e65f45423089e11c484941f3a34a99c21ddfb3f3.jpg",
            toUrl: "http://imgs.sherlockouo.com:80/"
          },
          {
            title: "kurt someone u loved",
            url: "http://imgs.sherlockouo.com:80/images/2020/05/07/399654d0e65f45423089e11c484941f3a34a99c21ddfb3f3.jpg",
            toUrl: "http://imgs.sherlockouo.com:80/"
          },
          {
            title: "kurt someone u loved",
            url: "http://imgs.sherlockouo.com:80/images/2020/05/07/399654d0e65f45423089e11c484941f3a34a99c21ddfb3f3.jpg",
            toUrl: "http://imgs.sherlockouo.com:80/"
          },

          {
            title: "kurt someone u loved",
            url: "http://imgs.sherlockouo.com:80/images/2020/05/07/399654d0e65f45423089e11c484941f3a34a99c21ddfb3f3.jpg",
            toUrl: "http://imgs.sherlockouo.com:80/"
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .works {
    background: #2c3e50;
    padding-top: 60px;
    width: 100%;
  }

  .display {
    justify-content: center;
  }

  .el-carousel__item img {
    opacity: 1;
    line-height: 300px;
    margin: 0;
  }

  @keyframes animate1 {
    0%{
      left: -100%;
    }
    50%,100%{
      left: 100%;
    }
  }


  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>