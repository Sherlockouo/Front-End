import axios from 'axios'

export function request() {
  const instance = axios.create({
    baseURL:'http://music.sherlockouo.com',
    timeout:5000
  })
}