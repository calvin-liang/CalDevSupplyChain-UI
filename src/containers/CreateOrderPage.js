import React from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import {DashboardFrame, SearchBar} from '../components'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Dialog from 'material-ui/Dialog';
import FileUpload from 'material-ui-icons/FileUpload';
import HelpOutline from 'material-ui-icons/HelpOutline';
import {InputAdornment} from 'material-ui/Input';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import Edit from 'material-ui-icons/Edit';
import MenuItem from 'material-ui/Menu/MenuItem';
import Divider from 'material-ui/Divider';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl, FormControlLabel, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';
import AddIcon from 'material-ui-icons/Add';
import { history, authUtil } from '../util';
import { connect } from 'react-redux';
import { compose } from 'recompose';

const theme = createMuiTheme({
  overrides: {
  }
});

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    zIndex: 1,
    // overflow: 'hidden',
  },
  contentRootContainer: {
    height: '100%',
    backgroundColor: theme.palette.background.default,
  },
  importCsvButton: {
    color: "#292c34",
    borderRadius: 25,
    cursor: 'pointer',
    backgroundColor: "#66dbf9",
    '&:hover': {
      backgroundColor: "white",
    }
  },
  subSectionRootContainer: {
    width: '100vw',
    paddingTop: theme.spacing.unit * 0.5,
    paddingBottom: theme.spacing.unit * 0.5,
    marginTop: 56,
    height: 50,
    [theme.breakpoints.up('sm')]: {
      width: '100vw',
      height: 50,
      marginTop: 64,
    },
  },
  subSectionButtonContainer: {

  },
  subSectionContainer: {
    padding: theme.spacing.unit * 0.5
  },
  subSectionTitle: {
    marginLeft: theme.spacing.unit * 2.5
  },
  helpButton: {
    marginLeft: theme.spacing.unit * 1,
    marginRight: theme.spacing.unit * 1,
    color: "#292c34",
    borderRadius: 25,
    cursor: 'pointer',
    backgroundColor: "white",
  },
  orderContentRootContainer: {
    margin: theme.spacing.unit * 1,
  },
  contentPaperRootContainer: {
    padding: theme.spacing.unit * 2,
  },

  progressBar: {
    backgroundColor: '#6bdbf7',
    height: 3,
    width: '100%',
  },

  blackProgressBar: {
    marginTop: theme.spacing.unit * 1,
    backgroundColor: '#292c34',
    height: 3,
    minWidth: '80%',
    maxWidth: '100%',
  },


  inputLabelFocused: {
    color: '#0080ff',
    fontWeight: 500,
  },
  inputOrderSkuContainer: {

  },

  textField: {
    width: 200,
  },
  textFieldInputBox: {
    borderRadius: 4,
    padding: theme.spacing.unit * 0.2,
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: '#53a0f9',
    },
    border: '2px solid #ced4da',
    fontSize: 14,
    justify: 'center',
    fontWeight: 'light',
  },

  largeTextFieldGridContainer: {
    minHeight: 220,
  },

  largeTextField: {
    width: 200,
  },
  largeTextFieldInputBox: {
    borderRadius: 4,
    padding: theme.spacing.unit * 0.2,
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: '#53a0f9',
    },
    border: '2px solid #ced4da',
    fontSize: 14,
    justify: 'center',
    fontWeight: 'light',
    height: 150,

  },

  quantityTextField: {
    width: '80%',
    textAlign: 'right',
  },
  divider: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2
  },
  label: {
    fontSize: 16,
  },
  radioLabel: {
    fontSize: 13,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
  radioIconChecked: {
    color: '#0080ff',
  },
  addItemButton: {
    color: '#1683fb',
    paddingLeft: 0,
    marginLeft: 0,
  },
  itemTextField: {
    margin: 0,
    padding: 0,
  },
  itemTextFieldInputBox: {
    borderRadius: 4,
    padding: theme.spacing.unit * 0.2,
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: '#53a0f9',
    },
    border: '2px solid #ced4da',
    fontSize: 14,
    justify: 'center',
    fontWeight: 'light',
  },
  priceTextFieldInputBox: {
    borderRadius: 4,
    padding: theme.spacing.unit * 0.2,
    marginTop: theme.spacing.unit * 0.8,
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: '#53a0f9',
    },
    border: '2px solid #ced4da',
    fontSize: 14,
    justify: 'center',
    fontWeight: 'light',
    height: 18,
  },

  demo: {
    paddingTop: theme.spacing.unit * 2,
  },

  contentClassName: {
      marginLeft: 220,
      height: '100%',
  },

});

