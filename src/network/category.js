import {request} from './request'

// 侧边栏导航等数据
export function getCategory () {
  return request({
    url: '/category'
    //有错误这里直接捕捉
  }).catch(err => err)  
}

// 右侧图文等数据
export function getSubcategory (maitKey) {
  return request({
    url: '/subcategory',
    params: {
      maitKey
    }
  }).catch(err => err)
}

// 右侧下方三个分类数据
export function getSubCategoryDetail(miniWallkey,type) {
  return request({
    url: '/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  }).catch(err => err)
}