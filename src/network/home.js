import {request} from './request'

export function getBanner() {
    return request({
        url: '/out-site/get-banner'
    })
}

export function getRecommendSite() {
    return request({
        url: '/out-site/recommend-site'
    })
}