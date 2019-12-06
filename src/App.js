import React, { Component } from 'react';
// import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Admin from './admin';
import Login from './pages/Login/login';
import Register from './pages/Login/register';
import UIButton from './pages/UI/button.js';
import UIModal from './pages/UI/modal.js';


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
