import React from 'react';
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'
import  './App.styl'

import Home from './pages/home/home'
import Classify from './pages/classify/classify'
import Find from './pages/find/find'
import ShopCart from './pages/shopCart/shopCart'
import Personal from './pages/personal/personal'
import Search from './pages/search/search'
import FooterGuide from './components/FooterGuide'

function App() {
  return (
    <div className="App">
        <div className="content">
          <BrowserRouter>
             <Switch>
                <Route path="/home" component={Home}></Route>
                <Route path="/classify" component={Classify}></Route>
                <Route path="/find" component={Find}></Route>
                <Route path="/shopCart" component={ShopCart}></Route>
                <Route path="/personal" component={Personal}></Route>
                <Route path="/search" component={Search}></Route>
                <Redirect to="/home"></Redirect>
             </Switch>
             <FooterGuide></FooterGuide>
          </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
