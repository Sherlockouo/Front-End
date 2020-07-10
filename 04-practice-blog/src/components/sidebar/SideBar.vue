<template>
  <div class="side-bar">
    <div class="author">
      <div class="avatar">
        <img :src="avatarUrl" alt="">
      </div>
      <div class="motto">
        <h2>{{motto}}</h2>
      </div>
      <div class="social">
        <a v-for="item in socials" :href="item.url">
          <img :src="item.icon" alt="">
        </a>
      </div>
    </div>
    <div class="todo-list">

    </div>
    <div class="info">
      <div class="attack-map">
        <iframe width="100%" height="240px" src="https://cybermap.kaspersky.com/cn/widget/dynamic/dark"
                frameborder="0"></iframe>
        <span>网络威胁 实时地图</span>
      </div>
      <div class="tip">
        <img :src="alipayImg" alt="">
        <span>请我喝杯奶茶？</span>
      </div>
    </div>
    <div class="hot-articles">
      <div class="hot-title">
        <i class="el-icon-s-data">
          热门文章
        </i>
      </div>
      <div class="hot-article-list">
        <ul v-for="item in hotArticles">
          <li>
            <a href="#">
              <div class="hot-detail">
                 <div class="detail-title">
                {{item.title}}
                 </div>
                <div class="hot-views">
                  <i class="el-icon-view">{{item.views}}</i>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="hot-tags">
      <div class="tag-header">
        <i class="el-icon-s-marketing">热门标签</i>
      </div>
      <div class="tag-map">
        <a href="/tags/12306/" style="font-size: 14px; color: #999">12306</a>
        <a href="/tags/3D图/" style="font-size: 14px; color: #999">3D图</a>
        <a href="/tags/58同城/" style="font-size: 14px; color: #999">58同城</a>
        <a href="/tags/Ajax/" style="font-size: 14px; color: #999">Ajax</a>
        <a href="/tags/BLOG/" style="font-size: 15.43px; color: #8f8f8f">BLOG</a>
        <a href="/tags/Beautiful-Soup/" style="font-size: 14px; color: #999">Beautiful Soup</a>
        <a href="/tags/CDN/" style="font-size: 14px; color: #999">CDN</a>
        <a href="/tags/Coding-Pages/" style="font-size: 14px; color: #999">Coding Pages</a>
        <a href="/tags/DataFrame/" style="font-size: 14px; color: #999">DataFrame</a>
        <a href="/tags/Deepin/" style="font-size: 14px; color: #999">Deepin</a>
        <a href="/tags/Elicpse/" style="font-size: 14px; color: #999">Elicpse</a>
        <a href="/tags/GitHub-Pages/" style="font-size: 14px; color: #999">GitHub Pages</a>
        <a href="/tags/Github/" style="font-size: 14px; color: #999">Github</a>
        <a href="/tags/Github-Pages/" style="font-size: 14px; color: #999">Github Pages</a>
        <a href="/tags/GroupBy/" style="font-size: 14px; color: #999">GroupBy</a> <a href="/tags/HTTPS/" style="font-size: 15.43px; color: #8f8f8f">HTTPS</a> <a href="/tags/Hexo/" style="font-size: 19.71px; color: #727272">Hexo</a> <a href="/tags/ICP备案/" style="font-size: 14px; color: #999">ICP备案</a> <a href="/tags/IO操作/" style="font-size: 15.43px; color: #8f8f8f">IO操作</a> <a href="/tags/Index/" style="font-size: 14px; color: #999">Index</a> <a href="/tags/JDBC/" style="font-size: 14px; color: #999">JDBC</a> <a href="/tags/JS-预加载/" style="font-size: 14px; color: #999">JS 预加载</a> <a href="/tags/LaTeX/" style="font-size: 14px; color: #999">LaTeX</a> <a href="/tags/Markdown/" style="font-size: 15.43px; color: #8f8f8f">Markdown</a> <a href="/tags/Material-X/" style="font-size: 14px; color: #999">Material X</a> <a href="/tags/Matplotlib/" style="font-size: 22.57px; color: #5f5f5f">Matplotlib</a> <a href="/tags/MongoDB/" style="font-size: 14px; color: #999">MongoDB</a> <a href="/tags/MySQL/" style="font-size: 14px; color: #999">MySQL</a> <a href="/tags/NumPy/" style="font-size: 18.29px; color: #7c7c7c">NumPy</a> <a href="/tags/PEP8/" style="font-size: 14px; color: #999">PEP8</a> <a href="/tags/Pandas/" style="font-size: 21.14px; color: #686868">Pandas</a> <a href="/tags/PicGo/" style="font-size: 14px; color: #999">PicGo</a> <a href="/tags/Pygame/" style="font-size: 14px; color: #999">Pygame</a> <a href="/tags/Python/" style="font-size: 15.43px; color: #8f8f8f">Python</a> <a href="/tags/Redis/" style="font-size: 14px; color: #999">Redis</a> <a href="/tags/SEO/" style="font-size: 14px; color: #999">SEO</a> <a href="/tags/SQL-Server-2012/" style="font-size: 14px; color: #999">SQL Server 2012</a> <a href="/tags/SSR/" style="font-size: 14px; color: #999">SSR</a> <a href="/tags/Selenium/" style="font-size: 16.86px; color: #868686">Selenium</a> <a href="/tags/Series/" style="font-size: 14px; color: #999">Series</a> <a href="/tags/Ubuntu/" style="font-size: 14px; color: #999">Ubuntu</a> <a href="/tags/User-Agent/" style="font-size: 14px; color: #999">User-Agent</a> <a href="/tags/VMware/" style="font-size: 15.43px; color: #8f8f8f">VMware</a> <a href="/tags/VPS/" style="font-size: 14px; color: #999">VPS</a> <a href="/tags/XPath/" style="font-size: 14px; color: #999">XPath</a> <a href="/tags/if语句/" style="font-size: 14px; color: #999">if语句</a> <a href="/tags/input-函数/" style="font-size: 14px; color: #999">input()函数</a> <a href="/tags/instant-page/" style="font-size: 14px; color: #999">instant.page</a> <a href="/tags/jsDelivr/" style="font-size: 15.43px; color: #8f8f8f">jsDelivr</a> <a href="/tags/lxml/" style="font-size: 14px; color: #999">lxml</a> <a href="/tags/matplotibrc/" style="font-size: 14px; color: #999">matplotibrc</a> <a href="/tags/pyspider/" style="font-size: 15.43px; color: #8f8f8f">pyspider</a> <a href="/tags/requests/" style="font-size: 14px; color: #999">requests</a> <a href="/tags/spfk/" style="font-size: 14px; color: #999">spfk</a> <a href="/tags/urllib/" style="font-size: 14px; color: #999">urllib</a> <a href="/tags/while循环/" style="font-size: 14px; color: #999">while循环</a> <a href="/tags/主题个性化/" style="font-size: 14px; color: #999">主题个性化</a> <a href="/tags/代理/" style="font-size: 14px; color: #999">代理</a> <a href="/tags/位运算/" style="font-size: 14px; color: #999">位运算</a> <a href="/tags/公安备案/" style="font-size: 14px; color: #999">公安备案</a> <a href="/tags/函数/" style="font-size: 14px; color: #999">函数</a> <a href="/tags/函数应用/" style="font-size: 14px; color: #999">函数应用</a> <a href="/tags/分割/" style="font-size: 14px; color: #999">分割</a> <a href="/tags/切片/" style="font-size: 14px; color: #999">切片</a> <a href="/tags/列表/" style="font-size: 14px; color: #999">列表</a> <a href="/tags/判断函数/" style="font-size: 14px; color: #999">判断函数</a> <a href="/tags/变量/" style="font-size: 14px; color: #999">变量</a> <a href="/tags/合并数据集/" style="font-size: 14px; color: #999">合并数据集</a> <a href="/tags/哔哩哔哩/" style="font-size: 14px; color: #999">哔哩哔哩</a> <a href="/tags/图例/" style="font-size: 14px; color: #999">图例</a> <a href="/tags/图床/" style="font-size: 14px; color: #999">图床</a> <a href="/tags/图形验证码/" style="font-size: 14px; color: #999">图形验证码</a> <a href="/tags/垃圾/" style="font-size: 14px; color: #999">垃圾</a> <a href="/tags/备份/" style="font-size: 14px; color: #999">备份</a> <a href="/tags/子图/" style="font-size: 14px; color: #999">子图</a> <a href="/tags/字典/" style="font-size: 14px; color: #999">字典</a> <a href="/tags/字符串函数/" style="font-size: 14px; color: #999">字符串函数</a> <a href="/tags/安居客/" style="font-size: 14px; color: #999">安居客</a> <a href="/tags/层级索引/" style="font-size: 14px; color: #999">层级索引</a> <a href="/tags/年终总结/" style="font-size: 14px; color: #999">年终总结</a> <a href="/tags/广播/" style="font-size: 14px; color: #999">广播</a> <a href="/tags/异常/" style="font-size: 14px; color: #999">异常</a> <a href="/tags/技巧/" style="font-size: 14px; color: #999">技巧</a> <a href="/tags/拼接/" style="font-size: 14px; color: #999">拼接</a> <a href="/tags/排序/" style="font-size: 14px; color: #999">排序</a> <a href="/tags/排序函数/" style="font-size: 14px; color: #999">排序函数</a> <a href="/tags/操作列表/" style="font-size: 14px; color: #999">操作列表</a> <a href="/tags/散点图/" style="font-size: 14px; color: #999">散点图</a> <a href="/tags/数学函数/" style="font-size: 14px; color: #999">数学函数</a> <a href="/tags/数据分裂/" style="font-size: 14px; color: #999">数据分裂</a> <a href="/tags/数据合并/" style="font-size: 14px; color: #999">数据合并</a> <a href="/tags/数据替换/" style="font-size: 14px; color: #999">数据替换</a> <a href="/tags/数据类型/" style="font-size: 14px; color: #999">数据类型</a> <a href="/tags/数据读写/" style="font-size: 14px; color: #999">数据读写</a> <a href="/tags/数据重塑/" style="font-size: 14px; color: #999">数据重塑</a> <a href="/tags/数组/" style="font-size: 15.43px; color: #8f8f8f">数组</a> <a href="/tags/文件/" style="font-size: 14px; color: #999">文件</a> <a href="/tags/文件储存/" style="font-size: 14px; color: #999">文件储存</a> <a href="/tags/无界面浏览器/" style="font-size: 14px; color: #999">无界面浏览器</a> <a href="/tags/时间序列/" style="font-size: 14px; color: #999">时间序列</a> <a href="/tags/映射/" style="font-size: 14px; color: #999">映射</a> <a href="/tags/条件函数/" style="font-size: 14px; color: #999">条件函数</a> <a href="/tags/条形图/" style="font-size: 14px; color: #999">条形图</a> <a href="/tags/极区图/" style="font-size: 14px; color: #999">极区图</a> <a href="/tags/极坐标图/" style="font-size: 14px; color: #999">极坐标图</a> <a href="/tags/柱状图/" style="font-size: 14px; color: #999">柱状图</a> <a href="/tags/模块/" style="font-size: 14px; color: #999">模块</a> <a href="/tags/正则表达式/" style="font-size: 14px; color: #999">正则表达式</a> <a href="/tags/滑动验证码/" style="font-size: 14px; color: #999">滑动验证码</a> <a href="/tags/点触验证码/" style="font-size: 14px; color: #999">点触验证码</a> <a href="/tags/爬虫/" style="font-size: 24px; color: #555">爬虫</a> <a href="/tags/猫眼电影/" style="font-size: 14px; color: #999">猫眼电影</a> <a href="/tags/瓜子二手车/" style="font-size: 14px; color: #999">瓜子二手车</a> <a href="/tags/画布/" style="font-size: 14px; color: #999">画布</a> <a href="/tags/直方图/" style="font-size: 14px; color: #999">直方图</a> <a href="/tags/矩阵/" style="font-size: 14px; color: #999">矩阵</a> <a href="/tags/等值线图/" style="font-size: 14px; color: #999">等值线图</a> <a href="/tags/等高线图/" style="font-size: 14px; color: #999">等高线图</a> <a href="/tags/算术函数/" style="font-size: 14px; color: #999">算术函数</a> <a href="/tags/算术运算/" style="font-size: 14px; color: #999">算术运算</a> <a href="/tags/类/" style="font-size: 14px; color: #999">类</a> <a href="/tags/索引/" style="font-size: 15.43px; color: #8f8f8f">索引</a> <a href="/tags/线性代数/" style="font-size: 14px; color: #999">线性代数</a> <a href="/tags/线性图/" style="font-size: 14px; color: #999">线性图</a> <a href="/tags/统计函数/" style="font-size: 14px; color: #999">统计函数</a> <a href="/tags/统计描述/" style="font-size: 14px; color: #999">统计描述</a> <a href="/tags/统计计算/" style="font-size: 14px; color: #999">统计计算</a> <a href="/tags/继承/" style="font-size: 14px; color: #999">继承</a> <a href="/tags/编辑器/" style="font-size: 14px; color: #999">编辑器</a> <a href="/tags/缺失值/" style="font-size: 14px; color: #999">缺失值</a> <a href="/tags/网格/" style="font-size: 14px; color: #999">网格</a> <a href="/tags/肺炎疫情/" style="font-size: 14px; color: #999">肺炎疫情</a> <a href="/tags/虎扑论坛/" style="font-size: 14px; color: #999">虎扑论坛</a>
        <a href="/tags/补丁/" style="font-size: 14px; color: #999">补丁</a>
        <a href="/tags/豆瓣电影/" style="font-size: 14px; color: #999">豆瓣电影</a>
        <a href="/tags/迭代/" style="font-size: 14px; color: #999">迭代</a>
        <a href="/tags/雷达图/" style="font-size: 14px; color: #999">雷达图</a>
        <a href="/tags/饼状图/" style="font-size: 14px; color: #999">饼状图</a>
      </div>
    </div>
    <div class="recent-music">
      <div class="music-header">
        <i class="el-icon-headset">最近在听</i>
      </div>
      <div class="music-list">
        <ul v-for="(item,index) in recommendList">
          <li>
            <div class="song">
              <span>{{item.name}}</span>
              <span>{{item.song.artists[0].name}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
  import {recommendMusic} from '../../network/data'

  export default {
    name: "SideBar",
    data() {
      return {
        alipayImg: "http://imgs.sherlockouo.com:80/images/2020/07/10/image44fd67a6827745c7.png",
        weixinImg: "http://imgs.sherlockouo.com:80/images/2020/07/10/imaged639fd8d2634ece2.png",
        avatarUrl: "http://imgs.sherlockouo.com:80/images/2020/05/17/small224915qLyaG158419735596862e9226a67bad.jpg",
        motto: "以梦为马，不负韶华",
        socials: [
          {
            icon: "https://www.bilibili.com/favicon.ico",
            url: "https://space.bilibili.com/85902173"
          },
          {
            icon: "https://www.bilibili.com/favicon.ico",
            url: "https://github.com/Sherlockouo"
          },
          {
            icon: "https://www.bilibili.com/favicon.ico",
            url: "https://github.com/Sherlockouo"
          }
        ],
        hotArticles: [
          {
            title: "热门文章一",
            views: 233
          },
          {
            title: "热门文章二",
            views: 233
          },
          {
            title: "热门文章三",
            views: 233
          },
          {
            title: "热门文章四",
            views: 233
          },
          {
            title: "热门文章五",
            views: 233
          }
        ],
        recommendList:[]
      }
    },
    methods:{
      getRecommendMusic(){
        recommendMusic().then(res=>{
          console.log(res.result)
          this.recommendList = res.result
        })
      }
    },
    created() {
      this.getRecommendMusic();
    }
  }
</script>

<style scoped>
  .side-bar {
    margin-top: 140px;
    margin-bottom: 140px;
    width: 240px;
    float: right;
    position: relative;
    display: block;
    flex-direction: column;
    padding-right: 20px;
  }
  li{
    list-style-type: none;
  }

  .author {
    padding: 0 10px;
    border-radius: 12px;
    align-items: center;
    justify-content: center;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    font-size: 16px;
    background-color: #ffffff;
  }

  .avatar {
    display: flex;
    justify-content: center;
  }

  .avatar img {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    object-fit: cover;
    width: 240px;
    height: 240px;
  }

  .social {
    margin: 4px 10px;
    display: flex;
    line-height: 1.5rem;
  }

  .social a {
    width: 32px;
    height: 32px;
    padding: 10px 20px;
  }

  .attack-map {
    margin: 20px 0;
  }

  .attack-map iframe {
    border-radius: 12px;
  }

  .tip {
    margin: 20px 0;
  }

  .tip img {
    border-radius: 12px;
    object-fit: cover;
    width: 100%;
    height: 240px;
  }

  .hot-articles {
    border-radius: 12px;
    background-color: #fafafa;
    margin: 20px 0;
  }

  .hot-title {
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
    background-color: #db685d;
  }

  .hot-article-list {
    border-bottom-right-radius: 12px;
    border-bottom-left-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background:linear-gradient(#ea5613,pink) ;
  }

  .hot-article-list ul {
    width: 100%;
    padding: 0;
    margin: 0;
  }

  .hot-article-list li {
    width: 100%;
    justify-content: left;
    list-style-type: none;
  }
  .hot-article-list p{
    margin: 0;
    padding: 5px 10px;
  }

  .hot-detail{
    color: #020d18;
    width: 100%;
    display: flex;
    padding: 5px 10px;
  }

  a:link,a:visited{
    text-decoration: none;
  }
  a:hover{
    text-decoration: underline;
  }

  .detail-title{
    justify-content: left;
    margin-left: 0;
    padding: 0 20px;
  }
  .hot-views i{
    justify-content: right;
    margin-right: 0;
    padding: 0 20px;
  }

  .hot-tags{
    margin: 20px 0;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
    background-color: #ffffff;
  }
  .tag-header{
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
  }

  .tag-map{
    text-align: justify;
    padding: 0 20px 20px 20px;
  }

  .recent-music{
    padding: 10px 0;
    border-radius: 12px;
    background-color:  #aed9a3;
  }

  .music-header{
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 16px;
    background-color: #aed9a3;
  }

  .music-list{
    background-color: #97c68a;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }
  
  
  .music-list ul{
    justify-content: center;
    margin: 4px 0;
    padding: 0;
  }
  .music-list ul li{
    background-color: #bee2a5;
  }

  .music-list{
    border: 2px solid #a1c1e7;
    padding: 0 6px;
  }
  .music-list span{
    justify-content: center;
    padding: 0 4px;
  }

</style>