import request from '@/utils/request'

export function getRoutes() {
  return request({
    method: 'get',
    url: '/routeLists'
  })
}