import { request } from './request'

export function getDetail(iid) {
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}

export function getDetailsGoodsList () {
    return request({
      url: '/recommend'
    })
}

export class BaseInfo {
    constructor(itemInfo, services, columns) {
        this.desc = itemInfo.desc;
        this.discountDesc = itemInfo.discountDesc;   
        this.oldPrice = itemInfo.oldPrice;  
        this.newPrice = itemInfo.price;  
        this.title = itemInfo.title;   
        this.columns = columns;
        this.services = services;
        this.NowPrice=itemInfo.lowNowPrice
    }
}

export class ShopInfo{
    constructor(shopInfo){
        this.logo=shopInfo.shopLogo
        this.name=shopInfo.name
        this.fans=shopInfo.cFans
        this.sells=shopInfo.cSells
        this.score=shopInfo.score
        this.goodsCount=shopInfo.cGoods
    }
}

export class SizeInfo {
    constructor (info,rule) {
      // images可能没有值(某些商品有值，有些商品没有)
      this.image = info.images ? info.images[0] : '';
      this.infos = info.set;
      this.sizes = rule.tables;
    }
}
