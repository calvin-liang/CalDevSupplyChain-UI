import React from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import {DashboardFrame, SearchBar} from '../components'
import Grid from 'material-ui/Grid';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
  },
  subSection: {
    textAlign: 'center',
  },
});

class DashboardPage extends React.Component {
  state = {
    mobileOpen: false,
    nestedAccountListOpen: false,
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <DashboardFrame
          appBarTitle={`Dashboard`}
          content={
          <div className="dashboardSubsectionRootContainer">
            <h1>ASDSAD</h1>
          </div>}
        />
    </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(DashboardPage);
