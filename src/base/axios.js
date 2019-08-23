import axios from 'axios'

const service = axios.create({
  timeout: 3000 // 超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  return config
}, error => {
  Promise.reject(error)
})

// response拦截器
service.interceptors.response.use(res => {
  let result = res.data
  console.log('--------------')
  console.log(result)
  if (result.code === 200) {
    return result.data
  } else {
    console.log('error')
    // window.location.href = '/Error'
  }
}, error => {
  if (error.response.status === 404) {
    // window.location.href = '/NotFound'
  } else {
    // window.location.href = '/Error'
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
