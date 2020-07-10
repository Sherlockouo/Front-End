import {request} from './netmusic'

let headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');
headers.append('Origin', 'https://autumnfish.cn');

// 获取musicUrl
export function searchMusic(keywords) {

  // return request({
  //   url: '/search',
  //   method: 'GET',
  //   headers: headers,
  //   params: {
  //     keywords:keywords
  //   }
  // })
  return request({
    url: '/personalized/newsong',
    method: 'GET',
    headers: headers,
  })
}