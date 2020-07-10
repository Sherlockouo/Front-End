import axios from 'axios'

export function request(config) {

  const instance = axios.create({
    baseURL: "http://music.sherlockouo.com",
    timeout: 50000
  })

  instance.interceptors.response.use(config=>{
    return config.data
  })

  return instance(config)
}