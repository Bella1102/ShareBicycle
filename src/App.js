import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Admin from './admin';
import Common from './common';
import NoMatch from './pages/nomatch';
import Home from './pages/Home';
import UIButton from './pages/UI/button';
import UIModal from './pages/UI/modal';
import UILoading from './pages/UI/loading';
import UINotification from './pages/UI/notice';
import UIMessage from './pages/UI/message';
import UITab from './pages/UI/tab';
import UIGallery from './pages/UI/gallery';
import UICarousel from './pages/UI/carousel';

import Login from './pages/Form/login';
import Register from './pages/Form/register';
import BasicTable from './pages/Table/basicTable';
import AdvancedTable from './pages/Table/advancedTable';
import BarChart from './pages/Chart/chartBar';
import PieChart from './pages/Chart/chartPie';
import LineChart from './pages/Chart/chartLine';
import RichText from './pages/Main/richText';

import City from './pages/Main/city';
import Staff from './pages/Main/staff';
import Order from './pages/Main/order';
import OrderDetail from './pages/Main/orderDetail';
import BikeMap from './pages/Main/bikeMap';
import Permission from './pages/Main/permission';



class App extends Component {

    render() {
      return (
        <BrowserRouter> 
          <Switch>
              <Route path='/login' exact component={ Login }></Route>
              <Route path='/register' exact component={ Register }></Route>
              <Route path="/common" render = {() =>
                <Common>
                  <Route path="/common/order/detail/:orderId" component={ OrderDetail }></Route>
                </Common> }>
              </Route>
              <Route path='/' render = {() => 
                <Admin>
                  <Switch>
                    <Route path='/' exact component={ Home }></Route>
                    <Route path='/home' exact component={ Home }></Route>
                    {/* UI */}
                    <Route path='/ui/buttons' exact component={ UIButton }></Route>
                    <Route path='/ui/modals' exact component={ UIModal }></Route>
                    <Route path='/ui/loadings' exact component={ UILoading }></Route>
                    <Route path='/ui/notifications' exact component={ UINotification }></Route>
                    <Route path='/ui/messages' exact component={ UIMessage }></Route>
                    <Route path='/ui/tabs' exact component={ UITab }></Route>
                    <Route path='/ui/gallery' exact component={ UIGallery }></Route>
                    <Route path='/ui/carousel' exact component={ UICarousel }></Route>
                    {/* Form */}
                    <Route path='/form/login' exact component={ Login }></Route>
                    <Route path='/form/register' exact component={ Register }></Route>
                    {/* Table */}
                    <Route path='/table/basic' exact component={ BasicTable }></Route>
                    <Route path='/table/advanced' exact component={ AdvancedTable }></Route>
                    {/* Chart */}
                    <Route path='/chart/bar' exact component={ BarChart }></Route>
                    <Route path='/chart/pie' exact component={ PieChart }></Route>
                    <Route path='/chart/line' exact component={ LineChart }></Route>
                    <Route path='/richtext' exact component={ RichText }></Route>
                    {/* main function */}
                    <Route path='/city' exact component={ City }></Route>
                    <Route path='/staff' exact component={ Staff }></Route>
                    <Route path='/order' exact component={ Order }></Route>
                    <Route path='/bikemap' exact component={ BikeMap }></Route>
                    <Route path='/permission' exact component={ Permission }></Route>
                    <Route component={ NoMatch }></Route>
                  </Switch>
                </Admin> }>
              </Route>
          </Switch>
        </BrowserRouter>
      )
  } 
}

export default App;

