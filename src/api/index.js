import ajax from './ajax'

export const reqhomeData = () => ajax('/homedata');

export const reqcategory = () => ajax('/category');

export const reqcategorylist = () => ajax('/categorylist')

// // 搜索 关键字
// export const reqInitSearch = () => ajax({
//   url: "/xhr/search/init.json"
// })
// // 获取搜索结果
// export const reqSearchResult = (keyword) => ajax({
//   url: '/xhr/search/search.json',
//   params: {
//     keyword
//   }
// })
// export const reqTab = () => ajax({
//   url: '/topic/v1/find/getTabs.json'
// })
// export const reqFIndlist = () => ajax({
//   url: '/topic/v1/find/recManual.json'
// })