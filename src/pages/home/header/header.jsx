import React, { Component } from 'react'
import  './header.styl'
import {withRouter} from "react-router-dom";
import BScroll from "better-scroll";
class Header extends Component {
    
    state={
      arr:['推荐','居家生活','服饰鞋包','美食酒水','个护清洁','母婴亲子','运动旅行','数码家电','全球特色'],
      isShowTab:false,
      current:0
    }
    toggle=()=>{
      this.setState({
        isShowTab:!this.state.isShowTab
      })
    }
    tggleShow=(index)=>{
      this.setState({
        current:index
      })
    }
    componentDidMount(){
        let scroll = new BScroll(".header-bottom", {
          scrollX: true,
          click: true
        })
    
    }
  render() {
    // const arr=this.state.arr
    // console.log(arr)
    const isShowTab=this.state.isShowTab
    return (
      <div className="header">
        <div className="header-top">
          <a href="javascript:" className="logo">
            <img
              src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png"
              alt="logo"
            />
          </a>
          <div className="searchInput">
            <i className="iconfont icon-sousuo find"></i>
            <span className="placeholder">搜索商品，共xxxxx款好物</span>
          </div>
          <button>登录</button>
        </div>
        <div className="nav">
          <div className={`header-bottom wrapper ${isShowTab ? "show" : ""}`}>
            <ul>
              {this.state.arr.map((item, index) => (
                <li key={index}
                 className={`item ${this.state.current===index?'on':''}`}
                  onClick={()=>{this.tggleShow(index)}}>
                  <span>
                    <span>{item}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="toggleWrap" onClick={this.toggle}>
            <i
              className={`iconfont ${
                this.state.isShowTab ? "icon-toTop" : "icon-toBottom"
              }`}
            ></i>
          </div>
          <div className={`tabWrap ${!isShowTab ? "show" : ""}`}>
            <div className="tabWrap-nav">
              <span>全部频道</span>
            </div>
            <div className="tabWrap-list">
              <ul>
                {this.state.arr.map((item, index) => (
                  <li key={index} className="item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default withRouter(Header)