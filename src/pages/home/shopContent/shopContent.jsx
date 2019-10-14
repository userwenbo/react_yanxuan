import React, { Component } from 'react'


import './shopContent.styl'


export default class shopConent extends Component {
   componentDidMount(){
   }
  render() {
    return (
     <div>
        <div className="newPerson">
          <div className="head">
                <span>- 新人专享礼 -</span>
          </div> 
          <div className="newPerson-content">
              <div className="newPerson-left">
                <span>新人专享礼包</span>
                <img src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png"/>
              </div>
              <div className="newPerson-right">
                <div className="minImg">
                    <div className="title">
                        <span>福利社</span>
                        <span>今日特价</span>
                    </div>
                    <img src="https://yanxuan-item.nosdn.127.net/eddaeb4852b8a4732102eab839641c95.png?imageView&thumbnail=200x200&quality=75"/>
                </div>
                <div className="minImg orgin">
                  <div className="title">
                    <span>新人拼团</span>
                    <span>1元起包邮</span>
                    <img src="https://yanxuan-item.nosdn.127.net/bb9025c24057dfb89403055ac5b9f85c.png?imageView&thumbnail=200x200&quality=75"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-d">
          <div className="title-head">
            <span>品牌制造商直供</span>
            <span>更多></span>
          </div>
          <ul className="content-list">
            <li className="contentItem">
                <span>海外制造商</span>
                <span>9.9元起</span>
            </li>
            <li className="contentItem">
                <span>CK制造商</span>
                <span>29.9元起</span>
            </li>
            <li className="contentItem">
                <span>新秀丽制造商</span>
                <span>159元起</span>
            </li>
            <li className="contentItem">
                <span>Armaniu制造商</span>
                <span>199元起</span>
            </li>
          </ul>   
        </div>
        <div className="content-d">
          <div className="title-head">
            <span>品牌制造商直供</span>
            <span>更多></span>
          </div>
          <ul className="content-list">
            <li className="contentItem">
                <span>海外制造商</span>
                <span>9.9元起</span>
            </li>
            <li className="contentItem">
                <span>CK制造商</span>
                <span>29.9元起</span>
            </li>
            <li className="contentItem">
                <span>新秀丽制造商</span>
                <span>159元起</span>
            </li>
            <li className="contentItem">
                <span>Armaniu制造商</span>
                <span>199元起</span>
            </li>
          </ul>
          
        </div>
        <div className="content-d">
          <div className="title-head">
            <span>品牌制造商直供</span>
            <span>更多></span>
          </div>
          <ul className="content-list">
            <li className="contentItem">
                <span>海外制造商</span>
                <span>9.9元起</span>
            </li>
            <li className="contentItem">
                <span>CK制造商</span>
                <span>29.9元起</span>
            </li>
            <li className="contentItem">
                <span>新秀丽制造商</span>
                <span>159元起</span>
            </li>
            <li className="contentItem">
                <span>Armaniu制造商</span>
                <span>199元起</span>
            </li>
          </ul>
          
        </div>
    </div>
    )
  }
}