const peoples = [
  {
    value: 'uuid1',
    label: 'James',
  },
  {
    value: 'uuid2',
    label: 'Rebecca',
  },
];

const currenciesSymbols = {
  'USD': '$',
  'EUR': '€',
  'BTC': '฿',
  'JPY': '¥',
}

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

const orderStatuses = [
  {
    value: 'PENDING',
    label: 'PENDING',
  },
  {
    value: 'IN_PROCESS',
    label: 'IN PROCESS',
  },
  {
    value: 'DELIVERED',
    label: 'DELIVERED',
  },
  {
    value: 'FINISHED',
    label: 'FINISHED',
  },
  {
    value: 'DELETED',
    label: 'DELETED',
  },
];

class ItemList extends React.Component {

  render() {

    const {classes, items, isAgent, onChangeItemField, onChangeItemQuantityField} = this.props

    return (
      items.map((item,i) => (
        <Grid key={i} container justify="flex-start" alignItems="stretch">
          <Grid item xs={3}>
            <TextField
               id="multiline-item-description"
               multiline
               rowsMax="4"
               value={item.description}
               onChange={onChangeItemField('description', i)}
               className={classes.itemTextField}
               margin="dense"
               InputProps={{
                 disableUnderline: true,
                 classes: {
                   input: classes.itemTextFieldInputBox,
                 },
               }}
            />
          </Grid>
          <Grid item xs={2}>
              <TextField
                 id="multiline-item-quantity"
                 multiline
                 rowsMax="4"
                 value={item.note}
                 onChange={onChangeItemField('note', i)}
                 className={classes.itemTextField}
                 margin="dense"
                 InputProps={{
                   disableUnderline: true,
                   classes: {
                     input: classes.itemTextFieldInputBox,
                   },
                 }}
              />
          </Grid>
          <Grid item xs>
            <TextField
               id="multiline-item-color"
               multiline
               rowsMax="4"
               value={item.color}
               onChange={onChangeItemField('color', i)}
               className={classes.itemTextField}
               margin="dense"
               InputProps={{
                 disableUnderline: true,
                 classes: {
                   input: classes.itemTextFieldInputBox,
                 },
               }}
            />
          </Grid>
          <Grid item xs>
            <TextField
               id="multiline-item-fabric"
               multiline
               rowsMax="4"
               value={item.fabric}
               onChange={onChangeItemField('fabric', i)}
               className={classes.itemTextField}
               margin="dense"
               InputProps={{
                 disableUnderline: true,
                 classes: {
                   input: classes.itemTextFieldInputBox,
                 },
               }}
            />
          </Grid>
          <Grid item xs>
            <TextField
               id="multiline-item-quantity"
               type="number"
               // disabled={isAgent ? false : true }
               value={item.price}
               onChange={onChangeItemField('price', i)}
               className={classes.itemTextField}
               margin="dense"
               placeholder={`${this.props.currency}0.00`}
               InputProps={{
                 disableUnderline: true,
                 classes: {
                   input: classes.priceTextFieldInputBox,
                 },

               }}
            />
          </Grid>
          <Grid item xs={3}>
            <Grid spacing={0} container direction="column" alignItems="stretch">
              <Grid item xs>
                <Grid spacing={8} container justify="center" alignItems="center">
                  <Grid item xs={2}>
                    <Typography type="body1" style={{paddingTop: 2, paddingBottom: 2}}>XS:</Typography>
                  </Grid>
                  <Grid item xs={10}>
                    <TextField
                       id="singleline-item-quantity"
                       type="number"
                       value={item.quantity["XS"]}
                       onChange={onChangeItemQuantityField('XS', i)}
                       className={classes.quantityTextField}
                       margin="dense"
                       InputProps={{
                         disableUnderline: true,
                         classes: {
                           input: classes.itemTextFieldInputBox,
                         },
                       }}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs>
                <Grid spacing={8} container justify="center" alignItems="center">
                  <Grid item xs={2}>
                    <Typography type="body1" style={{paddingTop: 2, paddingBottom: 2}}>S:</Typography>
                  </Grid>
                  <Grid item xs={10}>
                    <TextField
                       id="singleline-item-quantity"
                       type="number"
                       value={item.quantity["S"]}
                       onChange={onChangeItemQuantityField('S', i)}
                       className={classes.quantityTextField}
                       margin="dense"
                       InputProps={{
                         disableUnderline: true,
                         classes: {
                           input: classes.itemTextFieldInputBox,
                         },
                       }}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs>
                <Grid spacing={8} container justify="center" alignItems="center">
                  <Grid item xs={2}>
                    <Typography type="body1" style={{paddingTop: 2, paddingBottom: 2}}>M:</Typography>
                  </Grid>
                  <Grid item xs={10}>
                    <TextField
                       id="singleline-item-quantity"
                       type="number"
                       value={item.quantity["M"]}
                       onChange={onChangeItemQuantityField('M', i)}
                       className={classes.quantityTextField}
                       margin="dense"
                       InputProps={{
                         disableUnderline: true,
                         classes: {
                           input: classes.itemTextFieldInputBox,
                         },
                       }}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs>
                <Grid spacing={8} container justify="center" alignItems="center">
                  <Grid item xs={2}>
                    <Typography type="body1" style={{paddingTop: 2, paddingBottom: 2}}>L:</Typography>
                  </Grid>
                  <Grid item xs={10}>
                    <TextField
                       id="singleline-item-quantity"
                       type="number"
                       value={item.quantity["L"]}
                       onChange={onChangeItemQuantityField('L', i)}
                       className={classes.quantityTextField}
                       margin="dense"
                       InputProps={{
                         disableUnderline: true,
                         classes: {
                           input: classes.itemTextFieldInputBox,
                         },
                       }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ))
    );
  }
}

class CreateOrderPage extends React.Component {
  constructor(props){

    super(props);

    this.state = {
      people: '',
      orderType: 'QUOTE',
      orderStatus: 'PENDING',
      currency: 'USD',
      items: [],
      totalPrice: 0.00,
      shippingInstruction: "",
      orderNote: "",
    }

    const user = JSON.parse(props.user);

    this.state["user"] = user
    this.state["isAgent"] = authUtil.isAgent(user) ? true : false

  }

