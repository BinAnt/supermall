import {requestPost, request} from './request'
import {getImgUrl} from 'common/utils'

export function getGoodInfo(id) {
    return requestPost({
        url: '/out-site/goods-info',
        data: {
            id
        }
    })
}

export class goods {
    constructor(goodInfo) {
        this.price_year = goodInfo.keep[0].price_year
        this.price_normal = goodInfo.keep[0].price_normal
        this.price_gold = parseFloat(goodInfo.keep[0].price_gold) == 0 ? (this.price_normal * 0.85).toFixed(2) : goodInfo.keep[0].price_gold
        this.title = goodInfo.name
    }
}

export class detailIntroduce {
    constructor(goodInfo) {
        console.log(goodInfo);
        
        this.pictures = JSON.parse(goodInfo.detail).map(item => {
            return getImgUrl(item, 'biggerImg')
        })

        this.code = goodInfo.code
        this.alias_name = goodInfo.alias_name
        this.brand_name = goodInfo.brand_name
        this.category_name = goodInfo.category_name
        this.property_name = goodInfo.extra[goodInfo.keep[0].id].property_name
    }
}