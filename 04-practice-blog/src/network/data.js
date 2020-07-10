import {request} from './netmusic'

let headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');
headers.append('Origin', 'https://sherlockouo.com');

// 获取musicUrl
export function recommendMusic(keywords) {


  return request({
    url: '/personalized/newsong',
    method: 'GET',
    headers: headers,
  })
}