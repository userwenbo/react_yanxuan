import React, { Component } from 'react'
import './shopnav.styl'
import {reqhomeData} from "../../../api";

export default class ShopNav extends Component {
   state={
     navList:[]
   }
  async componentDidMount(){
     const result=await reqhomeData()
     const homeData=result.data
     this.setState({
       navList:homeData.kingKongModule.kingKongList
     })
  }
  render() {
    const {navList}=this.state
    console.log("11",this.state)
    return (
      <div className="nav">
        <div className="nav-top">
              <span className="text">网易自营品牌</span>                                                   
              <span className="text">30天无忧退货</span>      
              <span className="text">48小时快速退款</span> 
        </div>
        <div className="nav-content">
            <ul className="navList">
              {
                navList.map((item,index)=>(
                     <li className="navItem" key={index}>
                      <img src={item.picUrl}/>
                      <span>{item.text}</span>
                    </li>
                ))
              }
            </ul>
        </div>
      </div>
    )
  }
}
