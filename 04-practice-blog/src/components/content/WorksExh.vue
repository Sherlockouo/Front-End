<template>
  <div class="works-exh">
    <div class="pic-show">
      <el-carousel :interval="4000" type="card" height="300px">
        <el-carousel-item v-for="item in items" :name="item.title">
          <a :href="item.toUrl"><img :src="item.url" width="100%" height="100%"/></a>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="works-list">
      <ul v-for="item in articles">
        <li>
          <div class="shot">
            <div class="article-detail">
              <div class="article-title">
                <span>{{item.title}}</span>
              </div>
              <el-divider class="divider"></el-divider>
              <div class="meta-box">
                <div class="author-mini">
                  <a href="/">
                    <el-image :src="item.authorIcon" fit="cover" style="height: 17px;width: 17px"></el-image>
                    <span>{{item.authorName}}</span>
                  </a>
                </div>
                <div class="post-date">
                  <a class="date">
                    <i class="el-icon-date"></i>
                    <p>{{item.date}}</p>
                  </a>
                </div>
                <div class="type">
                  <a href="#">
                    <i class="el-icon-key"></i>
                    <span>{{item.type}}</span>
                  </a>
                </div>
                <div class="views">
                  <a href="#">
                    <i class="el-icon-view"></i>
                    <span>{{item.views}}</span>
                  </a>
                </div>
                <div class="category">
                  <a href="#">
                    <i class="el-icon-files"></i>
                    <span>{{item.category}}</span>
                  </a>
                </div>
              </div>
              <el-divider class="divider"></el-divider>
              <div class="article-cover">
                <el-image :src="item.imgUrl" alt=""></el-image>
              </div>
              <div class="article-summary">
                <span>{{item.summary}}</span>
              </div>
              <div class="tags">
                <a :href="item" v-for="tagitem in item.tags">
                  <i class="el-icon-collection-tag"></i>
                  <span>{{tagitem}}</span>
                </a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

  export default {
    name: "WorksExh",
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
        ],
        articles: [
          {
            title: "作品一",
            authorIcon: "https://img.hacpai.com/file/2020/04/%E4%BA%9A%E7%B4%A2-5d4385af.png",
            authorName: "SherlockOuO",
            category:"算法",
            imgUrl: "http://imgs.sherlockouo.com:80/images/2020/04/30/images.jpg",
            type: "原创",
            views: 233,
            summary: "this is the summary of the article",
            date: new Date().toLocaleDateString(),
            tags: ["英语", "四级"]
          },
          {
            title: "作品二",
            authorIcon: "https://img.hacpai.com/file/2020/04/%E4%BA%9A%E7%B4%A2-5d4385af.png",
            authorName: "SherlockOuO",
            category:"C++",
            imgUrl: "http://imgs.sherlockouo.com:80/images/2020/04/30/images.jpg",
            type: "原创",
            views: 233,
            summary: "this is the summary of the article",
            date: new Date().toLocaleDateString(),
            tags: ["英语"]
          },
          {
            title: "作品三",
            authorIcon: "https://img.hacpai.com/file/2020/04/%E4%BA%9A%E7%B4%A2-5d4385af.png",
            authorName: "SherlockOuO",
            category:"虚拟机",
            imgUrl: "http://imgs.sherlockouo.com:80/images/2020/04/30/images.jpg",
            type: "转载",
            views: 233,
            summary: "this is the summary of the article",
            date: new Date().toLocaleDateString(),
            tags: ["英语", "六级", "GRE"]
          },
          {
            title: "作品四",
            authorIcon: "https://img.hacpai.com/file/2020/04/%E4%BA%9A%E7%B4%A2-5d4385af.png",
            authorName: "SherlockOuO",
            category:"技能学习",
            imgUrl: "http://imgs.sherlockouo.com:80/images/2020/04/30/images.jpg",
            type: "原创",
            views: 233,
            summary: "this is the summary of the article",
            date: new Date().toLocaleDateString(),
            tags: ["英语"]
          }
        ]
      }
    },
    components:{
    }
  }
</script>

<style scoped>
  .works-exh {
    width: 100%;
    margin-top: 60px;
  }

  .shot {
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1), 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    border: 4px solid #ffd04b;
    border-radius: 12px;
  }

  .article-detail{
    width: 100%;
  }

  .meta-box {
    height: 42px;
    justify-content: center;
    align-items: center;
    padding-top: 4px;
    padding-bottom: 8px;
    display: flex;
    flex-wrap: wrap;
  }

  .date {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 8px;
  }

  .type {
    display: flex;
    padding: 0 8px;
  }

  .views {
    display: flex;
    padding: 0 8px;
  }

  .tags {
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    background-color: rgba(219, 219, 217, 0.5);
    justify-content: left;
    display: flex;
    padding: 0 4px;
  }
  .category{
    display: flex;
    padding: 0 4px;
  }

  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0;
    margin-inline-end: 0;
  }

  a {
    color: #08131f;
  }

  ul{
    padding: 0;
  }

  ul li{
    /*取消li前面的小黑点*/
    list-style-type: none;
  }

  .divider{
    margin: 8px 0 ;
  }

  .article-cover {
    width: 100%;
  }

  /*.article-cover img{*/
  /*  object-fit: cover;*/
  /*  width: 100%;*/
  /*  height: 100%;*/
  /*}*/
  .shot img {
    object-fit: cover;
    width: 100%;
    height: 100%;
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