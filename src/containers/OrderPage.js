import React from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import {DashboardFrame, SearchBar} from '../components'
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Dialog from 'material-ui/Dialog';
import {history} from '../util';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui-icons/StarBorder';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
  },
  createNewOrderButton: {
    marginLeft: theme.spacing.unit * 1,
    marginRight: theme.spacing.unit * 1,
    color: "#292c34",
    borderRadius: 25,
    cursor: 'pointer',
    backgroundColor: "#66dbf9",
    '&:hover': {
      backgroundColor: "white",
    }
  },
  helpButton: {
    marginLeft: theme.spacing.unit * 1,
    marginRight: theme.spacing.unit * 1,
    color: "#292c34",
    borderRadius: 25,
    cursor: 'pointer',
    backgroundColor: "white",
  },
  subSectionRootContainer: {
    width: '100vw',
    backgroundColor: theme.palette.background.default,
    paddingTop: theme.spacing.unit * 0.5,
    paddingBottom: theme.spacing.unit * 0.5,
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      width: '100vw',
      marginTop: 64,
    },
  },
  subSectionContainer: {
    padding: theme.spacing.unit * 0.5,
  },
  subSectionButtonContainer: {
    paddingLeft: theme.spacing.unit * 5
  },
  subSectionTitle: {
    marginLeft: theme.spacing.unit * 2.5
  },

  contentClassName: {
      marginLeft: 220,
      height: '100vh',
  },

});

class OrderPage extends React.Component {
  state = {
    mobileOpen: false,
    nestedAccountListOpen: false,
  };

  handleCreateNewOrderButtonClick = () => {
      history.push('/dashboard/orders/new')
  }

  handleHelpButtonClick = () => {

  }

  render() {
    const { classes, theme } = this.props;
    return (
      <div className={classes.root}>
        <DashboardFrame
          appBarTitle={`Orders`}
          content={
          <div className={classes.contentClassName}>
            <div className={classes.subSectionRootContainer}>
              <Grid container alignItems="center" justify="center" className={classes.subSectionContainer}>
                <Grid item xs={2}>
                  <Typography className={classes.subSectionTitle} align="left" type="subheading">Orders </Typography>
                </Grid>
                <Grid item xs>
                    <SearchBar
                      placeholder={`🔍  Search an order...`}
                    />
                </Grid>
                <Grid item xs={5}>
                  <div className={classes.subSectionButtonContainer}>
                    <Button
                      raised
                      className={classes.createNewOrderButton}
                      onClick={this.handleCreateNewOrderButtonClick}
                    >
                      Create New Order
                    </Button>
                    <Button
                      raised
                      className={classes.helpButton}
                      onClick={this.handleHelpButtonClick}
                    >
                      Help
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
          }
        />
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(OrderPage);
