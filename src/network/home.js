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

export function getRecommendGoods(type, page) {
    return request({
        url: '/out-site/home-recommend',
        params: {
            type,
            page
        }
    })
}