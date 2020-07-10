<template>
  <div class="articles">
    <div class="article-list" v-for="(item,index) in articles">
      <div class="article-card">
        <div class="article-detail">
          <div class="title">
            <span class="article-title">{{item.title}}</span>
            <span class="article-date">{{item.date}}</span>
          </div>
          <div class="el-icon-price-tag">
            <span class="tag" v-for="tag in item.tags">{{tag}}</span>
          </div>
          <div class="article-content">
            <span>{{item.content}}</span>
            <div class="img1">
              <img src="http://imgs.sherlockouo.com:80/images/2020/05/07/399654d0e65f45423089e11c484941f3a34a99c21ddfb3f3.jpg"
                   alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "Articles",
    data() {
      return {
        articles: [
          {
            title: "第一篇博客",
            date: new Date().toLocaleDateString(),
            tags: ["博客", "随笔"],
            content: "如果我写多一点会对布局产生影响"
          },
          {
            title: "第二篇博客",
            date: new Date().toLocaleDateString(),
            tags: ["博客", "随笔"],
            content: "这里是博客内容，如果我只写一行"
          },
          {
            title: "第三篇博客",
            date: new Date().toLocaleDateString(),
            tags: ["博客", "随笔"],
            content: "这里是博客内容"
          },
          {
            title: "第四篇博客",
            date: new Date().toLocaleDateString(),
            tags: ["博客", "随笔"],
            content: "这里是博客内容"
          },
          {
            title: "第五篇博客",
            date: new Date().toLocaleDateString(),
            tags: ["博客", "随笔"],
            content: "这里是博客内容"
          },
          {
            title: "第五篇博客",
            date: new Date().toLocaleDateString(),
            tags: ["博客", "随笔"],
            content: "这里是博客内容"
          },
          {
            title: "第五篇博客",
            date: new Date().toLocaleDateString(),
            tags: ["博客", "随笔"],
            content: "这里是博客内容"
          }
        ]
      }
    },
    components:{
    },
    filters: {}
  }
</script>

<style scoped>
  .tag {
    padding: 0 10px;
    border:2px;
    border-color: #c41212;
    background: #22e9e6;
  }

  .article-title {
    width: auto;
    height: 16px;
    padding: 0 10px;
    background-color: #eebe1f;
  }

  .article-content {
    height: 85%;
    border-radius: 10px;
    background: #a1c1e7;
    align-items: center;
  }

  .article-content img {
    display: block;
    border-radius: 10px;
    vertical-align: middle;
    object-fit: cover;

    height: 150px;
    width: 100%;
  }

  /*.article-content img{*/
  /*  transform: scale(1,1);*/
  /*}*/
  .article-content img:hover {
    transition: .3s ease-out;
    transition-property: opacity, transform, filter;
  }

  .article-date {
    padding: 0 10px;
    /*background-color: #22e9e6;*/
  }


  .articles {
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-content: flex-start;
    flex-flow: row wrap;
    margin-left: 10%;
    margin-right: 10%;
    margin-bottom: -32px;
    border: 8px solid #e38282;
  }

  .article-list {
    flex: 0 0 25%;
    padding: 10px 0 0 15px;
    max-width: 100%;
    max-height: 100%;
  }

  .article-card {
    position: relative;
    padding: 10px 0 20px 0;
    border-radius: 10px;
    width: 320px;
    height: 200px;
    background-color: #fff;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.02);
  }

  .article-card>*:first-child{
  }

  .article-detail{
    /*flex: 0 0 33%;*/
    /*padding: ;*/
  }


</style>