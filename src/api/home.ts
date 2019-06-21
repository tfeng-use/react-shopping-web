import request from '../utils/request'

export function getList (obj?:any) {
  return request({
    url: '/goods',
    method: 'get',
    // params: obj,
  } as any)
}