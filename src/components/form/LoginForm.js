import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import Icon from 'material-ui/Icon'
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';
import Fade from 'material-ui/transitions/Fade';
import Card, { CardHeader, CardActions, CardContent, CardMedia } from 'material-ui/Card';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import { FormControl } from 'material-ui/Form';
import { InputAdornment } from 'material-ui/Input';
import { LinearProgress, CircularProgress } from 'material-ui/Progress';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { Visibility, VisibilityOff, Warning } from 'material-ui-icons';
import { validateEmail, history } from '../../util';
import { compose } from 'recompose';
import { userActions, alertActions, notificationActions } from '../../actions';
import '../../index.css'

const theme = createMuiTheme({
  overrides: {
    MuiInput: {
      underline: {
        '&:hover:not(.foo):before': {
          background: '#8e9192',
          height: 2,
        },
      },
      inkbar: {
        '&:before:': {
            backgroundColor: '#8e9192',
            borderRadius: 4
        },
        '&:after': {
            backgroundColor: '#8e9192',
            borderRadius: 4
        },
        '&:focus': {
            backgroundColor: '#8e9192',
            borderRadius: 4
        }
      }
    },
 }
});

const styles = theme => ({
  overridePrimaryColorBar: {
    backgroundColor: '#58D3F7'
  },
  textFieldContainer: {
    width: 200,
  },
  input: {
      marginTop: 5,
      padding: '10px 10px',
      background: '#f4f9fb',
      borderRadius: 4,
      fontSize: 16,
  },
  errorInput: {
      marginTop: 5,
      padding: '10px 10px',
      background: '#fbf4f9',
      borderRadius: 4,
      fontSize: 16,
  },
  inputLabel: {
    color: '#22252a',
    fontWeight: 500,
    fontSize: 18,
  },
  errorInputLabel: {
    color: '#fc3f63',
    fontWeight: 500,
    fontSize: 18,
  },
  inputLabelFocused: {
    color: '#22252a',
    fontWeight: 500,
    fontSize: 18
  },
  iconRoot: {
    fontSize: 30,
    color: '#22252a',
    position: 'relative',
    left: -5,
    top: 10,
  },
  passwordEyeIconRoot: {
    color: '#22252a',
    position: 'absolute',
    fontSize: 20,
    top: 28,
    right: 3,
    backgroundColor: 'transparent'
  },
  cardButtonRoot: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    background: '#22252a',
  },
  loginButton: {
    width: 200,
    paddingLeft: 10,
    color: "black",
    backgroundColor: "#58D3F7 !important",
    '&:hover': {
      backgroundColor: "#58D3F7 !important",
    },
    fontWeight: "500",
  },
  disableButton: {
    width: 200,
    paddingLeft: 10,
    color: "grey",
    backgroundColor: "#d6d6d6 !important",
    fontWeight: "500"
  },
  circularButtonProgress: {
    color: "#16c1f1",
    position: 'absolute',
    alignItems: 'center',
    marginLeft: -12,
  },
  passwordListRootContainer: {
    fontWeight: 400,
  },
  passwordListItemContainer: {
    padding: 0,
  },
  warningIconRoot: {
    width: 18,
    height: 18,
  },
  warningItemTextRoot: {
    marginLeft: -5,
    padding: 0,
    fontSize: 10,
  },
  blackColor: {
    color: '#22252a',
    fontWeight: 500,
  },
  greenColor: {
    color: '#28c29a',
    fontWeight: 750,
  },
  alertBar: {
    margin: theme.spacing.unit,
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#fbf4f9',
    color: 'red'
  }
})

class LoginForm extends Component {

  constructor(props) {
      super(props);

      this.state = {

        emailAddress: '',
        password: '',
        showPassword: false,

        formError: true,
        emailError: false,
        passwordError: false,

        open: false,

      }
  }

  getButtonName = () => {
    if (this.props.success) {return `Success`}
    else if (this.props.logining) {
      return `Submitting...`;
    }
    else {
      return `Submit`;
    }
  }

  handleMouseDownPassword = e => e.preventDefault()

  handleClickShowPasssword = () => this.setState({ showPassword: !this.state.showPassword })

  handleEmailInput = e => {
    let email = e.target.value
    return this.setState({ emailAddress: email }, this.validateEmailInput(email))
  }

  validateEmailInput = email => this.setState({emailError: validateEmail(email)}, this.validateFormInput())

  handlePasswordInput = e => {
    let password = e.target.value
    return this.setState({ password, passwordError: password.length < 8}, () => this.validateFormInput())
  }

  validateFormInput = () => {
    let { emailAddress, password, emailError, passwordError } =  this.state
    return this.setState({formError: !emailAddress || emailError || !password || passwordError})
  }

