import {requestPost, request} from './request'

export function getGoodInfo(id) {
    return requestPost({
        url: '/out-site/goods-info',
        data: {
            id
        }
    })
}