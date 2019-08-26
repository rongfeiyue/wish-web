import {get, post} from './axios'

let baseApi = 'http://localhost:8888'

// 查看详情
export const getDetail = (type, id) => {
  return get(`${baseApi}/a/${id}`)
}

export const submitArticle = (params) => {
  return post(`${baseApi}/a/submit`, params)
}

export const listArticle = (params) => {
  return post(`${baseApi}/a/list`, params)
}
