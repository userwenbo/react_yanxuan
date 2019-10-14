import React, { Component } from 'react'

import BScroll from "better-scroll";
import Header from './header/header'
import MySwiper from "../../components/swiper/swiper";
import ShopNav from './shopnav/shopnav'
import ShopContent from "./shopContent/shopContent";
import HomeFooter from "./homefooter/homefooter";
import "./home.styl";

export default class Home extends Component {

   componentDidMount(){
     new BScroll(".home", {
       scrollY: true,
       click: true
     });
   }
  render() {
    return (
      <div className="home common active">
        <div className="home-content">
          <MySwiper />
          <ShopNav />
          <ShopContent />
          <HomeFooter />
        </div>
        <Header />
      </div>
    );
  }
}
