import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {randomAction, Doubloons, arrCoins, reducer} from './components/reducer'
import { connect } from 'react-redux';

class App extends Component {

    componentDidMount(){
        setInterval(this.props.random, 3000)
    }
  render() {

    return (
      <div className="App">
          <h1>Doubloons</h1>
          <p>{this.props.doubValue}</p>
          <h1>Arrrcoins</h1>
          <p>{this.props.arrValue}</p>


          <h1>Exchange Rate</h1>
          <p>{this.props.rate }</p>
          <button onClick={()=> this.props.buy()}>Buy</button>
          <button onClick={()=> this.props.sell()}>Sell</button>

          </div>
          );
  }
}

function mapStateToProps(state) {
  return {
    rate: state.rate,
    arrValue: state.arrValue,
    doubValue: state.doubValue
  }
}

function mapActionsToProps(dispatch) {
  return {
    random: function () {
      dispatch(randomAction);
    },
    buy: function(){
        dispatch(Doubloons)
    },
    sell: function(){
        dispatch(arrCoins)
    }
  };
}

export default connect(mapStateToProps, mapActionsToProps)(App);
