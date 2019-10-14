import React, { Component } from 'react'
import './classify.styl'

export default class classify extends Component {
  componentDidMount(){
     
  }
  render() {
    return (
      <div className="classNameNameify common">
       <div className="header">
           <div className="searchInput" onClick="$router.push('/search')">
              <i className="iconfont icon-sousuo find"></i>
              <span className="placeholder">搜索商品，共xxxxx款好物</span>
          </div>
       </div>
         <div className="searchContent">
           <div className="search-left">
               <ul className="searchList">
                  <li className="searchItem" className={`searchItem ${index===current?'active':''}`} onClick={()=>{checkout(index)}} v-for="(categoryItem,index) in category.categoryL1List">
                      <span>{categoryItem.name}</span>
                  </li>
               </ul>
            </div>
           <div className="search-right">
            <div className="name">
              <div className="swiper-container">
                <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img src="https://yanxuan.nosdn.127.net/f00ff1a6f9e244efe43c77ee8331318f.jpg" alt="实时热销top100"/>
                </div>
                <div className="swiper-slide">
                  <img src="https://yanxuan.nosdn.127.net/8c06fc58e849da6cbaf2838d27f072f3.jpeg" alt="2019新品发布会"/>
                </div>
                </div>
                {/* <!-- 如果需要分页器 --> */}
                <div className="swiper-pagination"></div>
              </div>
              <div className="shopInfo">
                <ul className="shopInfoList" v-if="categoryList[current]">
                  <li className="shopInfoItem" v-for="(categoryItem,index) in categoryList[current].subCateList">
                    <img  src={categoryItem.wapBannerUrl} alt=""/>
                    <span className="text">{categoryItem.name}</span>
                  </li>
                </ul>  
              </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
