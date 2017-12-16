import React, {Component} from 'react'
import {Route, Router, Switch } from 'react-router-dom'
import * as AccountAPI from '../api/AccountAPI'
import ReactLoading from 'react-loading';
import HomePage from './HomePage';
import DashboardPage from './DashboardPage';
import {PrivateRoute} from '../routes'
import {NotificationDialog} from '../components/'
import {withStyles} from 'material-ui/styles';
import {history} from '../util';
import {compose} from 'recompose';
import {connect} from 'react-redux';
import {alertActions, notificationActions} from '../actions';
import OrderPage from './OrderPage';
import CreateOrderPage from './CreateOrderPage';

const styles = theme => ({});

class App extends Component {

  constructor(props) {
      super(props);

      const { dispatch } = this.props;

      history.listen((location, action) => {
          dispatch(alertActions.clear())
      });
  }

  render() {

    const {classes, alert, loader, notification} = this.props

    return (
      <div className="container">
        {loader.isLoading && <ReactLoading className="loader-container" type="bars" color="#66dbf9"/>}
        {notification.send && <NotificationDialog/>}
        <Router history={history}>
          <div>
            <Route exact path="/" component={HomePage}/>
            <Switch>
              <PrivateRoute exact path="/dashboard" component={DashboardPage}/>
              <PrivateRoute exact path="/dashboard/orders" component={OrderPage}/>
              <PrivateRoute exact path="/dashboard/orders/new" component={CreateOrderPage}/>
            </Switch>
          </div>
        </Router>
      </div>)
  }
}

function mapStateToProps(state) {
  const {alert, loader, notification } = state
  return {alert, loader, notification }
}

export default compose(withStyles(styles), connect(mapStateToProps))(App)
