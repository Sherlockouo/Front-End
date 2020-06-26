import {request} from "./request";


export function getLyric() {
  let headers = new Headers();

  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');
  headers.append('Origin', 'http://music.junyuewl.com');

  return request({
    url:'v1/lyric',
    methods:'GET',
    headers:headers,
    params:{
      id:25643093,
      from:'music'
    }
  })
}
