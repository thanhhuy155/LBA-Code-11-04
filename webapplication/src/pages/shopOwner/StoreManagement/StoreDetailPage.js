import React, { Component } from 'react';
import {Link, Switch, Route} from 'react-router-dom'
import StoreEventPage from './StoreEventPage'
import StoreInformationPage from './StoreInformationPage'
import StorePaymentHistoryPage from './StorePaymentHistoryPage'
import ClientCommentPage from './ClientCommentPage'
export default class StoreDetailPage extends Component {
  render() {
    return (
      
      <div class="container-fluid">
          
          <div class="row">
                <h1>The Blues</h1>
                <h4><span class="label label-danger">Locked</span></h4>
                
                <div class="btn-group-horizon">
                    <Link style = {{backgroundColor:'#FFAB91'}} class="btn btn-default" to={`${this.props.match.url}`}>Shop Information</Link>
                    <Link style = {{backgroundColor:'#DCEDC8'}} class="btn btn-default" to={`${this.props.match.url}/EventOfShop`}>Events of Shop</Link>
                    <Link style = {{backgroundColor:'#B2DFDB'}} class="btn btn-default" to={`${this.props.match.url}/PaymentHistory`}>Payment History</Link>
                    <Link style = {{backgroundColor:'#D7CCC8'}} class="btn btn-default" to={`${this.props.match.url}/ClientCommentPage`}>Client Comment</Link>
                </div>
          </div>
            
            <div class="row" style= {{marginTop: 20}}>
                <Switch>
                    <Route exact path = {`${this.props.match.url}`} component= {StoreInformationPage}/>
                    <Route path = {`${this.props.match.url}/EventOfShop`} component = {StoreEventPage}/>
                    <Route path = {`${this.props.match.url}/PaymentHistory`} component = {StorePaymentHistoryPage}/>
                    <Route path = {`${this.props.match.url}/ClientCommentPage`} component = {ClientCommentPage}/>
                </Switch>
            </div>
            
          
      </div>
      
    )
  }
};
