<template>
  <div class="self-intro">
    <div class="summary">
      <div class="avatar">
        <a href="/">
          <img src="https://cdn.jsdelivr.net/gh/TRHX/CDN-for-itrhx.com@3.1.0/images/trhx.png" id="avatar-icon" alt="">
        </a>

        <table>
          <tr>
            <td>
              <i class="el-icon-user">:
                {{sth.name}}
              </i>
            </td>
            <td>
              <i class="el-icon-location">:
                {{sth.location}}
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <i class="el-icon-magic-stick">:</i>
              <span v-for="item in sth.hobby">{{item}} | </span>

            </td>
            <td>
              <i class="el-icon-key">:</i>
              <span v-for="item in sth.skill">{{item}} | </span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="multi">
      <div class="left">
        <h2>技能｜Skill</h2>
        <div class="skill">
          <div class="item" v-for="it in skills">
            <div class="descibe">{{it.describe}}</div>
            <div class="progress">
              <el-progress :percentage="it.progress"></el-progress>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <h2>简介|Introduction</h2>
        <p v-for="item in intros">{{item}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SelfIntro",
    data() {
      return {
        intros:[
            "● 学历：成都某本科，软件工程专业大三学生；",
            "● 现况：自学前端，准备复习；",
            "● 目标：网络安全工程师，算法工程师；",
            "● 兴趣：酷爱编程，摄影·旅拍爱好者；",
            "● 其他：以梦为马，不负韶华；",

        ],
        skills:[
          {
            describe:"HTML/CSS/JS",
            progress:20
          },
          {
            describe:"JAVA",
            progress:50
          },
          {
            describe:"C++",
            progress:40
          },
          {
            describe:"PR/AE",
            progress:50
          },
          {
            describe:"算法",
            progress:50
          }
        ],
        sth: {
          name: "Sherlock",
          location: "四川 成都",
          hobby: ["电子产品", "运动", "Game"],
          skill: ["Java后端", "算法", "前端"]
        }
      }
    }
  }
</script>

<style scoped>

  @keyframes roll {
    0% {
      transform: rotate(0deg);
    }
    /*25%  {transform: rotate(90deg);}*/
    /*50%  {transform: rotate(180deg);}*/
    100% {
      transform: rotate(360deg);
    }
  }

  #avatar-icon {
    border-radius: 50%;
    width: 150px;
    height: 150px;
    animation: roll 2s infinite;
    transition: transform 1s;
    animation-timing-function: linear;
    float: left;
  }

  .self-intro {
    margin-top: 60px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  table {
    padding-left: 20px;
    text-align: left;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 20px;
    height: 145px;
    width: 75%;
  }

  p{
    padding-left: 20px;
    text-align: left;
  }

  td{
    padding: 5px 5px;
    border-radius: 12px;
    /*background-color: #68b88e;*/
    background:linear-gradient(#e7c6c1, #dbc4c4);
  }
  
  .summary{
    border-radius: 12px;
    background-color: #fff;
  }

  .multi{
    padding-top: 20px;
    border-radius: 12px;
  }

  .left{
    border-radius: 12px;
    background-color: #e29f9f;
    width: 45%;
    float: left;
    padding-right: 20px;
    height: 290px;
    /*margin: 0.5% 0 0 0.5%;*/
    /*padding: 0 0 8px 20px;*/
  }

  .right{
    border-radius: 12px;
    background-color: #8dd6e2;
    width: 45%;
    float: right;
    height: 290px;
    /*margin: 0.5% 0 0 0.5%;*/
    /*padding: 0 0 8px 20px;*/
  }
  
</style>