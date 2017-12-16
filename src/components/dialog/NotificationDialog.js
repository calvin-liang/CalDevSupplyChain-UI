import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import { VerifiedUser } from 'material-ui-icons';
import { notificationActions } from '../../actions'
import Button from 'material-ui/Button';
import Dialog, {
  DialogContent,
  DialogContentText,
  DialogActions,
  DialogTitle,
  withMobileDialog,
} from 'material-ui/Dialog';

const styles = theme => ({
  root: {
    textAlign: 'center',
    textJustify: 'inter-word',
  },
  closeButton: {
    color: "black",
    backgroundColor: "#58D3F7",
    fontFamily: "Roboto",
    fontWeight: "500",
    '&:hover': {
      color: "black",
      backgroundColor: "#58D3F7",
      fontFamily: "Roboto",
      fontWeight: "500",
    }
  },
})

class NotificationDialog extends Component {

  state = {
    open: true
  }

  handleRequestClose = () => {
    this.setState({ open: false });
    this.props.dispatch(notificationActions.clear())
  };

  render() {

    const {classes, iconName, title, contentText} = this.props

    return (
        <Dialog
          classes={{
            root: classes.root
          }}
          fullScreen={false}
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
        >
          <DialogTitle>
            {iconName == 'verifiedUserIcon' && <VerifiedUser style={{color: 'black', fill: '#5ed4f5', fontSize: 10}}/>}
            {title}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              {contentText}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleRequestClose} className={classes.closeButton}>
              Close
            </Button>
          </DialogActions>
        </Dialog>
    );
  }
}


function mapStateToProps(state) {
    return { ...state.notification }
}

export default compose(
  withStyles(styles),
  withMobileDialog(),
  connect(mapStateToProps)
)(NotificationDialog);
