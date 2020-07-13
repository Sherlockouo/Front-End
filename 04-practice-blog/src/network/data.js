import {request} from './netmusic'

let headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');
headers.append('Origin', 'https://sherlockouo.com');

// 获取推荐音乐
export function recommendMusic(keywords) {


  return request({
    url: '/personalized/newsong',
    method: 'GET',
    headers: headers,
  })
}

export function getMusicUrl(id) {


  return request({
    url: '/song/url',
    method: 'GET',
    headers: headers,
    params:{
      id:id
    }
  })
}

export function searchMusic(keywords) {


  return request({
    url: '/search',
    method: 'GET',
    headers: headers,
    params:{
      keywords:keywords
    }
  })
}