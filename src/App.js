import React, { Component } from 'react';
// import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Admin from './admin';
import UIButton from './pages/UI/button.js';
import UIModal from './pages/UI/modal.js';
import Login from './pages/Login/login';
import Register from './pages/Login/register';
import BasicTable from './pages/Table/basicTable';
import AdvanceTable from './pages/Table/advanceTable';
import City from './pages/Main/city';
import BarChart from './pages/Chart/chartBar';
import PieChart from './pages/Chart/chartPie';
import LineChart from './pages/Chart/chartLine';



class App extends Component {
    render() {
      return (
        <BrowserRouter> 
          <Switch>
              <Route path='/' exact component={ Admin }></Route>
              <Route path='/admin' render = {() => 
                <Admin>
                   <Route path='/admin/ui/buttons' component={ UIButton }></Route>
                   <Route path='/admin/ui/modals' component={ UIModal }></Route>
                   <Route path='/admin/form/login' exact component={ Login }></Route>
                   <Route path='/admin/form/reg' exact component={ Register }></Route>
                   <Route path='/admin/table/basic' exact component={ BasicTable }></Route>
                   <Route path='/admin/table/advance' exact component={ AdvanceTable }></Route>
                   <Route path='/admin/city' exact component={ City }></Route>
                   <Route path='/admin/charts/bar' exact component={ BarChart }></Route>
                   <Route path='/admin/charts/pie' exact component={ PieChart }></Route>
                   <Route path='/admin/charts/line' exact component={ LineChart }></Route>
                </Admin>
              }></Route>
              <Route path='/login' exact component={ Login }></Route>
              <Route path='/Register' exact component={ Register }></Route>
          </Switch>
        </BrowserRouter>
      )
  } 
}

export default App;

