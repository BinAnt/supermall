import Const from './const'

export function getImgUrl(imgName, style="", width=''){
    if (!imgName) {
      return imgName;
    }

    if (imgName.indexOf('https') != -1) {
      return imgName;
    }

    var imgStyle = '';
    if (width) {
      imgStyle = '?x-oss-process=image/resize,m_fixed,w_'+width;
    }else{
      switch (style){
        case 'bigImg':
          imgStyle = Const.bigImg;
          break;
        case 'midImg':
          imgStyle = Const.midImg;
          break;
        case 'smallImg':
          imgStyle = Const.smallImg;
          break;
        case 'biggerImg':
          imgStyle = Const.biggerImg;
          break;
        default:
          imgStyle = Const.smallImg;
          break;
      }
    }
    
    return Const.imgUrl + '/' + imgName + imgStyle
  }

export function formatGoodsInfo(lists) {
  return lists.map(listItem => {
    let item = listItem.item;
    let pictures = JSON.parse(item.picture);
    item.img_url = getImgUrl(pictures[item.first_picture], 'bigImg')

    return item;
  })
}

/**
* 防抖函数
* fn 事件触发的操作
* delay 多少毫秒内连续触发事件，不会执行
*/
export function debounce(fn, delay) {
   let timer = null;
   
   return function(...args) {
       let self = this;
       timer && clearTimeout(timer);
       timer = setTimeout(() => {
           fn.apply(self, args)
       }, delay)
   }
}

  /**
   * 节流函数
   * fn 事件触发的操作
   * mustDelay 间隔多少毫秒需要触发一次事件
   */
  export function throttle(fn, mustDelay) {
    let timer,
        start = 0;
    return function(...args) {
        let now = new Date().getTime(),
            self = this;
        if(now > start + mustDelay) {
            fn.apply(self, args)
            start = now;
        }
    }
}