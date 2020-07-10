module.exports ={
  configureWebpack:{
    resolve:{
      alias:{
        'components':'@/components',
        'network':'@/network',
        'views':'@/views',
        'assets':'@/assets'
      },
      extensions:['.js','.css','.vue','.json','.jpg','.jpeg','.png','.gif']
    }
  }
}



