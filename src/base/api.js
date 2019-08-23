import {get} from './axios'

let baseApi = 'https://www.easy-mock.com/mock/5d5f93efa68da00ea817a11e/wishes'

// 查看详情
export const getDetail = (type, id) => {
  return get(`${baseApi}/${type}/detail/${id}`)
}
