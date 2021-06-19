import axios from 'axios'

export function request(config) {
  // 1、创建axios的实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/w6',
    timeout: 50000
  })

  // 2、axios拦截器
  // 请求拦截
  instance.interceptors.request.use(config => {
    // 执行相关操作
    // 返回拦截
    return config
  }, err => {
    // 拦截失败，执行操作
  })

  // 响应拦截
  instance.interceptors.response.use(res => {
    // res是响应返回的结果，拦截执行操作
    // 返回时只要返回.data就够了
    return res.data;
  }, err => {
    // 响应失败，执行操作
  })

  // 3、返回
  return instance(config);

}