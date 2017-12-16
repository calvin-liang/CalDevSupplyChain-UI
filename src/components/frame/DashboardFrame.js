import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import StarBorder from 'material-ui-icons/StarBorder';
import Collapse from 'material-ui/transitions/Collapse';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import InboxIcon from 'material-ui-icons/MoveToInbox';
import AccountBox from 'material-ui-icons/AccountBox';
import MailIcon from 'material-ui-icons/Mail';
import RoomService from 'material-ui-icons/RoomService';
import Apps from 'material-ui-icons/Apps';
import MenuIcon from 'material-ui-icons/Menu';
import AssignmentIcon from 'material-ui-icons/Assignment';
import PowerSettingsNew from 'material-ui-icons/PowerSettingsNew';
import Dashboard from 'material-ui-icons/Dashboard';
import Payment from 'material-ui-icons/Payment';
import LocalShipping from 'material-ui-icons/LocalShipping';
import Face from 'material-ui-icons/Face';
import MultilineChart from 'material-ui-icons/MultilineChart';
import Settings from 'material-ui-icons/Settings';
import Contacts from 'material-ui-icons/Contacts';
import Widgets from 'material-ui-icons/Widgets';
import ShoppingBasket from 'material-ui-icons/ShoppingBasket';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import {history} from '../../util';
import Badge from 'material-ui/Badge';



const drawerWidth = 220;

