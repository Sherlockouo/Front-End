import {request} from "../network/request";

let headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');
headers.append('Origin', 'https://autumnfish.cn');

// 获取musicUrl
export function getMusicUrl(soongId) {

  return request({
    url: '/song/url',
    method: 'GET',
    headers: headers,
    params: {
     id:soongId
    }
  })
}
// 获取封面
export function getMusicCover(soongId) {

  return request({
    url: '/song/detail',
    method: 'GET',
    headers: headers,
    params: {
     ids:soongId
    }
  })
}
// 获取评论
export function getMusicComments(soongId) {

  return request({
    url: '/comment/hot',
    method: 'GET',
    headers: headers,
    params: {
      type:0,
     id:soongId
    }
  })
}

// 搜索音乐
export function searchMusic(keywords) {

  return request({
    url:'/search',
    method:'GET',
    headers:headers,
    params:{
      keywords:keywords
    }
  })
}
