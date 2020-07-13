module.exports ={
  configureWebpack:{
    resolve:{
      alias:{
        'components':'@/components',
        'network':'@/network',
        'views':'@/views',
        'assets':'@/assets',
        'pages':'@/pages',
        'utils':'@/utils'
      },
      extensions:['.js','.css','.vue','.json','.jpg','.jpeg','.png','.gif']
    }
  }
}



