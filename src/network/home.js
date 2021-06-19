import {request} from './request'
// 这里封装的目的：
  /*
    当需要请求的数据多，那么代码写在组件中，就会混乱，结构难看，
    所以我们将这个请求模块封装出来，解耦
  */
export function getHomeMultidata () {
  return request({
    url: '/home/multidata'
  })
}

// 请求tabControl的数据

export function getHomeTabData (type,page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}