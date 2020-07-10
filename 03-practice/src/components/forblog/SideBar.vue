<template>
  <div class="side-box">
    <div class="head">
      <span class="title">title</span>
      <el-avatar class="avatar" shape="circle" fit="fill" :size="100"
                 src="https://pic3.zhimg.com/80/v2-7f451bb425a63b29dac02ec838edaf0a_720w.jpg"></el-avatar>
    </div>
    <div class="hot-comments">

    </div>
    <div class="hot-articles">
      <ul v-for="article in articles">
        <li>
          <div class="article">
            <span>{{article.title}}</span>
            <span>
              <el-icon class="el-icon-view"></el-icon>
              {{article.views}}
            </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SideBar",
    data() {
      return {
        articles: [
          {
            title: "第一篇名字长一点",
            views: 321
          },
          {
            title: "第二篇",
            views: 121
          },
          {
            title: "第三篇名字再长一点",
            views: 331
          },
          {
            title: "第四篇",
            views: 321
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .side-box {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .title{
    display: flex;
    justify-content: center;
    /*align-content: center;*/
  }
  .head{
    text-align: center;
  }

  .article{
    padding: 0 20px;
    border: 10px solid #a1c1e7;
  }

  .article span{
    padding: 0 10px;
  }

</style>