  componentDidMount(){

    // fetch all agents here, dispatch action -> then setup the people section
    // this.setState({"newdemo": "alaa"})
  }

  handleImportCsvFileUploadButtonClick = e =>  {
    // TODO: need to import csv
  }

  handleChange = name => e => {
    this.setState({
      [name]: e.target.value,
    })
  }

  handleRadioChange = e => {
    const {name, value} = e.target
    this.setState({[name]:  value });
  };

  handleItemFieldChange = (name, i) => e => {
    const items = this.state.items.slice()
    const {value} = e.target
    let val = value

    if(name == "price"){
      val = parseFloat(val)
    }

    items[i][name] = val
    this.setState({items})
  }

  handleItemQuantityFieldChange = (name, i) => e => {
    const items = this.state.items.slice()
    const {value} = e.target
    const item = {...items[i], ["quantity"]: {...items[i].quantity, [name]: parseInt(value)}}
    items[i] = item
    this.setState({items})
  }

  handleAddItemButtonClick = e => {

    // default item properties
    const newItem = {
      color: "",
      description: "",
      fabric: "",
      quantity: {
        XS: 0,
        S: 0,
        M: 0,
        L: 0
      },
      price: 0.00,
      note: ""
    }

    this.setState(prevState => ({
      items: [...prevState.items, newItem]
    }))

  }

  handleDisplayTotalPrice = () => {
    let currencySymbol =  currenciesSymbols[this.state.currency]
    let totalPriceSum =  this.state.items.reduce((sum, item) => {
      return sum + item.price
    }, 0.00)

    console.log("check total price sum: ", totalPriceSum);

    return `${currencySymbol}${totalPriceSum}`
  }

