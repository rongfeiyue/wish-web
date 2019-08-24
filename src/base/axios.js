import axios from 'axios'
import router from '../router'
import { Loading } from 'element-ui'

const service = axios.create({
  timeout: 3000 // 超时时间
})

let loading = null

// request拦截器
service.interceptors.request.use(config => {
  // 登录信息
  loading = Loading.service({
    lock: true,
    fullscreen: true,
    text: 'Loading...',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)'
  })
  return config
}, error => {
  loading.close()
  return Promise.reject(error)
})

// response拦截器
service.interceptors.response.use(res => {
  loading.close()
  let result = res.data
  if (result.code === 200) {
    return result.data
  } else {
    router.replace({path: '/Error'})
  }
}, error => {
  loading.close()
  if (error.response.status === 404) {
    window.location.href = '/NotFound'
  } else {
    window.location.href = '/Error'
  }
})

export function get (url, params = {}) {
  params.t = new Date().getTime()
  return service({
    url: url,
    method: 'get',
    headers: {},
    params
  })
}

export function post (url, data = {}) {
  return service({
    url: url,
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    data: data
  })
}

export function put (url, data = {}) {
  return service({
    url: url,
    method: 'put',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    data: data
  })
}

export function del (url) {
  return service({
    url: url,
    method: 'delete'
  })
}
