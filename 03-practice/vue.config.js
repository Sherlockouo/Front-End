module.exports ={
  configureWebpack:{
    resolve:{
      alias:{
        'components':'@/components',
        'views':'@/views',
        'assets':'@/assets'
      },
      extensions:['.js','.css','.vue','.json','.jpg','.jpeg','.png','.gif']
    }
  }
}