  render() {

    const { classes, theme } = this.props;

    console.log("check order state: ", this.state);

    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <DashboardFrame
            appBarTitle={`Orders`}
            content={
            <div className={classes.contentClassName}>
              <div className={classes.contentRootContainer}>
                <div className={classes.subSectionRootContainer}>
                  <Grid container alignItems="center" justify="center" className={classes.subSectionContainer}>
                    <Grid item xs>
                      <Typography className={classes.subSectionTitle} align="left" type="subheading">Orders / New Order</Typography>
                    </Grid>
                    <Grid item xs={5}>
                      <div className={classes.subSectionButtonContainer}>
                        <Button
                          raised
                          className={classes.importCsvButton}
                          onClick={this.handleImportCsvFileUploadButtonClick}
                        >
                          Import via CSV
                          <FileUpload className={classes.rightIcon} />
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
                <div>
                  <Grid container direction="column" alignItems="stretch" className={classes.orderContentRootContainer}>
                    <Grid item xs={7}>
                      <div className={classes.progressBar}></div>
                      <Paper className={classes.contentPaperRootContainer} elevation={1}>
                        <Grid container direction="row" justify="center" alignItems="center">
                          <Grid item xs>
                            <TextField
                              id="select-people"
                              select
                              className={classes.textField}
                              value={this.state.people}
                              label={`Select ${this.state.isAgent ? "Agents": "Users"}`}
                              onChange={this.handleChange('people')}
                              InputLabelProps={{
                                shrink: true,
                                FormControlClasses: {
                                  focused: classes.inputLabelFocused
                                }
                              }}
                              SelectProps={{
                                MenuProps: {
                                  // className: classes.selectMenu,
                                },
                              }}
                            >
                              {peoples.map(p => (
                                <MenuItem key={p.value} value={p.value}>
                                  {p.label}
                                </MenuItem>
                              ))}
                            </TextField>
                          </Grid>
                          <Grid item xs={3}>
                              <TextField
                                id="search"
                                label="Order SKU"
                                labelClassName={classes.label}
                                type="search"
                                className={classes.inputOrderSkuContainer}
                                placeholder={`#SO001`}
                                onChange={this.handleChange('sku')}
                                InputLabelProps={{
                                  shrink: true,
                                  FormControlClasses: {
                                    focused: classes.inputLabelFocused
                                  }
                                }}
                                InputProps={{
                                  disableUnderline: true,
                                  endAdornment:
                                    <InputAdornment position="end">
                                      <IconButton
                                        aria-label="Edit"
                                        onClick={this.handleChange('sku')}
                                      >
                                        <Edit style={{fontSize: 15}}/>
                                      </IconButton>
                                    </InputAdornment>
                                }}
                              />
                          </Grid>
                        </Grid>
                        <Divider className={classes.divider} light/>
                        <Grid container>
                          <Grid item xs>
                            <TextField
                              id="select-currencies"
                              select
                              className={classes.textField}
                              value={this.state.currency}
                              label={`Select Currencies`}
                              onChange={this.handleChange('currency')}
                              InputLabelProps={{
                                shrink: true,
                                FormControlClasses: {
                                  focused: classes.inputLabelFocused
                                }
                              }}
                              SelectProps={{
                                MenuProps: {
                                  // className: classes.selectMenu,
                                },
                              }}
                            >
                              {currencies.map(option => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </TextField>
                          </Grid>
                          <Grid item xs>
                            <TextField
                              id="select-orderStatus"
                              select
                              disabled={this.state.isAgent ? false : true }
                              className={classes.textField}
                              value={this.state.orderStatus}
                              label={`Order Status`}
                              onChange={this.handleChange('orderStatus')}
                              InputLabelProps={{
                                shrink: true,
                                FormControlClasses: {
                                  focused: classes.inputLabelFocused
                                }
                              }}
                              SelectProps={{
                                MenuProps: {
                                  className: classes.selectMenu,
                                },
                              }}
                            >
                              {orderStatuses.map(option => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </TextField>
                          </Grid>
                          <Grid item xs={3}>
                            <FormControl
                              component="fieldset"
                              required
                              className={classes.formControl}
                              margin="dense"
                            >
                              <FormLabel
                                component="label"
                                classes={{
                                  root: classes.radioLabel,
                                  focused: classes.inputLabelFocused

                                }}
                              >
                                Order type
                              </FormLabel>
                              <RadioGroup
                                aria-label="order-type"
                                name="orderType"
                                className={classes.group}
                                value={this.state.orderType}
                                onChange={this.handleRadioChange}
                              >
                                <FormControlLabel className={classes.label} value="QUOTE"
                                  label={<Typography type="caption">QUOTE</Typography>}
                                  control={
                                    <Radio
                                      checked={this.state.orderType == "QUOTE" ? true : false}
                                      classes={{
                                        checked: classes.radioIconChecked
                                      }}
                                    />
                                  }
                                />
                                <FormControlLabel value="SAMPLE" label={<Typography type="caption">SAMPLE</Typography>} control={
                                  <Radio
                                    classes={{
                                      checked: classes.radioIconChecked
                                    }}
                                  />}
                                />
                                <FormControlLabel value="PRODUCTION" label={<Typography type="caption">PRODUCTION</Typography>} control={
                                  <Radio
                                    classes={{
                                      checked: classes.radioIconChecked
                                    }}
                                  />}
                                />
                              </RadioGroup>
                            </FormControl>
                          </Grid>
                        </Grid>
                        <Divider className={classes.divider} light/>
                        <Grid container>
                          <Grid item xs={3}>
                            <Typography type="caption">Item Description</Typography>
                          </Grid>
                          <Grid item xs={2}>
                            <Typography type="caption">Item Note</Typography>
                          </Grid>
                          <Grid item xs>
                            <Typography type="caption">Color</Typography>
                          </Grid>
                          <Grid item xs>
                            <Typography type="caption">Fabric</Typography>
                          </Grid>
                          <Grid item xs>
                            <Typography type="caption">Price</Typography>
                          </Grid>
                          <Grid item xs={3}>
                            <Typography type="caption">Quantity</Typography>
                          </Grid>
                        </Grid>
                        <Divider className={classes.divider} light/>
                        <ItemList
                          classes={classes}
                          items={this.state.items}
                          isAgent={this.state.isAgent ? true : false}
                          currency={currenciesSymbols[this.state.currency]}
                          onChangeItemField = {this.handleItemFieldChange}
                          onChangeItemQuantityField = {this.handleItemQuantityFieldChange}
                        >
                        </ItemList>
                        <Button
                          color="primary"
                          aria-label="add"
                          className={classes.addItemButton}
                          onClick={this.handleAddItemButtonClick}
                        >
                          <AddIcon />
                          Add item
                        </Button>
                        <Divider className={classes.divider} light/>
                        <Grid container>
                          <Grid item xs>
                            <Typography type="caption">Shipping Note</Typography>
                          </Grid>
                          <Grid item xs>
                            <Typography type="caption">Order Note</Typography>
                          </Grid>
                          <Grid item xs={3}>
                            <Typography type="caption">Total Price</Typography>
                          </Grid>
                        </Grid>
                        <Divider className={classes.divider} light/>
                        <Grid container className={classes.largeTextFieldGridContainer} alignItems="stretch">
                          <Grid item xs>
                            <TextField
                               id="multiline-item-quantity"
                               multiline
                               rowsMax="4"
                               placeholder={`Enter shipping note...`}
                               value={this.state.shippingInstruction}
                               onChange={this.handleChange('shippingInstruction')}
                               className={classes.largeTextField}
                               margin="dense"
                               InputProps={{
                                 disableUnderline: true,
                                 classes: {
                                   input: classes.largeTextFieldInputBox,
                                 },
                               }}
                            />
                          </Grid>
                          <Grid item xs>
                            <TextField
                               id="multiline-item-quantity"
                               multiline
                               rowsMax="4"
                               placeholder={`Enter order note...`}
                               value={this.state.orderNote}
                               onChange={this.handleChange('orderNote')}
                               className={classes.largeTextField}
                               margin="dense"
                               InputProps={{
                                 disableUnderline: true,
                                 classes: {
                                   input: classes.largeTextFieldInputBox,
                                 },
                               }}
                            />
                          </Grid>
                          <Grid item xs={3}>
                              <Typography
                                classes={{
                                  root: classes.demo
                                }}
                                type="title"
                              >
                                {`${this.handleDisplayTotalPrice()}`}
                              </Typography>
                              <div className={classes.blackProgressBar}></div>
                          </Grid>
                        </Grid>
                      </Paper>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>
            }
          />
        </div>
      </MuiThemeProvider>
    )
  }
}


function mapStateToProps(state) {
    const { user } = state.authentication

    return {
      user,
    }
}

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps)
)(CreateOrderPage);
