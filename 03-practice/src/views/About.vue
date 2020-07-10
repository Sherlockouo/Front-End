<template>
  <div class="about">
    <el-drawer
            title="我是标题"
            :visible.sync="drawer"
            :with-header="false">
      <el-calendar v-model="value">
      </el-calendar>
      <!--      可以放点东西在这里-->
    </el-drawer>
    <div class="date">

      <el-button @click="drawer = true" type="primary" icon="el-icon-date"></el-button>


    </div>
  </div>
</template>

<script>
  export default {
    name: 'about',
    data() {
      return {
        drawer: false,
        value: new Date()
      }
    },
    methods: {}
  }
</script>

<style scoped>
  .about {
    display: grid;
    padding-top: 60px;
    width: 100%;
    height: 100%;
    border: 10px solid skyblue;
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: repeat(6, 1fr);
  }

  .date button {
    position: fixed;
    justify-content: center;
    /*top: 60px;*/
    /*margin-top: 50%;*/
    /*margin-bottom: 50%;*/
  }


  .el-button {

  }

  .el-calendar {
    padding: 0;
  }
</style>