const styles = theme => ({
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  appBar: {
    boxShadow: '0 0 1 0',
    position: 'absolute',
    backgroundColor: '#22252a',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  drawerHeaderContainer: {
    height: 64,
    backgroundColor: '#22252a',
  },
  drawerHeader: theme.mixins.toolbar,
  drawerPaper: {
    position: 'fixed',
    width: 220,
    flexGrow: 1,
    backgroundColor: '#292c34',
    [theme.breakpoints.up('md')]: {
      backgroundColor: '#292c34',
      width: drawerWidth,
      position: 'fixed',
    },
  },
  dashboardPageTitle: {
    color: '#66dbf9',
    flex: 1,
  },
  drawerLogoRow: {
   display: 'flex',
   justifyContent: 'center',
   padding: theme.spacing.unit * 1,
 },
  logoAvatar: {
    width: 60,
    width: 60,
    padding: theme.spacing.unit * 0.5,
    fontSize: 24,
    color: '#22252a',
    fontWeight: 500,
    borderRadius: 2,
    textAlign: 'center',
    backgroundColor: '#5ed4f5',
  },
  sideDrawerListContainer: {
      // List item container setting
  },
  sideDrawerListItem: {
    height: 20,
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    '&:focus': {
      background: '#00c1f2',
    },
    '&:hover': {
      background: '#00c1f2',
    },
  },
  sideDrawerListItemText: {
    color: 'white',
    fontWeight: 500,
  },
  sideDrawerIcon: {
    fill: 'white',
  },
  nestedSideDrawerItem: {
    height: 10,
    marginTop: theme.spacing.unit * 0.5,
    marginBottom: theme.spacing.unit * 0.5,
    paddingLeft: theme.spacing.unit * 4,
    '&:focus': {
      background: '#00c1f2',
    },
    '&:hover': {
      background: '#00c1f2',
    },
  },
  sideDrawerListFillSpaceHeight: {
    height: '15vh',
  },
  badgeRoot: {
    margin: `0 ${theme.spacing.unit * 2}px`,
  },
  badgeIcon: {
    fill: '#a7e9f9',
  },
  content: {
    marginLeft: 220,
    height: '100%',
  }


});

class DashboardPage extends React.Component {
  state = {
    mobileOpen: false,
    nestedAccountListOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  handleAccountNestedListClick = () => {
    this.setState({nestedAccountListOpen: !this.state.nestedAccountListOpen})
  }

  handleOrderClick  = (e) => {
    e.preventDefault()
    history.push('/dashboard/orders')
  }

  render() {
    const { classes, theme, children } = this.props;

    console.log(children);

    const drawer = (
      <div>
        <div className={classes.drawerHeaderContainer}>
          <div className={classes.drawerHeader}>
            <div className={classes.drawerLogoRow}>
              <Link to="/">
                <Avatar className={classes.logoAvatar}>D</Avatar>
              </Link>

            </div>
          </div>
        </div>
        <List className={classes.sideDrawerListContainer}>
          <ListItem button onClick={this.handleDashboardClick}
            className={classes.sideDrawerListItem}
          >
            <ListItemIcon>
              <Dashboard className={classes.sideDrawerIcon}/>
            </ListItemIcon>
            <ListItemText classes={{
              text: classes.sideDrawerListItemText
            }}
              primary={<Typography type="button" className={classes.sideDrawerListItemText} noWrap>
                DASHBOARD
              </Typography>}
            />
          </ListItem>
          <ListItem button onClick={this.handleContactsClick} className={classes.sideDrawerListItem}>
            <ListItemIcon>
              <Contacts className={classes.sideDrawerIcon}/>
            </ListItemIcon>
            <ListItemText classes={{
              text: classes.sideDrawerListItemText
            }}
              primary={<Typography type="button" className={classes.sideDrawerListItemText} noWrap>
                CONTACTS
              </Typography>}
            />
          </ListItem>
          <ListItem button onClick={this.handleInventoryClick} className={classes.sideDrawerListItem}>
            <ListItemIcon>
              <ShoppingBasket className={classes.sideDrawerIcon}/>
            </ListItemIcon>
            <ListItemText classes={{
              text: classes.sideDrawerListItemText
            }}
              primary={<Typography type="button" className={classes.sideDrawerListItemText} noWrap>
                INVENTORY
              </Typography>}
            />
          </ListItem>
          <ListItem button onClick={this.handleOrderClick} className={classes.sideDrawerListItem}>
            <ListItemIcon>
              <AssignmentIcon className={classes.sideDrawerIcon}/>
            </ListItemIcon>
            <ListItemText classes={{
              text: classes.sideDrawerListItemText
            }}
              primary={<Typography type="button" className={classes.sideDrawerListItemText} noWrap>
                ORDERS
              </Typography>}
            />
          </ListItem>
          <ListItem button onClick={this.handlePaymentClick} className={classes.sideDrawerListItem}>
            <ListItemIcon>
              <Payment className={classes.sideDrawerIcon}/>
            </ListItemIcon>
            <ListItemText classes={{
              text: classes.sideDrawerListItemText
            }}
              primary={<Typography type="button" className={classes.sideDrawerListItemText} noWrap>
                PAYMENTS
              </Typography>}
            />
          </ListItem>
          <ListItem button onClick={this.handleShippingClick} className={classes.sideDrawerListItem}>
            <ListItemIcon>
              <LocalShipping className={classes.sideDrawerIcon}/>
            </ListItemIcon>
            <ListItemText classes={{
              text: classes.sideDrawerListItemText
            }}
              primary={<Typography type="button" className={classes.sideDrawerListItemText} noWrap>
                Shipping
              </Typography>}
            />
          </ListItem>
          <ListItem button onClick={this.handleAnalyticsClick} className={classes.sideDrawerListItem}>
            <ListItemIcon>
              <MultilineChart className={classes.sideDrawerIcon}/>
            </ListItemIcon>
            <ListItemText classes={{
              text: classes.sideDrawerListItemText
            }}
              primary={<Typography type="button" className={classes.sideDrawerListItemText} noWrap>
                ANALYTICS
              </Typography>}
            />
          </ListItem>
        </List>
        <Divider style={{background: 'white', opacity: '0.3'}}/>
        <List className={classes.sideDrawerListContainer}>
          <ListItem button onClick={this.handleSettingsClick} className={classes.sideDrawerListItem}>
            <ListItemIcon>
              <Settings className={classes.sideDrawerIcon}/>
            </ListItemIcon>
            <ListItemText classes={{
              text: classes.sideDrawerListItemText
            }}
              primary={<Typography type="button" className={classes.sideDrawerListItemText} noWrap>
                SETTINGS
              </Typography>}
            />
          </ListItem>
          <ListItem button onClick={this.handleAccountNestedListClick} className={classes.sideDrawerListItem}>
            <ListItemIcon>
              <Face className={classes.sideDrawerIcon}/>
            </ListItemIcon>
            <ListItemText classes={{
              text: classes.sideDrawerListItemText
            }}
              primary={<Typography type="button" className={classes.sideDrawerListItemText} noWrap>
                ACCOUNT
              </Typography>}
            />
            {this.state.nestedAccountListOpen ? <ExpandLess className={classes.sideDrawerIcon} /> : <ExpandMore className={classes.sideDrawerIcon}/>}
          </ListItem>
          <Collapse component="li" in={this.state.nestedAccountListOpen} timeout="auto" unmountOnExit>
            <List disablePadding>
              <ListItem button className={classes.nestedSideDrawerItem}>
                <ListItemIcon>
                  <StarBorder className={classes.sideDrawerIcon}/>
                </ListItemIcon>
                <ListItemText classes={{
                  text: classes.sideDrawerListItemText
                }}
                  inset
                  primary={<Typography type="button" className={classes.sideDrawerListItemText} noWrap>
                    PROFILE
                  </Typography>}
                />
              </ListItem>
              <ListItem button className={classes.nestedSideDrawerItem}>
                <ListItemIcon>
                  <PowerSettingsNew className={classes.sideDrawerIcon}/>
                </ListItemIcon>
                <ListItemText classes={{
                  text: classes.sideDrawerListItemText
                }}
                  inset
                  primary={<Typography type="button" className={classes.sideDrawerListItemText} noWrap>
                    LOGOUT
                  </Typography>}
                />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </div>
    );

    return (
      <div>
        <div className={classes.appFrame}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="contrast"
                aria-label="open drawer"
                onClick={this.handleDrawerToggle}
                className={classes.navIconHide}
              >
                <MenuIcon />
              </IconButton>
              <Typography type="title" className={classes.dashboardPageTitle} noWrap>
                {this.props.appBarTitle}
              </Typography>
              <IconButton
                onClick={this.handleAppsBadgeIconClick}
              >
                <Apps className={classes.badgeIcon}/>
              </IconButton>
              <IconButton
                onClick={this.handleMailBadgeIconClick}
              >
                <Badge badgeContent={1} className={classes.badgeRoot} color="accent">
                  <MailIcon className={classes.badgeIcon}/>
                </Badge>
              </IconButton>
              <IconButton
                onClick={this.handleNotificationBellBadgeIconClick}
              >
                <Badge badgeContent={10} className={classes.badgeRoot} color="accent">
                  <RoomService className={classes.badgeIcon}/>
                </Badge>
              </IconButton>
            </Toolbar>
          </AppBar>
          <Hidden mdUp>
            <Drawer
              type="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              classes={{
                paper: classes.drawerPaper,
              }}
              onRequestClose={this.handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden mdDown implementation="css">
            <Drawer
              type="permanent"
              open
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <div>
            {this.props.content}
          </div>          
      </div>
    </div>
   )
  }
}

DashboardPage.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(DashboardPage);
