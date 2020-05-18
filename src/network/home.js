import {request, requestPost} from './request'
const qs = require('qs');

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
    return requestPost({
        url: '/out-site/home-recommend',
        method: 'post',
        data: {
            type,
            page
        }
    })
}