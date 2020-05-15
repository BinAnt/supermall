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