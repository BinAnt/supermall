import {request} from './request'

export function getBanner() {
    return request({
        url: '/out-site/get-banner'
    })
}