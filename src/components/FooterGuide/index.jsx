import React, { Component } from 'react'
import { withRouter} from "react-router-dom";
import  './index.styl'

 class FooterGuide extends Component {
      
  render() {
     const path=this.props.location.pathname
    return (
      <div className="footer">
        <div className={`footerItem ${this.props.location.pathname==='/home'?'active':null}`} onClick={()=>this.props.history.push('/home')}>
          <span className="iconfont icon-home"></span>
          <span className="text">首页</span>
        </div>
        <div className={`footerItem ${this.props.location.pathname==='/classify'?'active':null}`} onClick={()=>this.props.history.push('/classify')}>
          <span className="iconfont icon-leimupinleifenleileibie"></span>
          <span className="text">分类</span>
        </div>
        <div className={`footerItem ${this.props.location.pathname==='/find'?'active':null}`} onClick={()=>this.props.history.push('/find')}>
          <span className="iconfont icon-faxian"></span>
          <span className="text">识物</span>
        </div>
        <div className={`footerItem ${this.props.location.pathname==='/shopCart'?'active':null}`} onClick={()=>this.props.history.push('/shopCart')}>
          <span className="iconfont icon-gouwuche"></span>
          <span className="text">购物车</span>
        </div>
        <div className={`footerItem ${this.props.location.pathname==='/personal'?'active':null}`} onClick={()=>this.props.history.push('/personal')}>
          <span className="iconfont icon-person"></span>
          <span className="text">个人</span>
        </div>
      </div>
    );
  }
}
export default withRouter(FooterGuide)
