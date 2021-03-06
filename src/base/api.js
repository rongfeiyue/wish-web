import {get, post} from './axios'

let baseApi = '/api'

// 查看详情
export const getDetail = (type, id) => {
  return get(`${baseApi}/a/${id}`)
}

// 提交
export const submitArticle = (params) => {
  return post(`${baseApi}/a/submit`, params)
}

// 查询文章列表
export const listArticle = (params) => {
  return post(`${baseApi}/a/list`, params)
}

export const login = (params) => {
  return post(`${baseApi}/u/login`, params)
}

export const saveUser = (params) => {
  return post(`${baseApi}/u/save`, params)
}