  handleLoginFormSubmit = e => {

    const {emailAddress, password, formError } =  this.state

    if(!formError && !this.props.logining) {
      this.props.dispatch(userActions.login(emailAddress, password))
    }

  };

  handleCloseLoginForm = () =>  {
    this.setState({ open: false })
    this.props.dispatch(alertActions.clear())
  }

  render() {

    const { classes, user, logining, error } = this.props

    let disableCondition = this.state.formError || this.props.logining || this.props.success
    const loginButtonClassName = disableCondition ? classes.disableButton: classes.loginButton

    return (
      <MuiThemeProvider theme={theme}>
        {error &&
          error.map((e, i) => (
              <Snackbar
                key={e.code+i}
                open={error ? true: false}
                onRequestClose={this.handleCloseLoginForm}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                transition={Fade}
                SnackbarContentProps={{
                  className: classes.alertBar,
                  'aria-describedby': 'alert-id',
                }}
                message={e.message}
              />
          ))
        }
        {
          <div className="login-form">
            {this.props.logining &&
              <LinearProgress style={{backgroundColor: "#b2edfc"}}
                classes={{
                  primaryColorBar: classes.overridePrimaryColorBar
                }}
              >
              </LinearProgress>
            }
            <form onSubmit={this.handleLoginFormSubmit}>
              <Card className="login-form-root">
                <div className="login-form-field-container">
                  <CardHeader
                    className="login-form-header"
                    title={
                      <div className="login-form-header-title">
                        <h3>Login</h3>
                      </div>
                    }
                  />
                  <CardContent className="signup-form-body-container">
                    <div className="form-text-field-container">
                      <Icon classes={{
                        root: classes.iconRoot
                      }}>
                        email
                      </Icon>
                      <TextField
                        id="emailAddress"
                        label="Email"
                        margin="normal"
                        required
                        value={this.state.emailAddress}
                        helperText={this.state.emailError && `⚠️ Please enter a valid email.`}
                        onChange={this.handleEmailInput}
                        onBlur={this.handleEmailInput}
                        onKeyUp={this.handleEmailInput}
                        onPaste={this.handleEmailInput}
                        className={classes.textFieldContainer}
                        labelClassName={!this.state.emailError ? classes.inputLabel: classes.errorInputLabel }
                        InputLabelProps={{
                          shrink: true
                        }}
                        error={this.state.emailError}
                        InputProps={{
                          classes: {
                            input: !this.state.emailError ? classes.input: classes.errorInput,
                          }
                        }}
                      />
                    </div>
                    <div className="form-text-field-container">
                      <Icon classes={{
                        root: classes.iconRoot
                      }}>
                        lock
                      </Icon>
                      <TextField
                        id="password"
                        label="Password"
                        margin="normal"
                        required
                        value={this.state.password}
                        type={this.state.showPassword ? 'text' : 'password'}
                        onChange={this.handlePasswordInput}
                        onBlur={this.handlePasswordInput}
                        onKeyUp={this.handlePasswordInput}
                        onPaste={this.handlePasswordInput}
                        helperText={this.state.passwordError && `⚠️ Password must be at least 8 characters`}
                        className={classes.textFieldContainer}
                        labelClassName={!this.state.passwordError ? classes.inputLabel: classes.errorInputLabel }
                        InputLabelProps={{
                          shrink: true
                        }}
                        error={this.state.passwordError}
                        InputProps={{
                          classes: {
                            input: !this.state.passwordError ? classes.input: classes.errorInput,
                          },
                          endAdornment:
                          <InputAdornment position="end"
                            classes={{
                              root: classes.passwordEyeIconRoot
                            }}
                          >
                            <Icon
                              onClick={this.handleClickShowPasssword}
                              onMouseDown={this.handleMouseDownPassword}
                            >
                            {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                            </Icon>
                          </InputAdornment>
                        }}
                      />
                    </div>
                  </CardContent>
                  <div className="login-form-button-container">
                    <CardActions
                      classes={{
                        root: classes.cardButtonRoot
                      }}
                      >
                      <Button
                        raised
                        disabled={disableCondition}
                        className={loginButtonClassName}
                        onClick={this.handleLoginFormSubmit}
                      >
                        {this.getButtonName()}
                      </Button>
                      {this.props.logining && <CircularProgress size={40} className={classes.circularButtonProgress}/>}
                    </CardActions>
                  </div>
                </div>
            </Card>
            </form>
          </div>
        }
      </MuiThemeProvider>
    )
  }
}

function mapStateToProps(state) {
    const { error } = state.alert
    const { logining, success } = state.authentication

    return {
      error,
      logining,
      success
    }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(LoginForm);
