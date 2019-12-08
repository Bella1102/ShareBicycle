import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Admin from './admin';
import Home from './pages/Home';
import UIButton from './pages/UI/button.js';
import UIModal from './pages/UI/modal.js';
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
              <Route path='/' render = {() => 
                <Admin>
                  <Route path='/home' component={ Home }></Route>
                  <Route path='/ui/buttons' component={ UIButton }></Route>
                  <Route path='/ui/modals' component={ UIModal }></Route>
                  <Route path='/form/login' exact component={ Login }></Route>
                  <Route path='/form/register' exact component={ Register }></Route>
                  <Route path='/table/basic' exact component={ BasicTable }></Route>
                  <Route path='/table/advanced' exact component={ AdvancedTable }></Route>
                  <Route path='/chart/bar' exact component={ BarChart }></Route>
                  <Route path='/chart/pie' exact component={ PieChart }></Route>
                  <Route path='/chart/line' exact component={ LineChart }></Route>
                  <Route path='/richtext' exact component={ RichText }></Route>
                  <Route path='/city' exact component={ City }></Route>
                  <Route path='/staff' exact component={ Staff }></Route>
                  <Route path='/order' exact component={ Order }></Route>
                  <Route path='/bikemap' exact component={ BikeMap }></Route>
                  <Route path='/permission' exact component={ Permission }></Route>
                </Admin>}>
              </Route>
              <Route path='/order/detail/:orderId' component={ OrderDetail }></Route>
          </Switch>
        </BrowserRouter>
      )
  } 
}

export default App;

