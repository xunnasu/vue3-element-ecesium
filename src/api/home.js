import request from '@/utils/request.js';

export function listHome(query) {
  return request({
    url: '/api/v1/home/data',
    method: 'get',
    params: query,
  });
}
