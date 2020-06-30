import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Pages from './pages';
import { ToastProvider } from './infrastructure/toastr'


// Every route should be registered here and on your specific router component (app, auth, etc...)
class Routes extends Component {
  render() {
    return (
      <ToastProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Pages.Home} />

            <Route exact path='/*' component={Pages.NotFound} />
          </Switch>
        </BrowserRouter>
      </ToastProvider>
    );
  }
}

export default Routes;
