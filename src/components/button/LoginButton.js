import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import LoginForm from '../form/LoginForm';
import Grid from 'material-ui/Grid';
import Dialog, {DialogActions, DialogContent, DialogContentText, DialogTitle} from 'material-ui/Dialog';
import {withStyles} from 'material-ui/styles';
import {connect} from 'react-redux';
import {compose} from 'recompose';
import {history} from '../../util';

const styles = theme => ({
  loginButton: {
    color: "white",
    backgroundColor: "transparent",
    border: "1px",
    borderColor: "white",
    borderStyle: "solid",
    fontFamily: "Roboto",
    fontWeight: "500",
    '&:hover': {
      backgroundColor: "transparent",
      borderColor: "#66dbf9",
      color: "#58D3F7"
    }
  },
})

class LoginButton extends Component {

  constructor(props) {
      super(props);

      // const needLogin = history.location && history.location.state && history.location.state.needLogin
      this.state = {
        open: false || props.openLoginButton
      };

  }

  handleClickOpen = () => {
    this.setState({open: true});
  };

  handleRequestClose = () => {
    this.setState({open: false});
  };

  render() {

    const {classes} = this.props;

    return (<div>
      <Button raised className={classes.loginButton} onClick={this.handleClickOpen}>
        Login
      </Button>
      <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
        <LoginForm/>
      </Dialog>
    </div>);
  }
}

function mapStateToProps(state) {

    const { loader } = state

    return {
      loader
    }
}

export default compose(withStyles(styles), connect(mapStateToProps))(LoginButton);
